---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.oils-and-other-products-of-the-distillation-of-high-temperature-coal-tar-and-similar-pr-0606318d
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 高温煤焦油粘结沥青

## 1. 范围与适用性

本PCR适用于高温焦炉煤焦油经连续常压分馏所得塔底未改性纯工业粘结沥青。交付参考是在声明温压下的均匀熔融散装物，位于下游电极或阳极制造之前。它是组成可变的芳香族UVCB物质，不是单一纯化学品、水乳液或溶剂溶液。牌号、软化行为、不溶物与残余水分须按实际批次验收，不设配方默认值。`ifc-coal-tar-2007`；`rain-pitch-products`

排除回收粗焦油、木焦油/泥炭或褐煤焦油、石油沥青及煤焦油与石油混合沥青、以独立产品为参考的馏分油、沥青焦、吹氧或化学改性沥青、中间相沥青、乳化或配方粘结剂以及电极或碳制品制造。可回收馏分混合物仍是本前景的实物联产品。上游回收粗煤焦油PCR止于本独立蒸馏之前，须按有证据的供方边界衔接。分类标签不能证明整类适用。`wco-hs-2022-ch27`；`un-cpc-3-2025`

应用前须确认实际进料来源、连续常压路线及熔融粘结沥青交付。不同切割方案是同一蒸馏方法的实际操作，不要求所有馏分必然同时存在。本方法不提供通用进料配方、沥青收率、密度、纯度、加热负荷、用量、排放因子或分配份额。不兼容路线须另行适用性审查，不能为取得UUID而替换产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.oils-and-other-products-of-the-distillation-of-high-temperature-coal-tar-and-similar-pr-0606318d |
| classification_refs | CPC 3.0 34540；建议narrower关系，需独立接受映射 |
| covered_products | 高温煤焦油经连续常压分馏所得纯粘结沥青，热态熔融散装交付 |
| excluded_products | 粗焦油；其他来源、混合、配方或化学改性沥青；独立馏分油产品；沥青焦；碳制品及电极 |
| representative_product | 一种实际验收粘结沥青牌号和批次，具有来源与熔融状态规格 |
| production_route | 粗焦油接收及实测脱水；连续常压分馏；以分离方式调节沥青；热态储存及散装转运；实际排放控制和残渣输出 |
| market_state | 工厂交付界面的均匀熔融工业粘结沥青，声明温压，不含包装体积 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 向下游碳制品制造供应已识别的煤焦油粘结原料 |
| How much | 声明交付状态下验收熔融沥青的净体积1 m3 |
| How well | 实际客户验收牌号，实测组成、水分、不溶物及软化行为；不假定不同牌号等效 |
| How long or cycle | 一次出厂散装供应；下游服务寿命不在本参考内 |
| reference_flow_link | reference_pitch |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 沥青 `7d42bfb3-afaa-4b54-a1ab-f2dead883200` |
| 参考流属性 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` |
| 参考单位组 | 体积单位 `93a60a57-a3c8-12da-a746-0800200c9a66` |
| 参考单位 | m3 |
| 必需限定信息 | 高温焦炉煤来源；未改性纯UVCB粘结沥青；实际牌号/SKU及验收方法；残余水分和不溶物；常压路线及馏分切割；交付温压；排除空隙和容器的均匀液体体积；实际批次密度方法及温度；匹配的供方参考体积约定；上游分配；报告期间与工厂；接收方及交付界面 |

广义原生沥青流具有CAS 65996-93-2及煤焦油粘结剂供应路线，只限用于上述子集。广义同义名或体积属性均不能证明供方温度约定、实测密度、完整数据集或数量兼容性；链接供方前须采集并核验这些条件。1 m3基准遵循参考属性，不得暗中当作1千克、冷态松散固体堆积体积或基于质量的数据库系数。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_volume | 参考产品 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 通过cp_product在同一声明温压状态采集验收熔融净体积。使用针对实际粘度和温度验证过的校准液体表计或罐容法，或使用可追溯净称量与同批液体在该状态下的独立实测密度；保留质量与体积。无通用密度或膨胀系数。 |
| solution_basis | sodium_hydroxide; tar_feed; wastewater; tar_sludge | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 区分供货湿载体质量、干物或活性组分质量及载水。已检测溶液的组分质量为溶液质量乘实测质量分数；已在溶液内的水不另列为第二项输入。 |
| utility_basis | gas; electricity; steam; condensate_return; cooling_water; water | 实际声明的参考属性 | 实际声明的参考单位 | 保留天然气体积/m3和电力净热值/MJ原生属性。表计电量由kWh按3.6换算为MJ，并记录实际供电层级。蒸汽是有实测状态的交付载体质量；液态回水另计。不将蒸汽千克或MJ属性等同于净有用热量。 |
| species_basis | 所有基本流行 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告实测物种质量及声明的环境空气介质；积分前核对气体采样体积、干湿状态、温压及氧修正。一氧化氮、二氧化氮与一氧化二氮相互独立；NOx以二氧化氮计的报告量不是物种质量。颗粒物粒径段互不重叠。 |

参考体积、密度及湿组分协议是明确的前景计量设计要求，依据化工清单与监测框架，不规定行业通用换算数值。具体数据包仍须具备数量和不确定性证据。`jrc-cww-bref-2016`；`ifc-coal-tar-2007`

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 蒸馏厂接收界面验收的回收高温焦炉粗煤焦油，具有实测夹带水、固体及上游数据集 |
| starting_condition_role | 供货中间物；煤炭干馏与粗焦油回收在上游 |
| product_classification_scope | CPC 3.0 34540的粘结沥青narrower子集；其他蒸馏产品是联产品，不是另一个参考身份 |
| recursive_input_rule | 外部同类沥青输入须按实际供应状态、供方及负荷另行记录。内部回收沥青或焦油回用是两端同量的实物链接，不是新购入。外部沥青调配在本纯塔底产物范围之外。 |
| upstream_dataset_requirement | 使用包含上游炼焦及回收分配的兼容粗焦油供方清单，核验结束界面及脱水、储存、加热或交付是否与本前景重叠 |
| disclosure | 工厂与期间；来源焦炉路线；湿进料和杂质；实际脱水及馏程图；加热炉、公用工程与控制配置；热态交付状态；处理输出界面；实物及负荷账以及全部缺口 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_foreground | tar_distillation | 纳入接收、实际脱水、常压馏分切割、沥青储运、厂内加热炉、冷却清洗及实际释放控制。将加工和散装交付合理聚合为一个前景单元，同时保留阶段计量及两端同量的内部链接；reference_pitch是唯一成品输出。 | `ifc-coal-tar-2007`; `rain-pitch-products` |
| boundary_interfaces | tar_distillation | 炼焦或粗焦油回收以及下游油品精制或电极生产使用独立兼容供方过程。本画像将污染水和污泥送往独立建模的处理界面；若有厂内最终排放污水处理，则须显式扩展实测处理投入、污泥和各最终受纳水体物种。厂外转移不是基本排放。 | `jrc-cww-bref-2016`; `wco-hs-2022-ch27` |
| boundary_completeness | all inventory rows | 将实际启停、异常、清洗及库存变化保留在采集期间。评估全部实际燃料、碱、润滑剂、吸附剂、包装及排放控制耗材，每个额外发生项增加一个原子行。内部凝结水或焦油回收及总冷却循环水不再次作为外部购入。未定量释放及未匹配身份须明确，不作零值。 | `jrc-cww-bref-2016`; `ifc-coal-tar-2007` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| tar_distillation | 粗焦油接收、脱水、常压分馏及热态沥青交付 | required | 已验证高温焦炉进料与纯粘结沥青路线，保留实际设备及馏程阶段 | foreground production | 1 m3 reference_pitch |

### 过程：焦油蒸馏及散装粘结沥青交付（`tar_distillation`）

每个条件行在实际存在时定量。分别记录有证据的不存在、数量缺失或身份缺失。该清单是路线特定的起始清单，不证明所有排放必然发生，也不允许遗漏发现的物种。所有实物行采用同一验收沥青体积分母；分配仅作用于独立环境负荷账。空气行在源位置汇总时使用环境空气未特指介质；若已知更具体介质，须另行验证匹配流。`ifc-coal-tar-2007`；`jrc-cww-bref-2016`

#### 输入

##### 产品流

###### 煤焦油（`tar_feed`）

验收接收的高温焦炉粗煤焦油。测量湿基净质量、夹带水、固体、灰分及元素组成；获取上游负荷与分离边界。广义煤焦油身份不提供默认热值。

- 选定流：煤焦油 `7b09995f-2ee9-4584-b244-c2d84ea75585`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_material采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 交流电（`electricity`）

仅在实际供应匹配时使用用户界面购入的中国（CN）1–35千伏电网平均交流电。选定原生供电地理为CN；其他地理或电压须采用另行验证兼容的流及供方。记录位置、供方和期间，保留表计层级，避免总表与分表重复计算。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按cp_utility采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 气态天然气（`gas`）

实际蒸馏加热炉燃烧的化石源气态天然气。将供方参考体积与表计温度、绝对压力、干湿状态、组成及压缩因子对齐；数据库次级质量系数不是密度。其他燃料须另建原子行并提供证据。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：按cp_utility采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 去离子水（`water`）

条件纳入实际用于配制、清洗或公用工程补水的购入去离子水。称量或用实测兼容密度换算液态表计体积；不得将该身份用于未经处理的冷却补水或供货碱液已含的水。

- 选定流：去离子水 `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_utility采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 工业冷却补充水（`cooling_water`）

