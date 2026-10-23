---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.bagasse-particleboard-uf
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 未饰面脲醛胶合蔗渣刨花板

## 1. 范围与适用性

本 PCR 覆盖固定产品路线：以甘蔗渣为唯一木质纤维配料，使用单独供应的脲醛树脂、现场配制的硫酸铵硬化剂及石蜡水性乳液，经热压形成未饰面平板，修边和调湿后厂门交付。采用去髓和机械粒径分级时记录该工序。覆盖未预处理配料；热水萃取、化学预处理、酚醛/三聚氰胺脲醛/聚合二苯基甲烷二异氰酸酯/聚氨酯胶合、无胶蒸汽喷射、混木、亚麻配料、竹配料及木纤维面层均需另行适用性审查。公用工程为现场电力，以及实际采用时的天然气/蔗渣燃烧；外购热量不在本路线内。产品身份不是原料选择器。

路线证据为 Brito 等（2021）实验的未处理组，是实验室研究而非工业区域平均。其试板未满足所引用的 P2 要求：工艺观察不能认证销售板、指定配方或确立现代排放限值。数据集须另有目标等级、强度/胶合/耐水及甲醛测试证据。FPL-GTR-80（1994 年 7 月）仅支持历史路线区分；其中摘要不等于已取得原实验。木质刨花板（CPC 31431）与竹胶合/单板板材（31450）的配料及结构不同。仅建议对 31433 建立 narrower 映射。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.bagasse-particleboard-uf |
| classification_refs | CPC 3.0 31433; narrower |
| covered_products | 未饰面纯蔗渣脲醛胶合平板刨花板 |
| excluded_products | 木质刨花板；亚麻/竹刨花板；竹单板/条材胶合板；木面层和混合配料板；中密度纤维板；无胶与其他胶合路线；饰面板 |
| representative_product | 一种声明等级和厚度、现场配方已核实的蔗渣板 |
| production_route | 接收/储存 → 去髓/分级 → 干燥 → 脲醛拌胶 → 铺装/热压 → 冷却/调湿 → 修边/砂光 → 包装 |
| market_state | 厂门验收未饰面板，净板数量排除包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为声明的非结构室内用途提供未饰面板基材 |
| How much | 1 m3 验收净板体积 |
| How well | 声明厚度、实测含水率下密度、粒径分级、脲醛配方及已核验等级；不推定 P2 合格 |
| How long or cycle | 一次厂门交付；不主张使用寿命 |
| reference_flow_link | finished_board |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 纤维板刨花板 `58b62091-9855-4631-9076-823e8ba59238` |
| 参考流属性 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` |
| 参考单位组 | 体积单位 `93a60a57-a3c8-12da-a746-0800200c9a66` |
| 参考单位 | m3 |
| 必需限定信息 | 甘蔗物种/产地及榨汁来源；唯一蔗渣配料；去髓与粒径分布；接收/压制/厂门含水率及湿干基约定；脲醛固含率/配方/游离甲醛；硬化剂和蜡配方；尺寸和密度；已核验销售等级/测试版本；无板材面层；公用工程交付/热工路线；供方经济地位/分配；参考状态/日期；净板排除包装 |

Tiangong 广义参考描述木材或其他木质纤维颗粒施胶压制，本 PCR 限定其纯蔗渣刨花板子集，不采用另述的木纤维面层变体。UUID 仅确立实物身份。供应背景须独立匹配声明的蔗渣路线、状态和体积基准。缺少限定信息则前景数据包不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_volume | 参考产品 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明厂门含水率下修边后的净实板体积，不是堆垛/散装体积。cp_output 按各验收等级测定长 × 宽 × 厚，排除空隙、废板及包装。 |
| moisture_basis | bagasse_input; bagasse_fuel; raw_fines; trim | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 通过明确方法记录湿基水分质量分数 w 与干基比 u。干物质 = 湿质量 × (1 − w)；u = w/(1 − w)。不得将文献含水率或密度套用于现场批次。 |
| gas_volume | gas | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 以有记录的组成/压缩因子将仪表气体换算至供方参考温压和湿干基。背景立方米定义不明则禁止定量链接。 |
| electricity_energy | electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 已核验电力属性使用 MJ；1 kWh = 3.6 MJ。这是电能而非燃烧供热默认值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际制糖/乙醇供方榨汁分离的蔗渣，按实测含水率与经济地位交付；供应化学品及公用工程 |
| starting_condition_role | 前景接收边界，不是自动上游截断 |
| product_classification_scope | CPC 3.0 31433; narrower |
| recursive_input_rule | 同类别外购板保留其链接上游数据集；内部返工保留实物账。不无限展开，也不抹去上游负担。 |
| upstream_dataset_requirement | 已核验蔗渣供应反映甘蔗生产/榨汁及实际分配或有依据的废物截断；运输、树脂、硬化剂、乳液、水、电力和燃料须匹配供给基准 |
| disclosure | 供方地域/年份、竞争用途与经济地位；分配理由；全部阶段能源/物料/排放边界及排除项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_upstream | bagasse_input; bagasse_fuel | 不得默认蔗渣上游负担为零。确定售价/收入、合同地位、有用燃料或其他需求及供方工序目的。有价值共产品须采用供方分配模型；真实弃置废物可有依据地截断，但仍计收集/制备/运输。在归属型敏感性分析披露替代锅炉燃料，不自动赋予替代信用。 | epa-bagasse-combustion-1996 |
| boundary_stages | manufacturing | 纳入储存损失、颗粒制备、实际干燥、全部配方组分、热压、冷却/调湿、修边/砂光、包装、排放治理与废水/残余处理。识别具体排放设备。不得用木板区域平均替代现场蔗渣参数。 | brito-bagasse-2021; usda-nonwood-review-1994 |
| boundary_utilities | manufacturing | 现场制热属前景。天然气与蔗渣燃烧分别计量；锅炉类型/治理须匹配证据。内部蒸汽按供回焓与冷凝水平衡计量，不作为第二次燃料采购，也不用未核验的 MJ 蒸汽 UUID 表示。外购热及现场燃烧固化脲醛板在路线专项审核前排除。 | epa-bagasse-combustion-1996; epa-gas-combustion-2026 |
| boundary_extension | manufacturing | 新增实测组分、耗材、包装或污染物须另列具体原子交换并核验当前身份。须证明不存在；空 UUID 和缺失测量均不等于零。 | brito-bagasse-2021 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| manufacturing | 蔗渣板制造、调湿与包装 | required | 所覆盖固定配方/路线 | 具有阶段账的一个聚合实物前景单元 | finished_board |

接收/储存 → 去髓/分级 → 干燥 → 拌胶/铺装 → 热压 → 调湿 → 修边/砂光 → 包装。条件性现场锅炉向干燥/压制供应实测内部热量。cp_stage 保留细分：转移两端数量一致，并记录实际含水率/状态与阶段编号。修边至包装的板材为同一物料，属内部转移；仅 finished_board 为参考产品输出。实物物料/水/碳平衡先于分配。

### 过程：蔗渣板制造（`manufacturing`）

#### 输入

##### 产品流

###### 甘蔗渣 (`bagasse_input`)

仅计板材配料用榨汁后甘蔗渣；来料批次称重并记录含水率与来源。单独购买的锅炉燃料不得混入；记录供方分配和竞争燃料用途。

- 选定流: 甘蔗渣 `f13cc16c-a598-48a2-b226-fdd991eac633`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_inputs；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_inputs`
- 来源: `brito-bagasse-2021`

