---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.silk-waste
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 缫丝刷绵残余供料

## 1. 范围与适用性

本 PCR 覆盖缫丝厂在桑蚕（Bombyx mori）茧索绪过程中形成并单独收集的一种刷绵纤维残余。供料是含丝胶的湿态纠缠丝纤维，尚未经过有意脱胶、漂白、机械再生开松、梳理或纺纱。功能是作为声明接收纺纱方的原料，必须有合法供应及接收验收记录。分类名称本身不证明产品法律地位，也不免除废物管理要求。本规则核算归因供料；废物处理服务须另定义服务功能和参考，不能直接沿用本 Product 输出。

前景从接收完整的已杀蛹、已干燥桑蚕茧及其继承上游负荷开始，纳入接收分选、储存、锅煮茧、索绪刷绵、相关缫丝、残余单独收集及质量放行。锅煮茧及蒸汽浴液加热的电机驱动多绪缫丝构成本有界路线；手册明确列有多绪机的蒸汽加热管。约定工业锅炉蒸汽供应是透明的前景与上游衔接选择，不代表某个当代工厂、同一SKU或其蒸汽消耗。须确认实际交付接口及压力温度；供方锅炉与水处理负荷只在上游计一次，不假定化学处理。首次放行后的成品仓储、包装、搬运和厂门发运仍进入原批次服务账。

唯一生产分母 Q 是按声明游离液排出条件完成首次质量放行的新增湿刷绵净质量。包装、分离液、蚕蛹及异物不在 Q 内。必须同时保留实测干固形物及含水率；加水不能创造合格产量。同批已放行并进入期末成品的质量只在 Q 中计一次。其后发运、复验、退回或返工不能再次形成 Q。