进入厂内冷却回路的实际新补充水。测量来源、水质、体积和排污量；循环流量是内部服务，不再次作为购入水。啤酒厂电驱动冷却服务不能代表此水流。

- 选定流：工业冷却补充水
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：按cp_utility采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 购入工艺蒸汽（`steam`）

条件纳入实际间接加热或直接喷入的供汽质量。采集供应压力（表压或绝压）、温度、干度、质量和供方边界；液态回水另列。未证明工况匹配时不能采用限定11.0 MPaG的候选。蒸汽质量与热服务不得重复承载同一负荷。

- 选定流：购入工艺蒸汽
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_utility采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 焦油中和用氢氧化钠水溶液（`sodium_hydroxide`）

条件纳入有记录的防腐蚀路线使用的碱液。采集实际供货溶液质量、氢氧化钠质量分数、载水、杂质和用量；若厂内配制，则改为分别记录固体氢氧化钠及加水。不得假定通用配方或医药路线兼容。

- 选定流：焦油中和用氢氧化钠水溶液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_material采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

#### 输出

##### 产品流

###### 沥青（`reference_pitch`）

在声明温压下作为均匀熔融散装物交付的未改性纯高温煤焦油粘结沥青。其UVCB身份不是单一纯多环芳烃。排除加水、溶剂、石油或木焦油及容器体积；按cp_product确定验收净体积。