###### 脲醛树脂 (`uf_resin`)

按到货状态计购买脲醛树脂，不虚构干树脂当量。记录固含率、游离甲醛、供方配方及匹配背景质量基准。所含水在实物水平衡单列，不重复计采购。

- 选定流: 脲醛树脂 `23e41b7b-0991-4cf7-8625-7a30d23bbb27`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_recipe；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_recipe`
- 来源: `brito-bagasse-2021`

###### 硫酸铵 (`hardener`)

单独购入并现场溶解的结晶硫酸铵。称量化合物质量而非氮含量；溶解用水归入用水输入。不得替换成氯化铵。

- 选定流: 硫酸铵 `7f128b59-9df7-4b5d-ad0f-00103b916cf7`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_recipe；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_recipe`
- 来源: `brito-bagasse-2021`

###### 石蜡水性乳液 (`wax`)

采购石蜡水性乳液，记录配方、固含率和水。UUID 未解决：纯石蜡及废塑料回收石蜡不代表该交换。不得将乳液组分重复列为外部输入。

- 选定流: 石蜡水性乳液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_recipe；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_recipe`
- 来源: `brito-bagasse-2021`

###### 自来水 (`water`)

供应的处理自来水用于现场硬化剂溶解、树脂稀释、清洁与锅炉补水；各阶段分别计量。采用实测水质量或计量体积配合实测温度相关密度。内部回用不作为新输入。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_water；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源: `brito-bagasse-2021`

###### 交流电 (`electricity`)

厂区交付表处的 1–35 千伏电网消费组合。分阶段计量筛分、干燥、拌胶、压制、修边和治理；现场变压损失只计一次。其他交付电压需要另列已核验原子行。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 每参考流采集交换量；cp_energy；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: `brito-bagasse-2021`

###### 气态天然气 (`gas`)

仅在现场燃烧管输气态天然气时纳入。参考属性为体积而非质量。核对仪表温压、湿干组成、压缩因子及供方/背景立方米约定；体积约定未解决则该链接不完整。数据库次级质量系数不是密度。

- 选定流: 气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则: 每参考流采集交换量；cp_energy；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: `epa-gas-combustion-2026`

###### 甘蔗渣 (`bagasse_fuel`)

仅在现场锅炉燃烧单独接收的甘蔗渣时纳入；入炉质量、含水率、热值基准和供方负担独立于配料测定。内部未施胶残余燃烧列实物转移账，不再计一次采购。

- 选定流: 甘蔗渣 `f13cc16c-a598-48a2-b226-fdd991eac633`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_energy；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: `epa-bagasse-combustion-1996`

###### 低密度聚乙烯薄膜（PE-LD） (`film`)

仅在成品随附低密度聚乙烯包装膜时纳入；包装质量不计入参考净板体积。膜等级及处置独立于其他包装组件记录。

- 选定流: 低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_inputs；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_inputs`
- 来源: `brito-bagasse-2021`

