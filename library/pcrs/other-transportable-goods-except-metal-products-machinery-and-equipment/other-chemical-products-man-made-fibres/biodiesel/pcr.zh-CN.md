---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.biodiesel
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 精炼大豆油连续碱催化酯交换制散装脂肪酸甲酯生物柴油

## 1. 范围与适用性

本PCR限定精炼原生大豆油的连续甲醇钠催化甲醇酯交换，经硫酸中和、水洗、干燥及实际精滤得到未与石油柴油掺混的散装甲酯液体。边界延伸至工厂实际净装车交接，包括真实仓储、搬运、装车、退回返工及辅助负荷。纯大豆油甲酯与HVO烃、醇燃料、石油柴油及柴油混合物不是同一参考。

NREL原始技术报告证明所选工业操作及甘油/水/醇的区分；Desmet独立证实工业串联CSTR/沉降及甲醇回收的可行性。此组合支持方法边界，不证明某一真实工厂的投加、收率、排放、地理或原料分析，也不把实验配方当工业清单。具体数据生产须满足下列原始采集要求。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.biodiesel |
| classification_refs | CPC 3.0 35491；较窄候选范围，不宣称已有接受映射 |
| covered_products | 精炼大豆油制纯散装脂肪酸甲酯；连续甲醇钠催化、硫酸中和、水洗和干燥 |
| excluded_products | HVO/可再生柴油烃；乙酯/丙酯；醇燃料；化石柴油；柴油混合物；混合油/废油原料；酸酯化或酶路线；精馏甘油；桶/IBC供货 |
| representative_product | 达到声明生物柴油规格并验收的未掺混大豆油甲酯液体，散装装车 |
| production_route | 精炼油接收→串联CSTR酯交换/沉降→甲醇回收→酸/水洗→干燥/精滤→放行罐储存→散装装车；粗甘油脱甲醇/中和 |
| market_state | 工厂装车软管交接的实际整份液体；保留残余水/甲醇及质量状态，不是纯酯活性质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 实际净装车交接的纯散装大豆油脂肪酸甲酯生物柴油 |
| How much | 1 千克 |
| How well | 声明实际验收燃料规格、甲酯/氧分析及整份供货状态；无通用性能等价 |
| How long or cycle | 装车门一次净供货；不以燃烧/使用寿命为参考 |
| reference_flow_link | delivered_biodiesel |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 生物柴油 `888cd344-bb70-40b9-86d8-5a490a89718a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 精炼大豆油来源及实际原料水分/游离酸/甘油酯分析; 连续甲醇钠路线及整份催化剂/酸供货组成; 纯甲酯身份及声明验收规格和实际氧含量; 净交付装车门及同群Q和退回核对; 场址地理及供应者/公用工程相容性; 报告期及期初/末在制品和成品库存与结转负荷; 物理甲醇/油回收及实际甘油/废物状态; 分配层级及交接状态证据且无自动信用 |

原生生物柴油为工厂生产混合Product，Mass参考，未指定供货地理或CAS。完整名称中的“含氧量11%”必须保留并与实际分析核对；它没有提供容差或批次检测结果。宽泛注释覆盖甲/乙/丙酯，本方法只允许甲酯；任何实际不相容特征须解决后才可使用该UUID，不能以用途相同放行。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用整份生物柴油净交付质量，排除罐车及运输包装；Q为实际净交付，不是新增产量或酯活性含量。 |
| `whole_solutions` | material inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采购油、催化剂和酸溶液按整份外部投入核算；分析值形成嵌套组分/水子账，不重复采购。 |
| `volume_conversion` | volume records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 体积转质量须用同批液体的实际密度和温度。已积分体积不得再乘持续时间。能量参考燃料转质量前须有实际相容参考及匹配实测低位热值；次级流系数不能提供密度或低位热值。 |
| `electricity_units` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 计量电量按3.6 MJ/kWh换为MJ。此精确单位转换不是热效率或燃料热值。蒸汽热量须有实际供回焓及相符供应者参考。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 生物柴油场址接收外部精炼大豆油及分别供货的试剂/公用工程；保留全部上游负荷 |
| starting_condition_role | 前景采集起点，不是零负荷摇篮 |
| product_classification_scope | 仅CPC 3.0 35491中纯大豆油脂肪酸甲酯子集 |
| recursive_input_rule | 同类别退回或采购生物柴油保留来源及继承负荷；内部转移抵消，购入产品不是现场新增产量。 |
| upstream_dataset_requirement | 匹配油料种植/提取/精炼、实际国家/土地利用核算及联产品分配；匹配整份催化剂/酸制剂、甲醇生产组合、水和公用工程。不得按价格或名称推断废物截断。 |
| disclosure | 声明实际供货状态、门、地理、操作、库存/结转基准、回收界面、分配和未决供应者。门外道路运输、使用及燃烧不在装车门内。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | sme_site | 纳入接收/储存、反应/分离、甲醇精馏、水洗/干燥/精滤、至实际门的粗甘油调理、公用工程、清洗、返工、成品仓储及装车。使用数据集前须将实际新增化学品、燃料、包装组件、废物和基本流物种分别建行；未列行不能成为截断依据。 | `nrel-biodiesel-technology-2004`, `desmet-biodiesel-process`, `desmet-cstr-transesterification`, `desmet-methanol-recovery` |
| boundary_stocks | all inventory rows | 保留原始期间及批群账，包括失败/零产出运行、退回及期初/末原料、在制品、回收醇/油和成品；负荷随库存结转。不得将未交付期末库存负荷计给本期交付，也不得漏掉实际交付期初库存的负荷。 |  |
| boundary_upstream | refined_oil | 本路线消耗带种植/提取/精炼继承负荷的原生精炼大豆油，排除废油。拟扩展废料时须有前用途、法律/物理废物状态、收集/预处理、继承负荷和分配体系证据；绝不套通用零负荷。 | `nrel-biodiesel-technology-2004`, `jrc-ilcd-allocation-2010` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sme_site | 大豆油甲酯联产及散装交付 | required | 所选精炼油/连续甲醇钠/水洗路线 | foreground | 每 1 kg 参考流 |

本汇总过程保留每个实际反应、沉降、回收、整理、仓储和装车子操作的原始子账及责任人，内部接口在合并时抵消。实际装车为散装罐车，无一次性桶/IBC默认值；任何真实纳入包装、燃料或处理试剂须先增加独立原子行，不能删除其负荷。

### 过程：大豆油甲酯联产及散装交付（`sme_site`）

#### 输入

##### 产品流

###### 精炼大豆油原料 （`refined_oil`）

按实际整份供货油接收精炼大豆油，并测定水分、游离脂肪酸、甘油酯、磷及不溶物。原生成品油生产混合身份未指定供货地理或纯度；种植、提取和精炼上游必须与实际供应者匹配。

- 选定流：精炼大豆油 `a113893c-4722-4285-b86e-fddcc8b54e46`
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q，仅报告一次；A_i为匹配的未归一交付群数量，Q为净交付千克，见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`nrel-biodiesel-technology-2004`, `desmet-biodiesel-process`

###### 单独采购的补充甲醇 （`fresh_methanol`）

仅记录向本系统领用的单独采购甲醇，保留纯度和含水量分析。此 CAS 67-56-1 市场平均原生身份描述煤气化、煤焦化及天然气生产和管道/储罐供货，不能证明实际组合、地理或供应者负荷。催化剂溶液自带甲醇和内部回收甲醇不能再计为采购。原生供货地理未指定；工业标准及管道/储罐描述不能证明特定供货牌号或实测组成。

- 选定流：甲醇（市场平均） `adbc8430-7937-4ade-b7a5-cb1797dda661`
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q，仅报告一次；A_i为匹配的未归一交付群数量，Q为净交付千克，见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`nrel-biodiesel-technology-2004`, `desmet-methanol-recovery`

###### 整份商用催化剂溶液 （`methoxide_solution`）

称量实际采购的甲醇钠甲醇溶液，记录供应浓度、残余水及杂质。活性甲醇钠和甲醇载体仅为组成子账，不是另两项外部交换；不预设25%或30%浓度，也不代表现场用氢氧化钠配制。

- 选定流：甲醇钠的甲醇溶液
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q，仅报告一次；A_i为匹配的未归一交付群数量，Q为净交付千克，见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`nrel-biodiesel-technology-2004`

###### 整份中和酸溶液 （`sulfuric_solution`）

所选变体实际以硫酸溶液处理中和催化剂/皂相，并在有记录时用于酸化洗涤。记录整份供货溶液及实际硫酸/水分析；不得替换为固定浓酸牌号或酸酯化原料路线。

- 选定流：催化剂中和用硫酸溶液
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q，仅报告一次；A_i为匹配的未归一交付群数量，Q为净交付千克，见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`nrel-biodiesel-technology-2004`

###### 洗涤及清洗水 （`soft_water`）

记录酯洗涤、清洗及实际补充所用外供软化水。保留支路计量、水处理供应者和水质；内部洗水回用是转移，报告示例不是用水因子。

- 选定流：软化工艺水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q，仅报告一次；A_i为匹配的未归一交付群数量，Q为净交付千克，见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`nrel-biodiesel-technology-2004`

###### 电网电力 （`electricity`）

覆盖泵送、搅拌、分离、真空、冷却、回收、储罐、清洗、搬运及装车。此原生身份为CN、1–35千伏、用户侧电网平均消费组合，仅适用于实际相符供电。原生能量属性名称并不将电力变成可燃燃料，也不能证明燃料低位热值。其他供电须独立核实身份及供应者。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：A_i / Q，仅报告一次；A_i为匹配的未归一交付群数量，Q为净交付千克，见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`nrel-biodiesel-technology-2004`

###### 间接加热蒸汽 （`heating_steam`）

计量反应加热、甲醇回收、干燥及储罐加热的实际外供蒸汽，保留压力、温度、相态/干度及入口焓。保留凝结水返回状态；蒸汽不是直接反应原料，也不是未指定的热/燃料集合。

- 选定流：生物柴油工艺间接加热用外供蒸汽
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q，仅报告一次；A_i为匹配的未归一交付群数量，Q为净交付千克，见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`nrel-biodiesel-technology-2004`, `desmet-methanol-recovery`

###### 有条件纳入的聚丙烯滤材更换 （`filter_medium`）

仅在实际精滤介质为聚丙烯时纳入；保留型号、质量、更换及持液记录。其他实际聚合物或新增吸附剂须分别建原子行；本水洗画像不包含干洗树脂路线。

- 选定流：聚丙烯液体精滤介质
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q，仅报告一次；A_i为匹配的未归一交付群数量，Q为净交付千克，见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`nrel-biodiesel-technology-2004`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收的散装生物柴油净交付 （`delivered_biodiesel`）

唯一终端参考输出是工厂装车软管交接的实际净交付散装大豆油脂肪酸甲酯，排除罐车皮重及同群核对下的退回量。保留放行证书、实际氧含量、酯身份、残余甲醇/水/甘油酯及装车状态。它不等于新增放行产量或期末罐存。所选原生Product是工厂生产混合，完整名称特征为“含氧量11%”，未提供分析容差，供货地理及CAS未指定。保留此特征和实际分析/相容性决策，不将其视为实测默认值。宽泛注释包括甲酯、乙酯及丙酯，本行仅允许大豆油甲酯，不采用原生可直接替代、清洁及可生物降解等宣传主张。

- 选定流：生物柴油 `888cd344-bb70-40b9-86d8-5a490a89718a`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_gate`
- 来源：`nrel-biodiesel-technology-2004`, `desmet-biodiesel-process`

