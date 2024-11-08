import React from 'react'
import './ReservedBooks.css'

function ReservedBooks() {
    return (
        <div className='reservedbooks-container'>
            <h1 className='reservedbooks-title'>Books On Hold</h1>
            <table className='reservedbooks-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Book</th>
                        <th>Date Reserved</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Aryan Sharma</td>
                        <td><a href="https://www.oreilly.com/library/view/clean-code/9780136083239/" target="_blank" rel="noopener noreferrer">Clean Code</a></td>
                        <td>01/09/2023</td>
                    </tr>
                    <tr>
                        <td>Neha Patel</td>
                        <td><a href="https://www.oreilly.com/library/view/the-pragmatic-programmer/9780135957059/" target="_blank" rel="noopener noreferrer">The Pragmatic Programmer</a></td>
                        <td>05/09/2023</td>
                    </tr>
                    <tr>
                        <td>Rohit Verma</td>
                        <td><a href="https://www.oreilly.com/library/view/javascript-the-good/9780596805524/" target="_blank" rel="noopener noreferrer">JavaScript The Good Parts</a></td>
                        <td>12/09/2023</td>
                    </tr>
                    <tr>
                        <td>Ananya Gupta</td>
                        <td><a href="https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033848" target="_blank" rel="noopener noreferrer">Introduction to Algorithms</a></td>
                        <td>18/09/2023</td>
                    </tr>
                    <tr>
                        <td>Siddharth Mehta</td>
                        <td><a href="https://www.oreilly.com/library/view/design-patterns-elements/0201633612/" target="_blank" rel="noopener noreferrer">Design Patterns Elements of Reusable Object-Oriented Software</a></td>
                        <td>20/09/2023</td>
                    </tr>
                    <tr>
                        <td>Priya Rao</td>
                        <td><a href="https://ehmatthes.github.io/pcc_2e/regular_updates/" target="_blank" rel="noopener noreferrer">Python Crash Course</a></td>
                        <td>25/09/2023</td>
                    </tr>
                    <tr>
                        <td>Rajesh Kumar</td>
                        <td><a href="https://www.oreilly.com/library/view/you-dont-know/9781491904244/" target="_blank" rel="noopener noreferrer">You Don't Know JS</a></td>
                        <td>28/09/2023</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ReservedBooks
