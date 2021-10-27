<template>
  <div>
    <main-header navsel="back"></main-header>
    <div class="hero-wrapper">
      <h1>ยินดีต้อนรับเข้าสู่ระบบจองคิวแม่บ้านออนไลน์</h1>
      <h4>SYSTEM BOOK A MAID QUEUE ONLION</h4>
      <p>
        <i class="fas fa-user-circle"></i> MINTHIRA MICHUEA &nbsp;&nbsp;<i
          class="fas fa-envelope"
        ></i>
        <a href="mailto:minthiram62@nu.ac.th" style="color: #000000"
          >minthiram62@nu.ac.th</a
        ><br />
        <i class="fas fa-user-circle"></i> THANUTCHAYA INPUNG &nbsp;&nbsp;<i
          class="fas fa-envelope"
        ></i>
        <a href="mailto:thanutchayai62@nu.ac.th" style="color: #000000"
          >thanutchayai62@nu.ac.th</a
        >
      </p>
    </div>
    <div class="hero-wrapper">
      <h1>รับสมัครแม่บ้านหลายอัตรา<br>
          รายได้มากกว่า 20,000 บาทต่อเดือน!!!<br>
          ไม่มีค่าสมัคร > > 
          </h1>
    </div>
    <br />
    <div class="container-fluid">
      <div class="container">
        <div class="blog-wrapper">
          <h4><i class="far fa-lightbulb"></i> สิ่งที่คุณจะได้รับ</h4>
          <hr />
          <span class="font2"
            >1. การทำงานที่ยืดหยุ่น
            <br />
            2. ค่าจ้างสูง<br />
            3. โบนัสมากมาย<br />
            4. ค่าตอบแทนตามผลงาน (ยิ่งทำงานได้ดีมากเท่าไหร่ ยิ่งได้นับค่าตอบแทนสูงขึ้นเท่านั้น)<br />
            </span>
        </div>
      </div>
    </div>
    <br/>
    <div class="container-fluid">
      <div class="container">
        <div class="blog-wrapper">
          <h4><i class="far fa-lightbulb"></i> คุณสมบัติของผู้สมัคร </h4>
          <hr />
          <span class="font2"
            >1. เคยรับจ้างทำความสะอาดบ้านมาแล้วมากกว่า 200 ชั่วโมง
            <br />
            2. ใช้มือถือระบบปฏิบัติการแอนดรอยด์ (สำหรับใช้แอปพลิเคชัน Maid Siam)<br />
            3. มีสัญชาติไทย<br />
            </span>
        </div>
        <div class="footer"></div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
.component-wrapper {
  padding-left: 5px;
  padding-right: 5px;
}
.hero-wrapper {
  margin-top: 60px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  background: #a0d88e;
  height: 280px;
  color: #000000;
  padding: 20px;
}
.hero h1 {
  margin-top: 30px;
}
.logo {
  padding-right: 20px;
}
.empty-blog {
  width: 100%;
  text-align: center;
  padding: 10px;
  background: darksalmon;
  color: white;
}
/* thumbnail */
.thumbnail-pic img {
  width: 200px;
  padding: 5px 5px 5px 5px;
  border: solid 1px #ccc;
  margin: 10px 10px 0px 0px;
}
.blog-info {
  float: left;
}
.blog-pic {
  float: left;
}
.clearfix {
  clear: both;
}
.blog-list {
  border: solid 1px #dfdfdf;
  margin-bottom: 10px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.blog-header {
  margin-top: 80px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
#blog-list-bottom {
  padding-top: 4px;
}
.blog-load-finished {
  padding: 4px;
  text-align: center;
  background: seagreen;
  color: white;
}
.categories {
  margin-top: 20px;
  padding: 0;
  list-style: none;
  float: left;
}
.categories li {
  float: left;
  padding: 2px;
}
.categories li a {
  padding: 5px 10px 5px 10px;
  background: paleturquoise;
  color: black;
  text-decoration: none;
}
.categories li.clear a {
  background: tomato;
  color: white;
}
.create-blog {
  margin-top: 10px;
}
@media (max-width: 768px) {
  .logo {
    width: 120px;
  }
}
.header {
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  padding: 10px;
  position: relative;
  background-color: #ececec;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 -2px 1px rgba(0, 0, 0, 0.1) inset;
  text-shadow: 1px 1px 1px #fff;
}
.categories {
  margin-top: 10px;
  padding: 0;
  width: 100%;
}
.blog-wrapper {
  margin-top: 20px;
  padding: 40px;
  height: 100%;
  background: #f1f1f2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.blog-tab {
  padding: 1px;
  background-color: #d3d3d3;
  text-align: left;
  text-indent: 0.5em;
}
.footer {
  margin-top: 50px;
}

</style>