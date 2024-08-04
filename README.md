
- настроить отступы на странице девайсов
- добавить POST и DELETE данных
- ~~добавить кнопку лог оут~~
- ~~добавить проверку, если пользователь не залогинен - отправлять его на логин пэйдж~~
- ~~добавить обработку ошибю/ки при поиске не существующего ID, например поиск буквы~~
- ~~добавить обработку ошибок на станице логин~~
- после обновления страницы пользователь попадает на страницу логин, потому что я намеренно не сохраняю информацию о сессии в локальном сторе, т.к. это не безопасно (есть доступ со стороны JS). более защищённый способ хранения информации о сессии - куки с флагом HttpOnly. для этого сервер должен быть настроен немного иначе.




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
