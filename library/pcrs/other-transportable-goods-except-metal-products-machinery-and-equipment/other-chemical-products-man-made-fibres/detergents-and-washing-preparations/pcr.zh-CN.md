---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.detergents-and-washing-preparations
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 外购表活混合物配制的液体洗衣剂

## 1. 范围与适用性

本PCR适用于一种水性液体洗衣剂：外购BIO-SOFT LD-190级完整阴离子/非离子表活混合物、外购STEPANATE SXS二甲苯磺酸钠液体制剂、单独采购的氯化钠及尿素与去离子水进行物理混配。厂家配方297证明真实路线和物料角色，不构成行业配方。本文不采用其配比、温度、混合时间、收率、能耗、密度、剂量、性能或稳定性作为默认值。各数据集由实际核准配方和检验结果界定。

排除前景中的皂化、表活合成/乙氧基化/硫酸化/磺化或酸中和，排除喷雾干燥粉剂、洗涤块或凝珠、餐具洗涤剂、盥洗个护制剂和消毒剂。用途标签变化本身不建立新PCR。SLES不是无乙氧基的SDS；碳链/EO分布、活性含量、载体水、盐及粉体/膏体/液体状态不能互换。替换混合物或路线必须先重新评估物理身份和边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.detergents-and-washing-preparations |
| classification_refs | CPC 3.0 35322；语义范围更窄；映射接受另行处理 |
| covered_products | 声明外购混合物路线的水性液体洗衣剂 |
| excluded_products | 排除前景中的皂化、表活合成/乙氧基化/硫酸化/磺化或酸中和，排除喷雾干燥粉剂、洗涤块或凝珠、餐具洗涤剂、盥洗个护制剂和消毒剂。用途标签变化本身不建立新PCR。SLES不是无乙氧基的SDS；碳链/EO分布、活性含量、载体水、盐及粉体/膏体/液体状态不能互换。替换混合物或路线必须先重新评估物理身份和边界。 |
| representative_product | 配方297类型液体洗衣剂；需实际供货批次和核准配方 |
| production_route | 接收完整商业制剂及固体；在水中计量混合和溶解；检验且仅在核准配方内调整；暂存/返工；灌装；仓储和发运 |
| market_state | 均质水性液体，在工厂发运门按扣除包装的洗衣剂净质量供货 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂净交付门供给规定液体洗衣剂 |
| How much | 1 kg 净供货洗衣剂 |
| How well | 满足实际声明配方、活性/固形物/水分组成、pH及放行检验；不规定固定清洗效能或每次洗涤等效性 |
| How long or cycle | 一个匹配报告期及供货产品群；仓储和保质期声明需独立证据 |
| reference_flow_link | detergent_delivered |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 液体洗涤剂 `c1214ed0-28a4-4273-a8c9-a4f29351747a` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 核准配方和供货牌号; 阴离子/非离子组成及溶剂信息; 活性物与水/盐检验及方法; 液体状态和温度; 净交付门和Q台账; 批次和期间; 期初末在制品及成品库存与结转负荷; 包装与仓储/发运范围; 场址和供货地域; 质量验收和标签说明; 体积换算时的密度方法 |

全部必需限定信息须写入数据集元数据、过程说明、参考流备注或等效字段；缺失时数据集不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考为1 kg净供货完整液体洗衣剂，不是干固形物、表活活性质量、包装毛重或洗涤服务。Q是同一核准液体配方及产品群的实际净交付质量，不是新放行产量P。 |
| stock_gate | all inventory rows | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留带符号发运/退回事件、期初末成品及在制品库存和结转负荷。P是独立的内部生产放行数量。生产与仓库账合并时抵消P交接。未交付库存不入Q并保留负荷；退回/返工物重复验收不造新产量。 |
| whole_preparation | all inventory rows | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每份外购湿制剂仅采购记账一次；活性物、乙醇、盐和载体水是成分子账，不重复采购。体积转质量采用实际温度下经验证的批次密度；已积分体积不再乘时间。电力与蒸汽保留各自分子单位。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 完整LD-190级表活混合物及SXS液体、氯化钠和尿素到厂接收；外购去离子水在供方工厂门并加实际运送；披露期初在制品/成品结转 |
| starting_condition_role | 前景配制至净交付门并连续结转库存负荷 |
| product_classification_scope | 仅规定液体洗衣剂配制，不覆盖CPC 35322全部产品 |
| recursive_input_rule | 退回或内部返工洗衣剂保留身份和负荷；内部交接抵消。外购洗涤剂预混物为一项有独立上游供方的外部制剂，不是免费递归原料。 |
| upstream_dataset_requirement | 为完整外购制剂、化学品、水、公用工程、包装和运输关联供方及状态相容的数据集；前景数据不自动构成摇篮到大门。保留实际地域、技术及代表性限制。 |
| disclosure | 披露原料及成品规格、供方边界差异、过程拆分、包装、仓储/发运、退回、零产出运行、库存平衡与不确定性。下游分销/使用的排除另行声明。 |

