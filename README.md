# KKPLAY

> KKPLAY 是 Kaboom.js 的一个分支，致力于让游戏开发变得快速、有趣，并结合最新的技术如 AIGC（人工智能生成内容）来开发智能游戏！

**KKPLAY** 是一个 JavaScript 库，帮助你快速且有趣地制作游戏。我们基于 Kaboom.js 进行了扩展和优化，添加了更多有趣的功能，让游戏开发更加便捷和现代化。

## 背景

随着 Kaboom.js 的暂停维护，我们决定基于 Kaboom.js 分支出 KKPLAY，继续其简洁易用的传统，同时加入更多现代化的功能。特别是，我们希望利用 AIGC（人工智能生成内容）技术，使游戏能够更加智能和富有创意。


## 示例

```js
// 初始化上下文
kkplay();

// 定义重力
setGravity(2400);

// 加载一个名为 "bean" 的精灵
loadSprite("bean", "sprites/bean.png");

// 从多个组件中组合玩家游戏对象并添加到游戏中
const bean = add([
    sprite("bean"),
    pos(80, 40),
    area(),
    body(),
]);

// 按下空格键跳跃
onKeyPress("space", () => {
    bean.jump();
});
```

KKPLAY 使用强大的组件系统来组合游戏对象和行为，使得游戏开发变得直观而高效。

```js
// 从组件列表中添加游戏对象到场景中
const player = add([
    // it renders as a sprite
    sprite("bean"),
    // it has a position
    pos(100, 200),
    // it has a collider
    area(),
    // it is a physical body which will respond to physics
    body(),
    // it has 8 of health
    health(8),
    // or give it tags for easier group behaviors
    "player",
    "friendly",
    // plain objects fields are directly assigned to the game obj
    {
        dir: vec2(-1, 0),
        dead: false,
        speed: 240,
    },
]);
```

使用简单的语法描述游戏行为：

```js
// .onCollide() 由 "area" 组件提供
player.onCollide("enemy", () => {
    player.hurt(1);
});

// 检查是否掉落死亡
player.onUpdate(() => {
    if (player.pos.y >= height()) {
        destroy(player);
        gameOver();
    }
});

// 碰撞检测
player.onCollide("enemy", () => {
    player.hp -= 1;
});

// 所有带有 "enemy" 标签的对象每帧向 'player' 移动
onUpdate("enemy", (e) => {
    e.move(player.pos.sub(e.pos).unit().scale(e.speed));
});

// 按住 "w" 键时每帧向上移动 100 像素每秒
onKeyDown("w", () => {
    player.move(0, 100);
});
```

## 使用方法

### 作为 NPM 包安装

```sh
$ npm install kkplay
```

```js
import kkplay from "kkplay";

kkplay();

add([
    text("oh hi"),
    pos(80, 40),
]);
```

也支持 CommonJS

```js
const kkplay = require("kkplay");
```

请注意，你需要使用类似 `esbuild` 或 `webpack` 的打包工具来使用 NPM 版的 KKPLAY。

## 文档

- **v3000**: https://kaboomjs.com/

## 社区

- [GitHub 讨论](https://github.com/kirklin/kkplay/discussions)

### 游戏

精选使用 KKPLAY 制作的游戏集锦，请点击 [这里](https://itch.io/c/4494863/kag-collection)。

## 鸣谢

感谢所有贡献者和社区成员的支持与贡献！