- 选定流：沥青 `7d42bfb3-afaa-4b54-a1ab-f2dead883200`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：1 m3
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 煤焦油轻质馏分油（`light_oil`）

条件纳入离开单元的实际一次轻质馏分；检测组成与馏程。不得用石油裂解焦化蜡油或洗油替代。进一步分离的纯苯归下游分离过程。

- 选定流：煤焦油轻质馏分油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_material采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 煤焦油萘油馏分（`naphthalene_oil`）

条件纳入实际富萘混合馏分，不是纯萘、萘酚或石油石脑油。记录实际切割馏程与组成，不移植历史浓度或收率。

- 选定流：煤焦油萘油馏分
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_material采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 煤焦油中间杂酚油馏分（`middle_oil`）

条件纳入在后续调配或精制之前单独回收的中间杂酚油馏分。确定多环芳烃、酚类组成与馏程边界，不得采用妥尔油或松节油。

- 选定流：煤焦油中间杂酚油馏分
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_material采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 蒽油（`heavy_oil`）

条件纳入蒸馏出厂边界回收的煤焦油蒽油混合物；CAS 90640-80-5是混合物身份，不是纯蒽。分配后仍保留实际交付质量与牌号。

- 选定流：蒽油 `1a17fbe6-a61c-4ace-8fee-e101f643d18a`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_material采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 液态公用蒸汽凝结回水（`condensate_return`）

