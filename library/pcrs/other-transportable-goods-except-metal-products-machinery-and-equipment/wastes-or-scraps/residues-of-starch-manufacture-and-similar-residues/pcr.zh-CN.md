---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.residues-of-starch-manufacture-and-similar-residues
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 淀粉制造残余物及类似残余物：机械脱水鲜湿马铃薯渣

## 1. 范围和适用性

本既存类别记录本次仅建立一种经证据支持的完整终端：马铃薯淀粉分离后单一植物原料的机械脱水鲜湿渣，未经发酵、未混配、未热干燥或制粒，按真实接收用途供应为牛用饲料原料。AKV 产品表证明该鲜用产品存在并给出另选青贮的反例；其典型组成、营养值和季节信息不是固定配方或本期订单证明。制造商离心机说明证明技术背景而非某设备已安装验收。EFISC 的独立工艺图支持分离及湿渣脱水，且明说基本图仅是示例。OECD 图3也将脱水渣与薯汁蛋白区分；两者均不证明具体批次或工厂已经合格。

本方法起于经核实已分离湿渣交接，完整覆盖残余产品真实收集、需要时除杂及脱水、质量放行、暂存和实际交付。种植至淀粉分离及其他副产物联合负荷由真实供方承接一次。本方法不重复以淀粉等主产品为终端的23220方法；单一湿渣不是复合饲料，也不是粮谷制粉麸皮或酿造蒸馏糟。地域证据为丹麦商业案例加欧洲行业方法；其他场址须逐项证明兼容，不能宣称行业通用性能或实际销量。

CPC 完整说明仅给出 39130 标题，没有另列纳入或排除条目。本马铃薯淀粉渣路线的归类是结合该标题与原始产品、工艺证据作出的方法判断。相邻的制糖残余物（39141/39149）、粮谷或豆类加工残余物（39120）、酿造蒸馏糟（39160）、淀粉及面筋（23220）和配制饲料（23319）均不属于本终端。马铃薯蛋白和浓缩马铃薯汁也是独立物料，不能作为薯渣的同义流。下列首次放行门、库存方程和采集协议是本方法制定的建模要求，不是上述来源的原文或定量研究结果。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.residues-of-starch-manufacture-and-similar-residues |
| classification_refs | CPC 3.0:39130，鲜湿马铃薯淀粉渣范围以正式分类裁定为准 |
| covered_products | 机械脱水鲜湿马铃薯淀粉渣 |
| excluded_products | 淀粉和面筋; 整薯; 薯泥; 薯皮; 一般食品残渣; 麸皮; DDGS; 发酵糟; 混糖蜜或浓缩汁产品; 配合饲料; 青贮渣; 干渣颗粒 |
| representative_product | 机械脱水鲜湿马铃薯淀粉渣 |
| production_route | 淀粉分离渣交接→真实收集和必要除杂→需要时机械脱水→首次整批质量放行→实物成品储存及实际交付服务 |
| market_state | 鲜湿散体饲料原料；实际容器或覆盖物另记；必须声明接收方条件；不承诺干基或营养等效 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为声明牛用饲料接收用途提供一次合格机械脱水鲜湿马铃薯淀粉渣供应 |
| How much | 供应方首次整批质量放行门的1 kg净湿产品；实际交付另保留批次服务账 |
| How well | 满足真实接收规格、逐批干物质或含水、异物、适用卫生及储运时间条件；不主张1 kg湿渣等于1 kg干饲料或单位蛋白能量 |
| How long or cycle | 一批首次放行供应；H为有界观察期，实际暂存及运输期限由真实规格约束，不编时长 |
| reference_flow_link | first_release_pulp |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 机械脱水鲜湿马铃薯淀粉渣 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 马铃薯物种及单一植物原料; 具名淀粉制造商及场址; 分离及交接门; 实际接收及供应脱水状态; 机械技术及是否已在上游完成; 鲜湿及未发酵状态; 无糖蜜或汁液或饲料混配; 声明牛饲料接收用途及合同; 产品或 Waste 状态及真实去向; 逐批净湿质量及皮重; 逐批干物质或含水; 异物及适用卫生验收; 真实最长暂存及运输时间; 储存及覆盖条件; 首次整批质量放行门及历史; 参考期 H 及 Q; 期初期末在制品及成品; 总交付及退回标识; 包装及周转存量基准; 上游向量及联合过程分配接口; 地域技术及供方兼容性; 原生流身份及属性支持缺口 |

