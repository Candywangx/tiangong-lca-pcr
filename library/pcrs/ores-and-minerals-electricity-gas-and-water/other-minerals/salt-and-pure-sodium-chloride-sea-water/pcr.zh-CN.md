---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.other-minerals.salt-and-pure-sodium-chloride-sea-water
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 盐和纯氯化钠；海水

## 1. 范围与适用性

供应盐和纯氯化钠，包括实际岩盐收获日晒盐真空敞锅盐精制品级、声明氯化钠水溶液、餐桌盐变性盐及保留盐产品身份的实际抗结块助流变体；同时覆盖海水本身在独立声明取水装载或收料出口的供应。每个数据集固定一种验收产品状态路线出口，不混合加权固体盐海水。盐路线仅纳入实际发生的采矿溶采海水咸水取入日晒浓缩收获供给盐溶解洗涤卤水提纯机械蒸发结晶脱水干燥添加剂投加包装。海水产品供应纳入实际海洋取水泵送筛滤储存声明交付，不强制浓缩蒸发结晶脱盐。海水仍为混合咸水，不是纯氯化钠或淡水。外部供给海水卤水是带上游供应方产品投入，区别于基本流海洋水取用；内部卤水转移抵消。纳入截至出口可归属取水池矿开发寿命复垦控制废物实测释放。氯碱纯碱脱盐淡水食品配方下游用盐是独立下游产品系统。光学或其他独立分类制品用培养氯化钠晶体及药品不属于散装物料供应范围。 `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.other-minerals.salt-and-pure-sodium-chloride-sea-water |
| classification_refs | CPC 3.0:16200 |
| covered_products | 盐和纯氯化钠的声明固体品级水溶液及实际抗结块助流剂变体；作为产品供应的海水，区别于制造卤水 |
| excluded_products | 氯烧碱纯碱其他化学转化；脱盐淡水；以其他分离矿物盐为参考产品；配方食品药品培养光学氯化钠制品下游使用纯运输服务 |
| representative_product | 工厂相容精制氯化钠 |
| production_route | 取水盐池矿山开发; 石盐及溶采; 海水取用供应; 日晒盐浓缩收获; 盐卤水提纯; 机械结晶干燥; 咸水废物排放控制; 盐或海水产品交付 |
| market_state | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 按一种声明盐氯化钠溶液或海水状态供应1 kg净验收收到基产品；溶液海水 kg 不是干盐 kg |
| How much | 1 kg |
| How well | 场址年份；一种产品状态选定出口；实际岩盐溶采日晒机械蒸发精制海水供应路线；原产地地质或海洋取水坐标季节；验收净质量库存退货；盐游离水干基氯化钠化验；溶液氯化钠质量分数；海水盐度方法离子组成，不能将盐度等同纯氯化钠；体积换算须实测温度密度；品级粒径；每种实际添加剂及含量；散装袋装罐装管道；上游供应分配；纳入运输；盐池气候实测水离子平衡；废物去向排放介质；可归属寿命开发关闭。代表 UUID 仅相容工厂≥99.5%氯化钠产品质量流，不能覆盖所有盐卤水海水 |
| How long or cycle | 声明生产期内的一次出口供应 |
| reference_flow_link | `final_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 氯化钠 `a413ea86-0887-42c8-be77-3bee86d5863b` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址年份；一种产品状态选定出口；实际岩盐溶采日晒机械蒸发精制海水供应路线；原产地地质或海洋取水坐标季节；验收净质量库存退货；盐游离水干基氯化钠化验；溶液氯化钠质量分数；海水盐度方法离子组成，不能将盐度等同纯氯化钠；体积换算须实测温度密度；品级粒径；每种实际添加剂及含量；散装袋装罐装管道；上游供应分配；纳入运输；盐池气候实测水离子平衡；废物去向排放介质；可归属寿命开发关闭。代表 UUID 仅相容工厂≥99.5%氯化钠产品质量流，不能覆盖所有盐卤水海水 |

