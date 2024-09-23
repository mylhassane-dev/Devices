const express = require('express');
const path = require('path');
const app = express();

// إعداد EJS كمحرك القوالب
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// جعل مجلد 'public' متاح للملفات الثابتة مثل CSS
app.use(express.static(path.join(__dirname, 'public')));


// الصفحة الرئيسية
app.get('/', (req, res) => {
  res.render('index');
});

// صفحة تثبيت العتاد
app.get('/security-packages', (req, res) => {
  res.render('./security-packages');
});

// views\tutorials\security-camera-systems\security-packages\DVR_XVR_NVR\Dahua\XVR5108HS-I3\index.html

// XVR5108HS-I3
app.get('/XVR5108HS-I3', (req, res) => {
  res.render('./tutorials/security-camera-systems/security-packages/DVR_XVR_NVR/Dahua/XVR5108HS-I3/index');
})

// Hardware_Installation
app.get('/Device_Setup/Hardware_Installation', (req, res) => {
  res.render('./tutorials/security-camera-systems/DVR_XVR_NVR/Dahua/01-Device_Setup/01-Hardware_Installation/index');
})

// صفحة تثبيت العتاد
app.get('/01-Device_Setup/01-Hardware_Installation/', (req, res) => {
  res.render('01-Hardware_Installation');
});

// صفحة الإعدادات الأولية
app.get('/initial-configuration', (req, res) => {
  res.render('02-Initial_Configuration');
});

// صفحة إعادة ضبط النظام
app.get('/system-reset', (req, res) => {
  res.render('03-System_Reset');
});

// صفحة تحديثات البرامج
app.get('/software-updates', (req, res) => {
  res.render('04-Software_Updates');
});

// صفحة تكوين IP
app.get('/ip-configuration', (req, res) => {
  res.render('05-IP_Configuration');
});

// صفحة الوصول عن بعد
app.get('/remote-access', (req, res) => {
  res.render('06-Remote_Access');
});

// صفحة DNS و DHCP
app.get('/dns-and-dhcp', (req, res) => {
  res.render('07-DNS_and_DHCP');
});

// صفحة الاتصال بـ NVR أو DVR
app.get('/connecting-to-nvr-dvr', (req, res) => {
  res.render('08-Connecting_to_NVR_DVR');
});

// صفحة إعدادات التسجيل المجدول
app.get('/schedule-recording', (req, res) => {
  res.render('09-Schedule_Recording');
});

// صفحة تسجيل اكتشاف الحركة
app.get('/motion-detection-recording', (req, res) => {
  res.render('10-Motion_Detection_Recording');
});

// صفحة إدارة التخزين
app.get('/storage-management', (req, res) => {
  res.render('11-Storage_Management');
});

// صفحة النسخ الاحتياطي والاسترجاع
app.get('/backup-and-retrieval', (req, res) => {
  res.render('12-Backup_and_Retrieval');
});

// صفحة إضافة الكاميرات
app.get('/add-cameras', (req, res) => {
  res.render('13-Add_Cameras');
});

// صفحة إعدادات دقة الكاميرا
app.get('/configure-camera-resolution', (req, res) => {
  res.render('14-Configure_Camera_Resolution');
});

// صفحة التحكم في الكاميرات PTZ
app.get('/ptz-control', (req, res) => {
  res.render('15-PTZ_Control');
});

// صفحة قناع الخصوصية والقواعد
app.get('/privacy-mask-and-rules', (req, res) => {
  res.render('16-Privacy_Mask_and_Rules');
});

// صفحة مصادقة المستخدم
app.get('/user-authentication', (req, res) => {
  res.render('17-User_Authentication');
});

// صفحة إعدادات التشفير
app.get('/encryption-settings', (req, res) => {
  res.render('18-Encryption_Settings');
});

// صفحة أمان الشبكة
app.get('/network-security', (req, res) => {
  res.render('19-Network_Security');
});

// صفحة تحديثات البرنامج الثابت
app.get('/firmware-updates', (req, res) => {
  res.render('20-Firmware_Updates');
});

// صفحة المشاكل الشائعة
app.get('/common-issues', (req, res) => {
  res.render('21-Common_Issues');
});

// صفحة مشاكل البرنامج الثابت
app.get('/firmware-issues', (req, res) => {
  res.render('22-Firmware_Issues');
});

// صفحة مشاكل التخزين والنسخ الاحتياطي
app.get('/storage-and-backup-issues', (req, res) => {
  res.render('23-Storage_and_Backup_Issues');
});

// صفحة مشاكل الشبكة والاتصال
app.get('/network-and-connectivity-issues', (req, res) => {
  res.render('24-Network_and_Connectivity_Issues');
});

// إضافة المزيد من الصفحات حسب الحاجة...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