每项必需限定信息均须进入数据包元数据、参考产品及相关流描述中的完整可消费语境。无原生直读证据时不填写 UUID，不能把流名称当成数据库身份确认。以下规范约束整体参考状态与每个相关交换，而非仅本节。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `wet_reference` | 参考产品 | Mass | kg | 参考量为去皮重后的实测净湿质量；干物质、蛋白、能量、销售或运输量均不能替代 Q。 |
| `wet_dry_bridge` | 湿渣及液体 | Mass | kg | 各整流湿质量为主账；DM=wet_mass×实测干物质分数；水另经独立含水与去向核对，所有组分桥接非叠加，不设置固定含水率。 |
| `raw_units` | 实测分子 | 各原始属性 | 各原始单位 | 先保留原始计量单位及状态；仅对真实速率积分一次。体积转质量使用该物质独立状态密度；条目数与千克之间须有实测物品质量，不猜单件质量。 |
| `sole_q` | 首次放行 | Mass | kg | Q 为 H 内同一边界、状态和质量的新增首次整批放行净湿质量；合格期末成品已在 Q 内。H 不作为第二分母；Q=0 保留真实负荷而不出单位结果。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实马铃薯淀粉线在已分离湿渣交接点提供的整流；已脱水与未脱水状态明确，承接该点之前负荷 |
| starting_condition_role | 残余产品前景的物料及负荷接口；不是种植或淀粉制造零负荷截断 |
| product_classification_scope | 39130中的本鲜湿机械脱水马铃薯渣；不扩为所有淀粉残余物 |
| recursive_input_rule | 采购同类已脱水渣只记一次上游产品及负荷；只纳真实新增调理，不重复整条淀粉路线；内部返回只在配对端点抵消 |
| upstream_dataset_requirement | 供方真实种植及淀粉联合过程数据集、时期地域技术、共功能、实际分配与交接状态；缺失保留未解决，不能零代 |
| disclosure | 声明起点、独立制造和成品门、Q、所有必需限定信息、真实接收方及服务门、负荷年代、库存和分配、未绑定身份及背景适配 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | 声明起点 | 从实测已分离马铃薯渣交接点开始。种植、收薯、洗薯、锉磨及淀粉组分分离属于供应系统。仅关联一次其真实数据集、边界、联合产品分配、分离状态及残余负荷向量；不得重复整套淀粉过程或默默截断。 | `efisc-starch-processing-2014`; `ilcd-allocation-2010`; `alfa-laval-starch`; `oecd-potato-2020` |
| `boundary_scope` | 合格路线和真实例外 | 采用淀粉制造来源单一马铃薯渣，经核实机械脱水后鲜湿供应。青贮或发酵渣、干颗粒、混合饲料、加糖蜜或浓缩汁产品、薯皮、薯泥、整薯、面筋及发酵糟不得进入合格 Q。若排除的作业真实发生，仍保留全部实物流和负荷，并判该合格路线主张不成立；不得借范围标签删除。 | `akv-pulp-datasheet-2024`; `efisc-starch-processing-2014` |
| `boundary_complete` | 所有所纳作业 | 纳入真实接收、转运、存在时筛分、需要时脱水、称量、采样、暂存、覆盖、装车、实际交付、清洗、返工、维修材料及残余管理。记录启停、空转、失败试验、零产出批期、洒漏及真实发生的未授权作业。声称完整前，每种新发现的真实材料、载能体、废物及化学排放均须增加独立流。 | `efisc-starch-processing-2014` |
| `boundary_physical_gates` | 制造和成品门 | 将 grossV 实物跨界、继承环境向量 A、真实共功能分配及唯一 Q 分开。制造、成品服务及合并实物门均纳入期初期末在制品和成品。内部转移只在同一物料状态、批次的端点配对后抵消，实物量及继承向量同时传递。经济或服务份额绝不缩放真实产品、水、废物或排放质量。 | `ilcd-allocation-2010` |
| `boundary_liquid` | 脱水及回流接口 | 每个真实液体出口须有水、悬浮固体、可溶物及可回收淀粉证据。整份液体与组分分析非叠加；真实回收和损失分开。配对返回淀粉制造的水不是新增取水或污水。不得用一个残差同时拟合未知失水及未知固体损失，也不能将全部水差说成蒸发。 | `efisc-starch-processing-2014`; `akv-pulp-datasheet-2024` |
| `boundary_energy` | 能源及热接口 | 逐载能体分开。湿态机械脱水不证明干燥燃烧、锅炉、蒸汽或热需求。若存在真实热水、蒸汽或其他热服务，须增加真实供应质量、压力温度相态、焓基准、供能及外部凝液或回水约定，形成一致的载热体账。不重复热量 MJ 与锅炉燃料，不虚构回水。 | `efisc-starch-processing-2014` |
| `boundary_delivery` | 首次放行及交付 | Q 为首次质量放行量，不是净销售或发运量。合格期末成品已包含在 Q 内。所有真实后续储存、覆盖、搬运和交付另保留批次服务账。期初成品保留历史负荷；退回冲回原交付且保留原放行状态。真实新增返工记 F；只有证实同侧重复项才能记扣减 X。 | `ilcd-allocation-2010`; `akv-pulp-datasheet-2024` |
| `boundary_article` | 每种包装或周转物品 | 对每种真实覆盖或包装物品核对：期初空物存量加附着在制品或成品存量加采购加外部回收收到量，等于期末空物及附着存量加随总实物发运外出量加对外返还量加废弃量。内部复用抵消。物品与附着产品质量分开，包装不进入 Q，也不给默认联产品信用。 | `akv-pulp-datasheet-2024`; `ilcd-allocation-2010` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `recovery` | 分离渣接收和收集 | required | 每个所纳批次 | 从已核实淀粉分离后开始且仅承接一次上游联合负荷 | 每1 kg参考流 |
| `dewatering` | 机械调理及液体接口核对 | required | 实际脱水取决于来料状态；始终核对接口 | 供方已脱水时不再虚构第二次；真实分离出口保持明确 | 每1 kg参考流 |
| `release` | 首次整批质量放行 | required | 满足鲜用牛饲料接收规格 | 唯一 Q 门；不合格物不计 Q 但保留其负荷 | 每1 kg参考流 |
| `delivery` | 成品储存及实际交付服务 | required | 纳入每项真实服务；具体燃料和货运行按实际发生 | 新旧成品分别跟踪；发运绝不新增产量 | 每1 kg参考流 |
| `cleaning` | 清洗及残余物收集 | required | 每项实际清理和残余出口；化学品和处理作业仅按真实存在 | 保留失败及零产出负荷；真实新增流须原子命名 | 每1 kg参考流 |

所有下列卡片均保留一项真实原子交换。条件行只有在该流真实发生时填实测数量；证明不存在时记录不适用证据，不得把已经发生的不合格、清理或附加作业设零。没有列出的真实流必须另增具体卡片；不存在代表“其他”集合的绑定例外。原始分子及源单位进入协议；物理总量、分配后环境分子和单次归一化结果分账，不互相叠加。

### 过程：分离渣接收和收集 (`recovery`)

#### 输入

##### 产品流

###### 未经发酵的湿马铃薯淀粉分离渣 (`separated_pulp`)

在残余产品调理前的声明交接点接收实际已分离的马铃薯渣。核实单一马铃薯原料及淀粉制造来源，记录实际湿态和是否已经脱水。整份湿质量只记一次，水及干物质组分是非叠加分析子账。按有据分配接口仅承接一次供方联合过程负荷向量。不得代用淀粉、整薯、薯皮或污水污泥。

- 选定流: 未经发酵的湿马铃薯淀粉分离渣
- 流属性/单位: Mass / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_pulp_recovery`
- 来源: `efisc-starch-processing-2014`; `ilcd-allocation-2010`

###### 电力 (`recovery_electricity`)

计量实际收集和输送用电，包括启停和空转。外购电力与柴油及上游淀粉线分开；实际场址另选真实电压和供方数据集。

- 选定流: 电力
- 流属性/单位: Energy / kWh
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_power_recovery`
- 来源: `efisc-starch-processing-2014`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未经发酵的湿马铃薯淀粉分离渣 (`collected_pulp`)

向脱水工序内部转移，与 dewatering_feed 按批次、湿质量、干物质、水及继承负荷向量配对。仅在合并边界内抵消配对两端。

- 选定流: 未经发酵的湿马铃薯淀粉分离渣
- 流属性/单位: Mass / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_pulp_recovery`
- 来源: `efisc-starch-processing-2014`

##### 废物流

###### 已分离马铃薯渣中的矿物石块筛除物 (`mineral_screenings`)

仅在声明起点后真实存在矿物筛除出口时纳入。记录矿物身份、附着渣和水且不双计。淀粉分离前洗薯去除的土、叶和石属于上游接口，不能再造第二个前景洗薯过程。

- 选定流: 已分离马铃薯渣中的矿物石块筛除物
- 流属性/单位: Mass / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_waste_recovery`
- 来源: `efisc-starch-processing-2014`

##### 基本流

### 过程：机械调理及液体接口核对 (`dewatering`)

#### 输入

##### 产品流

###### 未经发酵的湿马铃薯淀粉分离渣 (`dewatering_feed`)

与 collected_pulp 配对的输入。若来料已达到声明的机械脱水状态，不虚构再次脱水；保留实际转运、核验作业及上游调理负荷。

- 选定流: 未经发酵的湿马铃薯淀粉分离渣
- 流属性/单位: Mass / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_pulp_dewatering`
- 来源: `efisc-starch-processing-2014`

###### 电力 (`dewatering_electricity`)

记录真实离心脱水机、泵或其他已核实机械脱水设备用电。制造商证据确立机械脱水及渣用离心机投资背景，但不证明螺旋压榨、某台已安装设备或通用能耗值。

- 选定流: 电力
- 流属性/单位: Energy / kWh
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_power_dewatering`
- 来源: `akv-pulp-datasheet-2024`; `akv-pulp-investment-2024`; `efisc-starch-processing-2014`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 机械脱水鲜湿马铃薯淀粉渣 (`conditioned_pulp`)

计量实际机械调理后的整份湿渣，转入 release_feed。实测干物质、含水、残留淀粉及异物作为非叠加质量信息。该合格终端不含热干燥、制粒、糖蜜、浓缩汁、发酵或配合饲料混合。

- 选定流: 机械脱水鲜湿马铃薯淀粉渣
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_pulp_dewatering`
- 来源: `akv-pulp-datasheet-2024`; `efisc-starch-processing-2014`

###### 返回淀粉制造的马铃薯渣脱水离心液 (`centrate_return`)

仅纳入真实可用且有淀粉线接收端记录的液体回流。分别测量水、悬浮固体、可溶固体和残留淀粉，作为该整份液体的非叠加组分。核实配对的回流在一体化系统中为内流；外部回流须有供方接口和负荷约定。不得改成新增淡水、弃置污水或自动获信用的联产品。

- 选定流: 返回淀粉制造的马铃薯渣脱水离心液
- 流属性/单位: Mass / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_liquid_dewatering`
- 来源: `efisc-starch-processing-2014`

