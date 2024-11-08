import React from 'react';
import './News.css';

function News() {
    return (
        <div className='news-container'>
            <h1 className='news-title'>Updates for You</h1>
            <div className='news-data'>
                <div className='news-empty'></div>
                <div>
                    <h1 className='news-subtitle'>Competitions</h1>
                    <div>
                        <div className='news-competition-event fade-in'>
                            <p>Codeforces Round #800</p>
                            <p>Participate in this competitive programming contest to enhance your coding skills.</p>
                        </div>
                        <div className='news-competition-event fade-in'>
                            <p>HackerRank 101 Hack</p>
                            <p>A challenge to solve problems and earn points on HackerRank.</p>
                        </div>
                        <div className='news-competition-event fade-in'>
                            <p>Google Kickstart Round A</p>
                            <p>Compete in this round to showcase your algorithmic skills and win prizes.</p>
                        </div>
                        <div className='news-competition-event fade-in'>
                            <p>AtCoder Beginner Contest</p>
                            <p>A great contest for beginners to start their competitive programming journey.</p>
                        </div>
                        <div className='news-competition-event fade-in'>
                            <p>LeetCode Weekly Contest</p>
                            <p>Join LeetCode to solve problems and climb the leaderboard!</p>
                        </div>
                    </div>
                </div>
                <div className='news-empty'></div>
                <div>
                    <h1 className='news-subtitle'>Online Quiz</h1>
                    <div>
                        <div className='news-quiz-event fade-in'>
                            <p>JavaScript Basics Quiz</p>
                            <p>Test your knowledge of JavaScript fundamentals.</p>
                        </div>
                        <div className='news-quiz-event fade-in'>
                            <p>Data Structures & Algorithms Quiz</p>
                            <p>Challenge your understanding of data structures and algorithms.</p>
                        </div>
                        <div className='news-quiz-event fade-in'>
                            <p>ReactJS Knowledge Quiz</p>
                            <p>Assess your skills in ReactJS with this quiz.</p>
                        </div>
                        <div className='news-quiz-event fade-in'>
                            <p>Python Programming Quiz</p>
                            <p>Test your Python skills and problem-solving abilities.</p>
                        </div>
                        <div className='news-quiz-event fade-in'>
                            <p>CSS Flexbox & Grid Quiz</p>
                            <p>Evaluate your understanding of CSS layouts.</p>
                        </div>
                    </div>
                </div>
                <div className='news-empty'></div>
            </div>
        </div>
    );
}

export default News;
