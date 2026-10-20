---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.fertilizers-containing-two-nutrients-nitrogen-and-potassium-other-than-potassium-nitrate
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 硫酸铵与氯化钾干式压实造粒氮钾肥

## 1. 范围与适用性

本方法覆盖散装固态氮钾复合颗粒：将外购硫酸铵与氯化钾颗粒干混，经辊压压实/压团、破碎、整粒或抛圆、干筛分、细粉内部回流、干式除尘、最终验收、储存及散装交付。每粒成品含两种原料组分；仅混合不同成品颗粒的物理干混不在本方法内。保留并报告硫酸铵中的硫；“氮钾”表示N/P/K分组，不表示没有次要养分硫。路线区别依据BREF第7.2.1节；东丽JP2019043797A说明硫酸铵/氯化钾压缩、整粒和回用路线，设备制造者技术原文独立说明干式单元操作。任何案例均不规定未来工厂通用的配方、粒径、压力、转速、密度、强度、水分、收率、能耗或排放量。

排除硝酸钾、主动添加磷或农药、有机配方、其他原料化学体系、液体氮钾肥、湿式或黏结剂造粒、工艺主动增湿、热干燥、化学合成及厂内涂层。原料随附水分和调理组分属于整份供货并须表征；不兼容或实际反应须复审。外购原料保留实际上游路线及负荷。实际辅助受控清洗和液压回路维护须纳入。设备图含可选增湿及涂层，该部分不属于所选干式无涂层路线，不代表所有工厂均不存在；其宽泛低污染说法也不能证明零排放。任何实际新增燃料、试剂、包装、维护物料、运输或释放须在数据集完成前补齐独立原子行、方法和证据。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.fertilizers-containing-two-nutrients-nitrogen-and-potassium-other-than-potassium-nitrate |
| classification_refs | CPC3.0 34647；建议narrower子集，映射须独立接受 |
| covered_products | 无黏结剂的硫酸铵/氯化钾干式辊压复合颗粒，无主动添加磷和农药；保留硫 |
| excluded_products | 硝酸钾、不同成品颗粒干混、湿式或黏结或涂层或液体路线及其他原料体系 |
| representative_product | 一个实际验收硫酸铵/氯化钾氮钾SKU，实测组成，不规定等级 |
| production_route | 干混→辊压压实→破碎整粒→筛分与细粉回流→验收储存散装装载 |
| market_state | 工厂门净散装肥料，包含实际保留水分及杂质，无交付包装袋 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 供应含氮钾的固态复合颗粒肥料，排除硝酸钾 |
| How much | 1 kg 验收合格净散装供货产品 |
| How well | 声明实际氮及钾/氧化钾当量含量、硫、水分、均匀性、粒度、硬度或磨耗、储存稳定性及约定验收要求 |
| How long or cycle | 完整制造储存期间直至工厂门释放，不声称田间响应或农艺寿命 |
| reference_flow_link | nk_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 含有两种营养素的肥料：氮和钾，硝酸钾除外 `1dfc674e-e405-47ee-8abd-b118ec240fa5` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 实际SKU及完整投料配方; 硫酸铵与氯化钾等级及供方上游路线; 整份供货质量及组分含量; 无主动添加磷、农药或硝酸钾; 氮形态及总氮; 钾与氧化钾报告口径及检测方法; 硫和氯; 水分及游离酸; 原料和成品粒度; 辊压、破碎、整粒及回流记录; 硬度、磨耗、均匀性及储存验收; 散装交付; 场址及期间; 最终门产量B; 原料、在制品及成品库存边界和结转负荷; 原生电力CN地区及电压与供方参考; 氯化钾和油体积约定; 水与空气测量; 废物去向; 分配及资本范围 |