#### 输出

##### 产品流

###### 纤维板刨花板 (`finished_board`)

厂门处验收、修边、调湿、未饰面的纯蔗渣脲醛胶合刨花板；制备、压制、整饰和包装均属同一前景单元。数据库广义刨花板身份由本 PCR 限定；不隐含木纤维面层。

- 选定流: 纤维板刨花板 `58b62091-9855-4631-9076-823e8ba59238`
- 流属性/单位: 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则: 1 m3
- 数值来源模式: `fixed_value`
- 适用范围: `product_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `identity_reference`
- 采集协议: `cp_output`
- 来源: `brito-bagasse-2021`

###### 作为燃料出售的未施胶蔗渣髓部 (`pith_coproduct`)

仅在去髓产物被出售或有意供应为有用燃料时纳入。称量实际外运质量与含水率；不自动给出替代燃料信用。UUID 未解决。相同物料不得再列作弃置细料。

- 选定流: 作为燃料出售的未施胶蔗渣髓部
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_residues；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_residues`
- 来源: `brito-bagasse-2021`

##### 废物流

###### 弃置的未施胶蔗渣细料 (`raw_fines`)

原料制备细料离场弃置，须记录实物含水率与去向。内部回用的捕集粉尘不作为外运废物。出售燃料归 pith_coproduct；内部锅炉燃料归转移账。

- 选定流: 弃置的未施胶蔗渣细料
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_residues；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_residues`
- 来源: `brito-bagasse-2021`

###### 脲醛胶合蔗渣板修边废料 (`trim`)

外送处理的含固化树脂板材边角料与废板，与原始蔗渣区分。记录树脂含量和处理方式；本路线不纳入现场燃烧固化板，需另有燃烧证据。

- 选定流: 脲醛胶合蔗渣板修边废料
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_residues；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_residues`
- 来源: `brito-bagasse-2021`