参考产品排除蚕茧、完整连续生丝、冒称废丝的蚕蛹、与刷绵混合的缫丝盆脚、与刷绵合并的粗头尾丝、绢纺落绵、已加工丝绵填料、绢丝纱、布、旧衣、再生开松毛棉及化学再生纤维。UN 对39211仅列名称，没有详细纳入说明；较窄物理边界来自手册及本规则声明的功能。FAO第8章的碱处理开绵及图17的下游纺纱链是相邻反例，不属于本湿态残余供料。本规则不声称覆盖39211全部内容。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.silk-waste` |
| classification_refs | CPC 3.0 39211 丝废料；方法范围较窄；此处不建立已接受映射 |
| covered_products | 一种单独收集的未脱胶且未经再生开松的桑蚕茧湿刷绵纤维残余 |
| excluded_products | 生丝；蚕蛹；无绪茧；粗头尾丝；混合盆脚；绢纺落绵；已加工丝绵填料；纱线；再生纤维 |
| representative_product | 为明确绢纺原料用途放行的含丝胶湿刷绵纤维 |
| production_route | 接收已杀蛹干茧；分选储存；蒸汽供热锅煮茧；索绪及多绪缫丝；刷绵残余单收；首次放行；原批次储存发运 |
| market_state | 缫丝厂门湿态未纺纱且未经再生开松的纤维；声明实际排液条件和实测含水率；无通用公定回潮率 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 向声明的绢纺准备接收方供应湿刷绵丝纤维 |
| How much | 首次质量放行的1千克湿纤维净量 |
| How well | 声明来源工序与蚕种；满足接收方污染及实测含水率要求；未经有意脱胶或再生开松 |
| How long or cycle | 一个可追溯首次放行批次；其后厂门服务沿用该批次 |
| reference_flow_link | finished_brushing_fibre |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 丝绸废料 `e8fb97e6-a2ec-40d6-8dee-2cafe1a25106` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 桑蚕来源; 刷绵与索绪形成工序; 已杀蛹干茧供货状态; 与粗头尾丝及盆脚分开收集; 湿态纠缠纤维形态; 丝胶状态; 未脱胶且未经再生开松; 游离液排出程序; 毛重及皮重方法; 实测含水率及干固形物方法; 接收验收及预期供料用途; 产品或废物法律地位; 首次放行批号及Q台账; 地域及报告期间; 蒸汽供应及缫丝配置; 形成工序分配及上游纳入范围; 放行后服务及退回; 包装材料及供货形态 |

每项限定信息必须进入数据集原始元数据或参考流完整上下文。此 Product 身份仅表示工厂生产混合、处理未指定，并不提供蚕种、等级、湿态、排液或合法接收证明；使用时必须保留较窄物理上下文。它不等同于中国厂内收集的 Waste 身份，也不保证接收方适配。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q由cp_release采集，为新增首次放行湿刷绵净量。保留秤毛重减实际皮重及独立实测含水率与干固形物。保持批次水分状态；不得用固定回潮率或加水抬高Q。 |
| raw_before_unit | 所有清单行 | Original physical property | original unit | 采集未归一原始记录。每个分子先转换为本行单位并完成归属，再执行第8节唯一一次除法。累计表计体积已是总量；仅真正速率随时间积分。密度须为该物质该状态独立实测，不套水密度，不从次级流系数推导。 |
| electric_energy | 电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留kWh表计，按1kWh=3.6MJ转换一次。电力身份是中国用户侧低于1kV电网平均供电，以能量计；原生属性名称不表示燃料燃烧。其他地域或电压须另选相容身份及供方。 |
| separate_species | 物理平衡 | Mass | kg | 在生产、成品库及合并边界分别独立核对湿质量、干固形物、水和相关实测元素。含丝胶不能当作纯丝素。不得用同一残差推算溶解丝胶、蒸发水及纤维损失。COD、TOC、TN为实测指标，不是某种指定化学物质量。本物理路线不主张反应水或结构水项。 |
| pack_exclusion | 每种包装件 | Mass | kg | 包装不进入Q。件数换算千克须有同配置包装件直接称量质量，不设默认单件质量。每种材料台账保留期初期末在制品和成品所附包装。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 厂内接收完整已杀蛹桑蚕干茧；上游养蚕及干燥负荷保留一次 |
| starting_condition_role | 须经过联合缫丝形成工序归属的上游产品输入 |
| product_classification_scope | 丝废料内较窄的湿刷绵纤维供料；不含其他纺织废物类别 |
| recursive_input_rule | 外购同类刷绵是带继承上游向量的独立批次；改名或重包装不能变成新增Q |
| upstream_dataset_requirement | 要求相容的茧养殖和杀蛹干燥数据；运输及缺失的供方工序补入一次。农场门鲜茧身份不能标记接收干茧，不假定废料零负荷。 |
| disclosure | 供货状态；供方地域；路线；共过程分配；物理与负荷账；在制品及成品向量；接收和法律证据；服务及偏离 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| sb_complete_origin | 生产链 | 纳入接收茧准备、储存、锅煮、索绪及联合缫丝，直至刷绵单收首次放行。已完成上游工作继承一次，不得缩为外购成品废料加包装。 | `fao-silk-1999` |
| sb_actual_routes | 能源及偏离 | 本有界路线采用外供工业锅炉蒸汽和电机电力。不得将供方锅炉燃料、给水或排放再列前景交换。实际厂内产汽、电阻加热、碱、漂白或纤维强制干燥须另声明路线，并保留每项真实原子输入输出及排放，不得置零或隐藏。保留实际蒸汽水焓交付约定，每项真实对外凝结水须列Product返还。 | `fao-silk-1999` |
| sb_whole_period | 采集范围 | 保留失败批、Q=0期间、启停、待机、清理、泄漏、废品及返工。真实未列原子交换逐项新增；not_applicable须有不存在证据。实际额外处理属于须审查偏离，不能抹除负荷。 | `fao-silk-1999`; `ilcd-2010` |
| sb_stock_services | 首次放行后 | 仓储、包装、搬运和发运沿原批次Qc核算；另记实物发运毛量H。合并账抵消生产入库内部转移；新增已放行期末成品已含于Q，不能另加产量。外来期初成品保留历史向量，只追加真实新增服务与返工。 | `ilcd-2010` |
| sb_status_gate | 供料功能 | 记录实际法律分类、转移管理、接收方同意、规格及验收。售价本身不决定法律地位。若实际功能是废物处理，不能把处理质量冒作本Product供料结果。 | `ilcd-2010` |

## 6. 过程清单结构

保留两套关联台账：V记录环境分配前完整实物跨界及内部转移；A记录选定批次在上游继承、拆分、分配和存量核对后的环境归属向量。质量平衡不能用A替代V。下列卡片声明归一交换或报告角色；原始V与A列独立保留。V中的共功能数量是实物信息账，不是额外供方、参考输出或负信用。任何卡片均不提供默认数量。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| joint_reeling | 接茧、煮茧、索绪及缫丝 | required | 声明的有界路线 | 前景；实物与归属账分开 | 每 1 kg 参考流 |
| residue_release | 刷绵纤维单收及首次放行 | required | 声明的有界路线 | 前景；实物与归属账分开 | 每 1 kg 参考流 |
| cohort_services | 原批次仓储包装及厂门发运 | required | 声明的有界路线 | 前景；实物与归属账分开 | 每 1 kg 参考流 |

### 过程：接茧、煮茧、索绪及缫丝（`joint_reeling`）

#### 输入

##### 产品流

###### 接收已杀蛹干茧（`dried_cocoons`）

一整份含茧层与蛹的供货茧批。记录含水率、供方杀蛹干燥及实际入厂运输；完整上游向量继承一次。现有农场门鲜品未加工茧Flow与本干茧供货形态不相容，故不采用。

- 选定流：已杀蛹桑蚕干茧

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_ledger`

- 来源：`fao-silk-1999`; `ilcd-2010`

###### 煮茧缫丝补水（`cooking_water`）

仅当实际检验相符时采用的工厂端低钙低镁供水。原生身份不提供处理能耗、硬度阈值或缫丝质量保证。整份供水只计一次，内部循环不是新增购买。供方处理在上游；实际厂内处理须改记原水及每种真实试剂、能耗和排出流。

- 选定流：软水 `65ca3c50-2294-4615-bb75-a88596dda64e`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_water`

- 来源：`fao-silk-1999`; `ilcd-2010`

###### 缫丝电机及相关电力（`reeling_electricity`）

仅用于中国用户侧低于1kV电网平均供电。原生Product身份和能量参考不授权其他电压、发电机直供或地域。保留各电机和照明的表计及运行待机期间，核对共用表计并归属电量，不再购买内部能源输出。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`

- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_energy`

- 来源：`fao-silk-1999`; `ilcd-2010`

###### 接收工业锅炉蒸汽（`industrial_steam`）

一种在声明工业锅炉供应接口实际跨界的蒸汽质量，带实测压力、温度、干度及焓。这是唯一供货物，热MJ仅为关联子账，不是第二笔热购买。不得以热能身份绑定本蒸汽质量购买。上游供方须按合同将蒸汽水、锅炉燃料、水处理、能耗及排放纳入一次；披露凝结水返还约定及热量为毛量还是已净额。不假定厂内锅炉、蒸汽直接喷入、凝结水回收或无水能源服务。

- 选定流：工业锅炉蒸汽

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_steam`

- 来源：`fao-silk-1999`; `ilcd-2010`

#### 输出

##### 产品流

###### 单独连续生丝共功能（`reeled_silk`）

在共同工序门的V账记录实际未加捻长丝输出及含水率。不得把残余映射到此输出。仅连续未加捻长丝身份相容，排除机织织物解释。该共功能只参与一次分配，不产生替代信用。

本卡为实物毛量或转移伴随账：独立保留V，A仅承接适当归属向量；不得把毛量再记作第二供方或信用。

- 选定流：未加捻连续桑蚕生丝

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_ledger`

- 来源：`fao-silk-1999`; `ilcd-2010`

###### 单独整蛹（`whole_pupae`）

仅实际按产品接收的份额列Product共功能；废物份额须另列Waste行。不得把研磨筛分的蛹粉身份用于完整湿蛹。保留质量、水分状态、买方验收及实际工序门价值。

本卡为实物毛量或转移伴随账：独立保留V，A仅承接适当归属向量；不得把毛量再记作第二供方或信用。

- 选定流：整只蚕蛹

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_ledger`

- 来源：`fao-silk-1999`; `ilcd-2010`

###### 刷绵单独内部转移（`brushing_transfer`）

仅内部转移的含丝胶湿桑蚕刷绵残余，不是生丝、蚕蛹、粗头尾丝或盆脚。工厂Product且处理未指定的泛身份必须携带此完整形态与路线限定。V记录毛转移及完整继承向量。本行不是参考行；合并账抵消残余放行过程的对应输入。

本卡为实物毛量或转移伴随账：独立保留V，A仅承接适当归属向量；不得把毛量再记作第二供方或信用。

- 选定流：丝绸废料 `e8fb97e6-a2ec-40d6-8dee-2cafe1a25106`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_ledger`

- 来源：`fao-silk-1999`; `ilcd-2010`

###### 实际蒸汽凝结水对外返还（`condensate_external_return`）

仅按水能约定真实跨回外部供方的凝结水。独立测返还质量、压力、温度及焓。本Product返还不是浴液废水，也非自动共产品或负能源供方。若供方热量已扣返还凝结水，不得再扣焓一次。内部循环不是本外部返还；不存在须有接口实证。

本卡为实物毛量或转移伴随账：独立保留V，A仅承接适当归属向量；不得把毛量再记作第二供方或信用。

- 选定流：返还蒸汽凝结水

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_steam`

- 来源：`fao-silk-1999`; `ilcd-2010`

##### 废物流

###### 无绪茧废物流（`end_missing_cocoons`）

此茧层与蛹实物流须与刷绵分开。记录实际去向及功能状态；若作为已验收茧共产品单独销售，须另设Product账，不能共用本废物路线。

本卡为实物毛量或转移伴随账：独立保留V，A仅承接适当归属向量；不得把毛量再记作第二供方或信用。

- 选定流：桑蚕无绪茧

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_ledger`

- 来源：`fao-silk-1999`; `ilcd-2010`

###### 废煮茧缫丝浴液（`reeling_wastewater`）

一种交给明确外部处理接收方的实际水性废物流。测总水、悬浮物和溶解负荷；来源分区是同一流的非叠加子账，不是额外供方。不得另把未处理排水重复列作基本排放。实际厂内处理须明确试剂、能耗、污泥及真实物种输出。

本卡为实物毛量或转移伴随账：独立保留V，A仅承接适当归属向量；不得把毛量再记作第二供方或信用。

- 选定流：煮茧缫丝废水

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_ledger`

- 来源：`fao-silk-1999`; `ilcd-2010`

###### 实际外排蒸汽凝结水（`condensate_waste`）

仅实际未返还供方、而以单独水性废物流送声明处理接收方的凝结水，保留热状态及水质。不得将同一质量同时写入对外返还和废水。若与浴液混合，保留实测混合节点、一个混合出口总量及非叠加来源分区。内部凝结水、实际排汽和直接喷入水各保留真实物理去向，不假定互相等量。

本卡为实物毛量或转移伴随账：独立保留V，A仅承接适当归属向量；不得把毛量再记作第二供方或信用。

- 选定流：外排蒸汽凝结水

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_steam`

- 来源：`fao-silk-1999`; `ilcd-2010`

##### 基本流

###### 实际向空气排放水蒸气（`bath_vapour`）

CAS7732-18-5，向空气未指定分区排放，质量参考。仅用于实际排向该介质的水蒸气，不用于液态排水、蒸汽购买、蒸散或泛旧同义词中的同位素物种。水分转移须独立于排液和溶解固体确定，不得用同一残差求两个未知。留在内部的凝结不是对外排放。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_water`