条件纳入返回公用工程供方的实测液态回水，记录压力、温度与焓状态。它不是蒸汽或乳品冷凝液。直接喷入且进入工艺水的蒸汽不得同时作为此回水排出。

- 选定流：液态公用蒸汽凝结回水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_utility采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

##### 废物流

###### 送外部处理的煤焦油蒸馏含油废水（`wastewater`）

实际分流并送往独立建模处理界面的污染水。采集水、油、悬浮固体、BOD/COD、各多环芳烃、实际存在的盐和铵、湿质量及接收条件。该流不是向淡水的基本排放，也不是电解锰渣洗涤废水。

- 选定流：送外部处理的煤焦油蒸馏含油废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_waste采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 煤焦油蒸馏沉积污泥（`tar_sludge`）

实际分离后送至有记录接收方的含多环芳烃焦油、固体与水污泥。测量湿质量、水分、灰分、组成以及危险性和处理条件。回收沥青不因其为蒸馏残留物就成为废物；未证明匹配原生限定31.4 MJ/kg的残渣牌号。

- 选定流：煤焦油蒸馏沉积污泥
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_waste采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

##### 基本流

###### 苯（`benzene_air`）

收集处理后由储存、转运或工艺放空实际排入环境空气的苯；计入实测逸散和烟道贡献，不与总VOC重复计算。

- 选定流：苯 `08a91e70-3ddc-11dd-9202-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 萘（`naphthalene_air`）

回收或控制后实际排出的萘；区分留在产品或废物中的萘与排放质量。

- 选定流：萘 `fe0acd60-3ddc-11dd-a682-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 苯并[a]芘（`bap_air`）

实际释放蒸气或气溶胶中的苯并[a]芘，须有采样相回收率与基质验证。它是一个物种，不是总多环芳烃或全部焦油烟。

- 选定流：苯并[a]芘 `08a91e70-3ddc-11dd-9221-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 颗粒物 (PM2.5)（`pm25_air`）

离开边界的实际PM2.5，记录采样空气动力学粒径及可凝结或可过滤口径。收集截留物仍留在回用或废物账。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 颗粒物 (PM2.5 - PM10)（`pmcoarse_air`）

实际不重叠的PM2.5–PM10粒径段。仅在方法、时间和湿度口径匹配时对嵌套总量作差，不得虚构分段。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 颗粒物（> PM10）（`pmover10_air`）

离开边界的实际大于PM10的颗粒；与较小粒径段和捕集的焦油气溶胶区分。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 二氧化碳（化石源）（`co2_air`）

厂内天然气加热炉及实际有机物破坏控制产生的净化石源二氧化碳；按有记录的一致口径扣除进气载体二氧化碳，不得假定蒸馏破坏全部焦油碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 一氧化碳（化石源）（`co_air`）

加热炉或实际燃烧控制排出的化石源一氧化碳；计量物种质量，不是二氧化碳当量。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 二氧化氮（`no2_air`）

实际二氧化氮物种质量。以二氧化氮当量报告的NOx总量不能同时填入一氧化氮和二氧化氮；未解决的物种拆分或数量口径保留为缺口。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 一氧化氮（`no_air`）

实际燃烧排出的一氧化氮物种质量；与实测二氧化氮及声明的NOx基准核对，不含一氧化二氮。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 二氧化硫（`so2_air`）

依据实际燃料组成与监测条件纳入加热炉或控制系统排出的二氧化硫；不是总硫氧化物或平流层介质。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 甲烷 (化石源)（`methane_air`）

实际化石源甲烷泄漏或未燃排放；不使用延迟排放校正流，也不由非甲烷VOC总量换算。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 一氧化二氮（`n2o_air`）

经加热炉或控制系统评估证实的一氧化二氮；定量或记录有证据的不存在，且与NOx分开。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 氯化氢（`hcl_air`）

夹带氯化铵分解且中和或捕集未截留时实际排出的氯化氢。它是气态氯化氢，不是水中氯离子或假定中和收率。

- 选定流：氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

###### 水蒸气（`water_air`）

实际从工艺、冷却或燃烧排出的水蒸气，区分载气湿度、蒸发进料水与化学生成水；不得再将同一质量计为废水或凝结回水。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_air采集同期间实物数量；每参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ifc-coal-tar-2007`; `jrc-cww-bref-2016`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | tar_distillation | 保留未分配实物网络，优先实测细分或直接归属。对剩余共同负荷检验并论证决定性的物理因果关系，例如实测馏分特定分离或加热负荷；质量本身不证明能量因果。若无可辩护物理关系，按同一蒸馏界面、同一状态的联产品经济价值分配，使用可比报告期间净价格并作敏感性分析。无固定份额，也不自动给予焦油或沥青零负荷。 | `ilcd-detailed-2010` |
| allocation_ledgers | all inventory rows | 保留交付沥青及全部实际可销售馏分的实物数量和库存，不乘分配份额。直接负荷归属实际原因。产品j的经济份额为同界面生产等效净收入除以全部实际合格联产品净收入之和；核对库存和交付，并论证中间物推定价格。仅分配剩余共同环境负荷。每个阶段份额之和须为一。废物费用不是联产品收入。 | `ilcd-detailed-2010`; `jrc-cww-bref-2016` |
| allocation_upstream | tar_feed | 核验供方焦油负荷是否已在炼焦或回收阶段分配。保留上游阶段，不再次将蒸馏份额乘入实物进料或联产品质量。确认外送残余物处理责任；没有明确兼容的后果型方法和替代证据时，不提供避免产品抵扣。 | `ilcd-detailed-2010` |

