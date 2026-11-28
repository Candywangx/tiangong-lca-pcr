---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.cotton-waste-except-garnetted-stock
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 供纺纱用未漂白未拉松精梳棉落棉

## 1. 范围与适用性

本PCR仅覆盖一种棉生产残余物：棉精梳分离的未漂白短纤维，经独立收集、按真实需要检验/清选，并首次按明确纺纱供料规格放行。技术综合包括轧花皮棉准备/精梳及独立落棉处理。历史USITC路线与当前供应商落棉描述为互补原始依据，不冒称同一家当代工厂或同一SKU。不规定工厂数值清单、标准得率、纯度、长度范围或棉包重量。

梳棉废料与纱线/硬废料是邻近物流，不是本参考的同义词。CPC叶名称不使全部废棉自动纳入。不得套用毛/丝落绒方法、棉籽脱绒路线或织物拉松路线。必须采集真实法律状态和接收方验收，本供应方法不授予豁免。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.cotton-waste-except-garnetted-stock |
| classification_refs | CPC3.0:39214; narrower |
| covered_products | 一种独立未漂白未拉松精梳棉落棉纺纱供料层 |
| excluded_products | 籽棉; 棉短绒; 棉籽皮; 条花; 硬纱废料; 混合地扫棉; 毛/丝废料; 拉松棉; 漂白脱脂棉; 长棉条; 纱 |
| representative_product | 供纺纱用未漂白未拉松精梳棉落棉 |
| production_route | 从接收轧花皮棉包开始，纳入接收、开清棉、梳棉、精梳所需的实际并条/成卷、精梳分离、落棉独立收集、干态检验及实际机械清选、抽样和针对明确纺纱客户规格的首次质量放行。纳入吸风、除尘、压缩及可归属维护。按真实路线建模；仅购买成品落棉后包装不能代表本一体化生产数据集。 |
| market_state | 首次纺纱质量放行的散态或压缩未漂白落棉，披露后续按批组仓储/包装/发运服务 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 供后续纺纱的精梳棉落棉原料 |
| How much | 首次新增质量放行的1千克净落棉 |
| How well | 接收方真实声明的纯度及长度纺纱规格，并实测水分/残杂/污染；不隐含医用规格 |
| How long or cycle | 一个原首次放行生产批组，后续服务保留Qc |
| reference_flow_link | first_release_noil |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 废棉，不包括回收纤维 `706d76ad-229e-4559-81bf-6b8619cbe6be` |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 精梳来源线和批号; 轧花原生皮棉来源及既往准备; 未拉松未漂白短纤维形态; 纯棉程度及实测异纤污染; 纤维长度分布及接收方纺纱规格; 实测植物残杂及棉结; 游离水及声明的放行态质量基准; 存在时油剂或整理剂身份及残留含量; 首次质量放行Q及原批组Qc; 期初期末在制品及未投入非在制物料向量; 毛物理V区别于归因A; 共生产产出分配证据; 法律转移状态及接收方验收; 场址与技术; 代表性生产及服务期间; 真实包装组成及组件完整衡算; 原生身份限制及供方兼容性 |

实际数据集元数据或交换上下文必须包含每项限定；有理由的缺失仍须明确。通用Product flow为工厂、未指定处理，无固定落棉等级、CAS或地理。本PCR将其限为上述精梳来源未漂白未拉松纺纱供料。身份不证明接收验收、法律状态或组成。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| meas_reference | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 全部行以每1kg参考流为基准；Q为新增首次放行净纤维质量。协议采集未归一原始分子，calc_normalize仅执行一次A/Q。期末成品已含Q内一次。 |
| meas_moisture | cotton and physical mass ledger | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留放行态湿质量及独立实测游离水分数w；干棉与真实残杂/污染分区分别实测。仅明确非水成分后使用m_dry=m_as_received*(1-w)。不设默认回潮率、含油率或密度。检测子账不叠加于整份采购质量。 |
| meas_service | services | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 服务分子归原Qc，H不是分母。毛V衡算独立于A和n。 |
| meas_energy | electrical rows | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留原始kWh；已核实能量单位组以MJ为参考，kWh因子3.6。不可将属性名称理解为燃料燃烧，也不可给棉套热值因子。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 开清棉/梳棉前可追溯棉包内的轧花原生皮棉，声明来源与水分 |
| starting_condition_role | 前景投入门，真实上游皮棉供应承接一次 |
| product_classification_scope | 参考产品仅为精梳机分离的未漂白、未经拉松的棉短纤维。梳棉条花、开清棉废棉、棉卷/棉条/粗纱废料及硬纱废料分别记录。参考Q排除籽棉、从棉籽剥取的棉短绒、棉籽皮、混合地扫棉、毛/丝废料、织物/纱线拉松料、漂白脱脂棉、长纤精梳棉条及纱。39214分类宽于本落棉边界，不能以39215替代。 |
| recursive_input_rule | 同类落棉接收保留既往工艺状态和上游继承向量一次，不重复重建同一轧花/精梳历史，不将退回落棉计新增生产 |
| upstream_dataset_requirement | 轧花皮棉通过一个适用上游数据集承接种植、轧花供应。不得因落棉有废棉名称就虚构有价落棉的零负荷截断。区分厂内一体化精梳与明确外包且有实际负荷向量的精梳服务；不得同时购买落棉并重复重建同一皮棉/精梳历史。明确发运门之后的运输和下游混棉/纺纱不属于此前景边界。 |
| disclosure | 投入状态; 真实设备; 全部共产品; 产品/废物状态; 原批组; 水分; 来源/公用限制; 全部生产失败; 库存; 后续服务期间及包装 |