- 来源：`fao-silk-1999`; `ilcd-2010`

### 过程：刷绵纤维单收及首次放行（`residue_release`）

#### 输入

##### 产品流

###### 收集检验电力（`collection_electricity`）

仅用于中国用户侧低于1kV电网平均供电。原生Product身份和能量参考不授权其他电压、发电机直供或地域。保留各电机和照明的表计及运行待机期间，核对共用表计并归属电量，不再购买内部能源输出。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`

- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_energy`

- 来源：`fao-silk-1999`; `ilcd-2010`

###### 内部刷绵接收（`brushing_received`）

与上游相同的单独含丝胶湿桑蚕刷绵残余，未脱胶、未再生开松、未纺纱。保留原形成工序、含水率及完整继承向量；内部接收不是新上游购买。按批匹配brushing_transfer并内部抵消。

本卡为实物毛量或转移伴随账：独立保留V，A仅承接适当归属向量；不得把毛量再记作第二供方或信用。

- 选定流：丝绸废料 `e8fb97e6-a2ec-40d6-8dee-2cafe1a25106`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_ledger`

- 来源：`fao-silk-1999`; `ilcd-2010`

#### 输出

##### 产品流

###### 新增首次放行刷绵纤维（`finished_brushing_fibre`）

仅声明收集工序形成并新增首次放行的含丝胶湿桑蚕刷绵残余符合参考。泛Product身份只表示工厂生产混合及处理未指定，不证明等级、水分、排液性能、接收方或法律地位。不得脱胶、再生开松、纺纱、混料、稀释或以完整生丝替代。按声明游离液排出与水分协议称毛重减皮重。已在Q中的期末成品不再加一次。第3节全部限定须保留在原生产品和过程上下文。

- 选定流：丝绸废料 `e8fb97e6-a2ec-40d6-8dee-2cafe1a25106`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：1 千克

- 数值来源模式：`fixed_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`method_formula`

- 采集协议：`cp_release`

- 来源：`fao-silk-1999`; `ilcd-2010`

##### 废物流

###### 不合格刷绵纤维（`rejected_brushing_fibre`）

一种单独不合格刷绵纤维流，带实际处置或回收接收方及继承负荷。不得把失败批藏在产率中，也不得把已验收Product UUID用作Waste输出。回收物只有从未被验收过且保留真实新增工作，才可能进入首次放行Q。 原生Waste流限于中国工厂产生及厂内收集，下游处理未指定且被排除。仅用于中国厂内产生并收集的本单独湿丝纤维废物流。它不标识处理，不免除水分限定，也不授权Product参考功能；实际外部路线须另接。

本卡为实物毛量或转移伴随账：独立保留V，A仅承接适当归属向量；不得把毛量再记作第二供方或信用。

- 选定流：丝绸废料 `690d2d6b-d573-4ab5-9e50-742a2ee12275`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_ledger`

- 来源：`fao-silk-1999`; `ilcd-2010`

###### 收集的游离排液（`drain_liquid`）

若在称重门前排游离液，则独立测此分离液及悬浮和溶解负荷；不得从同一个湿质量残差同时推排液和蒸发。仅可通过有计量混合节点与浴液废水合并，并保留来源分区及一个出口总量。不假定强制干燥或清洗。

本卡为实物毛量或转移伴随账：独立保留V，A仅承接适当归属向量；不得把毛量再记作第二供方或信用。

- 选定流：刷绵纤维排液废水

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_water`

- 来源：`fao-silk-1999`; `ilcd-2010`

##### 基本流

###### 实际向空气排放水蒸气（`collection_vapour`）

CAS7732-18-5，向空气未指定分区排放，质量参考。仅用于实际排向该介质的水蒸气，不用于液态排水、蒸汽购买、蒸散或泛旧同义词中的同位素物种。水分转移须独立于排液和溶解固体确定，不得用同一残差求两个未知。留在内部的凝结不是对外排放。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_water`

- 来源：`fao-silk-1999`; `ilcd-2010`

### 过程：原批次仓储包装及厂门发运（`cohort_services`）

#### 输入

##### 产品流

###### 仓储搬运电力（`service_electricity`）

仅用于中国用户侧低于1kV电网平均供电。原生Product身份和能量参考不授权其他电压、发电机直供或地域。保留各电机和照明的表计及运行待机期间，核对共用表计并归属电量，不再购买内部能源输出。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`

- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_energy`

- 来源：`fao-silk-1999`; `ilcd-2010`

###### 外购聚乙烯袋（`pe_bag_purchase`）

仅实际采用的一种PE袋；原生CAS9002-88-4及泛工厂包装储存身份。不表示PP编织袋、复合衬袋或固定容量。外购P只计一次，期初空袋、附着及周转存量和内部复用I分开；内部复用不得再购。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_packaging`

- 来源：`fao-silk-1999`; `ilcd-2010`

###### 外部返还PE袋接收（`pe_bag_external_received`）

同一种经限定PE袋；ER是外部实物接收，不是外购P，也不是内部复用I。按所有权模型继承上游与复用向量；仅追加实际清洗或修理负荷并逐原子列项。