构建沥青专用链接LCI时，保留完整实物账并单独形成归属视图：B_pitch = B_direct_pitch + alpha_pitch * B_joint，使用有依据的阶段特定份额，再除以验收沥青体积。已在炼焦或回收阶段分配的上游供方焦油负荷保持为该供方输入；蒸馏厂可将自身所得共同环境负荷归属各馏分，但不能重复同一阶段份额。已归属供方输入等效量是负荷记账项，不是改变进料质量或缩放实物联产品输出。不得仅将未分配采集清单称为已完整归属的单产品数据集。`ilcd-detailed-2010`

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

所有协议使用同一有代表性运行期间，包括实际维护、启停及库存移动。汇总前按阶段、批次及运行模式分开保留原始读数。聚合分母为同一声明交付状态下验收熔融沥青净体积；温度、密度或供方约定缺失时，不能形成完整链接数据包。本方法要求未来采集实际SKU、场址与供方数据，不编造调查或工厂数据。`ifc-coal-tar-2007`；`jrc-cww-bref-2016` 保留未归一化区间数量，先汇总完整报告期间的分子，再仅应用一次normalize_period；不得平均区间单位比值，也不得再次除已归一化数量。失败及零产出区间的投入、废物和释放仍纳入同一适用期间数量池。逐批核对验收交付、退回或取消、再次验收及期初期末库存；各净验收体积仅确认一次，内部返工一轮不计作新产出。一致结转库存负荷，不得仅以本期加工负荷对应旧库存交付。若净验收参考体积为零，保留数量池并披露单位结果未解决，不得除以零或删除其负荷。协议聚合标签描述最终每参考流基准，不是第二次相除。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | tar_distillation | reference_pitch | acceptance_record | 批次/SKU；来源；路线；组成；水分；灰分/QI/TI；软化试验与方法；熔融温压；校准交付净体积；净质量；密度及密度温度；期初期末库存；拒收或退回；供方约定 | 校准液体流量表或针对热沥青粘度及状态验证的罐容法，排除容器与空隙；以可追溯净称量及声明状态下同批密度独立核对。实际验收属性采用有记录的代表性采样、实验室方法、基质与精度及牌号标准检测；不假定密度。 | m3 | 每交付批次及库存结算 | 同一完整报告期间 | 实际接收至交付前景 | 每参考流 | 校准；表计粘度温度范围；罐容表或称重单；密度实验室记录；验收原件 |
| cp_material | tar_distillation | tar_feed; sodium_hydroxide; light_oil; naphthalene_oil; middle_oil; heavy_oil | measured_material_record | 阶段批次；毛重皮重及湿净质量；馏程温压；组成；水或活性分数；污染；库存；交付接收方；内部转移两端；实际来源 | 使用校准质量读数或净称量及代表性密封样品，分别记录各实际馏分和供货溶液。保留拒收或不合格批次及混合物带水。记录不变库存基准及匹配内部界面。 | kg | 每批或连续表计区间及库存结算 | 与cp_product相同完整报告期间 | 接收、馏分及验收外部转移 | 每参考流 | 称量校准；检测及样品方法有效性；库存；供方和接收验收 |
| cp_utility | tar_distillation | electricity; gas; water; cooling_water; steam; condensate_return | metered_utility_record | 表计阶段；电压；kWh/MJ；气体体积温压湿度组成及Z；液态水体积密度；供汽质量温压干度；液态回水质量温压；直接喷入；供方数量定义；热状态方法；期间库存 | 读取校准公用表计并记录供方边界，仅按实测兼容状态换算气体或液体体积。分别保留供汽载体及回水焓；热解释须有经验证的状态属性方法与完整实测供应、回水、损失平衡，不用数据库系数。内部冷却循环保留于设备平衡。 | 声明行单位 | 覆盖全部模式的表计区间 | 与cp_product相同完整报告期间 | 加热炉、蒸馏、储存、冷却及转运 | 每参考流 | 表计与供方原件；状态质量记录；属性方法有效性；公用工程核对 |
| cp_waste | tar_distillation | wastewater; tar_sludge | transfer_record | 实际来源接收方；湿质量；水固体油；BOD/COD方法；各多环芳烃；实际氯化物和铵；危险性；处理接收；库存；采样不确定性 | 称量各分流输出，获取有记录的接收方及处理数据；采用基质验证方法检测代表性含油水和污泥，区分废水污染物含量与最终受纳环境释放。 | kg | 每转移及代表性组成采集 | 与cp_product相同完整报告期间 | 精确外部处理界面 | 每参考流 | 称量转移；认可或验证分析；处理接收方记录；库存结算 |
| cp_air | tar_distillation | all elementary rows | measured_emission_record | 物种CAS；源与控制；载体空气进出口O2/N2/H2O/CO2；实际反应及反应程度证据；采样相；干湿气体流量；温压氧含量；浓度基准；时间；烟道或逸散模式；湿度；颗粒空气动力学粒径段及可过滤或凝结口径；检出回收不确定性；实际运行小时 | 按匹配基准测量受控出口物种及气体流量，覆盖实际加热、储存、转运与异常模式，随时间积分浓度乘流量。使用经验证的源特定逸散测量，或披露有依据工程估计及不确定性。总VOC、多环芳烃或焦油烟筛查用于完整性核对，不是一个物种交换；仅凭总质量平衡残差不能准确测量排放。 | kg | 代表性模式采样与监测区间 | 与cp_product相同完整报告期间，包括异常 | 控制后全部实际环境空气释放 | 每参考流 | 采样系统、相回收率及基质验证；流量表校准；方法检出不确定性；模式覆盖与实际小时 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | 各同期间未分配实物交换除以声明状态下同期间验收熔融沥青体积（m3）；reference_pitch固定为1 m3。在独立账中进行环境归属，再用同一体积除已归属负荷。保留全部实物联产品输出及内部转移。 所有协议使用同一有代表性运行期间，包括实际维护、启停及库存移动。汇总前按阶段、批次及运行模式分开保留原始读数。聚合分母为同一声明交付状态下验收熔融沥青净体积；温度、密度或供方约定缺失时，不能形成完整链接数据包。本方法要求未来采集实际SKU、场址与供方数据，不编造调查或工厂数据。`ifc-coal-tar-2007`；`jrc-cww-bref-2016` 保留未归一化区间数量，先汇总完整报告期间的分子，再仅应用一次normalize_period；不得平均区间单位比值，也不得再次除已归一化数量。失败及零产出区间的投入、废物和释放仍纳入同一适用期间数量池。逐批核对验收交付、退回或取消、再次验收及期初期末库存；各净验收体积仅确认一次，内部返工一轮不计作新产出。一致结转库存负荷，不得仅以本期加工负荷对应旧库存交付。若净验收参考体积为零，保留数量池并披露单位结果未解决，不得除以零或删除其负荷。协议聚合标签描述最终每参考流基准，不是第二次相除。 | cp_product; relevant collection protocol | 每参考流实物交换及独立归属负荷 | `ilcd-detailed-2010`; `jrc-cww-bref-2016` |

