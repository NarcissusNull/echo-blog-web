pipeline {
    environment {
        registry = 'echo-blog-web'
    }
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Build Image') {
            steps{
                script {
                    dockerImage = docker.build(registry)
               }
            }
        }
	    stage('Deploy') {
	        steps{
	            sh 'docker run -d -p 3000:80 --name echo-blog-web echo-blog-web'
	        }
	    }
    }
}
