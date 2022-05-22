pipeline {
	def buildNumber = env.BUILD_NUMBER as int
	if (buildNumber > 1) milestone(buildNumber - 1)
	milestone(buildNumber)
	
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t lab4_image .'
                sh 'docker run -p 8777:8777 -t lab4_image'
            }
        }
    }
}