### 规范性系统边界规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_full_route | foreground_system | 从接收轧花皮棉包开始，纳入接收、开清棉、梳棉、精梳所需的实际并条/成卷、精梳分离、落棉独立收集、干态检验及实际机械清选、抽样和针对明确纺纱客户规格的首次质量放行。纳入吸风、除尘、压缩及可归属维护。按真实路线建模；仅购买成品落棉后包装不能代表本一体化生产数据集。 | `usitc-comber-1990`; `gp-comber-noil`; `jrc-textiles-2023` |
| b_exclusive | reference_product | 参考产品仅为精梳机分离的未漂白、未经拉松的棉短纤维。梳棉条花、开清棉废棉、棉卷/棉条/粗纱废料及硬纱废料分别记录。参考Q排除籽棉、从棉籽剥取的棉短绒、棉籽皮、混合地扫棉、毛/丝废料、织物/纱线拉松料、漂白脱脂棉、长纤精梳棉条及纱。39214分类宽于本落棉边界，不能以39215替代。 | `un-cpc3-2025`; `usitc-comber-1990`; `gp-comber-noil` |
| b_physical_burden | every_exchange | 逐交换独立保留实际毛物理数量V及来源/去向分区和归因清单向量A。分配改变负荷，不改写实际质量衡算、不虚构纤维投入。混合收集器的对外总量及其来源分区表示一次转移和一个供方链接，不叠加。新发现的真实交换F须有具体原子行；仅当X是已经包含在OTHER中的同侧确切重复时才移除X。不得将未拆分OTHER作为选定流。归一A/Q视图为环境归因；实物共产品卡在共生产账保留毛V，不能再提供一个承载同一A的重复供应方。不得将A当成实物发运质量，也不得用已分配A检验实物守恒。 | `ilcd-attributional-2010` |
| b_release_service | production_and_finished_stock | Q为生产批组首次通过纺纱供料质量放行的新增净纤维质量。Q已含该批组期末成品，不能再次将closingFG加入Q。之后的复验、仓储、压缩、包装、搬运和发运采用独立服务账，归属原放行批组Qc。服务处理量H和毛发运量S不作为新增产量分母。合并模块时抵消内部落棉转移及继承向量。 | `usitc-comber-1990`; `ilcd-attributional-2010` |
| b_inheritance | raw_material_WIP_and_unused_stock | 在每个实物门保留期初/期末在制品、未投入的非在制原料、首次放行成品、退回物及其逐交换继承向量。保留全部失败批、Q0、启停、待机、清场及真实返工负荷。耗用期初在制品时继承历史；期末在制品历史结转；未启封未投入物料单独保留采购历史。已净领用数量不得二次扣库存。复验与重发不生成新增Q。 | `ilcd-attributional-2010` |
| b_actual_services | utilities_and_auxiliaries | 基线路线为干式机械纤维分离。自来水仅用于真实加湿或公用系统补水；不默认水洗、漂白、化学溶解、蒸汽、锅炉、热干燥或厂内燃烧。若实际发生，即使未获授权或偏离预期路线仍保留负荷，报告路线偏离，并在使用数据前逐项新增外购整份制剂、燃料、回水、废物及实际气体物种。外购制剂只采购入账一次；检测含量与载水为子账。厂内配制须逐项计入实际外购组分及真实能耗和损失。 | `usitc-comber-1990`; `jrc-textiles-2023` |
| b_packaging | each_packaging_component | 对每种真实黄麻布、棉布、钢丝、聚丙烯打包带分别建立衡算：期初空包装+期初附着在制/成品包装+期初周转包装+外购P+外部退回收到ER=期末空/附着/周转包装+随毛实物发运S外出的包装+对外退还EO+废物W。内部复用I在步骤间抵消，不是重复采购、落棉Q或自动共产品。入厂棉包外包与出厂包装按批号和组件分别保留。 | `usitc-comber-1990`; `ilcd-attributional-2010` |
| b_upstream | upstream_and_outsourced_interfaces | 轧花皮棉通过一个适用上游数据集承接种植、轧花供应。不得因落棉有废棉名称就虚构有价落棉的零负荷截断。区分厂内一体化精梳与明确外包且有实际负荷向量的精梳服务；不得同时购买落棉并重复重建同一皮棉/精梳历史。明确发运门之后的运输和下游混棉/纺纱不属于此前景边界。 | `usitc-comber-1990`; `ilcd-attributional-2010` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| preparation | 轧花皮棉准备与共精梳 | required | 真实轧花原生皮棉路线，保留全部共产品 | 直至实物分离的共生产 | 毛皮棉处理量V及落棉/长棉条独立数量 |
| noil_release | 落棉独立收集清选与首次放行 | required | 清选仅按真实发生，检验与放行始终有记录 | 专属落棉生产 | 新增首次放行落棉Q |
| services | 成品仓储包装搬运与发运 | required | 按原批组记录真实服务及包装 | 放行后服务账，不新增产量 | 原批组Qc；H和S仅为活动记录 |

### 过程：轧花皮棉准备与共精梳 (`preparation`)

#### 输入

##### 产品流

###### 轧花原生皮棉投入 (`ginned_cotton`)

接收可追溯轧花纤维包，不含棉籽和棉短绒；纤维来源与棉包外包分别保留。正式棉布身份及机织棉布同义词与轧花原皮棉不兼容，不能由原棉分类或通用原棉注释覆盖。保持本具体实物名称，待确认兼容身份。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：已轧花未梳理皮棉
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_material采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_material`
- 来源：`usitc-comber-1990`

###### 计量供电 (`preparation_electricity`)

仅适用于中国电网平均消费组合、用户端小于1千伏供电。计量本阶段及其吸风控制耗电。不是纯水电、电厂生产、中高压电、外购压缩空气、热量或柴油。记录真实地理/电压/供方；不兼容供电须另核实原子身份。原始kWh先按3.6转换为MJ，再分配。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：每参考流的n；按cp_energy采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_energy`
- 来源：`jrc-textiles-2023`; `ilcd-attributional-2010`

#### 输出

##### 产品流

###### 长纤精梳棉条共产品 (`long_combed_sliver`)

此Product flow为工厂已制造的梳理棉。本卡仅表示同一共精梳门实际分开的长纤精梳棉条，不能用于短纤落棉。声明真实呈现形态和纯棉组成。后续为纱线质量而并条应归长棉条。完整毛V与负荷分配分别计量，本卡不是Q。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：精梳或粗梳的皮棉 `93976740-418a-40e3-8901-dbc34f0acdc6`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_material采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_material`
- 来源：`usitc-comber-1990`

###### 独立收集的未放行精梳落棉 (`raw_noil_transfer`)

通用Product flow，工厂门、未指定处理；此身份不证明固定等级、CAS、地理、落棉率或纺纱验收。本卡限来自精梳机的未漂白未拉松棉短纤维，排除棉短绒、籽棉、条花、硬纱废料、棉布和混合地扫棉。保留长度分布、实测植物残杂、游离水、油剂/整理剂污染、纯棉程度、来源线/批号及接收方真实规格/状态。正式中文名称较宽，不表示排除所有回收纤维；以英文未经拉松边界约束。转移毛物理V及其继承清单向量；合并时抵消内部转移，不生成重复采购或首次放行。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：废棉，不包括回收纤维 `706d76ad-229e-4559-81bf-6b8619cbe6be`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_material采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_material`
- 来源：`usitc-comber-1990`; `gp-comber-noil`; `ilcd-attributional-2010`

###### 回收条花共产品 (`card_strip_product`)

仅对本具体独立棉物流实际作为有功能产品获接收时适用。分别记录毛质量和接收方；不是精梳落棉，也不是参考Q。同一实物质量不能同时记为丢弃废物。不得将条花与开清棉回收棉或植物残杂合并。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：回收棉条花
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_material采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_material`
- 来源：`usitc-comber-1990`; `gp-comber-noil`

###### 开清棉回收棉共产品 (`blowroom_fibre_product`)

仅对本具体独立棉物流实际作为有功能产品获接收时适用。分别记录毛质量和接收方；不是精梳落棉，也不是参考Q。同一实物质量不能同时记为丢弃废物。不得将条花与开清棉回收棉或植物残杂合并。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：开清棉回收棉纤维
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_material采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_material`
- 来源：`usitc-comber-1990`; `gp-comber-noil`

