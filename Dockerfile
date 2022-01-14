FROM amazon/aws-lambda-nodejs:12

ENV AWS_LAMBDA_FUNCTION_MEMORY_SIZE=10240

RUN curl https://intoli.com/install-google-chrome.sh | bash

copy package.json .

RUN npm install

COPY app.js .

CMD ["app.handler"]