构建实际数据包时须在元数据、过程说明或参考流备注保留全部限定信息。参考量是供货产品质量，不是折氮或折钾功能单位；不证明农艺等效。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_product | nk_product | Mass | kg | B为期间跨越最终释放门的唯一新完成合格散装净产量。用校准秤计毛重与皮重；排除已完成期初成品转售、内部回用次数、废弃不合格品及容器。每批最终合格只计一次，保留实际水分，不设假想干肥基准。 |
| period_pool | all inventory rows | Consistent native property | per 1 kg reference flow | 保留同SKU、状态和路线的完整原始生产池，含开停、失败与零产出批次、清洗、返工、原料和在制库存变动及结转负荷。先换算原始单位，再归属负荷，最后仅除一次正B。期间总B=0时只保留总量，不产生归一结果。 |
| feed_basis | feed_as; feed_kcl; nk_product | Mass | kg | 整份供货物料作为交换；氮、钾、氧化钾、硫、氯、水分和调理组分为实测子账。氧化钾是报告当量，不是实际氧化物试剂。保留元素与氧化物口径及有记录的摩尔换算，不重复计组分水或活性盐。 |
| provider_basis | feed_kcl; hydraulic_oil; electricity; cleaning_water | Native reference property | native unit | 物理身份与供方背景数量分开。Volume/m3须定义实体或堆积或液体基准、装填、温度、水分及实测兼容密度；原生次级属性比值不提供密度。电力须匹配CN、低于1kV、用户消费组合；其他供应须核实兼容链接。 |
| air_basis | pm25; pm2510; pm10plus; ammonia_air; water_vapour | Mass | kg | 用兼容浓度乘已积分气体体积，或对浓度乘气体流率按时间积分。已积分体积不得再乘时间。保留湿干、标况实况、温度、压力及检出限基准；总颗粒物与粒径区间不得重叠。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 接收门外购硫酸铵/氯化钾颗粒、实际液压油整份制剂及清洗水；计量交付电力 |
| starting_condition_role | 前景上游产品接口，不是从摇篮到工厂门的截断 |
| product_classification_scope | 仅排除硝酸钾的无黏结剂、无涂层硫酸铵/氯化钾干式复合颗粒子集 |
| recursive_input_rule | 外购同类别物料须有实测量、历史及兼容供方；内部混料、压块与细粉为两端等量转移，不二次采购或赋信用 |
| upstream_dataset_requirement | 链接实际原料制造、调理、公用工程、维护物料、入厂运输及外部废物处理；披露缺失供方，不抹去负荷 |
| disclosure | 场址期间、全阶段覆盖、库存及在制和负荷结转、资本及运输边界、排除项、采样、等级与供方基准 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_stages | compact | 纳入实际接收、原料准备、称量混合、强制供料、辊压液压、破碎、整粒、筛分、全部回流次数、除尘、储存、散装装载及最终释放。合并为一个前景单元，保留独立阶段记录。 | toray-nk-compaction-2019; sahut-compaction-1999 |
| boundary_actual | all inventory rows | 不建模主动添加黏结剂、水、涂层或热处理路线。实际辅助受控清洗与维护仍纳入交换。观察到新增交换或化学转化须有原件支持的原子扩展并复审；范围排除不得掩盖已运行阶段。 | eu-jrc-lvic-aaf-2007; toray-nk-compaction-2019 |
| boundary_capital | compact | 声明实际资本设备范围，排除时附理由及敏感性。纳入时保留实测资产量、材料、服务期间、能力及分配，区别于运行服务；不得虚设每千克产品的设备质量或默认寿命。原料身份不能证明已包含外部运输和处理。 | sahut-compaction-1999 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| compact | 接收、干混、压实、破碎整粒筛分、回流除尘、储存及散装交付 | required | 实际无黏结剂干式硫酸铵/氯化钾路线；条件辅助项按实情 | foreground | 1 千克验收合格净散装氮钾成品 |

实物流图：接收→原料准备混合→辊压→破碎整粒→筛分→验收储存散装交付。细粉、超粒径和实际返工在本单元内按实际去向回流，逐次独立计量；两端质量及既有负荷一致，不导出中间参考产品。

### 过程：干式氮钾压实与交付 (`compact`)

#### 输入

##### 产品流

###### 硫酸铵 (`feed_as`)

外购固态硫酸铵颗粒，不是过硫酸铵、水性浆料或折氮质量。计量含水分和杂质的整份供货固体，并记录实际氮硫含量、游离酸、粒度和供方制造路线。所选广义成品记录没有地区或合成路线限定；不得从另一硫酸铵记录推入此类限定，也不移植专利己内酰胺案例。