### 边界规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | 所有过程 | 纳入接收、计量、溶解/混配、实际加热/冷却、质控、不合格/返工、清洗、废水收集、灌装、成品仓储及工厂发运。数据集完成前将每项实际缺失化学品、包装组件、燃料、制冷剂、废物或已识别排放增列独立原子行；缺省需证据。 | stepan297; epa-detergents |
| b_upstream | 外购投入 | 将外购完整表活/混合物的合成保留在上游；不再将上游硫酸化或中和反应物记作前景采购。实际现场合成改变适用性并需显式路线复核。 | stepan297; stepan-ld190 |
| b_stock | 生产及发运 | Q采用实际净发运门，追踪唯一验收供货批次及带符号退回。核对P、期初末在制品和成品库存、内部交接、取样、损失与退回。按可追溯批次分配结转制造及仓储负荷；不丢弃失败/零产出批次负荷，不把期末库存增作交付。库存负荷转移不加入外部交换合计。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| formulate | 外购混合物配制至工厂净交付 | required | 规定水性液体路线 | foreground | 1 kg净交付液体洗衣剂 |

一个过程包络包含生产及单独核对的成品仓储/发运台账。内部放行P及仓库交接抵消；仅detergent_delivered是外部终端Product输出。库存数量和负荷转移保留显式子账，不是新增外部输出。所有纳入操作及额外实际原子交换仍为必需。

### 过程：外购混合物配制及净交付（`formulate`）

#### 输入

##### 产品流

###### 外购表活混合物 (`blend`)

一份完整商业制剂。厂家描述为阴离子/非离子液态混合物；美国SDS列明专有混合物和乙醇CAS64-17-5，精确组成保密。网页固形物数据与SDS危害披露百分比不是同一量，不能等同活性分数。取得当前批次CoA/SDS及水/活性/溶剂/盐检验；不设通用配方、水分余量或乙醇排放比例。

- 选定流：BIO-SOFT LD-190级液态阴离子/非离子表活混合物
- 流属性/单位：质量 / kg
- 数量规则：实际归属且完成单位换算的期间原始分子与匹配结转负荷，仅按第8节规定除以正净交付Q一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_material
- 来源：stepan297; stepan-ld190; stepan-ld190-sds

###### 外购助溶剂溶液 (`sxs`)

记录完整供货液体制剂及实际牌号和批次检验。厂家区分活性物与固形物；均非通用纯度或差减水分。水和盐已包含在该采购中。干SXS或其他磺酸盐未经重新评估不能替代。

- 选定流：STEPANATE SXS液态二甲苯磺酸钠制剂
- 流属性/单位：质量 / kg
- 数量规则：实际归属且完成单位换算的期间原始分子与匹配结转负荷，仅按第8节规定除以正净交付Q一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_material
- 来源：stepan297; stepan-sxs

###### 单独采购的氯化钠 (`salt`)

独立实体采购，保留实际水分及纯度。排除商业制剂自带盐。来源配方不是加料目标。

- 选定流：洗衣剂配制用固体氯化钠
- 流属性/单位：质量 / kg
- 数量规则：实际归属且完成单位换算的期间原始分子与匹配结转负荷，仅按第8节规定除以正净交付Q一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_material
- 来源：stepan297

###### 单独采购的尿素 (`urea`)

