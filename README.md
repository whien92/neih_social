# Social network for Neih Social

## Technologies stack

- NodeJS
- MongoDB
- Express
- Typescript

# Command remembers

- Open terminal on Windows: Ctrl + `
- npm init or yarn init
- git init
- git commit -m "Initial commit"
- git add \*
- git config --global user.name "Neih Vu"
- git config --global user.email whien92@gmail.com
- git config --global core.editor vim
- git remote add origin https://github.com/whien92/neih_social.git
- git push -u origin main/git push origin master

## Lession 10

- tsc --init
- Reference: https://www.typescriptlang.org/tsconfig
- You can also install a native Git shell, such as Git for Windows. With Git for Windows, running the following in the command line will store your credentials: git config --global credential.helper wincred

## Lession 11

- yarn add express
- yarn add @types/express --dev
- yarn add typescript nodemon ts-node --dev
  - typescript has been installed as global, but with this declaration it can run on another machine without reinstall
  - nodemon: auto reload browser if any code changes
  - ts-node: run directly server.ts by ts-node command

## Lession 13:

- yarn add mongoose
- yarn add @types/mongoose --dev
- Reference: https://www.npmjs.com/package/mongoose

## Lesion 14:

- yarn add dotenv: dotenv là một module tải các biến từ tệp .env vào process.env. Chính vì vậy, nó là nơi lý tưởng để lưu trữ usernames, passwords, URLs và các dữ liệu nhạy cảm khác. Reference: https://www.npmjs.com/package/dotenv
- yarn add cross-env: Run scripts that set and use environment variables across platforms. Reference: https://www.npmjs.com/package/cross-env