- 选定流：硫酸铵 `7f128b59-9df7-4b5d-ad0f-00103b916cf7`
- 流属性/单位：Mass / kg
- 数量规则：用cp_feed采集匹配完整期间实际归属量；仅在正B时报告每 1 kg 参考流。不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_feed
- 来源：toray-nk-compaction-2019; sahut-compaction-1999

###### 氯化钾 (`feed_kcl`)

外购肥料级氯化钾颗粒，CAS7447-40-7，包含供货调理组分和水分。实物钾氯平衡保留实测供货千克数。原生参考为Volume/m3；须独立实测并匹配供方体积、实体或堆积约定、装填、水分、温度及密度。供方体积未定义时背景链接不完整。英文备注指钾石盐或卤水制造，中文矿物词误译不改变一致的氯化钾名称、CAS和分类。记录没有具体地区、养分等级或密度。存在不兼容添加剂须复审范围。

- 选定流：氯化钾 `c0f36a80-f6a0-4926-9a92-9c80f5fcb662`
- 流属性/单位：Volume / m3
- 数量规则：用cp_feed采集匹配完整期间实际归属量；仅在正B时报告每 1 kg 参考流。不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_feed
- 来源：toray-nk-compaction-2019; sahut-compaction-1999

###### 交流电 (`electricity`)

该身份明确为CN、低于1 kV、电网平均消费组合、供应到用户。只用于符合条件的实际供电；其他地区、电压或发电路线须在数据集完成前核实对应流与供方。计量接收、实际磨料、混合、强制供料、辊压液压、破碎、整粒、筛分、回流输送、除尘风机及散装装载，并保留空转及开停电耗。原生属性为净热值、低位热值/MJ。电表kWh只按3.6 MJ/kWh换算一次，不虚设燃料效率。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value / MJ
- 数量规则：用cp_energy采集匹配完整期间实际归属量；仅在正B时报告每 1 kg 参考流。不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_energy
- 来源：toray-nk-compaction-2019; sahut-compaction-1999

###### 液压油 (`hydraulic_oil`)

按实际辊压液压回路条件纳入与石油基类别相容的外购液压油整份制剂。原生润滑剂分类位于含至少70%石油油品的制剂之下，而宽泛备注也提及合成基础油；须有实际供方组成证明符合该类别，不将本身份扩展至水乙二醇或合成酯液压液。记录油品等级、全部添加剂、实际换油补油、回路期初期末存量和损耗。原生参考Volume/m3，没有路线或地区限定；匹配供方温度和体积定义，需要质量时独立测量密度。次级系数不是实测密度。不再把基础油和添加剂重复列为采购投入。

- 选定流：液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位：Volume / m3
- 数量规则：用cp_maintenance采集匹配完整期间实际归属量；仅在正B时报告每 1 kg 参考流。不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_maintenance
- 来源：toray-nk-compaction-2019; sahut-compaction-1999

###### 自来水 (`cleaning_water`)

按实情纳入受控辅助清洗自来水，不是工艺主动增湿水或黏结用水。记录完整清洗事件，包括零产出时段；计量质量，或计量校准体积并独立测量兼容密度，同时记录废水去向。原生供货处理水没有地区限定。直接向环境排放时须在数据集完成前补齐处理、排放方法和各物种原子行。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass / kg
- 数量规则：用cp_water采集匹配完整期间实际归属量；仅在正B时报告每 1 kg 参考流。不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_water
- 来源：toray-nk-compaction-2019; sahut-compaction-1999

##### 基本流

###### 氮钾固体吸收的大气水蒸气 (`humidity_uptake`)

按实测情况纳入环境吸湿，不是外购水，也不是负水蒸气排放。用水分及空气测量独立确定吸收量，覆盖存量和温度；不以未解释质量差额倒推。检出的体积基准水资源记录未建立兼容质量交换，UUID保持未决。

- 选定流：氮钾固体吸收的大气水蒸气
- 流属性/单位：Mass / kg
- 数量规则：用cp_water采集匹配完整期间实际归属量；仅在正B时报告每 1 kg 参考流。不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_water
- 来源：toray-nk-compaction-2019; sahut-compaction-1999

#### 输出

##### 产品流

###### 含有两种营养素的肥料：氮和钾，硝酸钾除外 (`nk_product`)

