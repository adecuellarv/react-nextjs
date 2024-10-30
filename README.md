This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Installar dependencias:

```bash
npm install
# o si tienes una versión de react superior a 18.2.0
npm install --force
```

Correr proyecto:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abre [http://localhost:3000/game](http://localhost:3000/game) en tu navegador para ver el resultado.

Puedes comenzar a editar la página modificando `app/game/page.tsx`. La página se actualiza automáticamente mientras editas el archivo.

## Trucos

La aplicación muestra exitoso solo si las 3 columnas son identicas, por lo que puede ser complicado ver el mensaje de success, para simular que se gano:

- Dar click en el botón de pregunta que se encuentra de lado superior derecho.
- Posteriormente dar click en el botón de simular.