###### 实际可销售的粗甘油联产品 （`crude_glycerol`）

仅有实际接收方验收和可用商售粗溶液证据时作为Product纳入。计量整份湿溶液、甘油/水/甲醇/盐/皂/脂肪分析及交接门，不采用理论纯甘油或固定80–85%品级。药用精制不在此路线内。不可销售物料是独立废物转移，同一数量不能既列此行又列废物。

- 选定流：大豆油生物柴油副产脱甲醇粗甘油溶液
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q，仅报告一次；A_i为匹配的未归一交付群数量，Q为净交付千克，见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outputs`
- 来源：`nrel-biodiesel-technology-2004`

###### 实际外部凝结水返回 （`returned_condensate`）

仅记录实际外返凝结水及其质量、温度和焓；内部循环抵消。热量核算依据供汽合同；返回不自动构成可售联产品、避免用水信用或废水排放。

- 选定流：返还外部蒸汽供应者的凝结水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q，仅报告一次；A_i为匹配的未归一交付群数量，Q为净交付千克，见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`nrel-biodiesel-technology-2004`

##### 废物流

###### 外送水相废液 （`aqueous_effluent`）

计量内部回用后实际外送的洗涤/清洗/回收废水，保留水、甲醇、甘油、油、盐、pH和接收记录。COD/TOC可描述处理需求，但不能识别物种、补齐缺失质量或确定反应水。零废水宣传不能证明无废水。

- 选定流：外送处理的生物柴油洗涤废水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q，仅报告一次；A_i为匹配的未归一交付群数量，Q为净交付千克，见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outputs`
- 来源：`nrel-biodiesel-technology-2004`, `desmet-methanol-recovery`

