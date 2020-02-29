//----加载翻页按钮----
let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const array = JSON.parse(request.response); //把JSON字符串变成JS数组
      array.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      }); //对每一项，每一项称为item
      n += 1;
    }
  };
  request.send();
};
//----加载JSON----
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    //监听状态
    if (request.readyState === 4 && request.status === 200) {
      console.log(typeof request.response);
      console.log(request.response);
      const object = JSON.parse(request.response);
      //JSON.parse的作用---->把符合json语法的字符串，变成JS对应类型的数据。如果不符合JSON语法，则抛出一个Error对象。
      myName.textContent = object.name; //获取json里面的{"name": "熊仲轲"}
      console.log(typeof object);
      console.log(object);
    }
  };
  request.send();
};

//----加载XML----
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseXML);
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim()); //.trim()用于去掉回车
    }
  };
  request.send();
};

//----加载HTML----
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    const div = document.createElement("div"); //创建div标签
    div.innerHTML = request.response; //填写div内容
    document.body.appendChild(div); //插入到身体里
  };
  request.onerror = () => {};
  request.send();
};

//----加载JS----
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    const script = document.createElement("script"); //创建script标签
    script.innerHTML = request.response; //填写script内容
    document.body.appendChild(script); //插到body里
  };
  request.onerror = () => {};
  request.send();
};

//----加载CSS----
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css"); //readyState = 1
  request.onreadystatechange = () => {
    console.log(request.readyState);
    //下载完成，但不知道是成功 2xx 还是失败4xx 5xx。
    if (request.readyState === 4) {
      //如果状态码=4，则表示下载完毕。
      if (request.status >= 200 && request.status < 300) {
        //http状态码以2开头的都表示成功。
        const style = document.createElement("style"); //创建style标签
        style.innerHTML = request.response; //填写style内容
        document.head.appendChild(style); //插到head里面
      } else {
        alert("加载 CSS 失败");
      }
    }
  };
  request.send(); //readyState = 2
};