###### 蔗渣锅炉底灰 (`ash_bottom`)

仅在蔗渣燃烧时纳入，独立称量底灰，排除另行收集的飞灰。灰含水率、浸出性和去向由现场记录确定；不以煤灰或冶金残余 UUID 代理。

- 选定流: 蔗渣锅炉底灰
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_residues；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_residues`
- 来源: `epa-bagasse-combustion-1996`

###### 未处理的脲醛拌胶与清洁废水 (`wastewater`)

跨边界送外部处理的废水，记录体积、密度、化学需氧量及甲醛浓度。它是废物流，不等于直接排河；直接排放需要实际基本物种行及已核验受纳介质。

- 选定流: 未处理的脲醛拌胶与清洁废水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_water；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源: `brito-bagasse-2021`

###### 弃置的未施胶蔗渣髓部 (`pith_waste`)

仅在去髓产生的髓部离场弃置时纳入；记录实际湿质量及含水率。同一批次与出售髓部或内部锅炉转移互斥。

- 选定流: 弃置的未施胶蔗渣髓部
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_residues；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_residues`
- 来源: `brito-bagasse-2021`

###### 脲醛胶合蔗渣板砂光粉尘 (`cured_dust`)

固化板砂光捕集并外送处理的含树脂细粉尘；与实板边角料、原料细料及未捕集基本颗粒物区分。

- 选定流: 脲醛胶合蔗渣板砂光粉尘
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_residues；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_residues`
- 来源: `brito-bagasse-2021`

###### 蔗渣锅炉飞灰 (`ash_fly`)

仅在捕集蔗渣锅炉飞灰外送处理时纳入；含水率与去向同底灰及烟囱颗粒物分别记录。

- 选定流: 蔗渣锅炉飞灰
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_residues；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_residues`
- 来源: `epa-bagasse-combustion-1996`

##### 基本流

###### 颗粒物 (PM2.5) (`pm25`)

逸出捕集设施至室外空气的不重叠 PM2.5 质量；分别标记原料制备、干燥、压制、修边和锅炉阶段。

- 选定流: 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_air；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `epa-bagasse-combustion-1996`

###### 颗粒物 (PM2.5 - PM10) (`pmcoarse`)

仅计大于 2.5 至 10 微米颗粒。由兼容的累计 PM10 与 PM2.5 配对观测差值得到；不得再叠加累计 PM10。

- 选定流: 颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_air；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `epa-bagasse-combustion-1996`

###### 颗粒物（> PM10） (`pmover10`)

仅计大于 10 微米颗粒。用兼容的总可过滤颗粒物减累计 PM10；缺少粒径分布是数据缺口而非零。须核对可凝结颗粒物范围。

- 选定流: 颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_air；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `epa-bagasse-combustion-1996`

###### 甲醛 (`formaldehyde`)

脲醛拌胶、热压、冷却与调湿至室外空气的甲醛物种质量，锅炉贡献另行标记。舱室含量检测不是烟囱质量因子。

- 选定流: 甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_air；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `brito-bagasse-2021`

###### 甲醇 (`methanol`)

按排放阶段测得的甲醇物种质量；不得用总挥发性有机物、总有机碳或含甲醇产品供给代替。