###### 废弃中和污泥 （`salt_sludge`）

保留实际单项污泥流的湿质量、水、钠、硫酸根、残余有机物及处理去向。不得假定可作肥料销售或扣除纯盐产品信用；若实际物料不同，使用前须解决其独立身份。

- 选定流：含钠盐和皂的湿分离污泥
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q，仅报告一次；A_i为匹配的未归一交付群数量，Q为净交付千克，见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outputs`
- 来源：`nrel-biodiesel-technology-2004`

###### 有条件纳入的废弃粗甘油 （`waste_glycerol`）

仅用于实际废弃的粗甘油溶液，保留组成、拒收和去向证据。与可售crude_glycerol及内部返工分开；可售/废物判定须有证据，不能仅按价格正负判定。

- 选定流：送处理的不可销售粗甘油溶液
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q，仅报告一次；A_i为匹配的未归一交付群数量，Q为净交付千克，见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outputs`
- 来源：`nrel-biodiesel-technology-2004`, `jrc-ilcd-allocation-2010`

###### 最终废弃甲酯 （`offspec_ester`）

纳入实际回收决策后最终废弃的不合格甲酯，包括交付退回物。内部返回、复验或返工不是外部废物，也不产生新产量；保留全部返工负荷及库存结转。

- 选定流：废弃不合格大豆油甲酯混合物
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q，仅报告一次；A_i为匹配的未归一交付群数量，Q为净交付千克，见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outputs`
- 来源：`nrel-biodiesel-technology-2004`

###### 废聚丙烯滤材 （`spent_filter`）

仅对应实际filter_medium更换，计量含持留甲酯、水和固体的废滤材及接收处理。不得再将相同持留液体计入另一废液行。

- 选定流：废聚丙烯生物柴油精滤介质
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q，仅报告一次；A_i为匹配的未归一交付群数量，Q为净交付千克，见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outputs`
- 来源：`nrel-biodiesel-technology-2004`

