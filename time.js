 function calculateTimeDifference() {
            const today = new Date();
            const startDate = new Date(today.getFullYear(), 4, 13); // 5月13日的日期对象

            let timeDifference = today - startDate;

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            timeDifference -= days * (1000 * 60 * 60 * 24);

            const hours = Math.floor(timeDifference / (1000 * 60 * 60));
            timeDifference -= hours * (1000 * 60 * 60);

            const minutes = Math.floor(timeDifference / (1000 * 60));
            timeDifference -= minutes * (1000 * 60);

            const seconds = Math.floor(timeDifference / 1000);

            return `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
        }

        function updateTimeDifference() {
            document.getElementById("timeDifference").innerText = calculateTimeDifference();
        }

        setInterval(updateTimeDifference, 1000); // 每隔1秒更新一次时间差