仅最终验收合格的散装硫酸铵/氯化钾复合颗粒作为本参考输出。原生名称是广义工厂端制造氮钾肥，没有固定配方、CAS、地区或相反造粒路线限定。可选农药清单不表示必需配方；本方法排除添加农药。记录实际验收养分组成、水分、强度、粒度及路线。中间混料、压块和回用细粉均为compact内部转移，不列为第二个参考产品输出。

- 选定流：含有两种营养素的肥料：氮和钾，硝酸钾除外 `1dfc674e-e405-47ee-8abd-b118ec240fa5`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_product
- 来源：un-cpc-3-2025; toray-nk-compaction-2019

##### 废物流

###### 废弃硫酸铵与氯化钾氮钾颗粒 (`reject_nk`)

仅实际废弃的不合格颗粒跨越此废物边界。记录整份水分、氮钾硫氯组成及接收方。返工批次和内部细粉属于内部转移。作为肥料销售构成产品功能，须独立审查身份和分配，不能作为废物处置或自动替代产品信用。不得替换为氯化铵废物。

- 选定流：废弃硫酸铵与氯化钾氮钾颗粒
- 流属性/单位：Mass / kg
- 数量规则：用cp_waste采集匹配完整期间实际归属量；仅在正B时报告每 1 kg 参考流。不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：toray-nk-compaction-2019; sahut-compaction-1999

###### 粉尘 (`captured_dust`)

仅纳入单独收集并实际送出厂外管理的硫酸铵/氯化钾工艺粉尘。广义原生废粉尘身份没有特定材料处理或地区限定；须限定实际组成、水分、污染及接收方。回到compact的捕集粉尘为两端等量内部转移，不是外排废物或空气排放。原生清扫建议不作为监测频率或数量默认值。

- 选定流：粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位：Mass / kg
- 数量规则：用cp_waste采集匹配完整期间实际归属量；仅在正B时报告每 1 kg 参考流。不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：toray-nk-compaction-2019; sahut-compaction-1999

###### 废油 (`waste_oil`)

按实情纳入厂内设备维护产生的废液压润滑油，与原生“产生状态的厂内维护废润滑油/切削油”类别一致。本行限定实际废液压润滑油，保留添加剂、水分、污染及外部接收方；不是再生油产品，也不是合并废物集合。

- 选定流：废油 `2a68e97a-21fe-43f7-a86e-3e39b653e10a`
- 流属性/单位：Mass / kg
- 数量规则：用cp_maintenance采集匹配完整期间实际归属量；仅在正B时报告每 1 kg 参考流。不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_maintenance
- 来源：toray-nk-compaction-2019; sahut-compaction-1999

###### 收集的氮钾设备清洗废水 (`cleaning_effluent`)

按实情纳入单独收集并送指定外部废水接收方的水性清洗流。计量整份湿流，并分别测量溶解氮钾硫氯和悬浮物；组分子账不得重复为整份湿流。电解锰洗水或粪污候选均不兼容。未知处理或供方链接须披露，不能赋零负荷。

- 选定流：收集的氮钾设备清洗废水
- 流属性/单位：Mass / kg
- 数量规则：用cp_water采集匹配完整期间实际归属量；仅在正B时报告每 1 kg 参考流。不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_water
- 来源：toray-nk-compaction-2019; sahut-compaction-1999

##### 基本流

###### 颗粒物 (PM2.5) (`pm25`)

实际治理后排出的不大于2.5微米颗粒物及可归属逸散。 原生介质为向室外空气排放、子介质未特指；不是室内暴露、资源吸收或修正流。记录实际源、高度和位置，更具体的兼容流须核实后使用。完整期间排放量须实测，无默认释放量；粒径区间之外不再加总颗粒物。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：用cp_air采集匹配完整期间实际归属量；仅在正B时报告每 1 kg 参考流。不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：toray-nk-compaction-2019; sahut-compaction-1999

###### 颗粒物 (PM2.5 - PM10) (`pm2510`)