##### 废物流

###### 丢弃棉纤维 (`preparation_discarded_cotton`)

仅计本阶段真实丢弃棉纤维，排除单独计量的植物残杂与捕集粉尘。未放行失败批与放行后服务拒收物分别保留历史和真实去向，无默认零负荷或信用。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：丢弃的未拉松棉纤维
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_environment采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_environment`
- 来源：`usitc-comber-1990`; `jrc-textiles-2023`; `ilcd-attributional-2010`

###### 分离植物残杂 (`preparation_plant_trash`)

按本阶段真实去除植物残杂实测适用，称量并说明组成、含水和去向。仍留落棉内的残杂属于落棉质量，不得再计分离输出。混合收集物须保留一个总量及非叠加来源分区，不能虚构纯物种分拆。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：棉叶及棉铃植物残杂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_environment采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_environment`
- 来源：`usitc-comber-1990`; `jrc-textiles-2023`; `ilcd-attributional-2010`

###### 捕集棉尘 (`preparation_captured_dust`)

称量实际捕集棉尘流，记录组成、除尘灰斗期初期末存量及去向。本废物不是向大气释放的基本流，不得再把收集器总量计入植物残杂或丢弃纤维。若真实有产品回收，应另设互斥功能产品行。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：捕集棉纤维粉尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_environment采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_environment`
- 来源：`usitc-comber-1990`; `jrc-textiles-2023`; `ilcd-attributional-2010`

##### 基本流

###### 剩余颗粒物向空气排放 (`preparation_air_pm`)

向空气排放的基本流，子环境和粒径未特指；不指定固定组成、烟囱高度或表征因子。原生熟料案例不是棉工序排放因子，也不将本流限为熟料。采用本阶段独立实测排气/无组织颗粒物质量，保留真实治理、介质及采样，不假定PM2.5/PM10。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_environment采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_environment`
- 来源：`jrc-textiles-2023`; `ilcd-attributional-2010`

### 过程：落棉独立收集清选与首次放行 (`noil_release`)

#### 输入

##### 产品流

###### 计量供电 (`noil_release_electricity`)

仅适用于中国电网平均消费组合、用户端小于1千伏供电。计量本阶段及其吸风控制耗电。不是纯水电、电厂生产、中高压电、外购压缩空气、热量或柴油。记录真实地理/电压/供方；不兼容供电须另核实原子身份。原始kWh先按3.6转换为MJ，再分配。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：每参考流的n；按cp_energy采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_energy`
- 来源：`jrc-textiles-2023`; `ilcd-attributional-2010`

###### 待清选检验的未放行落棉 (`raw_noil_receipt`)

通用Product flow，工厂门、未指定处理；此身份不证明固定等级、CAS、地理、落棉率或纺纱验收。本卡限来自精梳机的未漂白未拉松棉短纤维，排除棉短绒、籽棉、条花、硬纱废料、棉布和混合地扫棉。保留长度分布、实测植物残杂、游离水、油剂/整理剂污染、纯棉程度、来源线/批号及接收方真实规格/状态。正式中文名称较宽，不表示排除所有回收纤维；以英文未经拉松边界约束。转移毛物理V及其继承清单向量；合并时抵消内部转移，不生成重复采购或首次放行。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：废棉，不包括回收纤维 `706d76ad-229e-4559-81bf-6b8619cbe6be`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_material采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_material`
- 来源：`usitc-comber-1990`; `gp-comber-noil`; `ilcd-attributional-2010`

###### 真实加湿补水 (`humidification_water`)

仅真实加湿时适用。计量整份供水并追踪留于纤维的水、排出水蒸气、排污与存量。使用与真实供应兼容的质量水身份，黏胶工艺专用的CTUe水定义不兼容。不是水洗或天然取水，公用供水负荷仅链接一次。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：棉车间加湿用自来水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_water采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_water`
- 来源：`jrc-textiles-2023`

#### 输出

##### 产品流

###### 首次纺纱质量落棉放行 (`first_release_noil`)

通用Product flow，工厂门、未指定处理；此身份不证明固定等级、CAS、地理、落棉率或纺纱验收。本卡限来自精梳机的未漂白未拉松棉短纤维，排除棉短绒、籽棉、条花、硬纱废料、棉布和混合地扫棉。保留长度分布、实测植物残杂、游离水、油剂/整理剂污染、纯棉程度、来源线/批号及接收方真实规格/状态。正式中文名称较宽，不表示排除所有回收纤维；以英文未经拉松边界约束。Q为首次有记录纺纱质量放行的新增净纤维质量；该批组期末成品已经包含一次。后续仓储、包装和发运仍记services。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：废棉，不包括回收纤维 `706d76ad-229e-4559-81bf-6b8619cbe6be`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：fixed_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_release`
- 来源：`usitc-comber-1990`; `gp-comber-noil`; `ilcd-attributional-2010`

##### 废物流

###### 丢弃棉纤维 (`noil_release_discarded_cotton`)

仅计本阶段真实丢弃棉纤维，排除单独计量的植物残杂与捕集粉尘。未放行失败批与放行后服务拒收物分别保留历史和真实去向，无默认零负荷或信用。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：丢弃的未拉松棉纤维
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_environment采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_environment`
- 来源：`usitc-comber-1990`; `jrc-textiles-2023`; `ilcd-attributional-2010`

###### 分离植物残杂 (`noil_release_plant_trash`)

按本阶段真实去除植物残杂实测适用，称量并说明组成、含水和去向。仍留落棉内的残杂属于落棉质量，不得再计分离输出。混合收集物须保留一个总量及非叠加来源分区，不能虚构纯物种分拆。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：棉叶及棉铃植物残杂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_environment采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_environment`
- 来源：`usitc-comber-1990`; `jrc-textiles-2023`; `ilcd-attributional-2010`

###### 捕集棉尘 (`noil_release_captured_dust`)

称量实际捕集棉尘流，记录组成、除尘灰斗期初期末存量及去向。本废物不是向大气释放的基本流，不得再把收集器总量计入植物残杂或丢弃纤维。若真实有产品回收，应另设互斥功能产品行。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：捕集棉纤维粉尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_environment采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_environment`
- 来源：`usitc-comber-1990`; `jrc-textiles-2023`; `ilcd-attributional-2010`

###### 真实加湿器排污 (`water_purge`)

对真实送往记录污水接收方的液态排污适用，悬浮棉料与溶解添加物以实测组成子账记录。不能将COD称为化学物质质量。不得无运行证据就假定没有排污。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：加湿器排污水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_water采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_water`
- 来源：`jrc-textiles-2023`; `ilcd-attributional-2010`

###### 去除的聚丙烯污染物 (`pp_contamination`)

