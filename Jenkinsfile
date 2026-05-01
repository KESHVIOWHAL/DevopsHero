pipeline {
    agent any

    environment {
        IMAGE_NAME = 'devops-hero'
        IMAGE_TAG  = "${env.BRANCH_NAME}-${env.BUILD_NUMBER}".replaceAll('/', '-')
        FULL_IMAGE = "${IMAGE_NAME}:${IMAGE_TAG}"
    }

    stages {

        stage('Install') {
            steps {
                echo "Branch: ${env.BRANCH_NAME} | Build #${env.BUILD_NUMBER}"
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh "docker build -t ${FULL_IMAGE} ."
            }
        }

        stage('Deploy') {
            when {
                anyOf {
                    branch 'main'
                    branch 'master'
                }
            }
            steps {
                echo "Deploying ${FULL_IMAGE}..."
                sh """
                    docker stop devops-hero-app || true
                    docker rm devops-hero-app || true
                    docker run -d \
                        --name devops-hero-app \
                        -p 8081:80 \
                        --restart unless-stopped \
                        ${FULL_IMAGE}
                """
            }
        }
    }

    post {
        always {
            sh 'docker image prune -f || true'
            cleanWs()
        }
        success {
            echo "SUCCESS - ${env.BRANCH_NAME}"
        }
        failure {
            echo "FAILED - ${env.BRANCH_NAME}"
        }
    }
}