- 选定流: 甲醇 `fe0acd60-3ddc-11dd-a935-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_air；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `epa-gas-combustion-2026`

###### 二氧化碳（生物源） (`co2bio`)

实测蔗渣燃料氧化及已核实储存降解产生的生物源二氧化碳。独立于温室气体表征口径保留 LCI；来料处不得重复记上游碳吸收。

- 选定流: 二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_air；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `epa-bagasse-combustion-1996`

###### 二氧化碳（化石源） (`co2fossil`)

来自天然气及已核实化石碳氧化的化石源二氧化碳，排除已在购买背景系统计算的燃料/能源燃烧。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_air；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `epa-gas-combustion-2026`

###### 甲烷 (生物源) (`ch4bio`)

来自蔗渣不完全燃烧或有证据的厌氧储存的生物源甲烷；须证明来源与物理阶段。

- 选定流: 甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_air；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `epa-bagasse-combustion-1996`

###### 甲烷 (化石源) (`ch4fossil`)

天然气不完全燃烧及计量/估算的现场泄漏产生的化石源甲烷；不得重复计供方上游泄漏。

- 选定流: 甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_air；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `epa-gas-combustion-2026`

###### 一氧化碳（生物源） (`co_bio`)

来自蔗渣燃烧的生物源一氧化碳；不得与化石源一氧化碳合并。

- 选定流: 一氧化碳（生物源） `8a313a02-e251-11e6-bf01-fe55135034f3`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_air；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `epa-bagasse-combustion-1996`

###### 一氧化碳（化石源） (`co_fossil`)

来自天然气燃烧的化石源一氧化碳，与生物源一氧化碳分列。

- 选定流: 一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_air；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `epa-gas-combustion-2026`

###### 一氧化氮 (`nitric_oxide`)

仅计一氧化氮物种质量。以二氧化氮当量报告的总氮氧化物不能确立实际一氧化氮质量；需要实测物种分配，否则保留数据未决。

- 选定流: 一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_air；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `epa-gas-combustion-2026`

###### 二氧化氮 (`no2`)

仅计二氧化氮物种质量；不得在填一氧化氮的同时将全部以二氧化氮计的氮氧化物填入本行。

- 选定流: 二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_air；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `epa-gas-combustion-2026`

###### 一氧化二氮 (`n2o`)

由运行和启动锅炉记录获得的一氧化二氮物种质量，与一氧化氮和二氧化氮区分。

- 选定流: 一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_air；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `epa-gas-combustion-2026`

###### 二氧化硫 (`so2`)

二氧化硫物种质量，记录燃料硫及实际治理条件；不得用总硫氧化物当作精确二氧化硫。

- 选定流: 二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_air；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `epa-bagasse-combustion-1996`

###### 水蒸气 (`water_vapour`)

释放至室外的水蒸气，按干燥、压制、调湿和锅炉标记。将水分蒸发与燃烧生成水分别记录，不虚构蒸汽采购。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 每参考流采集交换量；cp_water；条件性交换不存在须有证据。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源: `brito-bagasse-2021`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_supplier | bagasse_input; bagasse_fuel | 先调查细分或系统扩展。本单一板材归属型结果保留声明范围，不赋予未证实替代信用。制糖/乙醇榨汁仍需分配时，先采用可论证的物理因果关系，再考虑有记录的经济分配；说明排除其他选项的理由并保持与供给研究一致。记录全部共产品数量、价格、时间窗及理由。不得从“剩余物”或碳中性推导零负担。 | ec-ef-allocation-2021; epa-bagasse-combustion-1996 |
| allocation_foreground | manufacturing | 区分有用外售髓部燃料、弃置原料细料及含固化树脂废物。尽可能细分仪表；其余共享环境负荷采用有记录的因果分配，否则按净交付数量 × 一致价格计算经济份额。对残余地位/价格变化进行敏感性分析。 | ec-ef-allocation-2021; epa-bagasse-combustion-1996 |
| allocation_physical | manufacturing | 未分配实物过程图与物料/水/碳平衡同分配后环境负荷账并列保留。不得将共产品实物输出或内部转移质量乘以分配份额；不得给内部回用信用或重复负担。 | brito-bagasse-2021 |

## 8. 前景数据采集、计算与质量规则

尽可能采集一个完整代表生产年，覆盖季节性甘蔗供应、启停及不合格生产。较短完整生产周期仅在披露日期、产量覆盖、季节限制及不确定性后允许。本文不指定实验室观察的剂量、温度、周期、密度、含水率、锅炉因子或木板区域用量。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | manufacturing | finished_board | 实测原始记录 | 等级；批次；验收数量；长；宽；厚；含水率；密度；检测；包装皮重 | 调湿后经校准的尺寸和质量测量；批次验收及检测记录。计算验收净板体积；各等级及废板分别统计。 | m3 | 每验收批次 | 相同完整声明时段 | 同一场址及声明配方/等级 | 每参考流 | 校准；可追溯；库存与验收体积匹配；不确定性 |
| cp_inputs | manufacturing | bagasse_input; film | 实测原始记录 | 接收及库存量；供方/地域/年份；含水率；榨汁路线；运输方式/距离/载荷；合同/价值；膜等级/质量 | 经校准称重并核对发票、收货、库存和供方清单。每种供应物料的背景或另行核验的运输交换须计入进厂运输，只计一次。 | kg | 每次收货及库存结算 | 相同完整声明时段 | 同一场址及声明配方/等级 | 每参考流 | 校准；可追溯；库存与验收体积匹配；不确定性 |
| cp_recipe | manufacturing | uf_resin; hardener; wax | 实测原始记录 | 到货与投料质量；固含率；配方；纯度；游离甲醛；水分；损失；供方参考基准 | 批次投料记录、校准秤、配方/安全数据表与供方原始记录。分析核验固含率；核对到货/投料/库存/损失质量。新增每项组分单列。 | kg | 每批次 | 相同完整声明时段 | 同一场址及声明配方/等级 | 每参考流 | 校准；可追溯；库存与验收体积匹配；不确定性 |
| cp_stage | manufacturing | internal transfers | 实测原始记录 | 阶段编号；链接来源/去向；湿干质量；水分方法；水；碳分数；废品；储存期；粒径等级；压温/压强/时间 | 在接收、去髓、干燥进出口、拌胶、压制出口、调湿和修边称重取样。内部回用/锅炉转移两端同量记录。原料残余与含树脂残余分别管理。 | kg | 每阶段/批次及期末库存 | 相同完整声明时段 | 同一场址及声明配方/等级 | 每参考流 | 校准；可追溯；库存与验收体积匹配；不确定性 |
| cp_energy | manufacturing | electricity; gas; bagasse_fuel | 实测原始记录 | 交付电压；阶段仪表；千瓦时；气体立方米/温压/组成/压缩因子；燃料湿质量/水分/低位或高位热值；锅炉类型/负荷/治理；蒸汽供回质量、温压/焓；损失 | 核对全厂/阶段仪表、账单与燃料库存；分别测定干燥和压制周期。蒸汽热量为质量 × 供回焓差并核对冷凝水/排污/损失，不等于燃料能或蒸汽总焓。 | MJ; m3; kg | 连续仪表及每燃料批次 | 相同完整声明时段 | 同一场址及声明配方/等级 | 每参考流 | 校准；可追溯；库存与验收体积匹配；不确定性 |
| cp_residues | manufacturing | pith_coproduct; pith_waste; raw_fines; trim; cured_dust; ash_bottom; ash_fly | 实测原始记录 | 阶段；实际质量/水分；树脂含量；原料/固化状态；内部回用；外运去向；处理；合同/收入 | 校准料箱/秤及外运/处理凭据。识别底灰和飞灰，仅汇总兼容灰记录。出售髓部、弃置细料及现场转移分别记录。 | kg | 每次出料/外运 | 相同完整声明时段 | 同一场址及声明配方/等级 | 每参考流 | 校准；可追溯；库存与验收体积匹配；不确定性 |
| cp_water | manufacturing | water; wastewater; water_vapour | 实测原始记录 | 阶段供水；乳液/树脂水；蔗渣水分；产品水；废水体积/密度/组成；蒸发；锅炉燃烧水；库存；回用 | 计量外来水与废水，取样测定密度/浓度；扣除实测保留水和库存后完成阶段水平衡。仅在不确定性有界时推算蒸发；披露不能解释的残差，不强制闭合。 | kg | 连续仪表；阶段/批次取样 | 相同完整声明时段 | 同一场址及声明配方/等级 | 每参考流 | 校准；可追溯；库存与验收体积匹配；不确定性 |
| cp_air | manufacturing | elementary emissions | 实测原始记录 | 物理阶段/来源；物种；生物/化石来源；室外子介质；排气流量；温压；湿干基；浓度；测试时长；产量；治理；启停；颗粒粒径分数 | 采用治理后代表性源测试与活动记录并计无组织排放。按阶段/物种汇总浓度 × 兼容排气体积。记录不确定性及物种分配；舱室等级和总挥发性有机物/氮氧化物不能替代物种。仅在测定其他碳输出/库存后才可用碳平衡估算按来源区分的二氧化碳。 | kg | 代表运行模式及连续记录 | 相同完整声明时段 | 同一场址及声明配方/等级 | 每参考流 | 校准；可追溯；库存与验收体积匹配；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| volume_normalization | 所有清单行 | 各阶段标记交换的归一化量 = 归属时段数量 / Q_vol；Q_vol = 同时段同等级验收净板尺寸换算至 m3 后总和。环境分配前保留实测阶段总量。参考输出 = 1 m3。 | cp_output; cp_inputs; cp_recipe; cp_energy; cp_residues; cp_water; cp_air | 每参考流交换量 | brito-bagasse-2021 |
| physical_balance | manufacturing | 负荷分配前分别核对完整物料质量及元素碳：期初存量+投入=期末存量+输出+报告残差，采用实际组成及全部相关边界穿越。化学反应不生成或消耗总元素碳。另对分子H2O和反应性木材/树脂组分采用期初存量+投入+有证据生成=期末存量+输出+有证据消耗+报告残差。仅量化实际固化/热变化/氧化路径及程度；相变属于转移而非反应。反应项为零须有无该反应的证据；程度未知保持未决，不假定完全固化、通用收率或平衡用排放。分开留存胶/添加剂、木碳和化石碳。内部转移仅在端点匹配时抵消；已包含反应产物的实测输出只计一次。保留不确定性，实物输出不得乘负荷份额。锅炉燃料、燃烧空气/氧气及燃烧产物另有工序账；燃料氧化不是无法解释的配料损失。 | cp_stage; cp_recipe; cp_water; cp_residues; cp_air | 未分配阶段及全厂平衡与残差不确定性 | brito-bagasse-2021 |
| burden_allocation | manufacturing | 板材环境负荷 = 直接归属负荷 + 有依据份额 × 共享负荷。需要时的经济份额 = 板材收入 / 以匹配净数量/价格计算的全部有用产出收入；仅经济有用髓部纳入。分配后负荷除以 Q_vol，实物外运量保持不变。 | cp_inputs; cp_output; cp_residues; supplier allocation | 每参考流分配负荷及敏感性 | ec-ef-allocation-2021 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_route | manufacturing | 相同唯一蔗渣配料、胶黏剂/硬化剂/蜡路线及声明销售等级；检测失败保持可见。 | cp_recipe; cp_output |
| quality_period | manufacturing | 对齐生产、配方、仪表、排放与库存时段；区分等级与季节；披露缺失工况。 | cp_stage; cp_energy; cp_air |
| quality_background | 全部供应流 | UUID 身份检索成功不等于完整背景匹配。链接前确认供方地域/时间、路线、水分/浓度、数量及运输边界。 | cp_inputs; cp_recipe; cp_energy |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_identity | finished_board | 要求唯一 1 m3 净板参考输出及全部限定信息；拒绝木材/木纤维面层、亚麻、竹材及混合配料替换，或从实验室研究推定等级合格。 | brito-bagasse-2021 |
| validate_atomic | all inventory rows | 每行是具有已核验属性/单位和物理阶段的一个原子流。UUID 缺口须明确审查；邻近产品、修正流及错误介质不可接受。现场新增交换必须单列。 | brito-bagasse-2021 |
| validate_balance | manufacturing | 要求内部转移两端匹配，以及有限的未分配干物质/水/碳平衡与不确定性，另有分配负荷账。内部残余不得同时作为新增燃料采购和回用转移。 | brito-bagasse-2021 |
| validate_emissions | elementary emissions | 仅在更细室外位置未表征时使用室外空气未特指流并披露限制；已知更细子介质须核验替换。PM2.5、2.5–10 与 >10 为互斥区间；不得再次叠加嵌套 PM10/总悬浮颗粒物。要求实际一氧化氮/二氧化氮物种分配、物种质量及碳来源。LCI 保留生物源二氧化碳；缺少测量或因子保持缺口。 | epa-bagasse-combustion-1996; epa-gas-combustion-2026 |
| validate_supply | gas; uf_resin; bagasse_input; wax | 气体参考立方米、树脂/乳液浓度或蔗渣含水率/上游经济地位未知时阻止定量使用。不得主张零负担、泛用密度、从 MJ 标签推断净热量，或从报告当量推断物种排放。 | epa-bagasse-combustion-1996; epa-gas-combustion-2026 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 适用性审核后用于室内产品模型输入；候选方法不等于数据集批准 |
| allowed_use | 声明纯蔗渣脲醛板，相同厂门状态及已核验数量/等级 |
| excluded_use | 全部 31433 产品作为一个身份；木材/竹胶合板代理；自动寿命/末端信用；由实验室检测推导合规主张 |
| required_metadata | 场址/时段/等级/路线；全部参考限定信息；供方/地位/分配；已核验背景和运输；未分配原始阶段账；归一化体积 |
| required_quality_disclosure | 覆盖与排除；缺失 UUID/数量；测量不确定性；室外子介质限制；分配敏感性；科学和翻译审阅状态 |
| update_trigger | 原料来源/经济地位、胶黏剂/配方、预处理、燃料/公用工程/治理、规格或时间覆盖变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `ec-ef-allocation-2021` | official_guidance | European Commission，C(2021) 9332 final，附件 I §4.5，印刷页 63–64。[官方附件原件](https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf)。 | 仅支持一般多功能性层级及相对市场价值分配基准；不主张全面符合 PEF，不采用部门因子或循环足迹默认值。 |
| `brito-bagasse-2021` | literature | Brito、Bortoletto Júnior 和 Surdi（2021），Properties of particleboards made from sugarcane bagasse particles，Rev. Bras. Cienc. Agrar. 16(1)，e8783。DOI:10.5039/agraria.v16i1a8783。[出版方原件](https://www.agraria.pro.br/ojs32/index.php/RBCA/article/download/v16i1a8783/158/715)，第 1–3、6 页。 | 纯蔗渣实验室原路线，包含未处理和热水处理组；脲醛/硫酸铵/石蜡、干燥、压制及实测调湿。保留 P2 失败结论；不采用剂量、水分、密度或压制默认值。 |
| `usda-nonwood-review-1994` | official_guidance | Youngquist 等，1994 年 7 月，Literature review on use of nonwood plant fibers for building materials and panels，FPL-GTR-80，印刷页 7，条目 31–34。[Forest Service 报告原件](https://research.fs.usda.gov/download/treesearch/9668.pdf)。 | 仅支持历史文献综述区分及去髓/干燥/施胶/热压工序线索。未取得被摘要的 Hesch 试验原件；不采用工业数值或标准。 |
| `epa-bagasse-combustion-1996` | official_guidance | US EPA，AP-42 1.8 Bagasse Combustion In Sugar Mills，1996 年 10 月，第 1.8–1–1.8–4 页，§§1.8.1–1.8.4 及表 1.8–1 注释。[原件](https://gaftp.epa.gov/ap42/ch01/s08/final/c01s08_oct1996.pdf)。 | 实际有用燃料地位、锅炉/燃料/治理及污染物区分。范围为美国糖厂；燃料/蒸汽因子基准不移用于板材生产。 |
| `epa-gas-combustion-2026` | official_guidance | US EPA，AP-42 1.4 Natural Gas Combustion，所取得文件页眉 10/26，第 1.4–1–1.4–3 页，§§1.4.1–1.4.3 及因子免责声明。[原件](https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf)。 | 天然气锅炉排放物种及运行/治理依赖性；优先源测试。不采用因子、热值默认值或法律合规阈值。 |
