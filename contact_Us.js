document.addEventListener('DOMContentLoaded', function() {
      const form = document.querySelector('.form');

      if (form) {

        const button = document.createElement('button');
        button.className = 'btnn';

        const link = document.createElement('a');
        link.href = '#';
        link.textContent = 'Submit';
        link.style.textDecoration = 'none';
        link.style.color = '#000';
        link.style.fontWeight = 'bold';

        button.appendChild(link);
        form.appendChild(button);

        // تصميم الزر
        button.style.width = '240px';
        button.style.height = '40px';
        button.style.background = '#001f3f'; // الأزرق الغامق
        button.style.border = 'none';
        button.style.marginTop = '30px';
        button.style.fontSize = '18px';
        button.style.borderRadius = '10px';
        button.style.cursor = 'pointer';
        button.style.color = '#fff';
        button.style.transition = '0.4s ease';

        // hover
        button.addEventListener('mouseenter', function() {
          button.style.background = '#fff';
          button.style.color = '#001f3f';
          link.style.color = '#001f3f';
        });

        button.addEventListener('mouseleave', function() {
          button.style.background = '#001f3f';
          button.style.color = '#fff';
          link.style.color = '#000';
        });

        // عند الضغط على الزر
        button.addEventListener('click', function(e) {
          e.preventDefault(); // عشان ما يعملش jump لرابط #

          // الرسالة
          const checkmark = document.createElement('div');
          checkmark.textContent = 'Message Sent Successfully!';
          checkmark.style.color = 'green';
          checkmark.style.fontSize = '20px';
          checkmark.style.marginTop = '20px';
          checkmark.style.textAlign = 'center';
          checkmark.style.fontWeight = 'bold';

          // نضيف الرسالة بعد الزر
          form.appendChild(checkmark);

          // نوقف الزر
          button.disabled = true;
          button.style.opacity = '0.5';

          // نعمل refresh بعد ثانيتين
          setTimeout(function() {
            location.reload();
          }, 2000);
        });
      }
    });