记录实际工业牌号及检验，不用肥料养分当量千克或包膜颗粒替代。质量/元素平衡和实际废水分析保留氮；不从氮闭合反推氨生成或空气排放。

- 选定流：液体洗衣剂配制用无包膜工业尿素固体
- 流属性/单位：质量 / kg
- 数量规则：实际归属且完成单位换算的期间原始分子与匹配结转负荷，仅按第8节规定除以正净交付Q一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_material
- 来源：stepan297

###### 配制及清洗去离子水 (`water`)

CAS7732-18-5；原生名称分量限定生产混合、工厂门及离子交换或反渗透、纯净物。原生备注另提蒸馏及用户供货，不能覆盖名称中的较窄路线/门。地域及数值水质规格缺失；不建立CN/HK产地、供应商运送或密度。实际运送/供方负荷仅加入一次。仅实际相容去离子水适用；现场制水需显式列入清单。

- 选定流：去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位：质量 / kg
- 数量规则：实际归属且完成单位换算的期间原始分子与匹配结转负荷，仅按第8节规定除以正净交付Q一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_water
- 来源：stepan297

###### 配制及发运用电 (`electricity`)

计量混配、泵送、检测、清洗、灌装、通风、仓库和电动搬运。共享负荷按完整记录分配，包含待机及零产出运行。声明电网/地域/电压及输配边界；不能据厂家混配顺序假定零能耗。

- 选定流：洗衣剂场址计量门的外购电力
- 流属性/单位：能量 / kWh
- 数量规则：实际归属且完成单位换算的期间原始分子与匹配结转负荷，仅按第8节规定除以正净交付Q一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_energy
- 来源：stepan297; epa-detergents

###### 实际使用时的外购工艺蒸汽 (`steam`)

实际加热/清洗负荷条件项；采集交付热量或蒸汽质量及焓/凝结水基准和损失。不用来源配方温度或通用蒸汽强度。缺省需有不适用记录。现场燃料/锅炉须用实际原子投入和排放替代外购蒸汽，避免热量重复。

- 选定流：外购饱和工艺蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：实际归属且完成单位换算的期间原始分子与匹配结转负荷，仅按第8节规定除以正净交付Q一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_energy
- 来源：

###### HDPE洗衣剂瓶体 (`bottle`)

实际灌装包装配置；扣除瓶盖、标签和洗衣剂质量。纳入归属灌装废品及实际包装库存；散装供货可凭证标记缺省。

- 选定流：空HDPE液体洗衣剂瓶体
- 流属性/单位：质量 / kg
- 数量规则：实际归属且完成单位换算的期间原始分子与匹配结转负荷，仅按第8节规定除以正净交付Q一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_pack
- 来源：

###### 聚丙烯瓶盖 (`cap`)

一个实际瓶盖组件；存在内衬、封口或其他供货组件时须分别增列。

- 选定流：聚丙烯洗衣剂瓶螺旋盖
- 流属性/单位：质量 / kg
- 数量规则：实际归属且完成单位换算的期间原始分子与匹配结转负荷，仅按第8节规定除以正净交付Q一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_pack
- 来源：

###### 印刷瓶签 (`label`)

一份供货复合瓶签，披露供方组成及胶黏剂/油墨边界。不在前景再采购其内含油墨或胶黏剂。

- 选定流：印刷不干胶纸洗衣剂瓶签
- 流属性/单位：质量 / kg
- 数量规则：实际归属且完成单位换算的期间原始分子与匹配结转负荷，仅按第8节规定除以正净交付Q一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_pack
- 来源：

###### 瓦楞运输纸箱 (`carton`)

一个完整供货纸箱；记录实际纸板组成、损失及仓储/发运使用。托盘、缠绕膜或其他实际组件须另列独立行。

- 选定流：成品瓦楞纸板运输箱
- 流属性/单位：质量 / kg
- 数量规则：实际归属且完成单位换算的期间原始分子与匹配结转负荷，仅按第8节规定除以正净交付Q一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_pack
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净供货液体洗衣剂 (`detergent_delivered`)