本卡为实物毛量或转移伴随账：独立保留V，A仅承接适当归属向量；不得把毛量再记作第二供方或信用。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_packaging`

- 来源：`fao-silk-1999`; `ilcd-2010`

###### 放行纤维进入批次服务（`released_fibre_service_in`）

内部接收已经首次放行的含丝胶湿桑蚕刷绵纤维。工厂Product且处理未指定的泛身份仍受原工序、水分、接收及法律上下文限定。保留原Qc及完整继承向量。成品入库不是新增Q或另一个外购供方；合并门抵消放行入库内部转移。

本卡为实物毛量或转移伴随账：独立保留V，A仅承接适当归属向量；不得把毛量再记作第二供方或信用。

- 选定流：丝绸废料 `e8fb97e6-a2ec-40d6-8dee-2cafe1a25106`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_ledger`

- 来源：`fao-silk-1999`; `ilcd-2010`

###### 此前已验收纤维的外部退回（`accepted_fibre_external_return`）

仅相同单收含丝胶湿刷绵，且已知原验收、发运及继承向量。泛丝绸废料Product身份不保证退回质量或所有权。记录实际退回质量、水分及原Qc；仅凭原记录冲回错误历史交付，真实新增工作追加但不再首次放行。未知或改变物料隔离待审。

本卡为实物毛量或转移伴随账：独立保留V，A仅承接适当归属向量；不得把毛量再记作第二供方或信用。

- 选定流：丝绸废料 `e8fb97e6-a2ec-40d6-8dee-2cafe1a25106`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_ledger`

- 来源：`fao-silk-1999`; `ilcd-2010`

#### 输出

##### 产品流

###### 随实物毛发运外出的PE袋（`pe_bag_shipped`）

同一种经限定PE袋；S随全部实物毛发运H，包括历史成品、样品和重复发运。它是包装伴随账，不是新增废丝产量，也无自动共产品信用。包装与纤维分别计量，保留来源批次。

本卡为实物毛量或转移伴随账：独立保留V，A仅承接适当归属向量；不得把毛量再记作第二供方或信用。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_packaging`

- 来源：`fao-silk-1999`; `ilcd-2010`

###### PE袋对外返还（`pe_bag_external_out`）

同一种经限定PE袋向实际所有者返还，EO与S分开记录。披露周转所有权及真实修理清洗，不自动获得避免生产信用。厂内I内部抵消，既不是EO也不是ER。

本卡为实物毛量或转移伴随账：独立保留V，A仅承接适当归属向量；不得把毛量再记作第二供方或信用。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_packaging`

- 来源：`fao-silk-1999`; `ilcd-2010`

###### 刷绵实物厂门毛发运（`gross_fibre_dispatch`）

同一种未脱胶、未经再生开松或纺纱的含丝胶湿桑蚕刷绵实物发运。每次发运中，工厂Product泛身份均须带原工序、水分、排液及接收法律上下文。H包括期初成品、新成品、样品及重复交付；来源分区保留但不得另加回H总量。H不是Q，本卡不是额外参考输出或信用。

本卡为实物毛量或转移伴随账：独立保留V，A仅承接适当归属向量；不得把毛量再记作第二供方或信用。

- 选定流：丝绸废料 `e8fb97e6-a2ec-40d6-8dee-2cafe1a25106`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_ledger`

- 来源：`fao-silk-1999`; `ilcd-2010`

##### 废物流

###### 废弃PE袋（`pe_bag_discard`）

同一种PE袋作为W交实际废物接收方。Product包装身份不能授权Waste绑定，本废物流UUID保持未解决。分别记录PE质量与污染分析，不把废纤维或其他聚合物合并进本袋。

本卡为实物毛量或转移伴随账：独立保留V，A仅承接适当归属向量；不得把毛量再记作第二供方或信用。

- 选定流：废弃聚乙烯袋

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_packaging`

- 来源：`fao-silk-1999`; `ilcd-2010`

###### 放行后储存纤维损失（`storage_fibre_loss`）

此前已放行刷绵的实际损失仍关联原Qc及继承向量，并记录去向和含水率。重复质量检验或退回回收不创造新产量。历史产品损失须与从未放行废品分开。 原生Waste流限于中国工厂产生及厂内收集，下游处理未指定且被排除。仅用于中国厂内产生并收集的本单独湿丝纤维废物流。它不标识处理，不免除水分限定，也不授权Product参考功能；实际外部路线须另接。

本卡为实物毛量或转移伴随账：独立保留V，A仅承接适当归属向量；不得把毛量再记作第二供方或信用。

- 选定流：丝绸废料 `690d2d6b-d573-4ab5-9e50-742a2ee12275`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_ledger`

- 来源：`fao-silk-1999`; `ilcd-2010`

##### 基本流

###### 实际向空气排放水蒸气（`storage_vapour`）