###### 回收马铃薯淀粉悬浮液 (`recovered_starch_return`)

仅在实际存在独立计量的淀粉回收出口时纳入。不得把 centrate_return 或湿渣已包含的残留淀粉分析值再造为本行。记录接收淀粉工序及配对质量、负荷接口，不给默认回收信用。

- 选定流: 回收马铃薯淀粉悬浮液
- 流属性/单位: Mass / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_liquid_dewatering`
- 来源: `efisc-starch-processing-2014`

##### 废物流

###### 弃置马铃薯渣脱水离心液 (`discarded_centrate`)

按去向和处理合同记录真正弃置部分。以出口及批次标识与 centrate_return 区分。悬浮及溶解组分留在整份污水主账，除非实际被分离；COD、TOC 和总氮是监测指标，不是指定化学物质的质量。

- 选定流: 弃置马铃薯渣脱水离心液
- 流属性/单位: Mass / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_liquid_dewatering`
- 来源: `efisc-starch-processing-2014`

##### 基本流

### 过程：首次整批质量放行 (`release`)

#### 输入

##### 产品流

###### 机械脱水鲜湿马铃薯淀粉渣 (`release_feed`)

与 conditioned_pulp 配对的内部输入。纳入期初期末待验存量及在制品、不合格批次和真实新增返工。已放行批次的重验或退回不产生新产量。

- 选定流: 机械脱水鲜湿马铃薯淀粉渣
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_pulp_release`
- 来源: `efisc-starch-processing-2014`

###### 电力 (`release_electricity`)

记录称量、采样设备和放行控制真实用电；保留失败及零产出检验负荷，不为其虚构产量。

- 选定流: 电力
- 流属性/单位: Energy / kWh
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_power_release`
- 来源: `efisc-starch-processing-2014`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 机械脱水鲜湿马铃薯淀粉渣 (`first_release_pulp`)

唯一数量参考是为声明牛饲料接收用途对该鲜湿产品进行的本期首次整批质量放行。Q 为 H 内新增放行的实测净湿质量，包含合格期末成品。排除期初已放行成品、重复放行、内部转移、包装及不合格质量。验收须核实植物来源、机械脱水状态、未发酵、未混配、含水或干物质、异物、卫生及接收方认可的时间和储存条件。不得代用干饲料、淀粉、薯泥、薯皮、面筋、DDGS 或麸皮。

- 选定流: 机械脱水鲜湿马铃薯淀粉渣
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: fixed_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: source_rule
- 采集协议: `cp_release`
- 来源: `akv-pulp-datasheet-2024`; `efisc-starch-processing-2014`

##### 废物流

###### 湿马铃薯渣实验室样品残余物 (`laboratory_pulp`)

计量破坏性采样或检验后弃置物及其真实去向，不能计入 Q；未经改变返回的物料为配对内流。若分析化学品跨越前景边界，须另列原子交换。

- 选定流: 湿马铃薯渣实验室样品残余物
- 流属性/单位: Mass / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_waste_release`
- 来源: `efisc-starch-processing-2014`

##### 基本流

### 过程：成品储存及实际交付服务 (`delivery`)

#### 输入

##### 产品流

###### 机械脱水鲜湿马铃薯淀粉渣 (`released_stock_input`)

本期放行量与 first_release_pulp 配对。实物分明地跟踪期初成品、客户退回及期末成品，并在存量账保留历史负荷向量。该输入不增加 Q，也不再次采购同一份渣。

- 选定流: 机械脱水鲜湿马铃薯淀粉渣
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_fg`
- 来源: `efisc-starch-processing-2014`

###### 电力 (`delivery_electricity`)

纳入真实储存、搬运、装车和发运用电，包括对旧成品及失败发运的服务。使用独立服务账按实物批次归属，不把旧成品服务默归新增 Q。

- 选定流: 电力
- 流属性/单位: Energy / kWh
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_power_delivery`
- 来源: `efisc-starch-processing-2014`

###### 湿马铃薯渣柔性塑料覆盖片 (`cover_sheet`)

仅在真实使用时记录实际整份外购覆盖片。制造商要求塑料覆盖，但未指定聚合物或质量；须取得供方物品组成，不假定聚乙烯。复合覆盖片仅采购一次，组成信息为非叠加子账。可重复用覆盖片存量、对外返还、随货外出和废弃分别跟踪，与湿产品 Q 分开。

- 选定流: 湿马铃薯渣柔性塑料覆盖片
- 流属性/单位: Mass / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_packaging`
- 来源: `akv-pulp-datasheet-2024`; `efisc-starch-processing-2014`

###### 柴油 (`diesel`)

仅在前景自营搬运或运输真实燃烧时纳入。记录整份供应燃料，升转质量须用该燃料实测状态密度，并独立支持燃料组成和尾气。不得在已包含燃油的外购货运数据集上重复加本燃料。湿渣生产不意味着存在干燥机、锅炉或天然气投入。 原生身份为以 Mass 计量的柴油或轻柴油；牌号、配方、密度、热值、炼制路线、地理供应及供方均明确未特指。仅用于实际与轻柴油族相容的石油柴油，不默代纯生物柴油或其他燃料。该身份不提供燃料因子、密度、热值或供方验证。

- 选定流: 柴油
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_fuel`
- 来源: `efisc-starch-processing-2014`

###### 湿马铃薯渣公路货物运输 (`freight`)

仅在实际外购交付服务时纳入。记录路线、真实湿态载荷、距离、车型、空驶、载荷约束及供方边界。采用真实运输总载荷和有据服务分配，不得用经济产品分配缩小实物吨公里。不假定接收距离或车辆载荷。

- 选定流: 湿马铃薯渣公路货物运输
- 流属性/单位: Transport service / tkm
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_transport`
- 来源: `ilcd-allocation-2010`; `efisc-starch-processing-2014`

##### 废物流

##### 基本流

###### 空气中的氧 (`oxygen`)

仅在真实所纳燃烧或氧化时纳入。为实物及元素平衡独立确定 O2 摄取量与气体状态，不得为强制闭合虚构耗氧。惰性氮通量另保留为实测非叠加气体账，真实转化的氮物种须逐项另列。

- 选定流: 氧气
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_emission_delivery`
- 来源: `efisc-starch-processing-2014`

#### 输出

##### 产品流

###### 机械脱水鲜湿马铃薯淀粉渣 (`gross_dispatched_pulp`)

向具名接收方外出的真实总实物交付，按年代区分新旧成品。该输出是服务及存量账终端，绝非第二数量参考。保留交付、拒收、原交付冲回和退回标识。接收方重验不产生 Q。明确运输与接收门；下游青贮和动物饲喂不在本鲜产品方法内。

- 选定流: 机械脱水鲜湿马铃薯淀粉渣
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_fg`
- 来源: `akv-pulp-datasheet-2024`; `ilcd-allocation-2010`; `efisc-starch-processing-2014`

###### 可重复使用的柔性塑料渣覆盖片 (`returned_cover`)

只有实际向所有者外部返还的覆盖片才是产品返还。记录物品身份、质量、使用状态及接收方。内部复用在覆盖片存量中抵消，不是外部返还、新采购或联产品信用。