由reference_flow_link唯一选中的终端净交付洗衣剂。原生Product flow正式名为Liquid Detergent / 液体洗涤剂，英文备注描述洗衣液；中文备注混称“液体洗衣粉”。该措辞属于元数据债务，不允许替换粉剂。其余名称分量、CAS、牌号、路线及地域未指定；仅提供质量属性，参考因子1。记录不验证配方、密度、供方、冷水/油渍/硬水性能或敏感肌声明。数据集限定信息和实际试验须提供这些内容；不假定通用性能。

- 选定流：液体洗涤剂 `c1214ed0-28a4-4273-a8c9-a4f29351747a`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：fixed_value
- 适用范围：product_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：method_formula
- 采集协议：cp_delivery
- 来源：stepan297; stepan-ld190

##### 废物流

###### 收集的洗衣剂清洗废水 (`washwater`)

一项收集态废液转移，包含实际溶解原料/溶剂；声明组成、接收者和处理路线。同一负荷不得同时列为基本流排放。COD/BOD是分析指标，不是虚构分子物种或反应水证据。

- 选定流：送处理的收集态液体洗衣剂设备清洗废水
- 流属性/单位：质量 / kg
- 数量规则：实际归属且完成单位换算的期间原始分子与匹配结转负荷，仅按第8节规定除以正净交付Q一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_waste
- 来源：epa-detergents

###### 废弃不合格液体洗衣剂 (`reject`)

仅实体废弃，包括实际报废退回批次和管线残留；保留在制品/内部返工不是该外部废物。处理及残留水/有机物/盐只记一次。

- 选定流：送处置的不合格液体洗衣剂
- 流属性/单位：质量 / kg
- 数量规则：实际归属且完成单位换算的期间原始分子与匹配结转负荷，仅按第8节规定除以正净交付Q一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_waste
- 来源：

###### 废弃表活混合物桶 (`empty_blend_drum`)

一个实际废弃的进料容器，包含残留并称重表征。仅在实体分离时拆分桶聚合物与液体；不在另一废物行重复残留洗衣剂。回用桶保留实际返运及清洗负荷，不虚构处置。

- 选定流：带残留并送处理的空HDPE表活混合物桶
- 流属性/单位：质量 / kg
- 数量规则：实际归属且完成单位换算的期间原始分子与匹配结转负荷，仅按第8节规定除以正净交付Q一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_waste
- 来源：

##### 基本流

###### 排向空气的水蒸气 (`water_vapour`)

仅采用实际边界内独立测量或有支持的物理蒸发。不为溶解/混配假设反应水生成，不以闭合残差拟合。凝结/回收水及废液中水不是该空气交换。

- 选定流：释放到空气的水蒸气
- 流属性/单位：质量 / kg
- 数量规则：实际归属且完成单位换算的期间原始分子与匹配结转负荷，仅按第8节规定除以正净交付Q一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_emission
- 来源：

###### 已识别的乙醇空气排放 (`ethanol_air`)

LD-190的SDS披露乙醇CAS64-17-5，但存在不证明排放量。需实际物种特异测量或独立支持的溶剂平衡、介质及捕集效率。不将总VOC全认作乙醇，不将全部采购乙醇全认作排放。其他检出物种须另列。

- 选定流：释放到空气的乙醇
- 流属性/单位：质量 / kg
- 数量规则：实际归属且完成单位换算的期间原始分子与匹配结转负荷，仅按第8节规定除以正净交付Q一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_emission
- 来源：stepan-ld190-sds

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_separate | 所有过程 | 先用实际分表/批次/产线记录拆出其他产品。共享公用工程及仓库操作采用有记录的因果驱动，如占用罐时、计量机时和托盘天数；分配总数须与完整期间原始记录一致。不默认均分、废物负信用或清洗性能分配。 |  |
| a_rework | 退回和库存 | 在制品及成品库存携带实际负荷进入下一账期，并保留新增返工、仓储和运输。内部返工不是联产品、外购投入或第二次验收输出。废弃洗衣剂按实际处理记废物；不假定市场价值或避免生产。 |  |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

