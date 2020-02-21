def twoSum(nums, target):
    output = []
    for i in nums :
        pair = target-i
        if nums.index(i) not in output :
            if target - i in nums :
                calon = i
                if nums.index(i) != nums.index(pair) :
                    output.append(nums.index(i))
                    output.append(nums.index(pair))
    if output == [] :
        for j in nums:
            output.append(nums.index(calon))
            nums[nums.index(calon)]= "a"
    return output

print(twoSum([3,3],6))
                