仅在检测确认单独收集的污染流为聚丙烯时适用；其余实际识别污染物分别新增具名行。不能概称落棉无污染；本流不是包装袋或打包带采购。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：去除的聚丙烯纤维污染物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_environment采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_environment`
- 来源：`usitc-comber-1990`; `gp-comber-noil`

##### 基本流

###### 剩余颗粒物向空气排放 (`noil_release_air_pm`)

向空气排放的基本流，子环境和粒径未特指；不指定固定组成、烟囱高度或表征因子。原生熟料案例不是棉工序排放因子，也不将本流限为熟料。采用本阶段独立实测排气/无组织颗粒物质量，保留真实治理、介质及采样，不假定PM2.5/PM10。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_environment采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_environment`
- 来源：`jrc-textiles-2023`; `ilcd-attributional-2010`

###### 净水蒸气释放 (`water_vapour_release`)

条件适用：普通H2O水蒸气排至空气，子环境未特指，CAS 7732-18-5，质量/kg。原生同义词含重水/氚水噪声，不能据此允许同位素替换或作为其他物质的普通H2O依据。以真实加湿/纤维含水变化及进出口湿度、气量测定净水蒸气；不设反应水，不以粉尘残差拟合。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_water采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_water`
- 来源：`jrc-textiles-2023`; `ilcd-attributional-2010`

### 过程：成品仓储包装搬运与发运 (`services`)

#### 输入

##### 产品流

###### 计量供电 (`services_electricity`)

仅适用于中国电网平均消费组合、用户端小于1千伏供电。计量本阶段及其吸风控制耗电。不是纯水电、电厂生产、中高压电、外购压缩空气、热量或柴油。记录真实地理/电压/供方；不兼容供电须另核实原子身份。原始kWh先按3.6转换为MJ，再分配。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：每参考流的n；按cp_energy采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_energy`
- 来源：`jrc-textiles-2023`; `ilcd-attributional-2010`

###### 首次放行落棉内部接收 (`released_noil_receipt`)

通用Product flow，工厂门、未指定处理；此身份不证明固定等级、CAS、地理、落棉率或纺纱验收。本卡限来自精梳机的未漂白未拉松棉短纤维，排除棉短绒、籽棉、条花、硬纱废料、棉布和混合地扫棉。保留长度分布、实测植物残杂、游离水、油剂/整理剂污染、纯棉程度、来源线/批号及接收方真实规格/状态。正式中文名称较宽，不表示排除所有回收纤维；以英文未经拉松边界约束。转移毛物理V及其继承清单向量；合并时抵消内部转移，不生成重复采购或首次放行。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：废棉，不包括回收纤维 `706d76ad-229e-4559-81bf-6b8619cbe6be`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_service采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_service`
- 来源：`usitc-comber-1990`; `gp-comber-noil`; `ilcd-attributional-2010`

###### 外部退回落棉 (`returned_noil`)

通用Product flow，工厂门、未指定处理；此身份不证明固定等级、CAS、地理、落棉率或纺纱验收。本卡限来自精梳机的未漂白未拉松棉短纤维，排除棉短绒、籽棉、条花、硬纱废料、棉布和混合地扫棉。保留长度分布、实测植物残杂、游离水、油剂/整理剂污染、纯棉程度、来源线/批号及接收方真实规格/状态。正式中文名称较宽，不表示排除所有回收纤维；以英文未经拉松边界约束。仅对真实退回适用，保留原批组Qc和继承向量，在其服务账冲回原交付并仅新增实际返工。不生成新增Q。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：废棉，不包括回收纤维 `706d76ad-229e-4559-81bf-6b8619cbe6be`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_service采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_service`
- 来源：`usitc-comber-1990`; `gp-comber-noil`; `ilcd-attributional-2010`

###### 棉包棉布—外购组件 (`cottoncloth_supply`)

使用组成和状态经核实的单一机织棉布。原生正式名称及同义词与本材料一致；原棉分类和通用原棉注释为不一致分类/背景，在此披露，不允许据此绑定原棉。不推定漂白或印花等级。 仅实际在入厂或出厂使用本组件时适用。外购组件：按b_packaging记录本组件P/I/ER/S/EO/W及空、附着在制、附着成品、周转物期初期末存量。外出区分随毛发运S附着与向外部物主退还EO，不自动作共产品/供方信用。内部I抵消、不属采购。独立于纤维Q，不能乘以名义棉包重量。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：棉布 `dd9f2248-bc28-43b9-8d57-d77756754f4d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_packaging采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_packaging`
- 来源：`usitc-comber-1990`; `ilcd-attributional-2010`

###### 棉包棉布—外部退回收到 (`cottoncloth_external_return`)

使用组成和状态经核实的单一机织棉布。原生正式名称及同义词与本材料一致；原棉分类和通用原棉注释为不一致分类/背景，在此披露，不允许据此绑定原棉。不推定漂白或印花等级。 仅实际在入厂或出厂使用本组件时适用。外部退回收到：按b_packaging记录本组件P/I/ER/S/EO/W及空、附着在制、附着成品、周转物期初期末存量。外出区分随毛发运S附着与向外部物主退还EO，不自动作共产品/供方信用。内部I抵消、不属采购。独立于纤维Q，不能乘以名义棉包重量。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：棉布 `dd9f2248-bc28-43b9-8d57-d77756754f4d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_packaging采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_packaging`
- 来源：`usitc-comber-1990`; `ilcd-attributional-2010`

###### 棉包黄麻粗布—外购组件 (`jutecloth_supply`)

保持本具体实物未绑定，直至确认兼容原生身份。天然粗麻布证据不证明所有纤维组成，须核实实际黄麻粗布。 仅实际在入厂或出厂使用本组件时适用。外购组件：按b_packaging记录本组件P/I/ER/S/EO/W及空、附着在制、附着成品、周转物期初期末存量。外出区分随毛发运S附着与向外部物主退还EO，不自动作共产品/供方信用。内部I抵消、不属采购。独立于纤维Q，不能乘以名义棉包重量。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：黄麻机织棉包粗布
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_packaging采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_packaging`
- 来源：`usitc-comber-1990`; `ilcd-attributional-2010`

###### 棉包黄麻粗布—外部退回收到 (`jutecloth_external_return`)

保持本具体实物未绑定，直至确认兼容原生身份。天然粗麻布证据不证明所有纤维组成，须核实实际黄麻粗布。 仅实际在入厂或出厂使用本组件时适用。外部退回收到：按b_packaging记录本组件P/I/ER/S/EO/W及空、附着在制、附着成品、周转物期初期末存量。外出区分随毛发运S附着与向外部物主退还EO，不自动作共产品/供方信用。内部I抵消、不属采购。独立于纤维Q，不能乘以名义棉包重量。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：黄麻机织棉包粗布
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_packaging采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_packaging`
- 来源：`usitc-comber-1990`; `ilcd-attributional-2010`

###### 钢丝捆包线—外购组件 (`steelwire_supply`)