各collection_method保留期间原始分子及完整在制品/成品转入转出负荷，不执行A/Q。aggregation_rule仅声明最终报告基准，既不在采集端除法，也不在卡片表达式之后再除；只有normalize_delivery负责唯一报告除法。各列明负责人独立负责其协议，cp_delivery由质量和仓库共同负责。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | formulate | 原料接收及投料 | 采购及批次记录 | 批次；供方牌号/SDS/CoA；完整湿制剂质量；活性/水/乙醇/盐检验及方法；固体水分/纯度；接收/投料/退回事件；原始期初末库存及结转负荷 | 生产物料负责人核对经校准秤、罐存、发票及每次运行的实际投料，包含失败批次、返工及零产出运行。保留完整期间原始分子及转入/转出负荷；此处不除以Q。 | kg | 每次接收及批次 | 完整实际匹配期间及期初末结转 | 声明生产场址及成品仓库至发运 | 每 1 kg 参考流 | 签认原始记录；校准；完整批次及负荷核对 |
| cp_water | formulate | 单独供给的去离子水 | 计量及供给记录 | 水源和路线；表计期初末；积分体积或质量；换算时的温度/密度；配制/清洗拆分；供方门/运送 | 水系统负责人保留经校准表计差及运送发票作为原始数量，排除已随制剂采购的水。记录实际制水及运送边界；不除以Q。 | kg; m3 | 每批及每期 | 完整实际匹配期间及期初末结转 | 声明生产场址及成品仓库至发运 | 每 1 kg 参考流 | 签认原始记录；校准；完整批次及负荷核对 |
| cp_energy | formulate | 分别计量电力及蒸汽 | 表计及运行记录 | 表计读数；kWh；蒸汽MJ或质量/焓；未积分时的实际速率及持续时间；电网/电压；加热/冷却；检测/清洗/仓库/搬运分配；待机/返工/失败运行负荷；库存结转负荷 | 公用工程负责人为每种能源独立采集完整期间原始表计及因果分配记录。区分速率乘时间与已积分数量。保留归属库存负荷和实际操作；不除以Q。 | kWh; MJ | 连续及每期 | 完整实际匹配期间及期初末结转 | 声明生产场址及成品仓库至发运 | 每 1 kg 参考流 | 签认原始记录；校准；完整批次及负荷核对 |
| cp_pack | formulate | 每个供货包装组件 | 包装台账 | 组件及配置；供方物料清单；空重/毛重/净重；接收/使用/废弃/退回组件；期初末包装库存；灌装损失；回用及发运记录 | 包装负责人逐组件称重并核对实际包装耗用、灌装、废品和库存。纳入真实仓储/搬运/退回负荷及分配结转；洗衣剂Q不含包装质量；不除以Q。 | kg | 每种配置及每期 | 完整实际匹配期间及期初末结转 | 声明生产场址及成品仓库至发运 | 每 1 kg 参考流 | 签认原始记录；校准；完整批次及负荷核对 |
| cp_delivery | formulate | 参考门及库存连续性 | 放行仓库及带符号发运台账 | 批次/产品群和配方；P唯一首次正放行；带符号发运及退回质量；净Q；皮重；期初末在制品及成品质量和完整负荷向量；失败/零产出运行；返工历史；库龄及托盘天数；内部交接；取样/残留/损失事件 | 质量及仓库负责人共同用经校准净重核对唯一放行、验收、发运及退回事件。选择实际工厂净交付Q，区分P，冲回退回发运并防止重复验收。跨期退回及保留库存按原负荷追踪，不能归零。保留Q及全部原始结转记录，不归一交换。 | kg; pallet-day | 每个事件及期末 | 完整实际匹配期间及期初末结转 | 声明生产场址及成品仓库至发运 | 每 1 kg 参考流 | 签认原始记录；校准；完整批次及负荷核对 |
| cp_waste | formulate | 分别记录每项废物转移 | 称重分析及处理联单 | 独立流股；质量/体积/密度；包含水/乙醇/尿素/盐的实际组成；COD/BOD方法；取样者；处理接收者；桶内残留；内部回收；库存变化 | 废物负责人核对完整期间原始废物称重、代表性分析和转移联单，边界排除内部循环并防止基本流负荷重复。保留不确定性及失败运行废物；不除以Q。 | kg | 每次转移及代表性取样 | 完整实际匹配期间及期初末结转 | 声明生产场址及成品仓库至发运 | 每 1 kg 参考流 | 签认原始记录；校准；完整批次及负荷核对 |
| cp_emission | formulate | 每种已识别空气物种 | 物种特异测量及平衡 | 物种/CAS；空气介质；源和捕集设备；实际积分气量及条件或速率/时间；浓度及空白；溶剂库存；凝结水；不确定性；水蒸发证据 | 环境负责人保留混配、灌装及仓储完整期间原始物种检测和有支持的溶剂/水平衡。SDS成分、总VOC、COD或闭合残差不能建立物种排放。已积分气量不再乘时间。采集原始数量及结转负荷证据；不除以Q。 | kg; m3 | 代表性操作及每期 | 完整实际匹配期间及期初末结转 | 声明生产场址及成品仓库至发运 | 每 1 kg 参考流 | 签认原始记录；校准；完整批次及负荷核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_raw | all inventory rows | 每个原始分子仅用实际校准因子换为声明单位一次：质量=积分液体体积乘批次/温度特定密度；真实速率按实际持续时间积分。已积分体积不再乘时间。各流及不确定性分别保留；不用厂家密度默认值。 | raw_numerators; actual_conversion_factors | 单位一致的原始数量 |  |
| reconcile_stock | all inventory rows | 逐可追溯产品群分配完整换算期间负荷和期初在制品/成品负荷，再按仓储/返工因果归属将期末在制品/成品负荷转入各自连续台账。抵消内部P/交接。交付负荷分子A_j保留匹配交付群应承担的失败/零产出生产、返工、废品、清洗、灌装、仓储和工厂发运份额。全部向量分量与完整台账核对，负荷不得消失。该步不除以Q。 | converted_raw_amounts; opening_burden_vectors; closing_burden_vectors; signed_dispatch_events; cp_delivery | A_j和Q；库存负荷连续 |  |
| normalize_delivery | all inventory rows | 对同一净交付液体配方及产品群，仅报告一次a_j = A_j / Q，Q > 0 kg；终端输出=1 kg。采集协议保留原始分子。这是唯一除Q操作：卡片数量规则和协议聚合引用描述同一报告操作，不是额外除法。零交付产品群保留负荷，不能生成每千克数据集。 | A_j; Q; cp_delivery | 每1 kg净交付洗衣剂的a_j |  |
| physical_balance | all inventory rows | 对完整实体投入、期初末在制品/成品、实际交付/退回、取样、废物及独立识别排放核对总质量和相关C/N/S/Na/Cl元素。活性物、载体水、游离水及溶解固体保留为成分子账，不重复采购。溶解及物理混合不假定净反应水。实际反应/物种/水变化需独立化学证据；不能用同一残差拟合未知水和未知出口，不能由COD/总VOC反推物种。未解释不平衡留待复核。 | whole_input_masses; stock_masses; composition_assays; delivery_and_return_masses; measured_waste; identified_emissions | 质量/元素核对及独立物种证据 | stepan297; stepan-ld190-sds |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | all inventory rows | 核对完整供货配方/牌号、状态、介质、供方、地域和边界。原生UUID仅建立宽泛物理身份；描述及数据集元数据保留全部原生限制。不支持牌号、活性、固形物或粉液状态等同。 | CoA/SDS；批次/配方核准；供方匹配；原生身份复核 |
| q_complete | all inventory rows | 采用包含全部运行、库存及负荷结转的完整实际匹配期间。明确表计校准、检出限、共享分配、取样代表性及不确定性；缺失测量不是零。 | 完整原始台账；校准；签认库存及交付核对 |
| q_source | all processes | 厂家起始配方及产品/SDS文件仅提供有界路线和身份，不提供跨场址定量默认值。SDS披露不完整且部分保密；固形物、活性物及危害成分百分比基准不同。验证实际基质特异检验、配方适用性及包装稳定性。 | 实际确认试验及当前供方文件 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | 参考产品 | 要求全部限定信息及唯一终端Product输出detergent_delivered，与声明参考UUID和1 kg完整液体基准一致。拒绝未经验证的粉剂/SDS/SLES替代、按活性千克归一、Q含包装或产品群不匹配。 |  |
| v_ledger | 所有清单行 | 要求实际净交付Q为正、P独立、完整带符号库存/退回事件及全部结转负荷；仅一次normalize_delivery操作。拒绝重复内部输出、丢弃期末库存负荷、遗漏零产出/返工/仓储/发运负荷或重复验收制造新产量。 |  |
| v_species | 所有清单行 | 要求完整制剂采购、独立真实原子交换、质量/元素核对及独立物种证据。不将总VOC、COD、SDS区间或闭合残差当作排放物种、反应水、收率或密度。废物转移与下游排放不得重复同一负荷。 | stepan-ld190-sds; epa-detergents |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 作为声明净交付液体洗衣剂配方的下游模型投入 |
| allowed_use | 同配方族、供货状态、门及有证据地域/技术，且显式供方匹配 |
| excluded_use | 通用行业配方；粉剂/SLES/SDS制造；每次负荷洗涤服务；通用效能、安全或法规声明；自动摇篮到大门声明 |
| required_metadata | 核准配方和供货牌号；阴离子/非离子组成及溶剂信息；活性物与水/盐检验及方法；液体状态和温度；净交付门和Q台账；批次和期间；期初末在制品及成品库存与结转负荷；包装与仓储/发运范围；场址和供货地域；质量验收和标签说明；体积换算时的密度方法 |
| required_quality_disclosure | 前景范围；完整转入/转出负荷台账；供方及地域缺口；校准及基质检验限制；辅助UUID及定量区间缺失 |
| update_trigger | 配方/牌号/状态/路线/门/供方或包装变化；检验修订或新增相容原始证据；库存/负荷核对缺陷 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| stepan297 | handbook | Economy Liquid Laundry Detergent with BIO-SOFT LD-190, No.297; revision 2020-04-22; https://www.stepan.com/content/dam/stepan-dot-com/webdam/website-product-documents/starter-formulations/StepanFormulation297.pdf；访问日期2026-10-16 | 第1-2页：仅实际原料角色及混配顺序。厂家起始配方；不采用配比、物性数值、剂量、稳定性、放大、收率或能耗默认值。保留自身研究及无保证限制。 |
| stepan-ld190 | handbook | BIO-SOFT LD-190 manufacturer product page; https://www.stepan.com/content/stepan-dot-com/en/products-markets/product/BIOSOFTLD190.html；访问日期2026-10-16 | 液态阴离子/非离子商业混合物身份，不是精确组成或行业活性分数。固形物和RVOC条目不建立配方水或实际排放。 |
| stepan-sxs | handbook | STEPANATE SXS manufacturer product page; https://www.stepan.com/content/stepan-dot-com/en/products-markets/product/STEPANATESXS.html；访问日期2026-10-16 | 液态二甲苯磺酸钠制剂角色；活性及固形物为不同产品指标。不设纯度、密度、载体水或用量默认。 |
| stepan-ld190-sds | handbook | BIO-SOFT LD-190 US SDS v1.0, revision 2023-10-24; https://www.stepan.com/content/dam/stepan-dot-com/webdam/website-product-documents/safety-data-sheets/sds/US01_PJ113_BIO-SOFT_LD-190_US_English_US.pdf；访问日期2026-10-16 | 第1/3节确认工业表活混合物及乙醇；组成专有且不完整、适用美国危害披露范围。不是排放因子、活性检验或通用地域/工厂/过程规格。 |
| basf-surfactants | handbook | BASF Standard Surfactant & Alcohol; https://promo.basf.com/campaign/qrcode-emo/Standard%20Surfactants%201.pdf；访问日期2026-10-16 | 第10页反证：SLS/SLES及商业粉体/颗粒/液体/膏体牌号不同。不采用BASF牌号百分比或将其替换入声明LD-190配方。 |
| epa-detergents | official_guidance | US EPA Soap and Detergent Manufacturing Effluent Guidelines; updated 2026-05-08; https://www.epa.gov/eg/soap-and-detergent-manufacturing-effluent-guidelines；访问日期2026-10-16 | 工业过程区分及清洗、回收、泄漏和溢出废水。仅美国法规综述；不建立当前非美国法律适用、排放因子或零废水假定。 |
