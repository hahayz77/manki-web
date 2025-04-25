import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  // Adicione esta função de callback para redirecionar após o login
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // Por padrão, retorna true, indicando sucesso.
      // Você pode adicionar lógica personalizada aqui, como verificar se o usuário existe no seu banco de dados.
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Permite que você defina um redirecionamento personalizado após o login.
      // Por padrão, NextAuth.js redireciona para a página de onde o usuário iniciou o login.
      if (url.startsWith(baseUrl)) return url
      // Allows relative paths e.g. /profile
      else if (url.startsWith("/")) return new URL(url, baseUrl).href
      return baseUrl
    }
  }
});