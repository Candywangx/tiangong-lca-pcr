---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.bread-and-other-bakers-wares
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 面包及其他烘焙制品

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 23490 语义范围内的面包及其他烘焙制品制造。包括由谷物粉或粗粉制成的鲜或保藏面包，如普通面包、黑面包、全麦面包、粗黑麦面包、黑麦面包、谷蛋白面包及无酵面包；面包小圆包和卷；以及鲜或保藏的其他烘焙制品，如薄脆饼、咸味饼干、椒盐卷饼、玉米饼、无酵饼、圣餐饼、空药囊及米纸。配方、发酵路线、水分、后处理、保藏及包装会实质影响清单，因此数据生产者必须声明准确的产品子类与配方。

前景边界从配料、加工助剂、包装材料和公用工程在烘焙厂大门处接收开始。包括配料储存与计量、混合和面团或面糊制备、成型、适用时的发酵或醒发、烘烤/干燥或等效热定型、冷却、切片或其他后处理、包装、清洗、现场公用工程，以及产品离开工厂大门前进行的冷冻或受控储存。外购配料、包装、公用工程的上游生产以及废物的下游处理通过关联的上游数据集表示，不在烘焙前景中重复构建。

甜饼干、姜饼、华夫饼和威化饼；脆面包、面包干、烤面包及类似烘烤制品；糕点和蛋糕；披萨、薄煎饼和甜面包卷；作为产品销售的预拌料或未烘烤面团；面食和其他粉制品；零售、餐饮和家庭制备不在本 PCR 范围内。即使产品采用常见的面包名称，只要经审查的分类属于上述其他类别，仍应排除。

International EPD System 的历史 bakery PCR 可确认较宽泛的 CPC 234 烘焙制品背景，但该 PCR 已过期，本记录不把它当作现行强制计划规则。本 TianGong PCR 因此采用当前公共证据与明确的前景采集规则；未来如发布现行 bakery c-PCR，必须触发新的方法学审查。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.bread-and-other-bakers-wares |
| classification_refs | CPC 3.0：23490，精确映射语境 |
| covered_products | 鲜或保藏的谷物粉面包；面包小圆包和卷；无酵面包；薄脆饼；咸味饼干；椒盐卷饼；玉米饼；无酵饼；圣餐饼；空药囊；米纸；其他语义等同的 CPC 23490 烘焙制品 |
| excluded_products | CPC 23410 脆面包、面包干和烤面包；CPC 23420 姜饼、甜饼干、华夫饼和威化饼；CPC 23430 糕点和蛋糕（包括披萨、薄煎饼和甜面包卷）；CPC 23180 预拌料和未烘烤面团；面食；零售、餐饮及家庭制备 |
| representative_product | 烘焙厂工厂大门处的适销面包 |
| production_route | 配料接收与计量；混合和面团制备；成型；条件适用时的发酵或醒发；烘烤、干燥或等效热定型；冷却；条件适用时的切片、后处理、包装和受控储存 |
| market_state | 烘焙厂工厂大门处的成品鲜制、保藏、常温、冷藏或冷冻产品，并声明包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在声明的市场状态下提供其预期食品、宗教礼仪、药用空囊或烹饪薄片功能的已声明面包或其他烘焙制品 |
| How much | 1 kg 合格成品；包装质量不计入这 1 kg，但存在包装时须将包装投入计入清单 |
| How well | 符合已声明的产品子类、配方或组成、尺寸或份量形式、水分基准、保藏条件及适用商业质量规范 |
| How long or cycle | 一个生产批次在声明的保质期或储存期条件下交付至烘焙厂工厂大门；不隐含使用阶段服务 |
| reference_flow_link | `finishing_packaging_and_storage` 的参考产品输出；如不进行后处理、包装或受控储存，则为 `baking_and_cooling` 的参考产品输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 成品，不含包装 |
| 参考产品流 | 面包 `82f5df4a-9ada-46d2-8686-b3b1265a8188` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 准确 CPC 23490 产品子类；基础谷物或面粉；配方或配方族；发酵型或无酵型路线；发酵或醒发路线；鲜制、保藏、冷藏或冷冻状态；净水分基准；食用或非食品功能用途；后处理和切片状态；包装形式与包装质量；生产技术；地理范围；批次与参考期；声明的保质期或储存时间；分配选择 |