CAS7732-18-5，向空气未指定分区排放，质量参考。仅用于实际排向该介质的水蒸气，不用于液态排水、蒸汽购买、蒸散或泛旧同义词中的同位素物种。水分转移须独立于排液和溶解固体确定，不得用同一残差求两个未知。留在内部的凝结不是对外排放。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`

- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- 数量规则：采用第8节唯一商值及声明参考基准；原始总量与归属仍分开保留。

- 数值来源模式：`calculated_value`

- 适用范围：`site_specific`

- 归一化基准：每 1 kg 参考流

- 基准类型：`reference_flow`

- 证据类型：`calculated_from_collection`

- 采集协议：`cp_water`

- 来源：`fao-silk-1999`; `ilcd-2010`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| al_framework | 归因功能 | 在共同工序门识别每个真实共功能及其法律和接收状态。刷绵是一个单独供料功能。生丝、整蛹及其他独立验收产品须分开；送处理物不能自动作为有价共功能。不采用后果替代或避免生产信用。 | `ilcd-2010` |
| al_exclusive | 每个交换j | 首先采用专属过程测量、实际拆分及有根据的虚拟拆分，归属专属工作及内含输入。刷绵收集及其专属检验须与无关生丝后整理分开。保留共同形成工序；残余身份不能使该工序零负荷。 | `ilcd-2010` |
| al_causality | 剩余联合交换 | 用实测功能、技术及变化对照逐交换检验决定性物理因果。不同交换可以有不同驱动。进入纤维、溶解物及蛹的茧干物质须独立追踪；湿产品质量不能充当通用分配键。记录损失及无价输出，不能把全部内含材料归给可售纤维。 | `ilcd-2010` |
| al_residual_value | 确实尚未归属的剩余交换 | 仅在前述步骤仍不足时，按真实共功能在同一工序门、同一物理状态的同期市场价值分配剩余共过程向量。从后续售价还原门价值须扣除有据的下游调理、包装、储存和运输。保留单价、数量、币种、日期、不确定性及敏感性。湿刷绵不得用绢纺纱价格，不设通用百分比。缺少可辩护价值则该剩余保持未解决。 | `ilcd-2010` |
| al_vectors | 存量及服务 | 按实物批次在期初期末原料、在制品及成品中保存逐交换继承向量。只有分子实际纳入过未耗非在制存量及期末在制品，才能扣回相应负荷；已是净消耗者不得二扣。服务份额关联原Qc，不关联H。已放行存量返工承接原向量及真实新增工作与损失，不再购一次产品，也不新增Q。 | `ilcd-2010` |

## 8. 前景数据采集、计算与质量规则

协议只采集未归一原始总量。共用协议的process_id标识台账归口过程；原始记录为三个过程的每项测量保留实际过程及批号。aggregation_rule列的参考短语声明目标报告基准，不是要求采集时先除一次。所有换算、存量核对及归属均在唯一单位结果计算之前完成。本PCR不提供工厂数量、产率、默认含水率、分配份额或排放系数。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | residue_release | 首次放行量 | 称重验收台账 | 批号; 来源工序; 蚕种; 毛重; 皮重; 排液方法; 排液时长; 实测含水率; 干固形物; 接收标准; 首次验收时刻; 此前验收标记; Q; 期末成品批次 | 按声明且与接收方相容的排液条件用校准秤称湿纤维，并独立采样测水分；核对首次验收唯一性并防加水；保留失败及零产出运行。 | kg | 逐批及关账 | 完整批次并含失败工作 | 缫丝厂及明确接收方规格 | 每 1 kg 参考流 | 秤校准; 采样记录; 原始验收及排液日志 |
| cp_ledger | joint_reeling | 原子实物及归属交换 | 实物及继承向量账 | 过程id; 行id; 批号; 原始数量; 原始单位; 流状态; 供方; 去向; 期初原料/在制品/成品; 接收; 实物毛跨界V; 期末原料/在制品/成品; 未耗非在制存量; 转移id; 逐j继承向量; 分配证据; 逐j的A; 失败运行; Qc; H; 退回历史 | 逐具名交换称重或计量并匹配收发凭证；保留每个原始单元格及独立向量；先核实物边界再归属。记录原始交易及是否已净额标记。 | row native unit | 每次跨界及月结 | 完整报告期间及继承批次 | 三个前景过程及上游供方 | 每 1 kg 参考流 | 匹配磅单; 供方边界; 接收凭证; 向量守恒 |
| cp_energy | joint_reeling | 按工序及批次电力 | 表计记录 | 过程id; 批号; 表号; 期初读数; 期末读数; kWh; 如采用则真实功率速率; 时间段; 电热器/电机; 电压; 国家; 待机/清理/启停; 校准; 批次服务驱动 | 读取累计电能表；仅真实功率速率积分；分配前拆分共用与专属负荷。保留零Q期间及服务时间。 | kWh | 逐班及计量时段 | 生产及放行后服务期间 | 声明的厂内蒸汽供热配置 | 每 1 kg 参考流 | 表校准及匹配电费账单 |
| cp_water | joint_reeling | 水及物种平衡 | 质量及分析记录 | 过程id; 批号; 供水; 浴液存量; 循环量; 排液; 凝结; 独立实测蒸发; 输出水分; 液体总量; 悬浮固体; 溶解固体; COD/TOC/TN; 检验方法; 温度; 累计体积或速率; 实测密度; 接收介质 | 独立计量采样并保留相态状态；不得用一个残差求多个未知水或固体量。元素或有机指标须与真实物种分开。 | kg; original analytical unit | 逐批及排放时段 | 完整浴液及批次水分历史 | 缫丝厂水回路及外部处理接收方 | 每 1 kg 参考流 | 独立水/固体测试; 表计及分析不确定性 |
| cp_packaging | cohort_services | 每种包装材料一账 | 包装件及所有权存量账 | 包装组成; 实测件重; 期初空包装; 期初在制附着; 期初成品附着; 期初周转; P外购; I内部复用; ER外部返还接收; S毛发运包装; EO对外返还; W废物; 期末空包装; 期末在制附着; 期末成品附着; 期末周转; Qc; H; N首次非购买接收; 捆绑付费标记; 取得负荷归属方; ER对应原件及此前外出记录ID | 按实际均一包装配置计件称量；核对外部返还及含历史成品的毛发运。独立采原始P/N/I/ER/S/EO/W，保留所有权及继承向量。P包括单独付费和捆绑付费接收；N是首次非购买的外部接收，不是返还，也不证明零负荷。ER须匹配同一包装件有据的此前外出，每次跨界只记一次。若发生N，为该实际包装件另加独立原子接收卡。每项取得供方负荷只计一次，包括已经嵌入供货或历史向量的负荷。实际其他材料须另加卡片。 | kg | 每次移动及关账 | 报告范围内完整包装寿命窗口 | 缫丝厂及外部所有者 | 每 1 kg 参考流 | 购退单; 实测配置; 完整存量平衡 |
| cp_steam | joint_reeling | 蒸汽供应及凝结水接口 | 质量及焓表计台账 | 过程id; 批号; 蒸汽质量; 蒸汽压力; 温度; 干度; 实测或有据焓基准; 加热配置; 直接/间接接触; 实际凝结水返还质量; 返还温度/压力/焓; 实际凝结水排出; 实际排汽量; 内部回路存量; 供方水能纳入约定; 热量毛/净标记; 表计不确定性 | 独立计量每项真实外部质量和热状态，区分浴液水与蒸汽回路；核对供货账单边界及返还合同，不编回收或锅炉投入。热子账描述同一供汽质量，不是另一笔购买。 | kg; original thermal-state units | 每次供返时段 | 完整期间含待机启停及Q0 | 实际缫丝厂与外部供汽接口 | 每 1 kg 参考流 | 校准质量热量表; 焓推导; 供方边界及返还约定 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_unit_conversion | all inventory rows | 保留原始记录；分配前以可追溯因子换算分子单位一次。电量MJ=3.6*kWh。真实速率按实际时段积分，累计读数仅取差。有依据时用该物质该状态实测密度将体积换算质量。 | original quantities; original units; measured conversion factors; cp_energy; cp_water | converted raw row totals | `ilcd-2010` |
| gross_balance | all inventory rows | 逐实物材料逐边界：期初存量+外部接收+内部接收=期末存量+外部流出+内部转移+独立测定转化项。湿质量、干固形物、水及相关实测元素分别核对。仅在合并边界抵消内部转移，采用分配前V。 | V; cp_ledger; cp_water | reconciled physical V ledger | `ilcd-2010` |
| first_release_quantity | finished_brushing_fibre | Q=cp_release下新增首次放行湿刷绵净量之和。台账已将新增验收期末成品计一次。排除此前已验收退回、复验、分离水、包装及发运毛量H。Q=0时保留真实负荷，不生成单位结果。 | cp_release; unique first acceptance records | Q | `fao-silk-1999`; `ilcd-2010` |
| attributed_vector | all inventory rows | 逐交换j逐批以专属及合法分配的已换算原始负荷，加继承期初在制向量和真实批次服务构成A_j。只有分子纳入过期末在制及未耗非在制存量，才扣其向量。已净额原始消耗不再扣一次。按选定Q批次汇总；历史成品保留原生产向量，仅加真实新增服务。F为真实新增前景工作；重叠扣除X仅允许OTHER内已有且证明确切同侧重复，不能用于不同流或实物出口。 | converted raw row totals; cp_ledger; allocation evidence; cohort service records | A_j; separate physical companion total V_j | `ilcd-2010` |
| unit_result | all inventory rows | Q>0时唯一单位计算为x_j=A_j/Q。实物伴随报告另用v_j=V_j/Q并明确仅为实物。较早批次服务用原Qc替代Q，不用H；服务归属分量追加到该批结果，不再除该分量。参考输出本身恰为1千克。卡片与采集报告指同一个商，不再二次归一。 | A_j; V_j; Q; Qc; cp_release; cp_ledger | x_j; v_j | `ilcd-2010` |
| steam_interface | industrial_steam; condensate_external_return; condensate_waste | 保留独立实测蒸汽及凝结水质量和真实热状态。统一焓基准下，供热能为入汽焓减实际对外返还或排出的焓及其他实测热流出，并明确内部存量变化。供方约定决定购买热量为毛量还是已净额，不得二扣凝结水热。本热子账不是第二供方、密度换算或新的Q分母。 | cp_steam; measured mass and state; enthalpy datum; supplier heat agreement | one steam mass/thermal interface subaccount | `fao-silk-1999`; `ilcd-2010` |
| packaging_balance | pe_bag_purchase; pe_bag_external_received; pe_bag_shipped; pe_bag_external_out; pe_bag_discard | 本一种包装件：期初空包装+期初在制附着+期初成品附着+期初周转+P+N+ER=期末空包装+期末在制附着+期末成品附着+期末周转+S+EO+W。N是首次非购买接收；ER须有同一包装件的此前外出凭证。P、N、ER为互斥接收类别；同一次外出不得同时记S和EO。I是内部复用并抵消。S随全部毛发运H，包括历史成品及重复发运。P只购买一次，ER不是P。I及包装均不是Q，也非自动共产品。 | cp_packaging; P; I; ER; S; EO; W; H; N | balanced PE article ledger | `ilcd-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 每种流 | 保留原来源形态、实际状态、供方路线、全部原生限制及完整限定；可用UUID不提供缺失测量或法律证据。 | 供接方规格；直接身份上下文 |
| dq_complete | 全部行及期间 | 完整原始记录，包括失败与Q0、待机、启停、清理、返工、期初期末原料/在制/成品及精确继承向量；缺失不得默置零。 | cp_ledger与各实物边界核对 |
| dq_allocation | 共同工作 | 先拆专属工作；每个剩余因果驱动须有证据；仅剩余项可用同状态同门价值。保留不确定性、敏感性及缺失价值。 | 原表计工艺记录及带日期市场凭据 |
| dq_measurement | 湿纤维及排液 | 水分、固体、水及实际物种须独立测试并记录采样状态与不确定性。不把历史丝绵产率、碱浓度或绢纺纱实例用于本未经该处理刷绵。 | cp_release及cp_water原始检验报告 |
| dq_applicability | 来源综合 | 从历史手册及通用归因指南综合技术单元，不声称同厂数值基线或通用接收限值。场址数量采用真实记录，并披露来源年代及范围。 | 逐来源适用性说明及场址记录 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| val_reference | 供料数据集 | 要求唯一finished_brushing_fibre Product参考输出，采用声明UUID、Mass/kg及1千克，并有全部必需限定。拒绝Waste冒Product、混合纤维集合、已加工丝绵及重复首次验收。 | `un-cpc3-39211`; `fao-silk-1999` |
| val_formation | 形成过程完整性 | 核对完整茧到残余工序及上游供货状态、每个真实原子输入输出和路线偏离。外购干茧不能用原生农场门鲜茧Flow，研磨蛹粉及机织物不能代整蛹或纤维残余。 | `fao-silk-1999` |
| val_balance | V与A台账 | 分别核对生产、成品及合并实物边界；内部转移仅在合并门抵消。核对逐交换继承向量及单独一次A/Q。Q0保留负荷且无单位结果。不得以毛量H作分母，不二加期末成品。 | `ilcd-2010` |
| val_packaging | 每种实际包装件 | 核对完整P/N/I/ER/S/EO/W及空包装、附着和周转存量。毛发运包装包括历史成品。不得内部复用再购、计入丝Q、重复外部返还或自动信用。 | `ilcd-2010` |
| val_evidence | 放行及审查 | 未来场址测量与普通辅助/供方缺口须明确要求，不编数。参考身份、物理终端、分配依据或真实核心工艺证据未解决时，不能形成可用结果。结构检查成功不建立科学、翻译、法律、映射或出版审批。 | `ilcd-2010` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 湿刷绵门后作为声明绢纺准备输入 |
| allowed_use | 路线及接收适配完整的同一种湿态未进一步处理刷绵供料 |
| excluded_use | 废物处理服务；废旧纺织品；绢纺纱；脱胶丝绵；再生开松纤维；生丝替代；无条件类别平均 |
| required_metadata | 第3节全部限定；生产门；Q/Qc；V/A台账；上游边界与分配；完整原生限制 |
| required_quality_disclosure | 来源年代及综合；采样计量不确定性；普通UUID和供方缺口；真实核心暂停项；失败及Q0工作；存量和服务时序 |
| update_trigger | 形成工序、湿干状态、供茧状态、处理、蚕种、能源架构、接收或法律状态、分配证据或原生身份变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-39211 | official_guidance | UNSD，CPC3.0说明（2025年6月30日），第200–201页。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅名称的丝废料坐标及相邻毛棉再生开松类别；本身不规定制造路线 |
| fao-silk-1999 | handbook | Yong-woo Lee，Silk reeling and testing manual，FAO农业服务公报136（1999），第5–6章及第8章含图17。https://www.fao.org/4/x2099e/x2099e00.htm ; https://www.fao.org/4/x2099e/x2099e06.htm ; https://www.fao.org/4/x2099e/x2099e07.htm ; https://www.fao.org/4/x2099e/x2099e09.htm | 煮茧缫丝架构；刷绵残余形成及下游纺纱用途；与蛹、已加工丝绵及绢纺落绵区分。不提供制造数值默认或LCA分配因子。蒸汽供应衔接及采集存量协议为透明技术综合。 |
| ilcd-2010 | official_guidance | 欧盟JRC，ILCD Handbook — General guide for Life Cycle Assessment — Detailed guidance，2010年3月第1版，7.9.2–7.9.3节，PDF第275–292页。https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因实际和虚拟拆分；逐交换决定性物理因果；剩余同状态同门市场价值。场址台账落实原则；方法来源不提供丝厂数量或合法接收证明。 |