- 选定流: 可重复使用的柔性塑料渣覆盖片
- 流属性/单位: Mass / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_packaging`
- 来源: `efisc-starch-processing-2014`

##### 废物流

###### 不合格湿马铃薯淀粉渣 (`spoiled_pulp`)

记录真实腐败、污染、超时、洒漏或拒收渣及原因、湿质量、干物质、年代和实际处理或改用去向。不计合格 Q 绝不删除该物料、继承负荷、新增搬运或实测排放。饲用、低价或废物标签本身不能确定负荷和法律状态。

- 选定流: 不合格湿马铃薯淀粉渣
- 流属性/单位: Mass / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_waste_delivery`
- 来源: `akv-pulp-datasheet-2024`; `efisc-starch-processing-2014`; `ilcd-allocation-2010`

###### 废弃柔性塑料渣覆盖片 (`waste_cover`)

按组成和去向计量该单一废弃覆盖物品。通过有据非叠加桥接区分片材自身质量与附着湿渣；不得双计附着渣，也不能将片材质量设零而隐去。

- 选定流: 废弃柔性塑料渣覆盖片
- 流属性/单位: Mass / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_packaging`
- 来源: `efisc-starch-processing-2014`

##### 基本流

###### 水蒸气 (`combustion_water_vapour`)

仅纳入所含前景燃烧真实外出的水蒸气。以独立证据区分燃料氢和氧形成的反应水、燃料或空气携带的游离水以及液态凝水。不得用一个质量残差拟合反应水和未知蒸发水，不虚构干燥机。

- 选定流: 水蒸气
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_emission_delivery`
- 来源: `efisc-starch-processing-2014`


###### 化石源二氧化碳 (`fossil_carbon_dioxide`)

仅在前景真实燃料燃烧时纳入；保留化石来源、实测或独立有据的燃料碳和尾气依据。不重复外购货运已含排放。

- 选定流: 二氧化碳（化石源）
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_emission_delivery`
- 来源: `efisc-starch-processing-2014`

###### 一氧化碳 (`carbon_monoxide`)

记录所纳燃烧真实向空气排放的 CO 及尾气状态、方法。总 VOC 或总碳结果不能确定该物种。

- 选定流: 一氧化碳（化石源）
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_emission_delivery`
- 来源: `efisc-starch-processing-2014`

###### 一氧化氮 (`nitrogen_monoxide`)

真实向空气排放的 NO 与 NO2 分开；NOx 总指标须有真实物种拆分，否则保留为未解决监测指标。

- 选定流: 一氧化氮
- 流属性/单位: Mass / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_emission_delivery`
- 来源: `efisc-starch-processing-2014`

###### 二氧化氮 (`nitrogen_dioxide`)

记录真实向空气排放的 NO2，不假定其占 NOx 的比例。相关时保留燃料氮及进气氮贡献。

- 选定流: 二氧化氮
- 流属性/单位: Mass / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_emission_delivery`
- 来源: `efisc-starch-processing-2014`

###### 二氧化硫 (`sulfur_dioxide`)

仅记录所纳过程真实 SO2，并以独立有据的燃料硫和实测尾气约束。不规定固定硫因子。

- 选定流: 二氧化硫
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_emission_delivery`
- 来源: `efisc-starch-processing-2014`

###### 元素碳烟炱 (`soot_carbon`)

仅在物种特定测量确立真实元素碳烟炱时纳入。总颗粒物、粉尘或混合气溶胶不是元素碳；须另列每种真实已解析物种或具体收集废物。

- 选定流: 元素碳烟炱
- 流属性/单位: Mass / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_emission_delivery`
- 来源: `efisc-starch-processing-2014`

### 过程：清洗及残余物收集 (`cleaning`)

#### 输入

##### 产品流

###### 设备清洗供应水 (`cleaning_water`)

记录真实新增产品供应水，不是内部回用离心液。保留供方、水质及原始计量单位。体积转质量须有该水在记录状态下独立有据的密度；流参考属性不是密度。

- 选定流: 设备清洗供应水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_water`
- 来源: `efisc-starch-processing-2014`

###### 氢氧化钠水性清洗制剂 (`sodium_hydroxide_solution`)

仅在真实使用该具体整份外购制剂时纳入。记录供方配方及浓度；载水和活性成分作为供应溶液组成仅采购一次。若厂内配制，应改为逐项记录真实外购组分及实际混合能耗、损失，并抵消内部溶液转移。不得从一般清洗说明推断存在本化学品。

- 选定流: 氢氧化钠水性清洗制剂
- 流属性/单位: Mass / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_material`
- 来源: `efisc-starch-processing-2014`

###### 食品接触设备润滑油 (`lubricating_oil`)

仅在所纳设备真实领用润滑油时纳入，包括维修及更换。记录完整供应制剂和供方适配；适于食品接触不证明化学身份、无泄漏或零上游负荷。

- 选定流: 食品接触设备润滑油
- 流属性/单位: Mass / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_material`
- 来源: `efisc-starch-processing-2014`

###### 电力 (`cleaning_electricity`)

计量泵、设备清理、洒漏处置及实际残余物收集用电。保留零产出期间和真实发生但未经授权作业的负荷。若存在真实载热体或其他材料，须逐项增加具体独立流。

- 选定流: 电力
- 流属性/单位: Energy / kWh
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_power_cleaning`
- 来源: `efisc-starch-processing-2014`

##### 废物流

##### 基本流

###### 空气中的氧 (`cleaning_oxygen`)

仅纳入所含好氧劣变或残余处理的真实摄氧量，须独立实测或由真实化学计量平衡确定。与交付燃烧耗氧分开。不得仅凭湿质量残差或 COD 推出 O2；惰性气体及真实反应水另记。

- 选定流: 氧气
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_emission_cleaning`
- 来源: `efisc-starch-processing-2014`


#### 输出

##### 产品流

##### 废物流

###### 废设备水性清洗液 (`wash_effluent`)

记录真实整份污水、去向、组成、水和固体。在同一物理门核对清洗制剂、淡水与本输出。不得把 COD、氮或电导率当成特定分子排放，也不把污染物分析质量叠加在整份污水质量上。

- 选定流: 废设备水性清洗液
- 流属性/单位: Mass / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_liquid_cleaning`
- 来源: `efisc-starch-processing-2014`

###### 收集的湿马铃薯渣渗出液 (`pulp_leachate`)

依实际收集出口，将储存或搬运渗流与 discarded_centrate、wash_effluent 分开计量。记录溶解和悬浮固体、含水历史及去向。不得将所有湿质量差强记蒸发，也不假定本液体为清水。

- 选定流: 收集的湿马铃薯渣渗出液
- 流属性/单位: Mass / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_liquid_cleaning`
- 来源: `akv-pulp-datasheet-2024`; `efisc-starch-processing-2014`

##### 基本流

###### 水蒸气 (`water_vapour`)

仅记录独立于污水和存量测量而有据的实际向空气蒸发。测量水的状态；已积分气体体积不得再次乘时间。不据此推断干燥过程或默认蒸发量。

- 选定流: 水蒸气
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_emission_cleaning`
- 来源: `efisc-starch-processing-2014`

###### 生物源二氧化碳 (`biogenic_carbon_dioxide`)

仅记录真实劣变或所纳残余处理的实测生物源二氧化碳。合格产品路线不含主动发酵，但真实意外释放仍保留。碳来源与化石尾气分开。

- 选定流: 二氧化碳（生物源）
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_emission_cleaning`
- 来源: `efisc-starch-processing-2014`

###### 生物源甲烷 (`biogenic_methane`)

仅在有来源、介质、收集和去向证据的真实甲烷形成或逸散时纳入。不得用 COD、产气潜力或废物标签造出甲烷排放。

- 选定流: 生物源甲烷
- 流属性/单位: Mass / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_emission_cleaning`
- 来源: `efisc-starch-processing-2014`

