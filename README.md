# Placement Preparation Portal
The  product  is  basically  a  Web  Application  intended  to  develop  the  overall  skills  of  stu-
dents of IIITV for better placements opportnities. Various features such as delivering content for major CS/IT domains, Resume building, Mock tests/interviews, Project pooling, Aptitude and Reasoning quizzes, notifications about the events, workshops, competitions etc has be incorporated.
• Providing an overall exposure to students about various Cs/It domains through video
lectures, websites like Github, IndiaBix.com etc.
• Providing notifications about competitive events like Hackathons, workshops, seminars, webinars, internships etc.
• Project pooling, where a student can take an initiative and interested students can join them based on their skills.
• Enhancing communication skills of the students by organizing more and more GDs, debates, mock HR and Technical interviews so that they can learn to articulate well.
Students will be the key audience whose overall benefit as individuals will be focused.

## Quickstart - Deploy project locally

Build the Docker image using the following command

```bash
$ docker build -t nodejs-express:<tag> .
```

Run the Docker container using the command below.

```bash
$ docker run -d -p 8080:8080 nodejs-express:<tag>
```

## Quickstart - git based pipeline

Follow the steps mentioned below for git based pipeline

1. Ensure that you have a git project
2. Edit `app/src/server.js`
3. Commit your changes

    ```bash
    $ git add .
    $ git commit -m "message"
    ```

4. Push the changes to git

    ```bash
    $ git push <remote> master
    ```

## Advanced usage

### **Port**

Default Port for application is `8080` .
