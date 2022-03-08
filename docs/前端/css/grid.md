# grid 布局
网格布局（Grid）​是最强大的 CSS 布局方案。
它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。

Grid 布局​ 与 ​Flex 布局​有一定的相似性，都可以指定容器内部多个项目的位置。

但是，它们也存在重大区别。

Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是​一维布局​。

Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。

在 CSS 网格中，父元素称为​容器（container）​，它的子元素称为​项（items）​。

## 创建css 网格
在容器 container 上设置 display 属性为 grid
```css
.container {
    display: grid; 
}
```

## 容器内结构
- **行** 容器内的水平区域称为 "行"(row)
- **列** 容器内垂直区域为 "列"(column)

### 添加行
- **grid-template-column**
grid-template-columns 属性用于设置网格布局中的列数及宽度。

**语法**

    grid-template-columns: none|auto|max-content|min-content|length|initial|inherit;