全部限定信息须在数据集元数据或参考流备注中声明。代表流身份仅适用于已确认的产品状态、地域和属性；不相容变体须解析独立流，不以代表身份设定默认产品组成。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D 为正的、验收净出口产品总量，单位为 kg。排除包装及抵消的内部转移。cp_output 记录 D，每张卡按同一参考流归一化。 |
| conversion | utility and material rows | 声明行属性 | kg; m3; MJ | 保留原始读数。电力按 1 kWh = 3.6 MJ 换算。质量与体积转换需实测密度、温度及适用压力，保留水分及化学品有效含量。 |
| category_balance | production | Mass | kg | D 为恰好选定出口产品独立实测正验收净收到基 kg，排除包装拒收退货；不能由资源投入或假定产率推算 D。固体盐干固体 = D*(1-w)，实测游离水分数0 <= w <1；干基氯化钠分数 x 给出氯化钠质量 D*(1-w)*x，添加剂独立化验。溶液实际氯化钠质量 = D*c，c 为实测收到基氯化钠质量分数。海水未直接称量时 D = 各独立计量交付 V 乘对应实测密度 rho 后求和；匹配每批温度盐度组成，不默认密度盐度氯化钠比例。总溶解盐盐度不是氯化钠化验。各情形均以 D 为分母，干有效当量仅作补充限定。按一致期间基准核对水及钠氯或实测离子平衡、降水实测盐池蒸发渗漏、每种共生盐苦卤水分拒收库存变化。内部循环卤水抵消一次。单数据集不将固体盐溶液海水相加为 D。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 按实际路线从石盐地质资源海洋咸水取用或带上游负荷外部供给盐卤水海水产品开始 |
| starting_condition_role | 资源或供给进料，须声明具体情形 |
| product_classification_scope | 盐和纯氯化钠的声明固体品级水溶液及实际抗结块助流剂变体；作为产品供应的海水，区别于制造卤水 |
| recursive_input_rule | 购入同类物料须关联独立供应数据集；内部回用仅作为平衡记录，不新增外部投入或抵扣。 |
| upstream_dataset_requirement | 关联进料、电力、燃料、化学品、基础设施及废物管理负荷，披露缺失覆盖。 |
| disclosure | 场址年份；一种产品状态选定出口；实际岩盐溶采日晒机械蒸发精制海水供应路线；原产地地质或海洋取水坐标季节；验收净质量库存退货；盐游离水干基氯化钠化验；溶液氯化钠质量分数；海水盐度方法离子组成，不能将盐度等同纯氯化钠；体积换算须实测温度密度；品级粒径；每种实际添加剂及含量；散装袋装罐装管道；上游供应分配；纳入运输；盐池气候实测水离子平衡；废物去向排放介质；可归属寿命开发关闭。代表 UUID 仅相容工厂≥99.5%氯化钠产品质量流，不能覆盖所有盐卤水海水 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | 供应盐和纯氯化钠，包括实际岩盐收获日晒盐真空敞锅盐精制品级、声明氯化钠水溶液、餐桌盐变性盐及保留盐产品身份的实际抗结块助流变体；同时覆盖海水本身在独立声明取水装载或收料出口的供应。每个数据集固定一种验收产品状态路线出口，不混合加权固体盐海水。盐路线仅纳入实际发生的采矿溶采海水咸水取入日晒浓缩收获供给盐溶解洗涤卤水提纯机械蒸发结晶脱水干燥添加剂投加包装。海水产品供应纳入实际海洋取水泵送筛滤储存声明交付，不强制浓缩蒸发结晶脱盐。海水仍为混合咸水，不是纯氯化钠或淡水。外部供给海水卤水是带上游供应方产品投入，区别于基本流海洋水取用；内部卤水转移抵消。纳入截至出口可归属取水池矿开发寿命复垦控制废物实测释放。氯碱纯碱脱盐淡水食品配方下游用盐是独立下游产品系统。光学或其他独立分类制品用培养氯化钠晶体及药品不属于散装物料供应范围。 | `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022` |
| boundary_partition | all exchanges | 纳入截至声明出口的实际调质、储存、装运及污染控制。按披露的寿命产量计入可归属建设及关闭负荷，或论证排除并进行敏感性分析。区分购入燃料供应与前景燃烧、购入处理与场址排放。 |  |
| boundary_completeness | inventory | 卡片规定逐项可能交换及路线条件，不能替代完整场址审计。实际发生但未列出的每种化学品、废物、资源、土地转变及污染物须分别补行。区分不发生、实测零与未知。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| development | 取水盐池矿山开发 | conditional | 实际可归属开发复垦 | 前景生产 | per 1 kg reference flow |
| extraction | 石盐及溶采 | conditional | 仅实际岩盐采矿溶采 | 前景生产 | per 1 kg reference flow |
| intake | 海水取用供应 | conditional | 实际海洋取水或供给咸水进料，海水产品可在此截止 | 前景生产 | per 1 kg reference flow |
| solar | 日晒盐浓缩收获 | conditional | 仅实际日晒盐池浓缩收获 | 前景生产 | per 1 kg reference flow |
| refining | 盐卤水提纯 | conditional | 实际洗盐溶解化学卤水提纯 | 前景生产 | per 1 kg reference flow |
| evaporation | 机械结晶干燥 | conditional | 实际真空敞锅蒸发固体干燥；未加工海水出口不发生 | 前景生产 | per 1 kg reference flow |
| controls | 咸水废物排放控制 | conditional | 实际转移环境释放 | 前景生产 | per 1 kg reference flow |
| dispatch | 盐或海水产品交付 | required | 每个选定出口，仅实际品级添加剂包装 | 前景生产 | per 1 kg reference flow |