构建前景数据包时，`必需限定信息` 中的每一项均须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有前景数量归一化至声明工厂大门市场状态下 1 kg 合格成品，不含包装质量。在冷却及任何已声明后处理损失之后记录产品质量。 |
| `packaging_mass_separate` | 包装投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 各包装材料分别计量。使用包装时包装属于清单范围，但不得计入 1 kg 参考产品数量。 |
| `moisture_and_bake_loss` | 面团、中间品及成品质量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在各测量过程状态记录湿质量并声明水分基准。如有实测批次质量，不得用名义配方质量推断配料转换或烘烤损失。 |
| `energy_carriers_not_merged` | 电力、燃料、蒸汽及热能 | 各载能体特定属性 | kWh、MJ 或载能体质量/体积 | 保留计量载能体与单位。仅使用有记录的因子换算，且不得将外购电力、现场燃料燃烧和外购热量合并为一个无说明的能源总量。 |
| `production_and_loss_mass_balance` | 每个生产批次 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将配料和工艺水与成品、可销售共产品、返工料、蒸发或发酵损失、废物及其他实测输出进行核算。披露残差及调查阈值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 配料、加工助剂、包装材料和公用工程在烘焙厂大门处接收，并声明供应商身份、数量、适用时的水分或浓度、地理范围和上游数据集引用 |
| starting_condition_role | 由收货、发票、库存及计量记录支持的烘焙厂门到门前景起点 |
| product_classification_scope | 语义上属于 CPC 3.0 子类 23490 的面包及其他烘焙制品，不依赖目录祖先关系 |
| recursive_input_rule | 购入的 CPC 23490 成品作为配料或返工投入时，以产品投入及其上游数据集记录；除非同一设施和报告期提供可分离的实测生产记录，否则不得在本前景中递归重建其生产 |
| upstream_dataset_requirement | 为所有实质性配料、加工助剂、包装、外购能源和燃料、供水、纳入范围的运输以及废物或废水处理关联上游数据集；披露缺失、代理或地理不匹配的数据集 |
| disclosure | 声明设施与场址、报告期、产品子类与配方族、技术与烤炉路线、产品净水分、保藏与包装状态、纳入和排除的操作、共享公用工程分配、返工处理、废物去向及所有代理数据集 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_bakery_gate_to_gate` | 前景生产 | 纳入从配料接收到合格产品到达工厂大门的全部烘焙操作，包括归属于该产品的清洗及现场公用工程。 | `unsd-cpc-3-0-23490`; `federation-of-bakers-production-methods` |
| `boundary_upstream_links` | 外购投入与下游处理 | 通过关联的上游或处理数据集表示外购配料、包装、公用工程和燃料的生产以及外送废物或废水的处理，并披露地理与代表性。 | `iso-14044-2006`; `eu-bat-food-drink-milk-2019` |
| `boundary_conditional_operations` | 后处理、包装、冷冻及储存 | 仅当切片、涂层、填充、包装、冷冻、冷藏或其他后处理发生在声明工厂大门之前时纳入；通常相关但未发生的操作须明确记录排除。 | `federation-of-bakers-production-methods`; `eu-jrc-food-beverage-bemp-2018` |
| `boundary_same_category_rework` | 返工料与退回中间产品 | 在同一类别返工料仍受设施控制时作为内部循环跟踪；若购入或跨越前景边界转移，则作为产品流记录并避免递归重复计数。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `ingredient_and_dough_preparation` | 配料处理、计量、混合及面团制备 | `required` | 始终纳入 | 前景制备 | kg 已制备面团或进入热加工的成型进料 |
| `baking_and_cooling` | 成型、条件适用时的发酵或醒发、烘烤或热定型及冷却 | `required` | 始终纳入；不采用发酵和醒发时相应数量为零 | 前景转换 | kg 冷却后的合格中间产品 |
| `finishing_packaging_and_storage` | 切片、其他后处理、包装及受控储存 | `conditional` | 纳入声明工厂大门之前实施的每项操作；否则记录产品从烘烤冷却直接转为参考产品 | 前景后处理 | 1 kg 成品参考产品 |
| `site_utilities_and_cleaning` | 共享公用工程、卫生及清洗 | `required` | 始终纳入；未消耗相关共享服务时以记录支持零值 | 前景支持 | 每 1 kg 成品参考产品的可归属份额 |

### 过程：配料处理、计量、混合及面团制备（`ingredient_and_dough_preparation`）

#### 输入

##### 产品流

###### 已声明配料与加工助剂（`ingredients_input`）

记录跨越烘焙厂大门的每一种配料和加工助剂，包括适用的面粉或粗粉、含水配料、盐、酵母或其他膨松剂、油脂、糖、改良剂、内含物和脱模剂。构建前景包时为每种配料选择最具体的 TianGong 产品流。

- 选定流：为已声明配方选择的产品特定配料流
- 流属性/单位：Mass / kg
- 数量规则：各配料和批次的实测领用质量减去有记录的退库质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_and_packaging_records`
- 来源：`federation-of-bakers-production-methods`
- 数量范围：临时且可替换的配料质量 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：2.0
  - 单位：kg/kg 成品
  - 基准：每 1 kg 成品参考产品的配料总量，不含配方水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 配方水（`formulation_water`）

将加入面团或面糊的水与清洗水和公用工程用水分开记录。

- 选定流：适用于场址供水的 Process water
- 流属性/单位：Mass / kg
- 数量规则：计量或批次表中的配方水，扣除退回或弃置的批次水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water_records`
- 来源：`federation-of-bakers-production-methods`
- 数量范围：临时且可替换的配方水 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.2
  - 单位：kg/kg 成品
  - 基准：每 1 kg 成品参考产品加入的配方水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 混合及制备用电（`preparation_electricity`）

在单独计量或合理分配时，记录配料处理、计量、混合、揉面、泵、压缩空气及局部温控的电力。

- 选定流：场址特定的外购或现场电力供应
- 流属性/单位：Energy / kWh
- 数量规则：电表读数，或设备运行时间乘实测功率，再扣除排除负荷
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-bat-food-drink-milk-2019`
- 数量范围：临时且可替换的制备用电 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.0
  - 单位：kWh/kg 成品
  - 基准：每 1 kg 成品参考产品的制备用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

