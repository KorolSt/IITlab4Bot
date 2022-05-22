pipeline {
  agent { label 'myapp' }
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    DOCKERHUB_CREDENTIALS = credentials('docker-hub-cred')
  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t second_cont .'
      }
    }
    stage('Login') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }
    stage('Push') {
      steps {
        sh 'docker push second_cont'
      }
    }
  }
  post {
    always {
      sh 'docker logout'
    }
  }
}