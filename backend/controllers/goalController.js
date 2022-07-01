const express = require("express")
const asyncHandler = require("express-async-handler")
// @desc get goals
// @rout get /api/goals
// @access private
const getGoals =asyncHandler( async (req,res)=>{
    res.status(200).json({message:"get goals"}) 
})
// @desc post goals
// @rout post /api/goals
// @access private
const setGoals =asyncHandler( async (req,res)=>{
    if(!req.body.text){
    res.status(500)
    throw new Error("please Add  text field ")
}

    res.status(400).json({message:"ok" ,hs:req.body}) 

})
// @desc put goals
// @rout  /api/goals:id
// @access private
const updateGoal =asyncHandler( async (req,res)=>{
    res.status(200).json({message:`update goal ${req.params.id}`}) 
})
// @desc get goals
// @rout get /api/goals
// @access private
const deleteGoals =asyncHandler( async (req,res)=>{
    res.status(200).json({message:` goal is deleted ${req.params.id}`}) 
})
module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoals
}