默认不要求废物投入。跨越前景边界进入的退回返工料须作为产品投入记录，并披露来源、所有权及避免递归的处理。

##### 基本流

不预设基本流投入。直接从环境取用的水须记录为基本流投入，而不是外购工艺水。

#### 输出

##### 产品流

###### 已制备面团、面糊或成型中间品（`prepared_intermediate`）

记录输送至成型、发酵、醒发或热加工的实测质量。

- 选定流：已制备面团或产品特定中间流
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量；仅在直接称量不可行时采用计算质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_yield_and_loss_records`
- 来源：`federation-of-bakers-production-methods`
- 数量范围：临时且可替换的中间品产率 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.7
  - 上限：2.2
  - 单位：kg/kg 成品
  - 基准：每 1 kg 成品参考产品的已制备中间品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 配料洒落、过期物料和不可回收面团（`preparation_waste`）

按物料和去向记录损失；可卫生回用于内部的返工料不得计为废物，并须披露其循环。

- 选定流：物料特定的食品或配料废物流
- 流属性/单位：Mass / kg
- 数量规则：离开制备过程的称量废物，扣除有记录的内部返工
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_and_loss_records`
- 来源：`eu-jrc-food-beverage-bemp-2018`
- 数量范围：临时且可替换的制备废物 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.25
  - 单位：kg/kg 成品
  - 基准：每 1 kg 成品参考产品的制备废物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排放至空气的配料粉尘（`ingredient_dust_air`）

记录捕集与治理之后跨越空气排放边界的实测或计算面粉及配料粉尘；作为废物离开的捕集粉尘不得在此重复。

- 选定流：物质特定的颗粒物或粉尘基本流
- 流属性/单位：Mass / kg
- 数量规则：治理后的实测排放质量，或由气体流量和浓度记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-bat-food-drink-milk-2019`
- 数量范围：临时且可替换的粉尘排放 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.01
  - 单位：kg/kg 成品
  - 基准：每 1 kg 成品参考产品排放的配料粉尘
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：成型、条件适用时的发酵或醒发、烘烤或热定型及冷却（`baking_and_cooling`）

#### 输入

##### 产品流

###### 已制备面团、面糊或成型中间品（`thermal_feed_intermediate`）

记录从制备过程转移的中间品，不重复其上游负荷。

- 选定流：已制备面团或产品特定中间流
- 流属性/单位：Mass / kg
- 数量规则：与 `prepared_intermediate` 的记录输出一致，并计入有记录的转移差异
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_yield_and_loss_records`
- 来源：`federation-of-bakers-production-methods`
- 数量范围：临时且可替换的已制备中间品转移 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.7
  - 上限：2.2
  - 单位：kg/kg 成品
  - 基准：每 1 kg 成品参考产品转移的已制备面团、面糊或成型中间品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 烘烤燃料或外购热量（`baking_thermal_energy`）

分别记录各种燃料或外购热载体，包括烤炉、醒发、干燥及热回收的影响。

- 选定流：载能体特定的燃料、蒸汽或热量流
- 流属性/单位：Energy / MJ，或保留换算的载能体特定质量或体积
- 数量规则：计量消耗量或储罐/发票平衡，并分配至产品线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-bat-food-drink-milk-2019`; `federation-of-bakers-production-methods`
- 数量范围：临时且可替换的热能 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：MJ/kg 成品
  - 基准：每 1 kg 成品参考产品的烤炉、醒发及干燥热能
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 烘烤、成型及冷却用电（`baking_electricity`）

记录分割、成型、醒发控制、烤炉、风机、输送机和冷却设备的电力。

- 选定流：场址特定的外购或现场电力供应
- 流属性/单位：Energy / kWh
- 数量规则：电表读数，或设备运行时间乘实测功率，再扣除排除负荷
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-bat-food-drink-milk-2019`; `federation-of-bakers-production-methods`
- 数量范围：临时且可替换的烘烤用电 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3.0
  - 单位：kWh/kg 成品
  - 基准：每 1 kg 成品参考产品的成型、醒发、烘烤及冷却用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

默认不要求废物投入。

##### 基本流

除设施作为环境边界流报告的直接取水或空气外，不预设基本流投入。

#### 输出

##### 产品流

###### 可选后处理前的冷却合格烘焙制品（`cooled_bakers_ware`）

记录烘烤或热定型及冷却后的产品质量，位于可选切片、包装或受控储存之前。

- 选定流：面包 `82f5df4a-9ada-46d2-8686-b3b1265a8188`
- 流属性/单位：Mass / kg
- 数量规则：称量冷却后的合格输出，并保留水分状态和批次关联
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output_and_quality`
- 来源：`federation-of-bakers-production-methods`
- 数量范围：临时且可替换的冷却产品 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：1.3
  - 单位：kg/kg 成品
  - 基准：每 1 kg 成品参考产品在后处理前的冷却合格中间品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 不合格、烤焦或掉落产品（`baking_rejects`）

将拒收产品与可复用返工料分开记录，并声明处理方式或去向。

- 选定流：产品特定的烘焙废物流
- 流属性/单位：Mass / kg
- 数量规则：离开过程的称量拒收品，扣除有记录的内部返工
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_and_loss_records`
- 来源：`eu-jrc-food-beverage-bemp-2018`
- 数量范围：临时且可替换的烘烤拒收品 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.25
  - 单位：kg/kg 成品
  - 基准：每 1 kg 成品参考产品的烘烤及冷却拒收品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 直接燃烧及过程空气排放（`direct_air_emissions`）