仅不重叠的2.5至10微米区间，不是总PM10。 原生介质为向室外空气排放、子介质未特指；不是室内暴露、资源吸收或修正流。记录实际源、高度和位置，更具体的兼容流须核实后使用。完整期间排放量须实测，无默认释放量；粒径区间之外不再加总颗粒物。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：用cp_air采集匹配完整期间实际归属量；仅在正B时报告每 1 kg 参考流。不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：toray-nk-compaction-2019; sahut-compaction-1999

###### 颗粒物（> PM10） (`pm10plus`)

仅大于10微米颗粒物；即使监测制度关注更细颗粒，也不得省略该区间。 原生介质为向室外空气排放、子介质未特指；不是室内暴露、资源吸收或修正流。记录实际源、高度和位置，更具体的兼容流须核实后使用。完整期间排放量须实测，无默认释放量；粒径区间之外不再加总颗粒物。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：用cp_air采集匹配完整期间实际归属量；仅在正B时报告每 1 kg 参考流。不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：toray-nk-compaction-2019; sahut-compaction-1999

###### 氨 (`ammonia_air`)

按实情独立测量固体储运或清洗释放的NH3气体，CAS7664-41-7；不假定正排放或默认因子。氨氮到NH3只按记录的摩尔基准换算。 原生介质为向室外空气排放、子介质未特指；不是室内暴露、资源吸收或修正流。记录实际源、高度和位置，更具体的兼容流须核实后使用。完整期间排放量须实测，无默认释放量；粒径区间之外不再加总颗粒物。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：用cp_air采集匹配完整期间实际归属量；仅在正B时报告每 1 kg 参考流。不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：toray-nk-compaction-2019; sahut-compaction-1999

###### 水蒸气 (`water_vapour`)

按实情独立测量分子水蒸气，CAS7732-18-5；区分自由水蒸发、结合水释放及另有证据的化学生成。不假定干燥机，不把质量残差作为蒸发量。 原生介质为向室外空气排放、子介质未特指；不是室内暴露、资源吸收或修正流。记录实际源、高度和位置，更具体的兼容流须核实后使用。完整期间排放量须实测，无默认释放量；粒径区间之外不再加总颗粒物。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：用cp_air采集匹配完整期间实际归属量；仅在正B时报告每 1 kg 参考流。不设默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：toray-nk-compaction-2019; sahut-compaction-1999

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | compact | 先按实际SKU、状态、路线和阶段计量拆分，再分配。共享电力与维护按有记录的实测因果关系或服务负荷归属；保留完整失败和空转负荷池，论证剩余分配。不设默认经济或质量份额。 | toray-nk-compaction-2019; sahut-compaction-1999 |
| allocation_physical | all inventory rows | 完整未分配实物质量、水、元素及内部转移账与环境负荷归属账分开。实物产品出口或成对内部转移不乘分配份额。内部回用携带既有负荷并加重复加工能耗，不给予避免原料信用。 | toray-nk-compaction-2019; sahut-compaction-1999 |
| allocation_outputs | reject_nk; captured_dust; waste_oil | 不预设常规联产品。每个实际外部输出按功能、法定及接收状态和组成只分类一次。销售不合格肥料或回收油产品须独立审查身份和分配，不可默称废物或自动赋替代信用。 | toray-nk-compaction-2019; sahut-compaction-1999 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

