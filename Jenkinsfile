pipeline {

    agent any
    stages {
		stage('Interapt') {
			steps{
				script {
					def buildNumber = env.BUILD_NUMBER as int
					if (buildNumber > 1) milestone(buildNumber - 1)
					milestone(buildNumber)
				}
			}
		}
        stage('Build') {
            steps {
                sh 'docker build -t lab4_image .'
                sh 'docker run -p 8777:8777 -t lab4_image'
            }
        }
    }
}