现场燃烧燃料或发生受监测的过程排放时，分别记录每种排放物质。研究方法要求时可单独报告生物源发酵二氧化碳，但不得与化石燃烧二氧化碳混淆。

- 选定流：物质特定的空气基本流
- 流属性/单位：Mass / kg
- 数量规则：实测质量，或由计量载能体用量与有记录的设施/法规因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-bat-food-drink-milk-2019`
- 数量范围：临时且可替换的物质级排放 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2.0
  - 单位：kg 排放物质/kg 成品
  - 基准：每 1 kg 成品参考产品的每种单独识别直接空气排放
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：切片、其他后处理、包装及受控储存（`finishing_packaging_and_storage`）

#### 输入

##### 产品流

###### 转入后处理的冷却烘焙制品（`cooled_product_input`）

记录进入可选后处理、包装或储存的冷却产品。

- 选定流：面包 `82f5df4a-9ada-46d2-8686-b3b1265a8188`
- 流属性/单位：Mass / kg
- 数量规则：与转入的 `cooled_bakers_ware` 一致，并计入有记录的转移损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_product_output_and_quality`
- 来源：`federation-of-bakers-production-methods`
- 数量范围：临时且可替换的冷却产品转移 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：1.3
  - 单位：kg/kg 成品
  - 基准：每 1 kg 成品参考产品转入的冷却烘焙制品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_materials`）

按材料与实测质量记录初级、次级及可归属于产品的三级包装。

- 选定流：材料特定的包装产品流
- 流属性/单位：Mass / kg
- 数量规则：领用包装质量减去退回未用包装，并与包装单元核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品参考产品，包装质量不计入参考数量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_and_packaging_records`
- 来源：`eu-jrc-food-beverage-bemp-2018`
- 数量范围：临时且可替换的包装质量 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.30
  - 单位：kg/kg 成品
  - 基准：每 1 kg 成品参考产品的包装材料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 后处理、包装及储存用电（`finishing_storage_electricity`）

记录切片、涂层或填充设备、包装线、输送机、金属检测及发运前受控或冷冻储存的电力。

- 选定流：场址特定的外购或现场电力供应
- 流属性/单位：Energy / kWh
- 数量规则：电表读数或设备运行时间乘实测功率；储存用电采用实际储存时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：储存时间（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-food-beverage-bemp-2018`
- 数量范围：临时且可替换的后处理及储存用电 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2.0
  - 单位：kWh/kg 成品
  - 基准：每 1 kg 成品参考产品的后处理、包装及声明的发运前储存
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

默认不要求废物投入。

##### 基本流

不预设基本流投入。制冷剂补充为产品投入；实测制冷剂泄漏为基本流输出。

#### 输出

##### 产品流

###### 面包或其他烘焙制品成品参考产品（`reference_product_output`）

此项为定量参考输出。记录所有纳入后处理完成后、工厂大门发运前的合格净产品质量。

- 选定流：面包 `82f5df4a-9ada-46d2-8686-b3b1265a8188`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰为 1 kg 净成品；不含包装质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`iso-14044-2006`
- 数量范围：参考输出一致性检查
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：净成品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-2006`

##### 废物流

###### 包装边角料和拒收包装（`packaging_waste`）

按材料和去向记录离开前景的包装边角料、损坏包装和未使用材料。

- 选定流：材料特定的包装废物流
- 流属性/单位：Mass / kg
- 数量规则：称量包装废物，扣除有记录的内部复用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_and_loss_records`
- 来源：`eu-jrc-food-beverage-bemp-2018`
- 数量范围：临时且可替换的包装废物 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg/kg 成品
  - 基准：每 1 kg 成品参考产品的包装废物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 后处理拒收品和不可销售产品（`finishing_rejects`）

按内部返工、作为共产品销售、捐赠、用作饲料、厌氧消化、堆肥或弃置等去向记录切片碎屑、边料及拒收成品。

- 选定流：根据核实去向选择产品特定的烘焙废物流或共产品流
- 流属性/单位：Mass / kg
- 数量规则：按去向称量输出，不含返回内部返工循环的材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_and_loss_records`
- 来源：`eu-jrc-food-beverage-bemp-2018`
- 数量范围：临时且可替换的后处理拒收品 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.25
  - 单位：kg/kg 成品
  - 基准：每 1 kg 成品参考产品的后处理拒收品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 制冷剂泄漏至空气（`refrigerant_leakage`）

根据充注量核算或维修记录，记录受控储存或冷却期间排放的每种制冷剂。前景无制冷系统时，用证据支持零值。