原始总量先保留，不先按产量删选事件。最终释放门定义唯一完成量B；之前全部实际储存与散装装载均属于compact。原料与未验收在制品有期初期末过程库存账，门后已释放成品另设仓库账，B不得再计入期末过程存量。返工只在最终合格时计一次，重复电耗全部纳入。独立负荷结转账记录期初期末在制品既有负荷及归属，不能抹去失败消耗或赋免费在制品。全部协议仅属于compact，覆盖相同SKU状态路线的完整期间；总B=0仍保留所有原始事件与负荷，不造归一结果。 接收库存核对与计量生产投料分开：期初原料存量加接收量，扣期末原料存量及未改变的外部退货，须与实际投料及单独识别损耗核对。生产池实物账使用完整投料加期初已投料在制品；期末在制品不含未投料原料库存。全厂接收账同时覆盖原料库及在制品。不得把接收和投料当作两次采购交换。按实际生产需求归属供方负荷，实测期末原料和在制品既有负荷转入结转账，全部失败运行负荷保留在匹配生产池。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | compact | nk_product | foreground_record | SKU；唯一释放事件；毛皮净B；氮形态及总氮；钾或氧化钾；硫氯；水分；游离酸；原料成品筛析；抗压或磨耗；均匀性；期初期末原料和在制品；独立成品库账；结转负荷 | 校准最终净重秤及代表性批次化验、筛析、强度储存检查；保留约定方法、采样、秤不确定性及拒收批次 | kg | 每批每阶段及关联代表性监测 | 完整期间，含开停、失败零产出、返工、储存和在制 | 实际同SKU状态路线场址 | 每 1 kg 参考流 | 校准、原始记录、化验采样、两端转移和存量核对及供方接收证据 |
| cp_feed | compact | feed_as; feed_kcl | foreground_record | 供方；等级路线；整份供货kg；组分涂层水分检测；氯化钾m3约定、装填、水分、温度与独立密度；库存投料回流；粒度；辊压设置；通过次数 | 校准接收投料称重、计量加料和兼容供方的体积密度试验；核对库存及实测内部转移，检查实际造粒路线 | kg; m3 | 每批每阶段及关联代表性监测 | 完整期间，含开停、失败零产出、返工、储存和在制 | 实际同SKU状态路线场址 | 每 1 kg 参考流 | 校准、原始记录、化验采样、两端转移和存量核对及供方接收证据 |
| cp_energy | compact | electricity | foreground_record | 阶段kWh；电表；场址时间；CN交付；电压；供方数量；辊压供料破碎筛分风机装载负荷；失败空转开停电量；公共负荷归属 | 校准阶段电表和账单，覆盖全部重复加工；单独测量公共负荷并保留换算归属记录 | MJ | 每批每阶段及关联代表性监测 | 完整期间，含开停、失败零产出、返工、储存和在制 | 实际同SKU状态路线场址 | 每 1 kg 参考流 | 校准、原始记录、化验采样、两端转移和存量核对及供方接收证据 |
| cp_maintenance | compact | hydraulic_oil; waste_oil | foreground_record | 整份油制剂；供方体积温度；等级；密度；补换油；回路期初期末存量；废油湿kg及添加剂水分；泄漏捕集；接收方 | 计量整份外购油体积；为质量账独立测量兼容密度；称量废油、核对回路存量；保留供方维护接收证据 | m3; kg | 每批每阶段及关联代表性监测 | 完整期间，含开停、失败零产出、返工、储存和在制 | 实际同SKU状态路线场址 | 每 1 kg 参考流 | 校准、原始记录、化验采样、两端转移和存量核对及供方接收证据 |
| cp_waste | compact | reject_nk; captured_dust | foreground_record | 来源；实际整份质量；水分；干物质；氮钾硫氯；污染；每次内部回流与外部废物；接收功能处理；转移单 | 分别称量粉尘和废颗粒及每次回用两端；独立核对废物状态、去向与组成 | kg | 每批每阶段及关联代表性监测 | 完整期间，含开停、失败零产出、返工、储存和在制 | 实际同SKU状态路线场址 | 每 1 kg 参考流 | 校准、原始记录、化验采样、两端转移和存量核对及供方接收证据 |
| cp_water | compact | cleaning_water; cleaning_effluent; humidity_uptake | foreground_record | 完整清洗循环；供水及废水湿kg或计量m3和实测密度；溶解离子悬浮固体；原料成品库存水分；空气湿度温度及独立吸收蒸发测量 | 计量完整受控清洗事件；液固气独立代表性采样和水分检测；区分相变交换和有证据的反应水，保留未解释差额 | kg | 每批每阶段及关联代表性监测 | 完整期间，含开停、失败零产出、返工、储存和在制 | 实际同SKU状态路线场址 | 每 1 kg 参考流 | 校准、原始记录、化验采样、两端转移和存量核对及供方接收证据 |
| cp_air | compact | pm25; pm2510; pm10plus; ammonia_air; water_vapour | foreground_record | 物种来源位置高度；室外介质；不重叠粒径；浓度；已积分气体体积或流率时间；压力温度；湿干及标况实况；治理逸散；检出限；代表小时 | 覆盖完整代表运行状态测量治理后烟道与逸散排放；匹配采样和气量基准，区别已积分体积与流率；无通用因子，不强制凑平衡 | kg | 每批每阶段及关联代表性监测 | 完整期间，含开停、失败零产出、返工、储存和在制 | 实际同SKU状态路线场址 | 每 1 kg 参考流 | 校准、原始记录、化验采样、两端转移和存量核对及供方接收证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | 保留匹配完整期间原始总量及库存和在制负荷转移。完成兼容原始单位换算及有记录的负荷归属后，各归属交换仅除一次正B。参考输出恰为1 kg；B=0只保留总量，不造单位清单。 | cp_product; cp_feed; cp_energy; cp_maintenance; cp_waste; cp_water; cp_air | 每1 kg参考流交换、原始总量及结转负荷账 | toray-nk-compaction-2019; sahut-compaction-1999 |
| provider_conversion | feed_kcl; hydraulic_oil; cleaning_water | 实物kg与供方原生m3分开。用相同材料、装填、水分和温度定义下独立实测的对应质量体积密度；不用数据库次级系数或无关专利密度。供方基准未决时不声称背景链接完整。 | cp_feed; cp_maintenance; cp_water | 归一前兼容期间kg及m3 | toray-nk-compaction-2019; sahut-compaction-1999 |
| electricity_conversion | electricity | 实测kWh仅按3.6 MJ/kWh换算一次，保留原生净热值属性。覆盖重复辊压破碎筛分及实际公共负荷，再仅除B一次。 | cp_energy; cp_product | 每1 kg参考流MJ | toray-nk-compaction-2019; sahut-compaction-1999 |
| physical_balance | all inventory rows | 在匹配完整期间边界下，完整实测生产投料、期初已投料过程存量及在制品、独立测得环境吸收之和，等于合格产品、实际废固体、收集废水、实际释放和期末已投料过程存量及在制品之和。未投料原料库存通过接收账单独核对。已释放B不得再入期末过程存量；成品仓库独立记账。内部回流两端等量且仅在整体相消。整份湿质量、干固体、氮钾硫氯及实际油和添加剂碳分别平衡；不以理论配方或残差指定损耗。 | cp_product; cp_feed; cp_maintenance; cp_waste; cp_water; cp_air | 完整未分配实物及元素账 | toray-nk-compaction-2019; sahut-compaction-1999 |
| water_species | all inventory rows | 整份湿投入与组分和载水子账分开。干式压实本身不证明化学水的净生成或消耗。自由水相变和结构或结合水变化须独立测量。存在真实反应时须有物种化学计量及独立生成消耗证据，并复审范围；不得用同一残差拟合未知反应水和未知出口，也不以COD当作干物质或反应水。 | cp_feed; cp_water; cp_air; cp_product | 水和物种账及披露差额 | toray-nk-compaction-2019; sahut-compaction-1999 |
| air_mass | pm25; pm2510; pm10plus; ammonia_air; water_vapour | 兼容浓度乘已积分气体体积，或对浓度乘气体流率按时间积分。保留各代表运行状态、湿干及温压基准。仅用有记录摩尔质量把折氮NH3换算为NH3。颗粒区间不重叠、捕集固体另记，完整归属质量仅除B一次。 | cp_air; cp_product | 每1 kg参考流各物种kg | toray-nk-compaction-2019; sahut-compaction-1999 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | 核对完整原生名称组分、路线状态等级、已声明地区、CAS、流型介质及精确参考属性单位版本链。未知与矛盾分开；广义身份不证明供方数量、配方或背景适用。 | cp_product; cp_feed; cp_energy; cp_maintenance |
| quality_measurement | all inventory rows | 保留原始校准测量、化验方法、采样覆盖、不确定性和检出限。缺UUID或监测不是实测零；保留实际交换及未决链接。不移植专利或设备案例收率压力配方能耗密度。 | cp_product; cp_water; cp_air |
| quality_period | all inventory rows | 使用同SKU状态路线完整池，含失败零产出和返工。独立结转账追踪期初期末在制品既有负荷，不能给免费期初在制或丢弃失败负荷。结转归属未决仍是数据集证据缺口。 | cp_product; cp_feed; cp_energy; cp_maintenance |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | nk_product | 只允许一个最终参考产品行，兼容广义氮钾身份及Mass/kg。核对实际硫酸铵/氯化钾复合颗粒状态路线、无硝酸钾及主动添加磷农药、唯一正B及全部限定信息。广义原生身份不等于完整类别方法覆盖。 | un-cpc-3-2025; toray-nk-compaction-2019 |
| validate_period | all inventory rows | 检查原始总量、失败零产出覆盖、库存在制与负荷结转、内部回用等量及单次归一。B=0不能产生归一清单。每个采集协议仅属于compact并覆盖实际关联行。 | toray-nk-compaction-2019; sahut-compaction-1999 |
| validate_physics | all inventory rows | 完整核对湿干实物、分子和结构及自由水、实际物种、氮钾硫氯及油添加剂碳，独立于分配负荷。不得用平衡差额确定排放反应水或隐设出口。真实不兼容反应或新增路线在复审前不得套用。 | toray-nk-compaction-2019 |
| validate_links | feed_kcl; hydraulic_oil; electricity; cleaning_water; reject_nk; cleaning_effluent; humidity_uptake | 供方原生数量、完整处理运输链接与身份分开核对。明确电力CN用户组合电压限定仅适用于该记录。普通辅助身份缺口须披露并修补数据集，不可删除，也不自动降低方法成熟度。 | sahut-compaction-1999 |
| validate_air | pm25; pm2510; pm10plus; ammonia_air; water_vapour | 核对实际室外物种子介质、采样气量基准及不重叠粒径。总PM仅作核对，不是第四个加总交换。捕集粉尘、室内暴露及环境释放分别处理。设备低污染说法不证明实测不存在。 | sahut-compaction-1999 |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 已核实的所选干式硫酸铵/氯化钾压实氮钾子类工厂门供货清单 |
| allowed_use | 实际匹配散装供应，具备完整采集数量、上游处理链接及已披露审查要求 |
| excluded_use | 通用氮钾或氮磷钾覆盖、硝酸钾、折养分农艺比较、田间排放、湿式黏结涂层液体路线或虚构数量 |
| required_metadata | 全部参考限定；实际原生名称地区属性限制；原始总量及B；采样库存在制和结转；供方参考；分配资本运输边界 |
| required_quality_disclosure | 科学审核待定；辅助UUID未决；供方体积兼容；测量不确定性检出及完整性；专利与设备原件证据局限 |
| update_trigger | 配方原料调理改变、真实反应、黏结水涂层热路线、包装交付、电网地区、供方基准、输出功能或测量方法变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | UN Statistics Division, CPC Version3.0 Explanatory Notes, 30June2025, p.166. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类：34647排除硝酸钾；可选列举物不是必需配方，也不建立已接受映射。 |
| eu-jrc-lvic-aaf-2007 | official_guidance | European Commission/JRC, LVIC-AAF BREF, August2007, §7.1 and §7.2.1, printed pp.283/285, PDFpp.311/313. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-03/LVIC-AAF.pdf?download=1 | 养分报告及机械干混压实与混酸奥达路线区分；图7.1不描述干式路线。不采用工厂或排放消耗默认量。 |
| toray-nk-compaction-2019 | literature | Toray Industries, JP2019043797A, published22March2019, claims6–14; detailed description on PDFpp.7–10 and examples from p.13. https://patents.google.com/patent/JP2019043797A/en | 原始专利支持硫酸铵/氯化钾干混、双辊压团、破碎整粒筛分、细粉回用及质量测量。日文为原文，英文为机器翻译。权利要求及实验的配方水分密度粒度压力速度强度收率均为案例限定，不是通用默认值；须实际场址验收采集。 |
| sahut-compaction-1999 | literature | F.Dehont, Sahut-Conreur, Compaction-granulation of Fertilizer: An Economical Process for a la carte Formulations, Powder Handling & Processing11(3), July/September1999, PDFpp.1–3. https://d20854696ijsuu.cloudfront.net/files/22081/download/686683/1-3.pdf | 设备制造者原件支持干式压力团聚、阶段、细粉超粒径循环及除尘，仅历史定性证据。图含本方法排除的可选增湿涂层；生产率收率密度能耗或零流出说法均不成为默认量或已证明不存在。 |

上述在线原件于2026-10-16核对。历史资料用于物理方法，不构成现行法规意见或科学审核。