###### 氨 (`ammonia`)

仅记录所纳作业向空气排放的实测 NH3 物种。总氮、水中铵和粗蛋白不是 NH3 质量；须用实测物种依据及独立氮平衡。

- 选定流: 氨
- 流属性/单位: Mass / kg
- 数量规则: 采用实测原始分子；仅引用第8节的同一次每参考流计算结果。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_emission_cleaning`
- 来源: `efisc-starch-processing-2014`

## 7. 分配和联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | 归因模型 | 声明采用归因清单，不假定替代或避免饲料信用。识别每项渣专属作业，通过真实或虚拟细分直接归属其材料、能源和残余处理负荷。低价饲料联产品并不自动无负荷。 | `ilcd-allocation-2010` |
| `allocation_causality` | 剩余真实共同交换 | 对仍共同的每个交换检验其与淀粉、渣、蛋白、可溶物及其他真实功能之间的决定性物理因果。记录机理、独立实测变量、范围及该关系为何决定该交换。质量、干物质、蛋白或能量份额本身不是因果，不同交换可能需要不同驱动。 | `ilcd-allocation-2010` |
| `allocation_residual` | 仅尚未解决的共同过程负荷 | 只有在细分和逐交换物理因果之后的真实剩余，才以同期、有代表性的真实共功能在共同过程门的实际状态、数量市场价值处理。需要时从价格中剔除产品专属下游运输、包装和调理，以获得可比同门价值。保留真实价格证据、时间变化、不确定性及敏感性。不规定固定渣份额，也不任意选择物理或经济分配。 | `ilcd-allocation-2010` |
| `allocation_upstream` | 供方交接 | 每批渣承接一个透明上游负荷向量，包含种植、真实共同淀粉过程及经评审的分配范围。以兼容供应淀粉方法数据集作接口，不重复制造。缺分配信息时保留未解决数据缺口，不能用零替代；前景不再次分配已分配的上游渣负荷。 | `ilcd-allocation-2010` |
| `allocation_status` | 产品与 Waste | 依据实际规格、接收合同、预期及实际用途、适用法律状态、处置义务和供方分配方法确定可用联产品或弃置 Waste。售价、饲用去向或“废物”名称单独均不足。不合格批和污水保留实物账并采用真实处理接口；无默认回收、处置或替代信用。 | `ilcd-allocation-2010` |
| `allocation_services` | 成品及交付服务 | 储存、搬运和运输依真实服务批次及容量约束，用计量及已证明服务因果归属。保留新旧及退回批次负荷年代。产品共功能分配仅作用于共同环境负荷，绝不作用于总湿质量、包装件数、实物存量或总运输服务。 | `ilcd-allocation-2010` |

## 8. 前景数据采集、计算及质量规则

采集仅存未除量原始值。下表 aggregation_rule 是最终目标范围的标签，不是在采集时进行除法；真正分子组装、单位换算和分配在计算层完成，唯一归一化步骤只执行一次。该区分适用于所有卡片、协议、公式和质量要求。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_pulp_recovery` | recovery | 湿渣及在制品 | 原始记录 | 批次; 植物来源; 供应淀粉线; 来料状态; 湿质量; 皮重; 干物质; 含水; 进出口; 时间; 期初在制品; 期末在制品; 继承向量; 转移配对 | 在声明门对每份整流称量采样，匹配供方及内部批次记录。保留未归一化原始观察和独立组分分析。 | kg | 每批及每事件 | 完整 H 及相邻存量历史；含零产出 | 声明供方交接及所有所纳场址服务门 | 每 1 kg 参考流 | 原始凭证; 校准; 配对记录; 代表性采样; 不确定性; 未解决缺口 |
| `cp_pulp_dewatering` | dewatering | 湿渣及在制品 | 原始记录 | 批次; 植物来源; 供应淀粉线; 来料状态; 湿质量; 皮重; 干物质; 含水; 进出口; 时间; 期初在制品; 期末在制品; 继承向量; 转移配对 | 在声明门对每份整流称量采样，匹配供方及内部批次记录。保留未归一化原始观察和独立组分分析。 | kg | 每批及每事件 | 完整 H 及相邻存量历史；含零产出 | 声明供方交接及所有所纳场址服务门 | 每 1 kg 参考流 | 原始凭证; 校准; 配对记录; 代表性采样; 不确定性; 未解决缺口 |
| `cp_pulp_release` | release | 湿渣及在制品 | 原始记录 | 批次; 植物来源; 供应淀粉线; 来料状态; 湿质量; 皮重; 干物质; 含水; 进出口; 时间; 期初在制品; 期末在制品; 继承向量; 转移配对 | 在声明门对每份整流称量采样，匹配供方及内部批次记录。保留未归一化原始观察和独立组分分析。 | kg | 每批及每事件 | 完整 H 及相邻存量历史；含零产出 | 声明供方交接及所有所纳场址服务门 | 每 1 kg 参考流 | 原始凭证; 校准; 配对记录; 代表性采样; 不确定性; 未解决缺口 |
| `cp_release` | release | 首次质量放行 | 原始记录 | 批次; 首次放行时间; 先前放行标识; 净湿质量; 秤校准; 含水或干物质; 异物; 卫生结果; 用途; 接收规格; 待验或拒收原因; 期末合格成品 | 校准净称量及有代表性的批次检验，与历史状态核对完整首次放行决定。接收标准及最长待验储存时间须有真实约定，无默认值。 | kg | 每批及每事件 | 完整 H 及相邻存量历史；含零产出 | 声明供方交接及所有所纳场址服务门 | 每 1 kg 参考流 | 原始凭证; 校准; 配对记录; 代表性采样; 不确定性; 未解决缺口 |
| `cp_fg` | delivery | 成品及交付服务存量 | 原始记录 | 批次; 年代; 期初成品; 新放行成品; 总发运; 接收方; 交付时间; 退回; 原交付冲回; 重验; 真实返工 F; 重复 X; 期末成品; 实物状态; 继承向量; 服务记录 | 逐实物批次跟踪储存至接收验收及历史负荷。分别采集总移动和服务观察，不在采集时除量。 | kg | 每批及每事件 | 完整 H 及相邻存量历史；含零产出 | 声明供方交接及所有所纳场址服务门 | 每 1 kg 参考流 | 原始凭证; 校准; 配对记录; 代表性采样; 不确定性; 未解决缺口 |
| `cp_power_recovery` | recovery | 各用电交换 | 原始记录 | 工序; 电表; 起读数; 止读数; 设备; 运行区间; 空转; 失败批次; 份额证据; 供方; 电压; 原始单位 | 保留分表原始读数差。缺分表时用独立实测负载与真实运行区间并披露不确定性，保留启停及空转。真实功率速率仅积分一次。 | kWh | 每批及每事件 | 完整 H 及相邻存量历史；含零产出 | 声明供方交接及所有所纳场址服务门 | 每 1 kg 参考流 | 原始凭证; 校准; 配对记录; 代表性采样; 不确定性; 未解决缺口 |
| `cp_power_dewatering` | dewatering | 各用电交换 | 原始记录 | 工序; 电表; 起读数; 止读数; 设备; 运行区间; 空转; 失败批次; 份额证据; 供方; 电压; 原始单位 | 保留分表原始读数差。缺分表时用独立实测负载与真实运行区间并披露不确定性，保留启停及空转。真实功率速率仅积分一次。 | kWh | 每批及每事件 | 完整 H 及相邻存量历史；含零产出 | 声明供方交接及所有所纳场址服务门 | 每 1 kg 参考流 | 原始凭证; 校准; 配对记录; 代表性采样; 不确定性; 未解决缺口 |
| `cp_power_release` | release | 各用电交换 | 原始记录 | 工序; 电表; 起读数; 止读数; 设备; 运行区间; 空转; 失败批次; 份额证据; 供方; 电压; 原始单位 | 保留分表原始读数差。缺分表时用独立实测负载与真实运行区间并披露不确定性，保留启停及空转。真实功率速率仅积分一次。 | kWh | 每批及每事件 | 完整 H 及相邻存量历史；含零产出 | 声明供方交接及所有所纳场址服务门 | 每 1 kg 参考流 | 原始凭证; 校准; 配对记录; 代表性采样; 不确定性; 未解决缺口 |
| `cp_power_delivery` | delivery | 各用电交换 | 原始记录 | 工序; 电表; 起读数; 止读数; 设备; 运行区间; 空转; 失败批次; 份额证据; 供方; 电压; 原始单位 | 保留分表原始读数差。缺分表时用独立实测负载与真实运行区间并披露不确定性，保留启停及空转。真实功率速率仅积分一次。 | kWh | 每批及每事件 | 完整 H 及相邻存量历史；含零产出 | 声明供方交接及所有所纳场址服务门 | 每 1 kg 参考流 | 原始凭证; 校准; 配对记录; 代表性采样; 不确定性; 未解决缺口 |
| `cp_power_cleaning` | cleaning | 各用电交换 | 原始记录 | 工序; 电表; 起读数; 止读数; 设备; 运行区间; 空转; 失败批次; 份额证据; 供方; 电压; 原始单位 | 保留分表原始读数差。缺分表时用独立实测负载与真实运行区间并披露不确定性，保留启停及空转。真实功率速率仅积分一次。 | kWh | 每批及每事件 | 完整 H 及相邻存量历史；含零产出 | 声明供方交接及所有所纳场址服务门 | 每 1 kg 参考流 | 原始凭证; 校准; 配对记录; 代表性采样; 不确定性; 未解决缺口 |
| `cp_water` | cleaning | 新增供应水 | 原始记录 | 供水方; 入口; 批次; 原始体积或质量; 表校准; 温度; 实测密度; 回用量; 配对回水 | 新增水与内部离心液分表计量。保留原始体积和用于换算的独立状态特定密度，不把其他物质假定为水密度。 | kg | 每批及每事件 | 完整 H 及相邻存量历史；含零产出 | 声明供方交接及所有所纳场址服务门 | 每 1 kg 参考流 | 原始凭证; 校准; 配对记录; 代表性采样; 不确定性; 未解决缺口 |
| `cp_liquid_dewatering` | dewatering | 各真实液体出口 | 原始记录 | 出口; 批次; 产品或 Waste 状态; 去向; 原始湿质量或积分体积; 液体密度及状态; 悬浮固体; 可溶固体; 淀粉; 含水; COD; TOC; 总氮; 转移配对 | 逐隔离液体出口计量，独立采样固体和水。整份液体为质量主账，分析及污染指标非叠加。积分体积不再乘 H。 | kg | 每批及每事件 | 完整 H 及相邻存量历史；含零产出 | 声明供方交接及所有所纳场址服务门 | 每 1 kg 参考流 | 原始凭证; 校准; 配对记录; 代表性采样; 不确定性; 未解决缺口 |
| `cp_liquid_cleaning` | cleaning | 各真实液体出口 | 原始记录 | 出口; 批次; 产品或 Waste 状态; 去向; 原始湿质量或积分体积; 液体密度及状态; 悬浮固体; 可溶固体; 淀粉; 含水; COD; TOC; 总氮; 转移配对 | 逐隔离液体出口计量，独立采样固体和水。整份液体为质量主账，分析及污染指标非叠加。积分体积不再乘 H。 | kg | 每批及每事件 | 完整 H 及相邻存量历史；含零产出 | 声明供方交接及所有所纳场址服务门 | 每 1 kg 参考流 | 原始凭证; 校准; 配对记录; 代表性采样; 不确定性; 未解决缺口 |
| `cp_material` | cleaning | 各外购制剂 | 原始记录 | 供方; 物品或配方; 整份供应质量; 活性分析; 载水; 领用; 未用退回; 期初存量; 期末存量; 厂内配料; 能耗; 损失 | 逐具体制剂核对采购和领用记录。整份外购溶液仅计一次，真实厂内配制须另列外购组分和配对内部溶液记录。 | kg | 每批及每事件 | 完整 H 及相邻存量历史；含零产出 | 声明供方交接及所有所纳场址服务门 | 每 1 kg 参考流 | 原始凭证; 校准; 配对记录; 代表性采样; 不确定性; 未解决缺口 |
| `cp_packaging` | delivery | 各覆盖物品 | 原始记录 | 物品; 组成; 空物皮重; 附着渣; 期初空物及附着存量; 采购; 外部回收收到量; 期末存量; 总发运物品质量; 对外返还; 废弃; 内部复用 | 按 boundary_article 核对完整物品等式。采用物品特定实测皮重或质量，不编每件千克。附着渣经非叠加实物桥接分开，并保留周转存量历史。 | kg | 每批及每事件 | 完整 H 及相邻存量历史；含零产出 | 声明供方交接及所有所纳场址服务门 | 每 1 kg 参考流 | 原始凭证; 校准; 配对记录; 代表性采样; 不确定性; 未解决缺口 |
| `cp_waste_release` | release | 各具体固体弃置物 | 原始记录 | 流; 批次; 状态; 原因; 实际湿质量; 干固体; 水; 附着物; 历史负荷; 接收方; 处理; 处置记录 | 逐真实隔离弃置物流称量并核实路线及状态。保留失败及旧存量废物，不藏在“其他”或零中。新发现真实固体流须逐项另列。 | kg | 每批及每事件 | 完整 H 及相邻存量历史；含零产出 | 声明供方交接及所有所纳场址服务门 | 每 1 kg 参考流 | 原始凭证; 校准; 配对记录; 代表性采样; 不确定性; 未解决缺口 |
| `cp_waste_delivery` | delivery | 各具体固体弃置物 | 原始记录 | 流; 批次; 状态; 原因; 实际湿质量; 干固体; 水; 附着物; 历史负荷; 接收方; 处理; 处置记录 | 逐真实隔离弃置物流称量并核实路线及状态。保留失败及旧存量废物，不藏在“其他”或零中。新发现真实固体流须逐项另列。 | kg | 每批及每事件 | 完整 H 及相邻存量历史；含零产出 | 声明供方交接及所有所纳场址服务门 | 每 1 kg 参考流 | 原始凭证; 校准; 配对记录; 代表性采样; 不确定性; 未解决缺口 |
| `cp_waste_recovery` | recovery | 各具体固体弃置物 | 原始记录 | 流; 批次; 状态; 原因; 实际湿质量; 干固体; 水; 附着物; 历史负荷; 接收方; 处理; 处置记录 | 逐真实隔离弃置物流称量并核实路线及状态。保留失败及旧存量废物，不藏在“其他”或零中。新发现真实固体流须逐项另列。 | kg | 每批及每事件 | 完整 H 及相邻存量历史；含零产出 | 声明供方交接及所有所纳场址服务门 | 每 1 kg 参考流 | 原始凭证; 校准; 配对记录; 代表性采样; 不确定性; 未解决缺口 |
| `cp_fuel` | delivery | 各真实燃料 | 原始记录 | 燃料; 供应制剂; 接收; 存量变化; 原始升或质量; 实测密度温度; 碳; 硫; 运行车辆; 供方边界 | 记录所纳自营设备真实原始耗油量，仅按同一燃料状态换算；保留实测或独立有据组成及尾气，避免与外购服务投入双计。 | kg | 每批及每事件 | 完整 H 及相邻存量历史；含零产出 | 声明供方交接及所有所纳场址服务门 | 每 1 kg 参考流 | 原始凭证; 校准; 配对记录; 代表性采样; 不确定性; 未解决缺口 |
| `cp_transport` | delivery | 真实货运服务 | 原始记录 | 行程; 供方; 路线; 湿载荷; 距离; 容量约束; 空驶; 车辆; 接收方; 原交付; 退回; 服务分配 | 保留真实质量距离记录、退回移动及供方范围。先逐行程量化再有据服务归属，不对实物载荷施加共同产品经济份额。 | tkm | 每批及每事件 | 完整 H 及相邻存量历史；含零产出 | 声明供方交接及所有所纳场址服务门 | 每 1 kg 参考流 | 原始凭证; 校准; 配对记录; 代表性采样; 不确定性; 未解决缺口 |
| `cp_emission_cleaning` | cleaning | 各真实气体或物种 | 原始记录 | 物种; 化学身份; 来源; 介质; 工序; 浓度; 参考状态; 原始速率或积分体积; 速率时长; 气体密度; 含水; 收集; 去向; 不确定性 | 采用物种特定实测或独立有据的物料反应平衡。真实速率仅积分一次，积分体积不额外乘时间。保留整流与组分桥接，区分生物与化石碳。污染总指标不能单独造出物种质量。 | kg | 每批及每事件 | 完整 H 及相邻存量历史；含零产出 | 声明供方交接及所有所纳场址服务门 | 每 1 kg 参考流 | 原始凭证; 校准; 配对记录; 代表性采样; 不确定性; 未解决缺口 |
| `cp_emission_delivery` | delivery | 各真实气体或物种 | 原始记录 | 物种; 化学身份; 来源; 介质; 工序; 浓度; 参考状态; 原始速率或积分体积; 速率时长; 气体密度; 含水; 收集; 去向; 不确定性 | 采用物种特定实测或独立有据的物料反应平衡。真实速率仅积分一次，积分体积不额外乘时间。保留整流与组分桥接，区分生物与化石碳。污染总指标不能单独造出物种质量。 | kg | 每批及每事件 | 完整 H 及相邻存量历史；含零产出 | 声明供方交接及所有所纳场址服务门 | 每 1 kg 参考流 | 原始凭证; 校准; 配对记录; 代表性采样; 不确定性; 未解决缺口 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `wet_solids` | 各物料分析子账 | DM_s = wet_s × dm_fraction_s；water_s = wet_s × moisture_fraction_s；独立核验测量及固体去向，主账与子账非叠加。 | wet_s; dm_fraction_s; moisture_fraction_s; cp_pulp_recovery; cp_pulp_dewatering; cp_pulp_release; cp_liquid_dewatering; cp_liquid_cleaning | DM_s; water_s | `efisc-starch-processing-2014`; `akv-pulp-datasheet-2024` |
| `first_release_q` | 唯一产量门 | Q = Σ newly_first_released_net_wet_lot_mass；按历史标识逐整批首次计入；包含合格期末成品，排除期初已放行成品、重复和包装。 | newly_first_released_net_wet_lot_mass; cp_release; cp_fg | Q | `akv-pulp-datasheet-2024`; `ilcd-allocation-2010` |
| `physical_gate` | 制造及成品实物门 | opening_physical_stock + actual_physical_in = closing_physical_stock + actual_physical_out；按整流、干固体、水及相关元素独立核对真实反应和气相转移；合并仅抵消配对内流。 | opening_physical_stock; actual_physical_in; closing_physical_stock; actual_physical_out; cp_pulp_recovery; cp_pulp_dewatering; cp_pulp_release; cp_fg; cp_liquid_dewatering; cp_liquid_cleaning; cp_emission_cleaning; cp_emission_delivery | grossV_ledger | `efisc-starch-processing-2014` |
| `assemble_numerator` | 各环境交换分子 | A_j = opening_unreleased_WIP_vector_j + actual_new_attributed_load_j + genuine_incremental_F_j - closing_unreleased_WIP_vector_j - proved_same_side_duplicate_X_j；先真实单位换算、专属归属及有据共同过程分配；保留失败清理负荷。该制造分子只扣期末尚未放行的在制品或待验负荷，绝不扣新增已放行期末成品，因为其首次放行已包含在 Q 内。旧已放行成品及其实际交付服务另按年代滚动，仅本期放行群组的服务进入对应分子。  actual_new_attributed_load_j 不含已单独计入 F_j 的返工负荷，每项新增负荷仅计一次。 | opening_unreleased_WIP_vector_j; actual_new_attributed_load_j; genuine_incremental_F_j; closing_unreleased_WIP_vector_j; proved_same_side_duplicate_X_j; cp_fg; cp_pulp_recovery; cp_pulp_dewatering; cp_pulp_release | A_j | `ilcd-allocation-2010` |
| `normalize_once` | 所有清单结果 | result_j = numerator_j / Q；仅执行一次；numerator_j 标记为 grossV 实物分子或 A_j 环境分子，两种账非叠加。Q>0 时输出每1 kg参考流；Q=0 时不输出单位结果且保留存量、负荷及继承归属。H 不再作分母，卡片和协议仅引用本次结果。 | numerator_j; Q; cp_release | result_j | `ilcd-allocation-2010` |
| `service_stock` | 成品服务及退回 | opening_FG + current_first_release + external_returns_received = closing_FG + gross_dispatch + actual_FG_discards + other_verified_external_out；按年代核对原交付冲回、失水和真实反应，单独归属服务且不新增 Q。 | opening_FG; current_first_release; external_returns_received; closing_FG; gross_dispatch; actual_FG_discards; other_verified_external_out; cp_fg | FG_service_ledger | `ilcd-allocation-2010`; `akv-pulp-datasheet-2024` |
| `cover_stock` | 各覆盖物品 | opening_empty_and_attached + purchases + external_returns_received = closing_empty_and_attached + gross_shipped_articles + external_returns_sent + waste_articles；内部复用抵消，附着渣非叠加桥接；不进入 Q。 | opening_empty_and_attached; purchases; external_returns_received; closing_empty_and_attached; gross_shipped_articles; external_returns_sent; waste_articles; cp_packaging | cover_ledger | `akv-pulp-datasheet-2024`; `ilcd-allocation-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `source_identity` | 来源及路线 | 一级产品原件及独立过程方法支持相应主张；原取得与本次复用或提取时间分开；完整页段和反例保留，不将摘要冒充全文。 | 原件版本; 页段; 使用范围 |
| `batch_quality` | 合格湿态终端 | 每批净湿质量、干物质或含水、异物、卫生、储运时间和接收条件可追；普通未来数量待采不代表核心产品不存在。 | 真实批次和接收记录 |
| `inventory_integrity` | 实物及负荷账 | 逐门逐流独立闭合、单位转换、份额及不确定性有据；stock物理量与继承向量分别滚动；不以残差代替物种证据。 | 计量; 存量; 负荷年代; 分配机理 |
| `native_provider` | 原生流及供方 | 原生硬身份、参考属性及单位支持与背景供方兼容性分别审查；任何未验证 UUID 不写入；无命中与真实查询失败分开。 | 完整原生对象及精确链；未解决列表 |
| `scientific` | 证据及审批 | 工业来源不证明LCA分配；保留所有终端或方法缺口，不据此推定审批。 | 独立方法证据及适用限制 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 参考批次 | 核实马铃薯植物来源、淀粉制造分离、真实机械脱水状态、鲜湿供应、未发酵、未混配及声明牛饲料接收用途。不得只按名称或分类选流；采用 UUID 前逐项核看原生全部名称、同义词及注释、CAS、路线、状态、来源、介质、地域和属性。原生证据缺失保持明确，不得用相邻产品代替。 | `un-cpc-2025`; `akv-pulp-datasheet-2024`; `efisc-starch-processing-2014` |
| `validation_release` | Q 与质量 | 要求带皮重及校准秤记录的净湿称量、逐批干物质或含水及异物结果、适用卫生条件和接收方认可的时间储存条件。Q 对每整批首次放行仅计一次且含合格期末成品；排除期初已放行成品、重复检验、内部转移和所有包装。不虚构含水、安全、储存时限或营养数值阈值。 | `efisc-starch-processing-2014`; `ilcd-allocation-2010` |
| `validation_completeness` | 所有实物门 | 在制造、成品及合并门，分别在有据测量不确定性内独立闭合整份湿质量、干固体、水及相关元素账。存在反应时区分反应水、游离水和真实气体相变。不得以一个残差求两个未知、用水密度代其他材料，或将污染总指标作为指定分子质量。 | `efisc-starch-processing-2014`; `ilcd-allocation-2010` |
| `validation_burdens` | 分子及存量 | 逐批分别保留实物存量及继承环境向量。核对真实新增 F、证实同侧重复 X、失败空转清洗负荷、期初期末在制品和成品、退回及真实新增返工。历史负荷或共同过程归属缺失是未解决，不是零。实物账与环境账绝不相加。 | `ilcd-allocation-2010` |
| `validation_once` | 归一化 | 采集协议保留未归一化原始观察，先换算真实单位或速率，再分配且仅在计算阶段除 Q 一次。H 只是观察期。已积分气液体积不得再次乘时长。Q=0 保留负荷和存量且不输出单位结果，明确后续继承。 | `ilcd-allocation-2010` |
| `validation_interface` | 跨系统及原生证据 | 每个背景供方须独立于流身份声明供应商、场址、时间、技术及兼容性。每个选定流均须核实完整权威记录及其参考属性、单位组和参考单位链。存档支持记录只确立所保留的身份和单位，不证明当前平台可用性或产品及供方适配。数据集版本保留在支持证据中，PCR 的 UUID 不带版本。未核实 UUID 保持空缺。 | `efisc-starch-processing-2014`; `ilcd-allocation-2010` |
| `validation_report` | 数据包披露 | 分别报告已执行、跳过及未解决检查；在可消费元数据和流描述中保留完整原生限制及所有必需限定信息。Schema 或有限测量通过不等于科学、翻译、映射或发布审批。真实路线、终端或方法证据缺口阻止合格数据集主张。 | `efisc-starch-processing-2014`; `ilcd-allocation-2010` |
| `validation_service_scope` | 制造门与接收门 | 首次放行制造结果与逐放行批群的储存、交付服务增量分开报告。期末已放行存货进入 Q，但不证明交付已完成。披露交付覆盖未完成部分及其待计负荷；相应批群服务核对完成前不得主张完整接收门结果。不得将旧批群服务加到本期制造 Q。 | `ilcd-allocation-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 仅在身份状态及接收用途适用时，作为鲜湿马铃薯淀粉渣供应数据；未来供方现场数据仍须采集 |
| allowed_use | 实际同路线同状态供货；透明上游接口和独立交付服务账；有据非叠加干基报告 |
| excluded_use | 干饲料或营养功能替代; 青贮或干燥混配路线; 淀粉和面筋制造替代; 自动零负荷或回收信用; 无状态限制的通用残余物数据 |
| required_metadata | 马铃薯物种及单一植物原料; 具名淀粉制造商及场址; 分离及交接门; 实际接收及供应脱水状态; 机械技术及是否已在上游完成; 鲜湿及未发酵状态; 无糖蜜或汁液或饲料混配; 声明牛饲料接收用途及合同; 产品或 Waste 状态及真实去向; 逐批净湿质量及皮重; 逐批干物质或含水; 异物及适用卫生验收; 真实最长暂存及运输时间; 储存及覆盖条件; 首次整批质量放行门及历史; 参考期 H 及 Q; 期初期末在制品及成品; 总交付及退回标识; 包装及周转存量基准; 上游向量及联合过程分配接口; 地域技术及供方兼容性; 原生流身份及属性支持缺口 |
| required_quality_disclosure | 原始计量和采样; 供方适配; 实物库存及负荷年代; 分配理由与敏感性; 缺失UUID及属性支持; 未解决数据和方法限制 |
| update_trigger | 植物或制造来源、机械技术、湿干状态、混配或发酵、接收用途、卫生和时限、共同过程分配、供方、包装或原生流发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | official_guidance | UN Statistics Division. CPC Version 3.0 structure and Explanatory Notes, 30 June 2025, pp.103–104 and199–200. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 分类语境：39130 与粮谷制粉残余物39120、淀粉及面筋23220、配制饲料23319、酿造蒸馏残余物39160 的区别。分类不等于产品审批。 |
| `akv-pulp-datasheet-2024` | literature | AKV. AKV KARTOFFELPULP DATABLAD–2024, 27 March2024, complete single page. https://www.akv.dk/media/pppmhwpc/datablad-pulp-2024.pdf | 机械脱水马铃薯淀粉渣身份一级证据；鲜用牛饲料用途；覆盖要求及季节变化；青贮反例。典型组成和饲用值不是默认值或功能等价。 |
| `akv-pulp-investment-2024` | literature | AKV. AKV-NYT No.1 2024, Kampagnen og nye investeringer, PDFp.2/printedp.1. https://www.akv.dk/media/4rgnoath/akv-nyt-marts-2024.pdf | 商业规格与渣用离心机背景一级证据；低固形物和用水变化。投资公告不证明已安装完成；腐殖物脱水属于其他过程。 |
| `efisc-starch-processing-2014` | official_guidance | Starch Europe/EFISC. European Guide to good practice, sector reference document on safe feed materials from starch processing, v3.1, November2014, PDFpp.8–10,13–17,46. https://food.ec.europa.eu/document/download/18f5bf7d-217f-459b-9751-2ecffe8808f4_en | 独立行业身份及工艺图：分离后的渣、机械脱水以及有别的干燥、蛋白和汁液支线；散装储运风险。图为示例而非标准化工厂设计；不据此推导分配因子或现场性能。 |
| `ilcd-allocation-2010` | official_guidance | European Commission JRC. ILCD Handbook General guide for LCA Detailed guidance, first edition March2010, §§7.9.2–7.9.3, printedpp.255–265/PDFpp.275–285. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因细分和虚拟细分；逐交换的决定性物理因果；真实同门状态及市场价值下的剩余共同过程分配。不支持工业渣身份、饲用安全、组成或数值分配因子。 |
| `alfa-laval-starch` | literature | Alfa Laval. The all-round choice for starch equipment: solutions for processing starch, PDF p.10, Starch from tubers. https://www.alfalaval.nl/globalassets/documents/industries/food-dairy-and-beverage/starch-and-sweetener/solutions-for-processing-starch.pdf | 设备制造商原始工艺背景，区分纤维渣、淀粉及薯汁；支持脱水渣的牲畜饲料路线。不推定具体设备配置、数量、安装情况或当今行业性能。 |
| `oecd-potato-2020` | official_guidance | OECD. Revised Consensus Document on Compositional Considerations for New Varieties of Potato, ENV/JM/MONO(2020)37, Figure 3 and paragraph 18, p.19. https://one.oecd.org/document/ENV/JM/MONO%282020%2937/en/pdf | 机构工艺背景，将渣的脱水与薯汁凝聚蛋白回收区分。不证明本供方、批次安全、组成或定量清单。 |