使用来自钢铁生产的圆柱柔性铁/非合金钢丝，须匹配真实直径、等级、涂层；不是扁钢带、铜棒或钢丝绳总成。 仅实际在入厂或出厂使用本组件时适用。外购组件：按b_packaging记录本组件P/I/ER/S/EO/W及空、附着在制、附着成品、周转物期初期末存量。外出区分随毛发运S附着与向外部物主退还EO，不自动作共产品/供方信用。内部I抵消、不属采购。独立于纤维Q，不能乘以名义棉包重量。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：钢丝 `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_packaging采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_packaging`
- 来源：`usitc-comber-1990`; `ilcd-attributional-2010`

###### 钢丝捆包线—外部退回收到 (`steelwire_external_return`)

使用来自钢铁生产的圆柱柔性铁/非合金钢丝，须匹配真实直径、等级、涂层；不是扁钢带、铜棒或钢丝绳总成。 仅实际在入厂或出厂使用本组件时适用。外部退回收到：按b_packaging记录本组件P/I/ER/S/EO/W及空、附着在制、附着成品、周转物期初期末存量。外出区分随毛发运S附着与向外部物主退还EO，不自动作共产品/供方信用。内部I抵消、不属采购。独立于纤维Q，不能乘以名义棉包重量。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：钢丝 `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_packaging采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_packaging`
- 来源：`usitc-comber-1990`; `ilcd-attributional-2010`

###### 聚丙烯打包带—外购组件 (`ppstrap_supply`)

保持本具体聚丙烯带未绑定；25千克种子袋、农用捆绳、线束扎带或PP树脂不是现成捆包带。 仅实际在入厂或出厂使用本组件时适用。外购组件：按b_packaging记录本组件P/I/ER/S/EO/W及空、附着在制、附着成品、周转物期初期末存量。外出区分随毛发运S附着与向外部物主退还EO，不自动作共产品/供方信用。内部I抵消、不属采购。独立于纤维Q，不能乘以名义棉包重量。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：聚丙烯打包带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_packaging采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_packaging`
- 来源：`usitc-comber-1990`; `ilcd-attributional-2010`

###### 聚丙烯打包带—外部退回收到 (`ppstrap_external_return`)

保持本具体聚丙烯带未绑定；25千克种子袋、农用捆绳、线束扎带或PP树脂不是现成捆包带。 仅实际在入厂或出厂使用本组件时适用。外部退回收到：按b_packaging记录本组件P/I/ER/S/EO/W及空、附着在制、附着成品、周转物期初期末存量。外出区分随毛发运S附着与向外部物主退还EO，不自动作共产品/供方信用。内部I抵消、不属采购。独立于纤维Q，不能乘以名义棉包重量。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：聚丙烯打包带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_packaging采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_packaging`
- 来源：`usitc-comber-1990`; `ilcd-attributional-2010`

#### 输出

##### 产品流

###### 落棉毛实物发运 (`gross_noil_dispatch`)

通用Product flow，工厂门、未指定处理；此身份不证明固定等级、CAS、地理、落棉率或纺纱验收。本卡限来自精梳机的未漂白未拉松棉短纤维，排除棉短绒、籽棉、条花、硬纱废料、棉布和混合地扫棉。保留长度分布、实测植物残杂、游离水、油剂/整理剂污染、纯棉程度、来源线/批号及接收方真实规格/状态。正式中文名称较宽，不表示排除所有回收纤维；以英文未经拉松边界约束。记录含重发在内的真实毛外发纤维并标识来源批组；这是S，不是二次生产产量Q。期初成品历史及期末成品留在服务库存核对。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：废棉，不包括回收纤维 `706d76ad-229e-4559-81bf-6b8619cbe6be`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_service采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_service`
- 来源：`usitc-comber-1990`; `gp-comber-noil`; `ilcd-attributional-2010`

###### 棉包棉布—实物外出组件 (`cottoncloth_outward`)

使用组成和状态经核实的单一机织棉布。原生正式名称及同义词与本材料一致；原棉分类和通用原棉注释为不一致分类/背景，在此披露，不允许据此绑定原棉。不推定漂白或印花等级。 仅实际在入厂或出厂使用本组件时适用。实物外出组件：按b_packaging记录本组件P/I/ER/S/EO/W及空、附着在制、附着成品、周转物期初期末存量。外出区分随毛发运S附着与向外部物主退还EO，不自动作共产品/供方信用。内部I抵消、不属采购。独立于纤维Q，不能乘以名义棉包重量。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：棉布 `dd9f2248-bc28-43b9-8d57-d77756754f4d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_packaging采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_packaging`
- 来源：`usitc-comber-1990`; `ilcd-attributional-2010`

###### 棉包黄麻粗布—实物外出组件 (`jutecloth_outward`)

保持本具体实物未绑定，直至确认兼容原生身份。天然粗麻布证据不证明所有纤维组成，须核实实际黄麻粗布。 仅实际在入厂或出厂使用本组件时适用。实物外出组件：按b_packaging记录本组件P/I/ER/S/EO/W及空、附着在制、附着成品、周转物期初期末存量。外出区分随毛发运S附着与向外部物主退还EO，不自动作共产品/供方信用。内部I抵消、不属采购。独立于纤维Q，不能乘以名义棉包重量。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：黄麻机织棉包粗布
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_packaging采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_packaging`
- 来源：`usitc-comber-1990`; `ilcd-attributional-2010`

###### 钢丝捆包线—实物外出组件 (`steelwire_outward`)

使用来自钢铁生产的圆柱柔性铁/非合金钢丝，须匹配真实直径、等级、涂层；不是扁钢带、铜棒或钢丝绳总成。 仅实际在入厂或出厂使用本组件时适用。实物外出组件：按b_packaging记录本组件P/I/ER/S/EO/W及空、附着在制、附着成品、周转物期初期末存量。外出区分随毛发运S附着与向外部物主退还EO，不自动作共产品/供方信用。内部I抵消、不属采购。独立于纤维Q，不能乘以名义棉包重量。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：钢丝 `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_packaging采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_packaging`
- 来源：`usitc-comber-1990`; `ilcd-attributional-2010`

###### 聚丙烯打包带—实物外出组件 (`ppstrap_outward`)

保持本具体聚丙烯带未绑定；25千克种子袋、农用捆绳、线束扎带或PP树脂不是现成捆包带。 仅实际在入厂或出厂使用本组件时适用。实物外出组件：按b_packaging记录本组件P/I/ER/S/EO/W及空、附着在制、附着成品、周转物期初期末存量。外出区分随毛发运S附着与向外部物主退还EO，不自动作共产品/供方信用。内部I抵消、不属采购。独立于纤维Q，不能乘以名义棉包重量。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：聚丙烯打包带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_packaging采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_packaging`
- 来源：`usitc-comber-1990`; `ilcd-attributional-2010`

##### 废物流

###### 丢弃棉纤维 (`services_discarded_cotton`)

仅计本阶段真实丢弃棉纤维，排除单独计量的植物残杂与捕集粉尘。未放行失败批与放行后服务拒收物分别保留历史和真实去向，无默认零负荷或信用。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：丢弃的未拉松棉纤维
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_environment采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_environment`
- 来源：`usitc-comber-1990`; `jrc-textiles-2023`; `ilcd-attributional-2010`

