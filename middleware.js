export const config = {
  matcher: '/ortopedista',
};

export default function middleware(request) {
  const url = new URL(request.url);
  const versao = url.searchParams.get('versao');
  
  const cookieHeader = request.headers.get('cookie') || '';
  const match = cookieHeader.match(/med7-orto-bucket=(a|b)/);
  let bucket = match ? match[1] : null;

  if (versao === 'a' || versao === 'b') {
    bucket = versao;
  }

  if (bucket !== 'a' && bucket !== 'b') {
    bucket = Math.random() < 0.5 ? 'a' : 'b';
  }

  const targetPath = bucket === 'b' ? '/ortopedista/index-b.html' : '/ortopedista/index.html';
  const rewriteUrl = new URL(targetPath, request.url);
  
  // preserve UTMs
  rewriteUrl.search = url.search;

  return new Response(null, {
    headers: {
      'x-middleware-rewrite': rewriteUrl.toString(),
      'Set-Cookie': `med7-orto-bucket=${bucket}; Path=/; Max-Age=${30 * 24 * 60 * 60}; SameSite=Lax`
    }
  });
}
