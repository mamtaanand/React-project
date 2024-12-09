import { useEffect, useState } from "react"
import React from 'react'
import { PostForm } from "../components";
import appwiteService from "../appwrite/config"
import { useNavigate, useParams } from "react-router";

const EditPost = () => {
  const [posts, setPosts] = useEffect(null);
  const {slug} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (slug) {
      appwiteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post)
          
        }
      })      
    } else {
      navigate('/')
    }
  }, [slug, navigate])

  return posts ? (
    <>
    <Container>
      <PostForm posts={posts}/>
    </Container>
    </>
  ) : null

}

export default EditPost