### 过程：取水盐池矿山开发 (`development`)

#### 输入

##### 产品流

###### 开发关闭柴油 (`development_diesel`)

实际取水盐池井矿工程，按寿命产量归属一次。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_development_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_development_diesel`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

### 过程：石盐及溶采 (`extraction`)

#### 输入

##### 产品流

###### 采盐用电 (`mining_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际采矿通风破碎泵送井操作，抵消内部卤水。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_mining_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mining_power`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 岩盐采出柴油 (`mining_diesel`)

实际挖掘装载场内运输，不重复交付。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_mining_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mining_diesel`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 硝酸铵燃油炸药 (`anfo`)

仅实际爆破，连续采矿排除未用炸药，其他炸药逐项另列。

- 选定流: 硝酸铵燃油炸药
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_anfo 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_anfo`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 购入溶采用水 (`solution_water`)

实际新注入水，其他直接取水来源另列，返回卤水不是新购入水。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_solution_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_solution_water`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

##### 基本流

###### 地质矿床中的天然石盐 (`halite_resource`)

实际石盐地质取用，不能用产品氯化钠作为地质资源。

- 选定流: 地质矿床中的天然石盐
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_halite_resource 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_halite_resource`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

#### 输出

##### 废物流

###### 拒收盐矿岩石 (`rejected_rock`)

实际移出岩石及去向，不由单矿报告设通用零废物。

- 选定流: 拒收盐矿岩石
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_rejected_rock 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_rejected_rock`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

### 过程：海水取用供应 (`intake`)

#### 输入

##### 产品流

###### 外部供给海水 (`supplied_seawater`)

仅实际供应方海水产品及上游泵送交付，不能将供应方取水再计本场址海洋资源。