- 选定流：制冷剂特定的空气基本流
- 流属性/单位：Mass / kg
- 数量规则：由期初和期末充注量、补充、回收及有记录转移计算泄漏
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：储存时间（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-jrc-food-beverage-bemp-2018`
- 数量范围：临时且可替换的制冷剂泄漏 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.01
  - 单位：kg/kg 成品
  - 基准：每 1 kg 成品参考产品排放的每种制冷剂
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：共享公用工程、卫生及清洗（`site_utilities_and_cleaning`）

#### 输入

##### 产品流

###### 清洗及卫生用水（`cleaning_water`）

将湿式清洗、卫生处理、冲洗及可归属于产品的公用工程服务用水与配方水分开记录。

- 选定流：适用于场址供水的 Process water
- 流属性/单位：Mass / kg
- 数量规则：计量清洗水，或在排除非生产用途后分配实测场址用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water_records`
- 来源：`eu-bat-food-drink-milk-2019`
- 数量范围：临时且可替换的清洗水 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5.0
  - 单位：kg/kg 成品
  - 基准：每 1 kg 成品参考产品的清洗及卫生用水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗化学品及耗材（`cleaning_chemicals`）

按配制产品质量和浓度记录清洁剂、消毒剂及其他清洗耗材。

- 选定流：化学品特定的清洗产品流
- 流属性/单位：Mass / kg
- 数量规则：领用量减去退回量，并使用清洗事件或产线记录分摊
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：`eu-bat-food-drink-milk-2019`
- 数量范围：临时且可替换的清洗化学品 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg 成品
  - 基准：每 1 kg 成品参考产品的配制清洗产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 共享公用工程能源（`shared_utility_energy`）

记录压缩空气、通风、粉尘控制、水处理、锅炉及未归入其他生产过程的共享服务所对应的产品可归属能源。

- 选定流：载能体特定的电力、燃料、蒸汽或热量流
- 流属性/单位：kWh、MJ 或载能体特定质量/体积
- 数量规则：按有记录的因果驱动因素分配实测共享消耗
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`eu-bat-food-drink-milk-2019`
- 数量范围：临时且可替换的共享公用工程 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3.0
  - 单位：kWh/kg 成品
  - 基准：仅用于筛选的电力当量；清单仍按原载能体保留，每 1 kg 成品参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

默认不要求废物投入。除非设施运营该处理过程，否则外部废物处理位于烘焙前景之外。

##### 基本流

直接取水须作为基本流投入记录来源环境和位置，不得与外购水重复。

#### 输出

##### 产品流

默认不要求产品输出。若回收水、热量或物料作为产品输出，须单独记录并审查共产品处理。

##### 废物流

###### 送往处理的废水（`wastewater_output`）

按去向记录废水量及适用的污染物负荷。送入现场处理过程的水在处理输出跨越边界前仍位于前景内。

- 选定流：场址及处理方式特定的废水流
- 流属性/单位：Mass 或 volume / kg 或 m3，并记录密度换算
- 数量规则：计量排放或水量平衡，并识别回用水和分流的未污染水流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`eu-bat-food-drink-milk-2019`
- 数量范围：临时且可替换的废水 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5.0
  - 单位：kg/kg 成品
  - 基准：每 1 kg 成品参考产品离开前景的废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 处理残渣及一般生产废物（`support_waste`）

按物料和经核实的去向记录污泥、废过滤器、捕集粉尘、清洗残渣及其他废物。

