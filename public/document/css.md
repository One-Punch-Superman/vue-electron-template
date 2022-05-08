<h1 align="center">CSS</h1>

## 页面布局

### 水平居中

```html
<div class="parent">
    <div class="child">DEMO</div>
</div>
```

```css
.parent {
    text-align: center;
}
.child {
    display: inline-block;
}
```

```css
.child {
    display: table;
    margin: 0 auto;
}
```

```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
```

```css
.parent {
    display: flex;
    justify-content: center;
}
```

```css
.parent {
    display: flex;
}
.child {
    margin: 0 auto;
}
```

### 垂直居中

```html
<div class="parent">
    <div class="child">DEMO</div>
</div>
```

```css
.parent {
    display: table-cell;
    vertical-align: middle;
}
```

```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
```

```css
.parent {
    display: flex;
    align-items: center;
}
```

### 水平垂直居中

```html
<div class="parent">
    <div class="child">DEMO</div>
</div>
```

```css
.parent {
    text-align: center;
    display: table-cell;
    vertical-align: middle;
}
.child {
    display: inline-block;
}
```

```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
```

```css
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}
```