逐批保留体积加权密度信息：按质量交付批次对验收体积的贡献为实测净质量除以同状态实测液体密度；汇总批次须处于同一声明状态，或有经验证的牌号特定温度修正。水及活性物质账按湿质量乘实际实测质量分数计算。这些物理计算不会从缺失测量中生成数量。蒸汽在经验证的热力或供方约定确立链接热量前保持载体质量界面；未知约定仍是明确缺口。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_physical | all inventory rows | 采用实测组成和同量内部链接，核对未分配进料加期初库存与全部外部产品、废物、空气释放及期末库存。总质量及元素C/H/O/N/S守恒与反应性物种账分开。在工程燃烧子平衡中保留实测载体空气进出口O2/N2/H2O/CO2，独立于污染物交换清单；核对净化石源二氧化碳和水蒸气排放与进气载体组分及实际生成物种，避免重复。水账采用期初H2O + 输入H2O + 实际生成H2O = 期末H2O + 输出H2O + 实际消耗H2O；反应项以实际化学过程及实测反应程度为依据。不得将水或干物质当作反应中各自守恒的元素。不重复计混合物带水，不用COD当碳，也不由残差拟合反应项或排放。按实测不确定性保留差额，不虚构容差。 | 实际检测、载体空气进出口组成、实际反应证据、库存及实物网络；jrc-cww-bref-2016 |
| quality_energy | 公用工程与加热炉阶段 | 在共同参考状态下保留电力输入、天然气实测热值基准、物料及供汽回水显热潜热、有用负荷和有证据损失。匹配实际加热炉及供方约定，不重复供汽载体与热服务负荷。蒸馏不意味着进料碳全部燃烧。未证明状态换算不能支持完整热链接。 | 阶段表计、声明属性方法、实测状态组成及供方边界 |
| quality_releases | 所有基本流行 | 依据进料、杂质、加热炉与控制证据筛查全部实际排放物种；对实际额外多环芳烃、VOC、氨、硫或其他物种及厂内最终水排放增建原子行。按相同质量口径核对各VOC或多环芳烃与总量，不同时作为重复基本质量。PM2.5、PM2.5–10及>PM10互不重叠。若颗粒结合态多环芳烃包含于实测颗粒物中，则保留物种特定排放并标明其颗粒物组分身份，使实物平衡中仅计一次该质量。截留粉尘、气溶胶和回收焦油不是环境空气排放。 | 源采样、实际进料及运行控制图；ifc-coal-tar-2007 |
| quality_links | all inventory rows | UUID物理身份独立于供方处理数据集、地理电压范围、数量基准与数量。完整链接声明前须解决空身份并核验实际供方约定。监测、场址SKU牌号或供方基准不可用时予以披露，不用数据库系数替代。 | 原生身份及独立采集的供方接收方数量记录 |
| quality_carbon | 燃烧与物料阶段 | 保留沥青、馏分与残渣中的碳和排出化石物种的区别。若实际出现额外生物源输入，则重新评估范围并单独记录生物源碳流；不得因温室气体报告口径排除而删除生物源二氧化碳。未授权碳中性或零负荷联产品假定。 | 组成实物碳账、排放原件及供方归属 |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference_pitch | 要求唯一1 m3均匀熔融纯粘结沥青成品参考输出，并匹配双语数量与体积约定。核验高温煤来源、常压路线、牌号、温压、密度测量及供方体积基准。拒绝石油木焦油混合、冷态堆积空隙体积或名义1千克替代。 | `ifc-coal-tar-2007`; `wco-hs-2022-ch27` |
| validate_balance | all inventory rows | 独立于已分配负荷检查完整未分配实物质量、水、元素平衡、库存及同量内部转移。不将联产品输出数量乘分配份额。缺失测量、物种及未解释残差保持未解决；总平衡不能证明排放完整。 | `jrc-cww-bref-2016`; `ilcd-detailed-2010` |
| validate_allocation | tar_feed; tar_distillation | 核验上游炼焦回收分配状态、无重叠界面、直接归属证据、共同负荷准则、同界面馏分数量价格及阶段份额之和。名义scaffold或分类叶不是上游方法证据。 | `ilcd-detailed-2010` |
| validate_inventory | all inventory rows | 核验每个原子行物理身份、CAS路线、正式中文名、流类型、参考属性单位及受纳介质。实际发生或不存在、数量及供方兼容独立核验。不使用校正流、无关废水，或仅由身份查询成功推定正数量。 | `jrc-cww-bref-2016`; `ifc-coal-tar-2007` |
| validate_emissions | 所有基本流行 | 核验物种质量与分析当量、不重叠颗粒段、相回收率、采样流量状态、正常异常模式覆盖及全部实际额外物种。一氧化二氮不在NOx内，二氧化氮当量不证明二氧化氮物种。指南法定浓度既不是默认排放，也不是工厂调查数据。 | `ifc-coal-tar-2007`; `jrc-cww-bref-2016` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 具有独立实物与已分配负荷账的蒸馏厂主前景 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 具有实际组成、状态、数量及上游处理链接证据的兼容热态散装纯煤焦油粘结沥青供应 |
| excluded_use | 完整CPC34540覆盖；馏分油、沥青焦或电极制造；其他来源或配方沥青；默认密度收率能耗配方；不完整链接数据或方法批准声明 |
| required_metadata | 全部参考限定信息；场址SKU牌号期间；实际过程控制处理图；实物守恒与分阶段分配；供方界面；原始方法 |
| required_quality_disclosure | 实测与估计字段；采样不确定性及未覆盖模式；未决身份与供方状态；原生元数据冲突；不完整数量物种链接 |
| update_trigger | 进料来源、常压路线馏程、产品改性牌号交付状态、加热控制处理配置、供方定义或分配方法改变 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 2025-06-30原始结构，LF1457–1458（3454/34540）；宽混合分类叶，仅支持narrower建议，不是工艺证据或已接受映射。 |
| wco-hs-2022-ch27 | `official_guidance` | https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0527_2022e.pdf?la=en | 2022，PDF2的2706/2707/2708；区分粗焦油、馏分与沥青焦的分类语境，不声明正式CPC-HS等同。 |
| ifc-coal-tar-2007 | `official_guidance` | https://www.ifc.org/content/dam/ifc/doc/2000/2007-large-vol-inorganic-compounds-coaltar-ehs-guidelines-en.pdf | 2007-12-10；PDF及印刷1、6–7、9–10、18、28–29，仅煤焦油段落及一般监测。定性路线、联产品、防腐蚀及释放筛查，不将历史收率、浓度限值、行业产能、单厂数量或其他化工基准用作配方因子。 |
| jrc-cww-bref-2016 | `official_guidance` | https://publications.jrc.ec.europa.eu/repository/handle/JRC103096 | 2016化工CWW BREF，3.1.5.2.4（PDF138–139/印刷108–109）和BAT2–5（PDF573–574/印刷543–544）。清单、库存、流表征与监测语境；仅总平衡不足以准确测定排放。通用方法，不是沥青特定数量默认值。 |
| ilcd-detailed-2010 | `official_guidance` | https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 2010第一版，7.9.2–7.9.3.3（PDF276–277、283–284/印刷256–257、263–264）；多功能性层级、物理因果论证及同界面经济后备。无固定沥青份额或完整框架符合性声明。 |
| rain-pitch-products | `literature` | https://www.raincarbon.com/products-and-services/carbon-products/coal-tar-and-petroleum-distillation-products | 生产者原始产品目录，访问2026-10-14；Pitch Products/Coal Tar Pitch。当前粘结牌号用途与煤焦油蒸馏来源，区分另行提供的石油或特殊产品。不作为通用规格、配方、场址数量或排放证据。 |