- 选定流: 外部供给海水
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_supplied_seawater 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_supplied_seawater`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 外部供给氯化钠卤水 (`supplied_brine`)

实际制造回收卤水带密度组成供应分配，区别于原海水。

- 选定流: 外部供给氯化钠卤水
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_supplied_brine 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_supplied_brine`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 海水取用筛滤用电 (`intake_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际泵筛滤储存，排除下游脱盐。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_intake_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_intake_power`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

##### 基本流

###### 从海洋环境取用的海水 (`marine_water`)

实际总海洋取水带坐标季节，区别于供给技术圈海水淡水资源。

- 选定流: 从海洋环境取用的海水
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_marine_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_marine_water`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

### 过程：日晒盐浓缩收获 (`solar`)

#### 输入

##### 产品流

###### 日晒盐池泵送用电 (`solar_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际日晒路线海水卤水泵转，日光不是购入电。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_solar_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_solar_power`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 日晒盐收获柴油 (`harvest_diesel`)

仅实际收获装载机械，匹配季节验收库存。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_harvest_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_harvest_diesel`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

#### 输出

##### 产品流

###### 适销制盐苦卤 (`bittern_product`)

仅实际回收验收苦卤规格客户，否则记录废卤，不能两者同计。

- 选定流: 适销制盐苦卤
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_bittern_product 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_bittern_product`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

### 过程：盐卤水提纯 (`refining`)

#### 输入

##### 产品流

###### 供给相容精制氯化钠 (`supplied_nacl`)

仅≥99.5%工厂状态相容供给氯化钠，其他品级分别独立身份，内部盐非外部投入。

- 选定流: 氯化钠 `a413ea86-0887-42c8-be77-3bee86d5863b`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_supplied_nacl 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_supplied_nacl`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 购入精盐用水 (`refining_water`)

仅实际新洗涤溶解补充水，排除回用水。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_refining_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_refining_water`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 盐提纯用电 (`refining_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

实际洗涤混合过滤离心，不设固定化学配方。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_refining_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_refining_power`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 碳酸钠 (`soda_ash`)

仅实际单项提纯药剂，记录有效含量反应去向。

- 选定流: 碳酸钠
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_soda_ash 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_soda_ash`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 氢氧化钠 (`caustic_soda`)

仅实际单项提纯药剂，非下游氯碱生产。

- 选定流: 氢氧化钠
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_caustic_soda 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_caustic_soda`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 氢氧化钙 (`lime`)

仅实际熟石灰提纯药剂，不强制通用使用。

- 选定流: 氢氧化钙
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_lime 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_lime`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

#### 输出

##### 废物流

###### 制盐卤水提纯污泥 (`purification_sludge`)

实际钙镁沉淀污泥带物相固含处理去向，不假定洞穴处置安全。

- 选定流: 制盐卤水提纯污泥
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_purification_sludge 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_purification_sludge`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

### 过程：机械结晶干燥 (`evaporation`)

#### 输入

##### 产品流

###### 盐结晶干燥用电 (`evap_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

仅出口内实际真空机械蒸汽再压缩泵离心干燥，表计分配防重复。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_evap_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_evap_power`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 购入工艺蒸汽 (`purchased_steam`)

实际外购蒸发干燥蒸汽，不能再计同蒸汽场内产汽燃料。

- 选定流: 购入工艺蒸汽
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_purchased_steam 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_purchased_steam`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 场内制盐供热天然气 (`boiler_gas`)

仅实际燃气蒸发干燥锅炉，实测组分热值，其他燃料另列。

- 选定流: 场内制盐供热天然气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_boiler_gas 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_boiler_gas`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

### 过程：咸水废物排放控制 (`controls`)

#### 输入

##### 产品流

###### 制盐水粉尘控制用电 (`control_power`)

本购电交换须独立确认实际供方、消费或生产接口、地域、电压、发电属性及能量属性单位；确认相容直接读取身份前保留 UUID 未解决。不能以垃圾焚烧发电流代表任意场址用电。

仅实际未被重复计入处理控制表计。

- 选定流: 电力
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 按 cp_control_power 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_control_power`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

#### 输出

##### 废物流

###### 转交处理的制盐废卤 (`waste_brine`)

实际最终卤水苦卤废物转移带组成，不是环境释放出售苦卤。

- 选定流: 转交处理的制盐废卤
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_waste_brine 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_waste_brine`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 海水取水筛渣 (`screenings`)

实际捕集取水杂物转交及去向，生物损失栖息地影响单独披露。

- 选定流: 海水取水筛渣
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_screenings 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_screenings`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

##### 基本流

###### 排入海洋的水 (`water_to_sea`)

实际净海洋排水含实测盐度温度来源，不是淡水归还或总取水假定抵扣。

- 选定流: 排入海洋的水
- 流属性 / 单位: Volume / m3
- 数量规则: 按 cp_water_to_sea 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water_to_sea`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 氯离子释放至海水 (`chloride_to_sea`)

实际单项溶解氯离子负荷，披露取水背景参考及净总约定。

- 选定流: 氯离子释放至海水
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_chloride_to_sea 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_chloride_to_sea`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 悬浮固体释放至海水 (`tss_water`)

仅实际实测海洋悬浮固体排放，捕集污泥不是释放。

- 选定流: 悬浮固体释放至海水
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_tss_water 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_tss_water`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 化石二氧化碳排入空气 (`co2_air`)

实际前景化石燃烧，不设盐化学反应默认排放，上游计一次。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_co2_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_co2_air`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 二氧化氮排入空气 (`nox_air`)

实际燃烧单项二氧化氮及方法，一氧化氮其他污染物逐项另列。

- 选定流: 二氧化氮排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_nox_air 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_nox_air`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 氯化钠颗粒排入空气 (`salt_dust`)

实际未捕集盐灰粒径介质，返回除尘灰不是排放。

- 选定流: 氯化钠颗粒排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_salt_dust 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_salt_dust`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

### 过程：盐或海水产品交付 (`dispatch`)

#### 输入

##### 产品流

###### 亚铁氰化钠抗结块剂 (`sodium_ferrocyanide`)

仅实际使用具名添加剂带品级水合有效含量，不强制投加。

- 选定流: 亚铁氰化钠抗结块剂
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_sodium_ferrocyanide 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sodium_ferrocyanide`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 二氧化硅助流剂 (`silica`)

仅实际具名添加剂，其他变性抗结块剂逐项另列审查身份。

- 选定流: 二氧化硅助流剂
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_silica 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_silica`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 聚乙烯盐袋 (`pe_bag`)

仅实际袋排除产品净质量，托盘内衬纸组件发生时逐项另列。

- 选定流: 聚乙烯盐袋
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_pe_bag 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pe_bag`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 纳入盐或海水交付柴油 (`delivery_diesel`)

仅明确选定收料出口内实际前景交付，不重复供应运输。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_delivery_diesel 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_delivery_diesel`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

#### 输出

##### 产品流

###### 声明出口的岩盐 (`rock_salt_product`)

仅选定岩盐产品，独立测 D 品级水分，共品级另分配，非纯氯化钠 UUID。

- 选定流: 声明出口的岩盐
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_rock_salt_product 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_rock_salt_product`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 声明出口的收获日晒盐 (`solar_salt_product`)

仅选定日晒盐产品带独立 D 水分化验，不强加精制纯度。

- 选定流: 声明出口的收获日晒盐
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_solar_salt_product 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_solar_salt_product`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 声明出口的氯化钠水溶液 (`solution_product`)

仅选定制造氯化钠溶液带独立正收到基 D 浓度，非干氯化钠 kg 或原海水。

- 选定流: 声明出口的氯化钠水溶液
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_solution_product 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_solution_product`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 声明供应出口的海水 (`seawater_product`)

仅选定原筛滤海水产品带独立 D 盐度密度，排除未发生蒸发精盐操作。

- 选定流: 声明供应出口的海水
- 流属性 / 单位: Mass / kg
- 数量规则: 按 cp_seawater_product 采集可归属报告期数量；完成库存、转移及分配核对后除以 D。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_seawater_product`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

###### 工厂相容精制氯化钠 (`final_product`)

代表已确认≥99.5%氯化钠产品质量流，仅选定相容工厂产品时适用。其他盐品级氯化钠溶液海水输出须独立身份并替换数据集参考，不能用本 UUID。记录实际机械日晒生产，不由流名推断。恰好一种选定验收产品定义 D，替代参考卡不能共同求和为 D。

- 选定流: 氯化钠 `a413ea86-0887-42c8-be77-3bee86d5863b`
- 流属性 / 单位: Mass / kg
- 数量规则: 1 kg
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_output`
- 来源: `bgs-salt-2006`, `usgs-salt-2018`, `wco-salt-2022`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | 优先过程细分或可辩护的系统扩展；否则采用已证明的物理因果关系。物理关系不可得时，经济分配必须匹配期间、价格及货币并做敏感性分析，保留未分配清单。 | `ef-allocation-2021` |
| allocation_product | reference and co-products | 尽可能细分矿山取水提纯蒸发独立处理品级。保留实际共同氯化钠苦卤及分别回收钙镁钾盐的未分配清单；证明物理因果或必要时匹配经济分配价格敏感性。苦卤提纯污泥不自动是适销联产品，须说明组成规格实际去向。计入回收购入卤水供应负荷及有据截断，不因来源自动零负荷。可归属取水池井矿开发关闭按实测寿命验收产量计一次，储气洞下游用途不自动抵扣。不默认抵扣避免盐化学品脱盐水处置。 |  |
| allocation_waste | waste and recycling | 按物理状态及实际去向判定每项输出。出售不会自动将残渣变为联产品，内部回用不获得避免产品抵扣，处理负荷只计一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | 原始字段 | 采集方法 | 单位 | 频次 | 时间覆盖 | 场址范围 | aggregation_rule | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_halite_resource | extraction | `halite_resource` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_mining_power | extraction | `mining_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_mining_diesel | extraction | `mining_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_anfo | extraction | `anfo` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_solution_water | extraction | `solution_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_rejected_rock | extraction | `rejected_rock` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_marine_water | intake | `marine_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 独立分别计量总取入验收出口交付；匹配每批校准净 kg 或实测 V m3 与记录温度盐度下密度 rho kg/m3。记录来源季节样品钠氯其他离子化验库存转移降水蒸发渗漏实际排水。D 仅来自选定验收出口，体积换算时 D=sum(V*rho)，不假定海水密度盐度。溶液氯化钠分数与海水总盐度保持区别。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_supplied_seawater | intake | `supplied_seawater` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 独立分别计量总取入验收出口交付；匹配每批校准净 kg 或实测 V m3 与记录温度盐度下密度 rho kg/m3。记录来源季节样品钠氯其他离子化验库存转移降水蒸发渗漏实际排水。D 仅来自选定验收出口，体积换算时 D=sum(V*rho)，不假定海水密度盐度。溶液氯化钠分数与海水总盐度保持区别。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_supplied_brine | intake | `supplied_brine` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 独立分别计量总取入验收出口交付；匹配每批校准净 kg 或实测 V m3 与记录温度盐度下密度 rho kg/m3。记录来源季节样品钠氯其他离子化验库存转移降水蒸发渗漏实际排水。D 仅来自选定验收出口，体积换算时 D=sum(V*rho)，不假定海水密度盐度。溶液氯化钠分数与海水总盐度保持区别。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_intake_power | intake | `intake_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_solar_power | solar | `solar_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_harvest_diesel | solar | `harvest_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_bittern_product | solar | `bittern_product` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对匹配批次期间独立称量净验收产品或实际转移 kg；按明确湿干基化验游离水固体氯化钠实际其他物相离子添加剂。核对库存流量，拒收包装非 D。选定产品 D 独立实测正值，不是理论产率。干固体 D*(1-w)、氯化钠 D*(1-w)*x 或溶液 D*c 仅作补充当量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_supplied_nacl | refining | `supplied_nacl` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对匹配批次期间独立称量净验收产品或实际转移 kg；按明确湿干基化验游离水固体氯化钠实际其他物相离子添加剂。核对库存流量，拒收包装非 D。选定产品 D 独立实测正值，不是理论产率。干固体 D*(1-w)、氯化钠 D*(1-w)*x 或溶液 D*c 仅作补充当量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_refining_water | refining | `refining_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_refining_power | refining | `refining_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_soda_ash | refining | `soda_ash` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 逐项记录具名供应配方水合态净耗配方 kg 有效含量加水实际过程去向，匹配输出期间，不合并化学品强加剂量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_caustic_soda | refining | `caustic_soda` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 逐项记录具名供应配方水合态净耗配方 kg 有效含量加水实际过程去向，匹配输出期间，不合并化学品强加剂量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_lime | refining | `lime` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 逐项记录具名供应配方水合态净耗配方 kg 有效含量加水实际过程去向，匹配输出期间，不合并化学品强加剂量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_purification_sludge | refining | `purification_sludge` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对匹配批次期间独立称量净验收产品或实际转移 kg；按明确湿干基化验游离水固体氯化钠实际其他物相离子添加剂。核对库存流量，拒收包装非 D。选定产品 D 独立实测正值，不是理论产率。干固体 D*(1-w)、氯化钠 D*(1-w)*x 或溶液 D*c 仅作补充当量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_evap_power | evaporation | `evap_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_purchased_steam | evaporation | `purchased_steam` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_boiler_gas | evaporation | `boiler_gas` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_waste_brine | controls | `waste_brine` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对匹配批次期间独立称量净验收产品或实际转移 kg；按明确湿干基化验游离水固体氯化钠实际其他物相离子添加剂。核对库存流量，拒收包装非 D。选定产品 D 独立实测正值，不是理论产率。干固体 D*(1-w)、氯化钠 D*(1-w)*x 或溶液 D*c 仅作补充当量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_screenings | controls | `screenings` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_control_power | controls | `control_power` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | MJ | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_water_to_sea | controls | `water_to_sea` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 独立分别计量总取入验收出口交付；匹配每批校准净 kg 或实测 V m3 与记录温度盐度下密度 rho kg/m3。记录来源季节样品钠氯其他离子化验库存转移降水蒸发渗漏实际排水。D 仅来自选定验收出口，体积换算时 D=sum(V*rho)，不假定海水密度盐度。溶液氯化钠分数与海水总盐度保持区别。 | m3 | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_chloride_to_sea | controls | `chloride_to_sea` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 匹配实测排水体积 V m3 与物种浓度 C mg/L 给出负荷 kg=C*V/1000；保留配对取水背景浓度总净约定环境介质不确定性。仅匹配总取水背景扣减有据且声明时计净增负荷，不自动将天然海水氯离子计新增污染。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_tss_water | controls | `tss_water` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 匹配实测排水体积 V m3 与物种浓度 C mg/L 给出负荷 kg=C*V/1000；保留配对取水背景浓度总净约定环境介质不确定性。仅匹配总取水背景扣减有据且声明时计净增负荷，不自动将天然海水氯离子计新增污染。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_co2_air | controls | `co2_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_nox_air | controls | `nox_air` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_salt_dust | controls | `salt_dust` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_sodium_ferrocyanide | dispatch | `sodium_ferrocyanide` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 逐项记录具名供应配方水合态净耗配方 kg 有效含量加水实际过程去向，匹配输出期间，不合并化学品强加剂量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_silica | dispatch | `silica` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 逐项记录具名供应配方水合态净耗配方 kg 有效含量加水实际过程去向，匹配输出期间，不合并化学品强加剂量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_pe_bag | dispatch | `pe_bag` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_delivery_diesel | dispatch | `delivery_diesel` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 采用校准称量、计量或可追溯转移记录；核对期间、期初期末库存、实际品级及边界。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_rock_salt_product | dispatch | `rock_salt_product` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对匹配批次期间独立称量净验收产品或实际转移 kg；按明确湿干基化验游离水固体氯化钠实际其他物相离子添加剂。核对库存流量，拒收包装非 D。选定产品 D 独立实测正值，不是理论产率。干固体 D*(1-w)、氯化钠 D*(1-w)*x 或溶液 D*c 仅作补充当量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_solar_salt_product | dispatch | `solar_salt_product` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对匹配批次期间独立称量净验收产品或实际转移 kg；按明确湿干基化验游离水固体氯化钠实际其他物相离子添加剂。核对库存流量，拒收包装非 D。选定产品 D 独立实测正值，不是理论产率。干固体 D*(1-w)、氯化钠 D*(1-w)*x 或溶液 D*c 仅作补充当量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_solution_product | dispatch | `solution_product` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 独立分别计量总取入验收出口交付；匹配每批校准净 kg 或实测 V m3 与记录温度盐度下密度 rho kg/m3。记录来源季节样品钠氯其他离子化验库存转移降水蒸发渗漏实际排水。D 仅来自选定验收出口，体积换算时 D=sum(V*rho)，不假定海水密度盐度。溶液氯化钠分数与海水总盐度保持区别。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_seawater_product | dispatch | `seawater_product` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 独立分别计量总取入验收出口交付；匹配每批校准净 kg 或实测 V m3 与记录温度盐度下密度 rho kg/m3。记录来源季节样品钠氯其他离子化验库存转移降水蒸发渗漏实际排水。D 仅来自选定验收出口，体积换算时 D=sum(V*rho)，不假定海水密度盐度。溶液氯化钠分数与海水总盐度保持区别。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |
| cp_output | dispatch | `final_product` | measurement_record | 期间；场址；数量；原单位；不确定性；库存变化；路线条件；分配；D；产品限定信息 | 对匹配批次期间独立称量净验收产品或实际转移 kg；按明确湿干基化验游离水固体氯化钠实际其他物相离子添加剂。核对库存流量，拒收包装非 D。选定产品 D 独立实测正值，不是理论产率。干固体 D*(1-w)、氯化钠 D*(1-w)*x 或溶液 D*c 仅作补充当量。 | kg | 逐计量区间或批次，每月核对 | 完整年度或有据的代表性生产周期 | 一种验收固体盐品级氯化钠水溶液或海水产品，实测收到基组成及选定装载收料出口 | per 1 kg reference flow | 校准；原始记录；化验；平衡残差；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | 交换量 = 可归属期间数量 / D，汇总前核对库存并抵消内部转移。 | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D 为恰好选定出口产品独立实测正验收净收到基 kg，排除包装拒收退货；不能由资源投入或假定产率推算 D。固体盐干固体 = D*(1-w)，实测游离水分数0 <= w <1；干基氯化钠分数 x 给出氯化钠质量 D*(1-w)*x，添加剂独立化验。溶液实际氯化钠质量 = D*c，c 为实测收到基氯化钠质量分数。海水未直接称量时 D = 各独立计量交付 V 乘对应实测密度 rho 后求和；匹配每批温度盐度组成，不默认密度盐度氯化钠比例。总溶解盐盐度不是氯化钠化验。各情形均以 D 为分母，干有效当量仅作补充限定。按一致期间基准核对水及钠氯或实测离子平衡、降水实测盐池蒸发渗漏、每种共生盐苦卤水分拒收库存变化。内部循环卤水抵消一次。单数据集不将固体盐溶液海水相加为 D。 | 匹配的质量、体积、组成及库存测量 | 平衡残差及不确定性 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| representativeness | dataset | 匹配生产及交换期间、实际技术、地域及供应状态；记录启停、季节变化及替代。 | collection records |
| identity_and_ranges | all cards | 保留未解决身份及缺失独立范围证据，不以猜测行业区间替代测量，不将缺测视为零。 | manifest review metadata |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | 核对 1 kg、正 D、产品状态、属性单位及全部限定信息；每个数据集固定一种产品及路线。 |  |
| validate_balance | site | D 为恰好选定出口产品独立实测正验收净收到基 kg，排除包装拒收退货；不能由资源投入或假定产率推算 D。固体盐干固体 = D*(1-w)，实测游离水分数0 <= w <1；干基氯化钠分数 x 给出氯化钠质量 D*(1-w)*x，添加剂独立化验。溶液实际氯化钠质量 = D*c，c 为实测收到基氯化钠质量分数。海水未直接称量时 D = 各独立计量交付 V 乘对应实测密度 rho 后求和；匹配每批温度盐度组成，不默认密度盐度氯化钠比例。总溶解盐盐度不是氯化钠化验。各情形均以 D 为分母，干有效当量仅作补充限定。按一致期间基准核对水及钠氯或实测离子平衡、降水实测盐池蒸发渗漏、每种共生盐苦卤水分拒收库存变化。内部循环卤水抵消一次。单数据集不将固体盐溶液海水相加为 D。 |  |
| validate_coverage | handoff | 核对每项适用交换、供应方或环境介质及最终废物去向；标识跳过检查、未解决身份、缺失测量及上游缺口。有错误或未评估必需覆盖不得标为完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按一种声明盐氯化钠溶液或海水状态供应1 kg净验收收到基产品；溶液海水 kg 不是干盐 kg |
| excluded_use | 氯烧碱纯碱其他化学转化；脱盐淡水；以其他分离矿物盐为参考产品；配方食品药品培养光学氯化钠制品下游使用纯运输服务 |
| required_metadata | 场址年份；一种产品状态选定出口；实际岩盐溶采日晒机械蒸发精制海水供应路线；原产地地质或海洋取水坐标季节；验收净质量库存退货；盐游离水干基氯化钠化验；溶液氯化钠质量分数；海水盐度方法离子组成，不能将盐度等同纯氯化钠；体积换算须实测温度密度；品级粒径；每种实际添加剂及含量；散装袋装罐装管道；上游供应分配；纳入运输；盐池气候实测水离子平衡；废物去向排放介质；可归属寿命开发关闭。代表 UUID 仅相容工厂≥99.5%氯化钠产品质量流，不能覆盖所有盐卤水海水 |
| required_quality_disclosure | 身份及测量缺口；边界覆盖；不确定性；分配；时间及地域代表性 |
| update_trigger | 产品、路线、产率、供应、废物去向、场址或代表期间变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| bgs-salt-2006 | official_guidance | BGS, Highley, Bloodworth and Bate, Mineral Planning Factsheet: Salt, January 2006, original pp.6–7. https://nora.nerc.ac.uk/id/eprint/534431/1/mpf_salt.pdf | 定性岩盐溶采、卤水提纯及工厂运输状态，历史英国化验产率资源回收废物总量及零废物描述不作通用默认值。 |
| usgs-salt-2018 | official_guidance | USGS, Wallace P. Bolen, 2018 Minerals Yearbook: Salt, June2023 advance release, original PDF p.2 / printed63.1. https://pubs.usgs.gov/myb/vol1/2018/myb1-2018-salt.pdf | 实际岩盐溶采卤水日晒真空敞锅路线及日晒气候季节地域；USGS 无水盐卤水统计不是收到基溶液质量，不采用历史能力强度。 |
| wco-salt-2022 | official_guidance | WCO HS Nomenclature2022 Chapter25, original PDF p.1 heading2501 and Notes1–2. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0525_2022e.pdf?la=en | 盐纯氯化钠水溶液抗结块助流变体及海水产品状态范围，不建立新 HS 映射或提供生产数量。 |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于分类范围，不提供过程数量。 |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | 多功能过程处理层级；不宣称完全符合 PEF。 |