###### 分离植物残杂 (`services_plant_trash`)

按本阶段真实去除植物残杂实测适用，称量并说明组成、含水和去向。仍留落棉内的残杂属于落棉质量，不得再计分离输出。混合收集物须保留一个总量及非叠加来源分区，不能虚构纯物种分拆。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：棉叶及棉铃植物残杂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_environment采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_environment`
- 来源：`usitc-comber-1990`; `jrc-textiles-2023`; `ilcd-attributional-2010`

###### 捕集棉尘 (`services_captured_dust`)

称量实际捕集棉尘流，记录组成、除尘灰斗期初期末存量及去向。本废物不是向大气释放的基本流，不得再把收集器总量计入植物残杂或丢弃纤维。若真实有产品回收，应另设互斥功能产品行。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：捕集棉纤维粉尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_environment采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_environment`
- 来源：`usitc-comber-1990`; `jrc-textiles-2023`; `ilcd-attributional-2010`

###### 棉包棉布—废弃组件 (`cottoncloth_waste`)

使用组成和状态经核实的单一机织棉布。原生正式名称及同义词与本材料一致；原棉分类和通用原棉注释为不一致分类/背景，在此披露，不允许据此绑定原棉。不推定漂白或印花等级。 仅实际在入厂或出厂使用本组件时适用。废弃组件：按b_packaging记录本组件P/I/ER/S/EO/W及空、附着在制、附着成品、周转物期初期末存量。外出区分随毛发运S附着与向外部物主退还EO，不自动作共产品/供方信用。内部I抵消、不属采购。独立于纤维Q，不能乘以名义棉包重量。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：废弃棉包棉布
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_packaging采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_packaging`
- 来源：`usitc-comber-1990`; `ilcd-attributional-2010`

###### 棉包黄麻粗布—废弃组件 (`jutecloth_waste`)

保持本具体实物未绑定，直至确认兼容原生身份。天然粗麻布证据不证明所有纤维组成，须核实实际黄麻粗布。 仅实际在入厂或出厂使用本组件时适用。废弃组件：按b_packaging记录本组件P/I/ER/S/EO/W及空、附着在制、附着成品、周转物期初期末存量。外出区分随毛发运S附着与向外部物主退还EO，不自动作共产品/供方信用。内部I抵消、不属采购。独立于纤维Q，不能乘以名义棉包重量。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：废弃黄麻粗布
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_packaging采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_packaging`
- 来源：`usitc-comber-1990`; `ilcd-attributional-2010`

###### 钢丝捆包线—废弃组件 (`steelwire_waste`)

使用来自钢铁生产的圆柱柔性铁/非合金钢丝，须匹配真实直径、等级、涂层；不是扁钢带、铜棒或钢丝绳总成。 仅实际在入厂或出厂使用本组件时适用。废弃组件：按b_packaging记录本组件P/I/ER/S/EO/W及空、附着在制、附着成品、周转物期初期末存量。外出区分随毛发运S附着与向外部物主退还EO，不自动作共产品/供方信用。内部I抵消、不属采购。独立于纤维Q，不能乘以名义棉包重量。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：废弃捆包钢丝
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_packaging采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_packaging`
- 来源：`usitc-comber-1990`; `ilcd-attributional-2010`

###### 聚丙烯打包带—废弃组件 (`ppstrap_waste`)

保持本具体聚丙烯带未绑定；25千克种子袋、农用捆绳、线束扎带或PP树脂不是现成捆包带。 仅实际在入厂或出厂使用本组件时适用。废弃组件：按b_packaging记录本组件P/I/ER/S/EO/W及空、附着在制、附着成品、周转物期初期末存量。外出区分随毛发运S附着与向外部物主退还EO，不自动作共产品/供方信用。内部I抵消、不属采购。独立于纤维Q，不能乘以名义棉包重量。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：废弃聚丙烯打包带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_packaging采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_packaging`
- 来源：`usitc-comber-1990`; `ilcd-attributional-2010`

##### 基本流

###### 剩余颗粒物向空气排放 (`services_air_pm`)

