* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: sans-serif;
  background: #f5f6f7;
}

.header {
  text-align: center;
  text-transform: uppercase;
  padding: 32px;
  background-color: #0a0a23;
  color: #fff;
  border-bottom: 4px solid #fdb347;
}

.gallery {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.gallery img {
  width: 100%;
  max-width: 350px;
  height: 300px;
}