- 选定流：废物特定流
- 流属性/单位：Mass / kg
- 数量规则：称量输出，或按有记录的废物转移单数量分配给报告产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_destination_records`
- 来源：`eu-bat-food-drink-milk-2019`; `eu-jrc-food-beverage-bemp-2018`
- 数量范围：临时且可替换的支持过程废物 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg 成品
  - 基准：每 1 kg 成品参考产品的支持过程废物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 现场废水处理排放（`wastewater_treatment_emissions`）

现场处理废水时，按物质记录处理后排入水体和空气的受监测释放。不得与外部处理数据集中的负荷重复。

- 选定流：物质及环境分区特定的基本流
- 流属性/单位：Mass / kg
- 数量规则：排放体积乘实测浓度，或直接质量负荷测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_wastewater_records`
- 来源：`eu-bat-food-drink-milk-2019`
- 数量范围：临时且可替换的物质级废水排放 QA 筛选值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg 排放物质/kg 成品
  - 基准：每 1 kg 成品参考产品的每种单独识别处理水排放
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 多产品生产线与共享过程 | 首先通过计量、时间分离、配方或产线细分，或其他技术上合理的因果拆分避免分配。可用时保留实测的产品特定配料、产率和能源记录。 | `iso-14044-2006` |
| `allocation_internal_rework` | 面团、碎屑、边料及同场址退回物料 | 将返回同一生产系统的物料作为内部循环。不得产生共产品抵扣或重复上游产品负荷；披露质量限制及额外再加工投入。 | `iso-14044-2006`; `eu-jrc-food-beverage-bemp-2018` |
| `allocation_saleable_co_products` | 可销售碎屑、动物饲料物料、回收热量或其他具有经济价值的输出 | 细分无法解决共享负荷时，依据能够反映投入与输出变化关系的有记录物理关系分配。仅在不存在合理物理关系时采用经济分配，并报告数量、价格、参考期和敏感性结果。 | `iso-14044-2006`; `international-epd-gpi-5-0-1` |
| `allocation_waste_no_avoided_burden` | 法律或运营上作为废物管理的输出 | 除非适用方法明确规定其他规则，否则将废物边界之前的烘焙操作归于参考产品。关联运输和处理负荷，不得仅因废物得到回收就假设避免产品抵扣。 | `international-epd-gpi-5-0-1`; `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_ingredient_and_packaging_records` | `ingredient_and_dough_preparation`; `finishing_packaging_and_storage` | 配料和包装 | 收货、发票、配方、领用及退回记录 | 物料 id；供应商；批次；领用量；退回量；水分或浓度；包装材料；包装单元 | 校准秤记录并与采购和库存移动核对 | kg | 每批物料或生产批次 | 有代表性的连续 12 个月，或有合理理由的季节性生产期 | 每个纳入的烘焙厂及仓库 | 按物料汇总净领用质量，再除以合格参考产品质量 | 秤校准；库存核对；供应商规范；异常日志 |
| `cp_process_water_records` | `ingredient_and_dough_preparation`; `site_utilities_and_cleaning` | 配方水和清洗水 | 表计和批次记录 | 水表起止值；批次加水；退回；回用；水源；密度 | 读取产线/分表和批次控制器；仅按有记录因果驱动因素分配未分表共享用水 | kg 或 m3 | 每批次并每月核对水表 | 与产品输出相同期间 | 每个纳入场址及水源 | 归一化前区分配方、清洗、冷却和直接取水 | 水表校准；水量平衡；回用登记 |
| `cp_energy_records` | 所有过程 | 电力、燃料、蒸汽和热量 | 表计、发票、燃料及运行记录 | 表计读数；发票；储罐平衡；运行时间；功率；载能体；换算因子；热回收 | 优先使用产线或设备表计，其次按有记录因果因素从场址表计分配 | 按载能体分别为 kWh、MJ、kg 或 m3 | 连续或每批次；每月核对 | 与产品输出相同期间，并覆盖季节性 | 每个纳入表计及现场发能单元 | 载能体分开保留；扣除外送能源和排除负荷；按合格产品归一化 | 表计校准；发票；运行日志；换算因子来源；平衡检查 |
| `cp_yield_and_loss_records` | 所有生产过程 | 中间品产率、返工、拒收和废物 | 生产及废物记录 | 投入质量；中间品质量；合格输出；返工；拒收；废物；去向；水分 | 校准秤和生产/废物管理记录 | kg | 每批次或每日产线总量 | 与产品输出相同期间 | 每个纳入产品线 | 按批次或已定义生产期核对质量；内部返工为循环而非废物 | 秤校准；批次谱系；废物单据；残差调查 |
| `cp_product_output_and_quality` | `baking_and_cooling`; `finishing_packaging_and_storage` | 参考产品和中间品 | 生产及质量放行记录 | 产品 id；子类；配方；批次；净质量；水分；温度；质量状态；包装；储存时间 | 校准检重秤或称重设备，加产品质量放行记录 | kg 及产品特定质量单位 | 每批次 | 与所有前景投入相同期间 | 每个纳入产线及产品族 | 仅汇总已放行净产品；拒收或待放行质量分开保留 | 校准；放行证明；水分方法；追溯记录 |
| `cp_direct_emission_records` | `ingredient_and_dough_preparation`; `baking_and_cooling`; `finishing_packaging_and_storage` | 粉尘、燃烧、过程及制冷剂排放 | 监测、计算及维修记录 | 物质；环境分区；浓度；流量；运行时间；燃料；因子；充注量；补充；回收 | 按要求直接监测；否则由采集活动数据和有记录因子计算 | 按物质为 kg | 监测或维修事件；至少每年核对 | 与活动数据相同期间 | 每个相关烟道、烤炉、制冷回路及治理单元 | 计算物质特定质量；保留生物源与化石碳身份 | 实验室或监测 QA；因子来源；维修日志；治理状态 |
| `cp_cleaning_records` | `site_utilities_and_cleaning` | 清洗化学品及事件 | 领用及卫生记录 | 化学品 id；浓度；领用；退回；清洗产线；持续时间；生产分配驱动因素 | 化学品领用记录和关联产线/区域的卫生日志 | kg 配制产品，适用时另记 kg 活性物 | 每次清洗事件 | 与产品输出相同期间 | 每个纳入生产及支持区域 | 汇总产品可归属消耗；保留浓度和活性物换算 | 供应商规范；领用核对；卫生完成日志 |
| `cp_water_and_wastewater_records` | `site_utilities_and_cleaning` | 废水及受监测水排放 | 排放表计、采样及分析记录 | 排放流量；pH；温度；COD 或 TOC；BOD；氮；磷；悬浮物；物质浓度；回用 | 按许可证和过程波动进行计量排放和受控/认可采样 | 适用的 m3、kg 及 mg/L | 连续流量；分析频次依据许可证及波动确定 | 与产品输出相同期间 | 每个排口及现场处理单元 | 对浓度进行流量加权形成质量负荷；分开回用、未污染及已处理水流 | 表计和实验室 QA；采样方案；许可证记录；水量平衡 |
| `cp_waste_destination_records` | 所有过程 | 外送废物及处理残渣 | 废物转移及去向记录 | 物料；质量；危险属性；承运方；目的地；处理；回收状态 | 地磅、容器质量及废物转移文件 | kg | 每次运输；每月核对 | 与产品输出相同期间 | 每个纳入场址和承包商 | 按物料及核实去向汇总；不得从去向标签推断避免负荷 | 废物联单；承包商回执；秤记录；目的地核实 |
| `cp_shared_allocation_records` | 所有过程 | 共享设施负荷及共产品 | 分配及生产记录 | 共享投入；驱动因素；产品输出；共产品输出；价格；期间；细分证据 | 表计、生产、时间、面积或关联各产品族的其他因果驱动因素 | 依驱动因素而定 | 每月及报告期结束 | 与产品输出相同期间 | 每个共享过程及纳入产品族 | 应用经批准层级；分配前后总量须核对一致 | 驱动因素理由；源记录；敏感性计算；分配核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_amount` | 每个清单行 | 归一化数量 = 报告期该行数量 / 报告期合格净参考产品质量 | 采集行数量；已放行产品质量 | 每 1 kg 成品的行数量 | `iso-14044-2006` |
| `calc_net_reference_product` | 参考产品 | 净参考产品质量不含全部包装，且不含未在工厂大门放行的拒收、待放行或退回产品 | 检重/称量质量；包装质量；质量放行状态 | 合格净产品质量 | `iso-14044-2006` |
| `calc_mass_balance` | 每批次或有合理依据的生产期 | 残差 = 总质量投入 - 成品 - 可销售共产品 - 外送废物 - 实测排放 - 有记录的蒸发或发酵损失 - 期末在制品 + 期初在制品 | 配料、水、中间品、输出、废物、排放及库存记录 | 绝对及百分比残差和处置说明 | `eu-bat-food-drink-milk-2019`; `iso-14044-2006` |
| `calc_energy_conversion` | 能源载体 | 仅在需要时采用与所选上游数据集一致且有记录的低位或高位热值换算；保留原始计量数量与换算基准 | 载能体数量；热值；电表读数；外购热量 | 按参考产品归一化的载能体特定能源 | `eu-bat-food-drink-milk-2019` |
| `calc_direct_emissions` | 直接空气和水排放 | 物质质量 = 实测浓度 × 在期间内积分的实测流量；无直接测量时采用采集活动量 × 有记录因子 | 浓度；流量；运行时间；燃料或活动量；因子 | 每 1 kg 成品的 kg 排放物质 | `eu-bat-food-drink-milk-2019` |
| `calc_shared_utility_allocation` | 共享公用工程与清洗 | 优先直接计量；否则将共享总量乘以设备时间、清洗面积、产线吞吐量或实测需求等因果驱动份额，并将已分配总量与共享总量核对 | 共享总量；产品特定驱动量；驱动量总计 | 产品可归属共享投入 | `iso-14044-2006`; `eu-bat-food-drink-milk-2019` |
| `calc_co_product_allocation` | 不可避免的多功能性 | 应用有记录的物理分配；不存在合理物理关系时，经济份额 = 共产品收入 / 代表期间总收入，并报告敏感性 | 共产品质量；物理驱动因素；价格；报告期 | 已分配负荷及敏感性结果 | `iso-14044-2006`; `international-epd-gpi-5-0-1` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity_and_traceability` | 产品、配料及包装 | 从接收到已放行参考产品，保持产品子类、配方族、批次、供应商及物料身份可追溯。 | 批次谱系；供应商规范；配方与放行记录 |
| `dq_measurement_control` | 质量、水、能源及排放 | 使用经校准或受控的测量系统，保留单位和原始读数，并记录换算因子与缺失数据替代。 | 校准证书；表计 QA；实验室 QA；换算因子登记 |
| `dq_temporal_representativeness` | 所有前景数据 | 使用覆盖季节性的连续 12 个月，或季节性产品的完整且有理由生产期；使分子和分母期间一致。 | 报告期声明；生产日历；表计及库存时间戳 |
| `dq_site_and_technology_coverage` | 多场址或多产线数据集 | 覆盖每个声明场址和实质性技术路线；按合格净产品质量加权汇总，并披露遗漏场址或路线。 | 场址清单；产线清单；加权汇总工作表；遗漏理由 |
| `dq_completeness_and_balances` | 物料、水及能源清单 | 核对配料/产品质量、场址水量及外购/现场能源。调查物料残差和未分配共享消耗，不得静默缩放消除。 | 质量、水和能源平衡；异常日志；纠正措施记录 |
| `dq_upstream_representativeness` | 关联背景数据集 | 尽可能匹配配料或载能体身份、地理、技术和时间；披露代理数据集与实质性缺口。 | 数据集映射表；代理理由；来源元数据 |
| `dq_reasoned_estimate_replacement` | 本候选 PCR 的所有临时 QA 范围 | 将每个 `reasoned_estimate` 范围视为非强制且可替换的筛选校验。不得替代前景记录或表述为观测行业基准。 | 范围审查日志；前景比较；替换来源或审查人接受记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流与产品元数据 | 参考产品在语义上不属于 CPC 23490、产品子类或市场状态缺失，或参考数量不是不含包装的 1 kg 净成品时，校验失败。 | `unsd-cpc-3-0-23490` |
| `validate_required_qualifiers` | 前景数据包 | 任一必需限定信息缺失、含糊，或在产品元数据、参考流和过程记录之间不一致时，校验失败。 | `unsd-cpc-3-0-23490`; `federation-of-bakers-production-methods` |
| `validate_process_coverage` | 过程图与清单 | 必须包含配料与面团制备、烘烤或等效热定型和冷却，以及场址公用工程与清洗。发酵/醒发、后处理、包装和受控储存须明确纳入或合理排除。 | `federation-of-bakers-production-methods`; `eu-jrc-food-beverage-bemp-2018` |
| `validate_mass_and_period_balance` | 物料清单 | 要求分子和分母期间一致、产品/拒收/返工分开，并披露质量平衡残差。对无法解释的负数、重复返工、包装计入参考质量，或高于设施有记录调查阈值的未解释残差提出问题。 | `iso-14044-2006`; `eu-bat-food-drink-milk-2019` |
| `validate_energy_water_and_emissions` | 公用工程与直接释放 | 能源载体须保持分别识别，配方水须与清洗水分开，现场空气或水排放须按物质和环境分区记录，且不得重复外部处理数据集。 | `eu-bat-food-drink-milk-2019` |
| `validate_allocation_and_proxies` | 共享负荷、共产品及背景关联 | 要求分配层级、因果驱动因素和核对；使用经济分配时要求敏感性；所有代理或地理不匹配的上游数据集均须披露。 | `iso-14044-2006`; `international-epd-gpi-5-0-1` |
| `validate_provisional_ranges` | QA 筛选范围 | 数值超出临时 `reasoned_estimate` 范围时触发调查，而不是自动拒绝。校验须报告这些宽泛范围属于临时作者估算，并优先使用采集记录和经审查的来源支持替代值。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 以烘焙厂工厂大门处 1 kg 净成品面包或其他纳入烘焙制品归一化的产品特定前景生产数据集 |
| downstream_use | `secondary_dataset`；完成独立方法学审查、身份审查及发布控制后可作为 `background_dataset` |
| allowed_use | 当地理、配方、市场状态、技术、参考期、包装和边界相容时，用于已声明 CPC 23490 产品的产品碳足迹或 LCA 建模 |
| excluded_use | 未进行等同性审查而直接比较不同产品功能、水分状态、保质期或包装形式；用于已排除的烘焙类别；用于营养、食品安全或法律符合性声明；将候选 QA 范围作为行业基准 |
| required_metadata | canonical PCR id 与版本；产品子类；配方族；基础谷物或面粉；膨松与发酵路线；市场及水分状态；包装；设施与地理；技术与烤炉路线；报告期；保质期或储存时间；分配选择；上游数据集映射 |
| required_quality_disclosure | 场址与产线覆盖；质量、水和能源平衡；测量与校准证据；时间覆盖；缺失数据；代理数据集；返工与废物去向；分配敏感性；所有临时 `reasoned_estimate` 的使用与替代 |
| update_trigger | 配方或产品子类变化；技术、烤炉、燃料、能源来源、保藏、包装、场址组合或分配发生实质变化；发布新的现行 bakery PCR/c-PCR；参考流身份变化；用新的来源支持证据替换临时范围；报告数据超过计划可接受代表性期间 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-23490` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 23490 Bread and other bakers' wares, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, 访问日期 2026-08-10 | CPC 23490 的权威语义纳入与排除边界 |
| `international-epd-bakery-pcr-2012-06` | `standard` | International EPD System, PCR 2012:06 Bakery products, version 3.0.4, 已过期, https://environdec.com/pcr-library/pcr2012-06, 访问日期 2026-08-10 | 历史 bakery PCR 范围及 CPC 234 包含 CPC 2349 的证据；不作为现行强制计划规则 |
| `international-epd-gpi-5-0-1` | `standard` | International EPD System, General Programme Instructions 5.0.1, https://www.environdec.com/resources/general-programme-instructions, 访问日期 2026-08-10 | 现行计划层级的分配、数据质量透明度及 EPD 治理背景 |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, including published amendments, https://www.iso.org/standard/38498.html, 访问日期 2026-08-10 | LCA 目标与范围、清单、分配、报告、审查及一致性原则 |
| `eu-bat-food-drink-milk-2019` | `official_guidance` | European Commission, Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj, 访问日期 2026-08-10 | 过程流程图，以及原料、水、能源、废水、废气和资源效率清单与监测 |
| `eu-jrc-food-beverage-bemp-2018` | `official_guidance` | European Commission Joint Research Centre, Best Environmental Management Practice for the Food and Beverage Manufacturing Sector, JRC113418, EUR 29382 EN, DOI 10.2760/2115, https://publications.jrc.ec.europa.eu/repository/handle/JRC113418, 访问日期 2026-08-10 | 食品制造环境管理、清洗、能源、制冷、运输、食品废物预防及面包/饼干/蛋糕子行业实践 |
| `federation-of-bakers-production-methods` | `extension_guidance` | Federation of Bakers, Production methods, https://www.fob.uk.com/about-the-bread-industry/how-bread-is-made/production-methods/, 访问日期 2026-08-10 | 面包配料集合及过程分解：混合、发酵/醒发、分割、烘烤、冷却及切片 |