向空气排放的基本流，子环境和粒径未特指；不指定固定组成、烟囱高度或表征因子。原生熟料案例不是棉工序排放因子，也不将本流限为熟料。采用本阶段独立实测排气/无组织颗粒物质量，保留真实治理、介质及采样，不假定PM2.5/PM10。 数量n为第8节calc_normalize既有结果；采集原始记录及读取n不执行第二次除法。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流的n；按cp_environment采集原始记录。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_environment`
- 来源：`jrc-textiles-2023`; `ilcd-attributional-2010`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_subdivide | joint_combing_and_shared_services | 本PCR对有功能的纺纱供料采用归因供应建模。先将专属落棉收集、清选、检测、包装直接归属；以定量工艺知识及分表记录对可分开的准备、精梳和服务实施独立或虚拟细分。识别真正仍与长纤精梳棉条和其他有价产出共用的皮棉/精梳负荷。 | `ilcd-attributional-2010` |
| a_causality | each_remaining_exchange | 逐个剩余交换检验其与各共功能之间具有决定性的物理因果关系，说明驱动量选择并实测。机械物料处理量可能决定输送需求；为长棉条质量要求而进行的精梳不能仅因存在落棉质量就认定由落棉造成。不得对所有流套用同一质量份额，也不得用相关性或得率比替代决定性因果。 | `ilcd-attributional-2010` |
| a_residual_value | genuinely_unresolved_joint_inventory | 仅真正无法解决的共用交换使用同一共生产过程门、真实状态下同期代表性市场价值。记录所有有价共产品的价值和数量并作敏感性检查。从后续交付价格中剔除单独发生的落棉清选、压包、包装及运费。不允许固定份额、任意选择物理或经济分配、避免原生棉信用或默认替代。 | `ilcd-attributional-2010` |
| a_status | product_waste_and_receiver | 记录真实法律状态、所有权转移、接收方验收、去向和功能使用。参考为已验收落棉的Product flow供应；废物处理服务需要另设合适参考，不能以负落棉供应代替。每份实物纤维只能选择产品转移或丢弃废物之一。负价值废物及报废回收须按ILCD明确评估真正共生产过程及零价值边界；不得把该处理场景套入本有价生产残余物供应。 | `usitc-comber-1990`; `ilcd-attributional-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | preparation | 毛皮棉与共产品转移及继承 | 称重单及工艺批台账 | row_id; 实物门; 批号; 投入状态; 毛V; 干棉; 游离水; 实测残杂; 污染; 期初在制; 期末在制; 未投入非在制; 继承向量; 接收方 | 校准去皮称量；匹配水分/污染样本；链接每条精梳线及独立共产品；不借用得率 采集未归一V及继承向量；先calc_stock再calc_allocate，最后对每1kg参考流仅执行一次calc_normalize | kg | 每批及每班 | 完整生产批组含全部失败及Q0 | 全部制造门含noil_release | 每 1 kg 参考流 | 秤校准；库存核对；追溯；采样结果 |
| cp_release | noil_release | 首次质量放行 | 放行证书及重量 | cohort_id; lot_id; first_release_id; Q; 净纤维质量; 皮重; 水分; 纯度; 长度; 残杂; 棉结; 油剂; 纺纱接收规格; 验收状态; 失败数量; 已包含期末成品 | 唯一首次放行事件及校准净纤维称量；将抽样性能与声明纺纱规格比较；不假定医用纯度 汇总新增首次放行Q一次并包含同批组期末成品；保留原始总量；单位行1kg引用calc_normalize | kg | 每次首次放行 | 完整批组一次 | 落棉放行门 | 每 1 kg 参考流 | 放行签署；客户验收；秤和实验室记录 |
| cp_energy | preparation | 阶段能源及共享服务 | 电表及运行日志 | row_id; process_id; 电压; 地理; 供方; 读数; 原始kWh; 积分量; 速率; 时长; 待机; 清场; 分配驱动量 | 对三个阶段分表并核对发票；区分积分电量和功率速率；仅细分后使用因果驱动量 保留原始读数单位；calc_units再calc_allocate，最后对每1kg参考流仅一次calc_normalize | kWh; MJ | 连续并按班/发票核对 | 生产和放行后服务期间关联原批组 | preparation; noil_release; services | 每 1 kg 参考流 | 电表校准；发票；电压证据；完整运行日志 |
| cp_environment | noil_release | 每项固体拒收物及颗粒物出口 | 废物联单及环境采样 | row_id; 阶段; 来源分区; 废物状态; 接收方; 期初灰斗; 期末灰斗; 毛质量; 水分; 实测组成; 出口流量; 温度; 压力; 采样时长; 实际颗粒物浓度; 空气介质 | 称量独立收集流；说明混合总量组成且不叠加来源分区；环境采样匹配真实排气气量和时间；不将职业暴露转换为排放 原始质量和速率/积分体积保留未归一；calc_units再calc_allocate，最后对每1kg参考流仅一次calc_normalize | kg; m3; h; mg/m3 | 每次移出及代表性工况 | 全部运行含启停待机及失败 | preparation; noil_release; services及每个出口 | 每 1 kg 参考流 | 采样报告；校准；接收验收；总量/分区核对 |
| cp_water | noil_release | 真实加湿水及其出口 | 水表湿度及排污记录 | row_id; 普通H2O; 供水量; 进出纤维水分; 进出口湿度; 实际气量; 温度; 压力; 净蒸汽; 液态排污; 期初期末水存量; 密度方法 | 独立计量各水路径；核实真实加湿设备和含水变化；已报积分量仅用一次；不推定反应水 保留未归一水衡算；calc_units再calc_allocate，最后对每1kg参考流仅一次calc_normalize | kg; m3; h | 每班及物料批 | 相同批组及供水期间 | 真实加湿及其液/气出口 | 每 1 kg 参考流 | 校准水表；湿度样本；排污分析；必要时独立密度测定 |
| cp_service | services | 成品仓储退回及毛发运 | 批组成品及发运账 | row_id; cohort_id; 原Qc; H; S; 期初成品; 期末成品; 继承向量; 外部退回; 原交付冲回; 真实增量返工; 服务电量; 拒收物 | 将每次移动链接原首次放行批组；实物外出/退回分别记录并核对全部历史负荷 保留原始H/S/库存及历史；先calc_service，再用原Qc对每1kg参考流执行同一calc_normalize一次 | kg; MJ; h | 每次移动及库存期间 | 原批组完整服务期间含后续结算 | 成品库包装与发运门 | 每 1 kg 参考流 | 发运/退回单；原批组链接；负荷结转及结算 |
| cp_packaging | services | 每个包装组件及移动一行 | 组件收发退回及库存台账 | row_id; 组件; 入厂/出厂角色; 批组; 期初空包; 期初附着在制; 期初附着成品; 期初周转; P; I; ER; S; EO; W; 期末空/附着/周转; 真实组成; 供方; 净kg | 逐组件逐移动称量；对棉布、黄麻布、钢丝、PP带分别核对b_packaging；保留入厂棉包外包历史及出厂毛附着量 保留未归一P/I/ER/S/EO/W及存量；calc_packaging再calc_allocate，最后对每1kg参考流仅一次calc_normalize | kg | 每次收发移动及期末库存 | 生产及原批组完整服务期间 | 全部三个过程门并标识组件所有权 | 每 1 kg 参考流 | 组件秤；组成证明；采购/退回单；完整库存核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_units | all inventory rows | 每项原始计量先按其单位换算再分配：1kWh=3.6MJ；1t=1000kg。真实速率按实测时长积分一次，累计量不再积分。仅在需要体积转质量时使用独立实测的该物质/状态密度。毛V不因分配改变。 | raw_measurements; unit_factors; rate_or_integral; substance_state_density | 换算原始向量 | `ilcd-attributional-2010` |
| calc_stock | manufacture and unused input stocks | 对每种真实材料及逐交换继承向量核对：期初在制+本期新投入=期末在制+首次放行产出+独立共产品+实际拒收/释放。未投入非在制物料另核对：期初+接收=期末+实际领用+对外退还。仅应用未入账更正，已净领用不二扣。水和实测污染分区不与整份质量叠加。 | gross_V; opening_WIP; closing_WIP; unused_nonWIP; inherited_vectors; new_receipts; issues | 批组原始向量 | `ilcd-attributional-2010` |
| calc_allocate | all inventory rows | 先直接或虚拟细分归属专属向量；逐个剩余交换依a_causality采用有记录的决定性物理因果；仅真正剩余部分依a_residual_value使用同一共生产门价值。保留全部共功能向量并核对合计等于未分配向量。A是单位换算及库存继承后的归因未归一分子，不是毛物理V。 | cohort_raw_vectors; dedicated_vectors; causal_drivers; same_gate_values | A | `ilcd-attributional-2010` |
| calc_service | services | 按原继承向量核对：期初成品+首次放行接收+外部纤维退回=期末成品+毛纤维发运+实际服务拒收/释放。退回时冲回原交付且不抹历史，仅新增真实增量返工。全部服务负荷归原批组Qc，H和S仅活动记录。跨期保留逐批组结转及后续结算。合并模型中抵消内部转移及历史。 | original_Qc; opening_FG; closing_FG; gross_shipments_S; returns; inherited_vectors; incremental_service | 批组服务A | `ilcd-attributional-2010` |
| calc_packaging | each packaging component | 逐卡执行b_packaging组件完整衡算。区分新购P、外部退回收到ER、毛外发附着S、向外部物主退还EO和废物W。内部复用I抵消，同一材料不二次采购。维持入厂出厂所有权历史，不把包装加入净落棉Q。 | P; I; ER; S; EO; W; opening_component_stocks; closing_component_stocks | 组件原始向量 | `usitc-comber-1990`; `ilcd-attributional-2010` |
| calc_normalize | all inventory rows | n=A/Q；A为首次放行批组的归因未归一交换分子；Q为其新增首次放行净落棉kg。此为唯一除法，卡片与采集汇总引用同一结果。服务先calc_service，再在同一算子中使用原批组Qc，H绝不作分母。first_release_noil行取1千克。适用分母Q（服务为原Qc）为零时保留实际负荷，不生成单位结果。 | A; Q; original_Qc | 每1kg参考流的n | `ilcd-attributional-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_trace | all rows | 真实运行记录与毛数量关联同一批/场址/期间；包含每种待机失败及Q0状态。不编工厂数值、不套供应商范围。 | 生产库存账；校准计量 |
| dq_native | UUID-bearing rows | 采用正式中文显示和逐卡完整限制。精确流/属性/单位链仅为身份依据，实际供方和组成分别核实。原皮棉及辅料UUID缺口保留具体名称并明确。 | 原生身份记录及供方证据 |
| dq_scope | source support | USITC1990说明路线和未漂白用途，不是当前法律结论或现代清单。G P供应商声明仅识别商业落棉及邻近物。BREF中毛/合纤润滑例子不证明棉用油剂量。ILCD为通用归因方法，不是落棉工厂计量。 | 完整来源上下文及实际适用性判断 |
| dq_uncertainty | unit result and services | 披露计量不确定性、供方身份未完整、因果分配支持、库存继承、来源/地理不匹配及服务批组结算。不声称医用纯度、通用得率或完整影响表征。 | 不确定性记录；分配敏感性；批组结转 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_identity | reference_and_all_bound_exchanges | 核实落棉来自精梳机并实际通过纺纱供料验收。遵守每个原生名称、形态、路线、地理、介质、类型、存在时的CAS及参考属性。通用废棉身份不证明落棉等级或法律地位。拒绝将棉布作轧花皮棉、棉条作落棉、棉短绒作落棉或拉松料作未拉松落棉。 | `un-cpc3-2025`; `usitc-comber-1990`; `gp-comber-noil` |
| v_quantity | production_service_and_consolidation | 在制造、成品/服务及合并门核对完整毛质量，并分别核对干棉、游离水、实测植物残杂、污染及实际助剂。Q仅包含期末成品一次。保留完整失败/零产出批次、期初期末在制品和未投入非在制物料继承。内部转移精确抵消；不得用一个残差拟合两个未知损失。机械分离不能推定生成反应水或结构水。 | `usitc-comber-1990`; `ilcd-attributional-2010` |
| v_once | all_inventory_rows | 追踪原始计量经单位换算和分配形成A，再仅执行一次calc_normalize。采集和汇总保留未归一原始记录。卡片使用同一结果，不再除一次。Q0保留负荷、不生成单位结果。服务使用原Qc而非H；退回物保留原历史并只新增实际增量返工。 | `ilcd-attributional-2010` |
| v_emissions | air_water_and_waste | 环境排气需记录实测出口状态、流量和实际颗粒物采样，职业暴露浓度不是排放因子。真实速率只积分一次；已积分体积不再乘时间。必要时独立测定该物质在真实温压下的密度。不得从COD、总VOC或质量残差推导具体化学物种。捕集固体与向大气释放分别记录，处理链接只接一次。 | `jrc-textiles-2023`; `ilcd-attributional-2010` |
| v_packaging | every_packaging_card | 逐包装卡检查P/I/ER/S/EO/W，含空包装、附着在制、附着成品及周转物的期初期末库存。发运包装随毛实物交付（包括退回与重发）核对，不改变净纤维Q。核实旧包装复用不作为重购，也不自动给予材料信用。 | `usitc-comber-1990`; `ilcd-attributional-2010` |
| v_complete | dataset_before_use | 使用前核实当前投影、全部必需限定、来源、协议、分配证据和所有条件实际交换。缺少工厂记录须采集；辅料身份缺口明确保留。核心参考身份或核心路线/终端质量未解决时，数据集不可用且方法保留草稿。科学和翻译审批独立于机械检查。 | `ilcd-attributional-2010` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 来源和落棉状态匹配的纺纱原料模型 |
| allowed_use | 新增首次放行落棉归因供应，明确附带原批组服务及一次上游皮棉 |
| excluded_use | 废物处理服务; 拉松棉; 棉短绒; 医用棉; 通用工厂平均; 自动替代信用 |
| required_metadata | 精梳来源线和批号; 轧花原生皮棉来源及既往准备; 未拉松未漂白短纤维形态; 纯棉程度及实测异纤污染; 纤维长度分布及接收方纺纱规格; 实测植物残杂及棉结; 游离水及声明的放行态质量基准; 存在时油剂或整理剂身份及残留含量; 首次质量放行Q及原批组Qc; 期初期末在制品及未投入非在制物料向量; 毛物理V区别于归因A; 共生产产出分配证据; 法律转移状态及接收方验收; 场址与技术; 代表性生产及服务期间; 真实包装组成及组件完整衡算; 原生身份限制及供方兼容性 |
| required_quality_disclosure | 披露计量不确定性、供方身份未完整、因果分配支持、库存继承、来源/地理不匹配及服务批组结算。不声称医用纯度、通用得率或完整影响表征。 |
| update_trigger | 纤维来源/状态、精梳/清选路线、污染、接收规格、公用身份、分配、首次放行门、库存/服务边界、包装改变或更强来源出现 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC Version3.0 Structure and Explanatory Notes,30June2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 39214及39215分类名称与邻近纺织废料类别；仅分类背景 |
| usitc-comber-1990 | official_guidance | USITC Publication2334, Cotton Comber Waste, November1990, A-10–A-11 and A-28–A-29; https://www.usitc.gov/publications/22/pub2334.pdf | 轧花皮棉准备与精梳来源；未漂白落棉纺纱用途；独立处理与天然粗麻布；有条件经销商清选；仅历史路线事实，不作现代数量或法律声明 |
| gp-comber-noil | literature | G P Group India, Cotton Comber Noil; https://www.gpgroupindia.com/cotton-comber-noil.html | 第一方商业落棉来源及转杯纺用途；邻近条花、刺辊落棉及硬纱废料区别；不将供应商规格移作PCR范围 |
| jrc-textiles-2023 | official_guidance | JRC Textiles Industry BREF,2023, sections2.4.2–2.4.3, PDF68–69; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | 棉准备工艺背景及真实助剂排查；邻近毛与合纤含油百分数不适用棉落棉；不设默认油剂配方或排放量 |
| ilcd-attributional-2010 | official_guidance | ILCD Handbook General guide for LCA Detailed guidance, First edition March2010,7.9.2–7.9.3, PDF275–292; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 通用归因细分、逐交换决定性物理因果、真正剩余共用过程门价值及废物/回收限制；前景采集执行为本PCR技术综合，不借用工厂数值 |