##### 基本流

###### 实际甲醇空气释放 （`methanol_air`）

采集回收/控制后通气口、储罐、装车及逸散中的物种甲醇。保留直测或经核实的场址计算、介质和治理边界；总VOC或未回收醇残差不能证明此物种数量。

- 选定流：排入空气的甲醇
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q，仅报告一次；A_i为匹配的未归一交付群数量，Q为净交付千克，见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`nrel-biodiesel-technology-2004`, `desmet-methanol-recovery`

###### 实际蒸发水释放 （`water_vapour`）

纳入实际排入空气的未冷凝水，并拆分伴随甲醇。回收凝结水为内部流或实际液体出口；水的相变不等于化学生成水。

- 选定流：生物柴油干燥排入空气的水蒸气
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q，仅报告一次；A_i为匹配的未归一交付群数量，Q为净交付千克，见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`nrel-biodiesel-technology-2004`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_unallocated | joint production | 先保留完整未分配物理联产记录，包括实际湿粗甘油、废物和损失。内部甲醇/油回收既非外部联产品，也非避免采购信用。仅凭废物处理费用不能决定产品状态。 | `nrel-biodiesel-technology-2004`, `jrc-ilcd-allocation-2010` |
| allocation_causal | shared burdens | 选用归因型分配，首先按计量细分甲酯专属、甘油专属及共用操作；直接归属专属负荷，并对其余每项流证明决定性物理因果。湿质量份额或理论化学计量本身不是因果分配模型。保留证据和敏感性。 | `jrc-ilcd-allocation-2010` |
| allocation_residual | inseparable residual burdens | 仅在记录细分和物理因果为何不能解决某项残余负荷后，采用同一联产出口各可用共同功能在实际状态下的实际市场价值。保留同期数量、净交接收入/合同价值、水分/质量、调理及运输调整和敏感性。不得套通用生物柴油:甘油质量价格比、2004年价格示例、纯甘油价格或负权重；价值缺失/不稳定须在数值使用前审查。 | `jrc-ilcd-allocation-2010` |
| allocation_no_credit | derived reference dataset | 将废物处理负荷留给责任过程。不自动给予甘油、盐、甲醇、油或碳替代信用；已分配负荷不得再加第二次避免产品信用。未分配多输出和已分配生物柴油视图分开报告，不得削减物理联产品质量来隐藏分配。 | `jrc-ilcd-allocation-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

所有采集协议的collection_method仅产出未除的原始期间分子和完整库存/在制品结转负荷。aggregation_rule的“每1千克参考流”仅声明最终报告基准，不在采集端执行除法；数量卡A_i/Q与计算规则normalize_delivery是同一次报告操作。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_gate | sme_site | 散装参考交付 | 交付及库存核对 | 批号/群ID; 放行及装车日期; 毛重/皮重/净千克; 验收交付; 退回及重交ID; 期初/末在制品和成品千克; 继承负荷向量; 首次正验收新增产量千克 | 责任人：装车及质量负责人。用校准设备称量实际净装载，按唯一物理批核对签署验收/退回。新增放行、内部转移及净交付分别保留未归一原始记录；纳入实际交付的期初成品，未交付成品保留其结转负荷。 | kg | 每次装车/退回及库存关账 | 一个声明的匹配报告期及库存批群 | 实际大豆油甲酯场址和装车软管 | 每 1 kg 参考流 | 校准; 证书; 签收装车/退回; 库存账 |
| cp_material | sme_site | 外部原料及试剂领用 | 物料计量账 | 接收/领用千克; 期初/末库存; 供应型号及完整制剂; 油水分/游离酸/甘油酯; 酸和催化剂活性分数/载体; 温度/密度; 泄漏; 失败运行/返工ID | 责任人：仓库及工艺工程师。保留完整匹配期间的未归一接收、实际领用及库存变化，包括不成功运行；区分整份采购溶液与嵌套组分。按批归属库存及结转负荷，不除以Q。 | kg | 每次接收/领用及化验 | 与cp_gate相同期间及批群 | 原料/试剂/滤材仓及实际设备支路 | 每 1 kg 参考流 | 称重; 供货证书; 分析; 库存日志 |
| cp_utilities | sme_site | 电力及蒸汽/凝结水 | 计量及状态记录 | 期初/末千瓦时; 蒸汽千克; 供回压力/温度/干度/焓; 时间戳; 积分体积或流率/时长标志; 操作责任; 待机/启停/失败/返工/储罐/装车负荷 | 责任人：公用工程师。按操作和完整期间保留原始总量，包括辅助及零产出负荷。区分积分表读数和流率；记录凝结水状态及计量归属证据。采集不除以Q。 | kWh; kg; 压力; 温度; kJ/kg | 连续计量及每次关账 | 相同期间及库存负荷批群 | 反应/回收/整理及实际储存/装车公用工程 | 每 1 kg 参考流 | 校准; 账单; 焓基准; 分表核对 |
| cp_outputs | sme_site | 联产品及废物出口 | 出口质量及验收记录 | 物流及批ID; 整份湿千克; 水/甲醇/甘油/酯/油/皂/盐分析; 接收者及销售/拒收状态; 库存和继承负荷; 处理记录; 实际净交接价值 | 责任人：联产品销售及环境负责人。任何分配前保留每项实际物理出口和组成；区分可售粗甘油和废弃溶液、内部回收和外部转移。保留未归一原始期间数量及库存负荷，包括拒收运行。 | kg | 每次出口/分析及库存关账 | 相同匹配期间及批群 | 实际出口门及接收设施 | 每 1 kg 参考流 | 接收证书; 实验室方法; 废物联单; 发票 |
| cp_emissions | sme_site | 甲醇及水空气出口 | 物种空气监测 | 源ID; 介质; 浓度; 实际湿/干气量; 仅流率使用采样时长; 治理效率证据; 甲醇/水分列; 启停/储罐/装车/逸散覆盖 | 责任人：环境工程师。保留直测质量或有匹配积分气量和参考条件的经验证浓度；仅当原始数据是流率时乘时长。保留原始分子、检出限和未决物种，不作残差拟合，也不除以Q。 | kg | 按实际源逐次监测/连续采集 | 相同报告期，包括无产出时段 | 受控及逸散空气出口 | 每 1 kg 参考流 | 采样计划; 校准; 检出限; 气量基准 |
| cp_recovery | sme_site | 内部甲醇/油及物种平衡 | 回收/反应及库存审计 | 反应器总投料; 新鲜试剂; 载体甲醇; 回收甲醇/油千克及分析; 循环期初/末库存; 相出口千克及水; 实际甘油酯/游离酸/皂/盐/甘油/酯物种; 独立反应/物种证据 | 责任人：工艺化学师。独立于整流闭合记录原始内部转移、分析及实际化学。酯交换生成甘油而无净反应水；游离酸甲酯化为另一种产水反应，本范围排除。甲醇钠质子化、氢氧化物中和/水解及相蒸发的物种/水效应各异；计算前须证实实际物种及反应程度。 | kg | 每个运行/库存时段及分析 | 匹配完整期间及批群 | 每个反应器/分离器/回收及储罐界面 | 每 1 kg 参考流 | 分析方法; 流程图; 独立化学记录; 不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_units | all inventory rows | 归一前换算原始单位：质量来自可追溯称重或匹配体积乘实测密度；kWh乘3.6为MJ；流率乘时长得到积分数量，而已积分体积仅使用一次。仅在供应者采用该基准时，蒸汽热量为实测质量乘实际供回焓差。 | cp_material; cp_utilities; cp_emissions | 单位相容的原始分子总量 |  |
| cohort_carryover | all inventory rows | 物理生产与交付库存方程分开。匹配产品/路线/状态的生产接收入成品仓仅一次。净供货Q来自签收装车减去已核对同群退回，同一留存批重复交付不得重复计数。按实际本期负荷加期初在制品/成品/退回物继承负荷，减期末在制品/成品留存负荷及另归共同功能的负荷，推导交付归属的未归一负荷向量。废物/损失/返工负荷留给责任批群；不得直接从能量等负荷分子扣减物理期末质量。批群归属未解决时阻塞数值结果。 | cp_gate; cp_material; cp_utilities; cp_outputs; cp_recovery | 未归一交付群向量及Q |  |
| normalize_delivery | all inventory rows | a_i = A_i / Q; A_i为各项已核对的未归一交付群交换或归属负荷，Q为实际已验收散装净交付千克；该除法仅报告一次且Q须为正。所得参考行为1千克。卡片数量表达及协议aggregation_rule均指这同一次报告操作，不是额外除法。保留完整未分配联产平衡并另披露已分配生物柴油视图；供应者不得再次分配或再扣一次联产品信用。 | A_i; Q; cp_gate; cp_material; cp_utilities; cp_outputs; cp_emissions; cp_recovery | 每1千克参考流清单 | `jrc-ilcd-allocation-2010` |
| physical_species | all inventory rows | 按不确定性核对完整外部湿质量及内部库存，再独立核对甘油酯、甲酯、甲醇、甘油、脂肪酸、皂、盐和水中的C/H/O/Na/S及实际分子物种。理想甘油三酯加甲醇方程仅支持反应身份，不是观测收率。甲醇钠质子化或与残余游离酸反应生成甲醇，而非自动生成水；氢氧化物、酸酯化和水解路线有不同水项，不能相互套用。化学生成/消耗水须由独立识别的实际反应/程度确定，相态水须由实测相记录确定；不得用一个残差或COD求解未知反应水及未知出口。 | cp_recovery; cp_material; cp_outputs; cp_emissions | 分开的质量/元素/物种/水平衡审计 | `nrel-biodiesel-technology-2004` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_gate | all inventory rows | 保留完整匹配原始记录、校准、可追溯状态/分析及库存负荷谱系。零表示已证实不存在，不是缺失数据。失败运行仍纳入覆盖；Q=0不得形成每千克结果。 | cp_gate; cp_material; cp_utilities; cp_outputs; cp_emissions; cp_recovery |
| quality_identity | native rows and providers | 核实完整名称、路线、介质、参考属性及供应者相容性。生物柴油原生含氧量11%为声明身份特征，未给分析容差；保留实际氧检测和相容性决策，绝非实测默认值。原生一般描述包括乙/丙酯，但本PCR仅甲酯；其原生地理未指定。 | supplier and native identity review; assay certificates |
| quality_evidence | all rows | NREL是2004年技术报告，涵盖工业选项和独立实验练习，不是工厂清单。Desmet证实工业设备/原料灵活性和回收可行性，不是审计收率、零排放、规格或场址消耗。所有实际数量须采集，不引入数值运行范围。 | `nrel-biodiesel-technology-2004`, `desmet-biodiesel-process`, `desmet-cstr-transesterification`, `desmet-methanol-recovery` |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | delivered_biodiesel | 要求唯一Product终端行与reference_flow_link及Mass参考一致。拒绝HVO、化石柴油、掺混燃料、醇或不相容酯身份。 | `nrel-biodiesel-technology-2004` |
| validate_quantity | all inventory rows | 要求匹配Q为正、完整原始期间及继承库存负荷、唯一退回/重交核对及一次归一。新增放行加期末成品库存不是第二份生产输出；实际交付与放行不得等同。 |  |
| validate_chemistry | cp_recovery | 拒绝理论收率因子、重复制剂组分、由COD/残差拟合的物种或水、遗漏失败运行或未经验证内部回收信用。要求独立物种/相态证据及考虑不确定性的质量/元素闭合。 | `nrel-biodiesel-technology-2004` |
| validate_allocation | joint production | 要求实际甘油/残渣市场或废物状态、门匹配的分配证据及未分配物理平衡。缺失因果/残余价值证据时不得数值使用；通用价格或湿质量份额不能解决。 | `jrc-ilcd-allocation-2010` |
| validate_completeness | all inventory rows | 报告已执行/跳过检查及发现；缺失辅助供应者、实际场址数据、新增原子流或原生相容性仍为显式缺口。本PCR不证明燃料规格合格、科学批准或TIDAS格式符合。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 声明装车门一千克净散装供货大豆油甲酯，保留继承库存和已审查分配；另保留多输出视图 |
| allowed_use | 仅用于声明相符的路线、原料、质量、地理、期间和供应者基准 |
| excluded_use | 通用生物柴油/HVO/化石柴油代理；柴油混合组成；燃料燃烧；纯甘油；自动废原料信用；从实验示例取得工厂因子 |
| required_metadata | Q交付门；新增放行及库存核对；原料/制剂分析；路线；地点；期间；氧/规格证据；回收；联产品/废物状态；分配；原生/供应者限制 |
| required_quality_disclosure | 原始完整性；在制品/成品结转负荷；失败/零产出/返工覆盖；化学/相态水证据；不确定性；未决身份及无不支持因子 |
| update_trigger | 原料/路线/门/规格、催化剂/酸制剂、供应者地理、回收或联产品市场/处理改变 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| nrel-biodiesel-technology-2004 | handbook | Van Gerpen, Shanks, Pruszko, Clements and Knothe, Biodiesel Production Technology, NREL/SR-510-36244, July 2004, https://docs.nlr.gov/docs/fy04osti/36244.pdf | 印刷页1–6、30–36、75–77及79：甘油三酯/游离酸区别、精炼大豆油、碱/催化剂溶液、工业反应/分离/水洗/干燥和甲醇/甘油操作。完整报告含实验练习、理想三油酸甘油酯、历史价格及示例数量；均不作为工厂收率、配方、投加、废水因子或验收规格。 |
| desmet-biodiesel-process | literature | Desmet, Biodiesel, publisher page, https://www.desmet.com/en/biofuel/biodiesel | 工业连续甲酯技术及精炼植物油/大豆油原料可行性；不是审计工厂因子、实际场址地理、100%收率或零废水保证。 |
| desmet-cstr-transesterification | literature | Desmet, Transesterification, publisher page, https://www.desmet.com/en/biofuel/biodiesel/transesterification | 工业串联CSTR/沉降器及甘油分离配置；设备能力和性能宣传不是前景数值，也不能证明所选催化剂化学。 |
| desmet-methanol-recovery | literature | Desmet, Methanol rectification, publisher page, https://www.desmet.com/en/biofuel/biodiesel/methanol-rectification | 物理甲醇精馏/冷凝及内部回用；不引入100%回收、零排放/废水或能耗因子。 |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for LCA — Detailed guidance, first edition March 2010, §7.9.3, printed pp.257–258, https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 不可分多功能操作的归因分配：虚拟细分/决定性物理因果，再以实际过程出口状态的市场价值处理残余。不是生物柴油专属分配比例、废物截断、能量信用、价格或合规证明；不使用后续延伸锯木示例。 |
