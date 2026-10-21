---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.pressed-unworked-single-vision-ophthalmic-glass-blanks
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 压制未光学加工单光眼镜玻璃坯

## 1. 范围与适用性

本归因PCR限定一个真实产品边界：标准冕牌类无镀层、非变色、单光、未经光学修面或抛光的硅酸盐眼镜玻璃压制坯。从整份实际原料到首次质量放行，选择电熔/澄清/均化、料滴剪切、液压压制、冷却与电退火的完整路线。各实际配方逐种供货记账，无通用配方、收率、密度、能耗、排放、温度或寿命默认值。

不包括钟表盖玻璃、球体/球面片、光学成镜、复热坯精密模压、嵌片熔接、变色银卤化物活化、镀层、化学/热强化、普通冷磨平板及眼镜装配。规格文件的不同类别、料滴与嵌片是相邻反例，不合并成一个方法。技术路线综合不证明同一SKU或工厂，实际数据包须证明所声明路线。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.pressed-unworked-single-vision-ophthalmic-glass-blanks |
| classification_refs | CPC 3.0:37194; narrower |
| covered_products | 未光学加工非变色单光硅酸盐眼镜玻璃压制坯 |
| excluded_products | 表盖玻璃; 玻璃球; 嵌片; 变色/高折射率专属路线; 光学成镜; 普通冷磨片 |
| representative_product | 一项图纸限定的退火单光眼镜玻璃裸坯 |
| production_route | 整份原料配料→电熔/澄清/均化→剪料→液压压制/冷却→电退火/冷却→检验首次放行 |
| market_state | 供后续镜片光学加工的未光学加工矿物玻璃坯 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供后续单光眼镜镜片制造的未光学加工压制坯 |
| How much | 1 kg首次放行裸坯净干质量 |
| How well | 按实际图纸与材质/应力/尺寸/缺陷方法验收，不保证成镜性能 |
| How long or cycle | 一次唯一首次质量放行，后续服务另列真实原批观察窗 |
| reference_flow_link | finished_blank |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 钟或表玻璃及类似玻璃，未经光学加工的眼镜用玻璃，供制作此种玻璃用的球面玻璃及切割部分 `86f99422-b0c1-4f90-8150-aa288e54a03f` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 单光玻璃坯图纸与尺寸配置; 硅酸盐配方及每种整份供货原料; 非变色且未经光学加工的表面状态; 电熔/澄清/均化及电退火路线; 压机/剪刀/模具与实际润滑状态; 材质与残余应力验收方法; 唯一首次放行批次及裸玻璃净干质量kg Q; 若使用计件则给出实测单件质量换算配置; 期初期末原料 WIP FG及在装液体向量; 来源特定原生身份限制与供方边界; 真实水相态/物种证据与物理闭合; 包装结构与完整收存退废路线; 原批次服务及明确观察区间 |

所有必需限定信息须进入数据包元数据、描述、参考流备注或等效字段。参考产品及放行后同身份实物流采用限制如下：仅选此宽泛已制造Product类别中未经光学加工的眼镜用玻璃成员：压制并退火后的单一无镀层非变色单光硅酸盐玻璃坯。正式名称中的其他成员不进入本交换。原生为工厂生产混合；CAS、配方、品级、光学精加工、几何、地区与供方未指定。中文备注提及制造用途，不能将其或泛化成品路线理解为抛光镜片；必须记录真实未加工状态、图纸与QC。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q为唯一首次放行裸坯净干kg；closingFG已在Q中。计件转kg须同配置实测M或实测整批，不猜单件重。 |
| energy_unit | electricity; service_electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 真实电表kWh先乘3.6成为MJ，再归属并仅归一化一次；无电能载体质量。 |
| mass_unit | silica; soda; potash; limestone; boric; alumina; antimony; ceria; nitrate; sulfate; cullet_in; mains_water; diwater; release_agent; hydraulic_oil; machine_oil; platinum_contact; refractory; mould; shear; filter; melter_asset; press_asset; lehr_asset; air_n2; air_o2; air_ar; air_h2o; air_co2; cullet_out; glass_waste; batch_dust; washwater; cool_purge; filter_waste; refractory_waste; mould_waste; shear_waste; platinum_return; exchange_return; co2_process; no_air; no2_air; so2_air; water_air; n2_air; o2_air; ar_air; co2_pass; silica_dust_air; boric_air; b2o3_air; fg_received; fg_dispatch; service_glass_waste; tray_purchase; tray_returned_in; tray_gross_out; tray_return_out; tray_waste; carton_purchase; carton_returned_in; carton_gross_out; carton_return_out; carton_waste; waste_hydraulic_oil; waste_machine_oil; exchange_water_in | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 整份物料和每真实物种按kg，独立测量供货含水、相态、密度，不能以诊断指标替代物种。不得把本规则套到MJ或tkm。 |
| transport_unit | freight | 运输质量距离 | tkm | 按真实载荷吨与距离km计算质量距离，不用质量基准货车或运输流。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 每实际整份供货矿物、化学品和相容碎料收货，并保留上游供货/运输 |
| starting_condition_role | foreground_gate |
| product_classification_scope | CPC3.0:37194中的单光未光学加工眼镜玻璃压制坯子集 |
| recursive_input_rule | 相同类别外购/退回物保留供方与原批负荷；内部碎料和移交按逐向量配对抵消 |
| upstream_dataset_requirement | 实际供货形态、原生限制与供方边界一致的上游数据；不把完整供方与成分子项重复采购 |
| disclosure | 路线、图纸、品级、供方、所有工况与库存历史、物种/水证据、包装与观察窗 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_full | all processes | 从每种整份矿物/化学品与相容碎料收货起，保留上游供货负荷和实际入厂物流；纳入称量混合、电熔/澄清、铂接触搅拌/均化、剪料、液压压制/冷却、电退火/冷却、检验与唯一首次质量放行。保留真实水/气公用工程、治理、维护、所有非生产工况、存量及独立放行后服务，不能缩成外购坯包装。 | `jrc-glass-bref-2013`; `corning-ophthalmic-manufacturing`; `corning-ophthalmic-spec-f-2013` |
| boundary_state | all processes | 仅适用声明的无镀层非变色单光硅酸盐压制坯。不要求一个当代订单证明所有通用单元；技术综合不是同工厂配方。真实燃料加热、复热压制、变色活化、熔接嵌片、光学抛光/镀膜或强化成镜路线须另审适用性。实际辅助燃料或蒸汽存在时，声明并逐项补真实原子供给、载体质量/热量和返还，不虚称零或省略。 | `jrc-glass-bref-2013`; `corning-ophthalmic-manufacturing` |
| boundary_history | manufacture | 逐广延交换i保留独立未归一化继承负荷向量；单位换算和真实归属后A_i=B_open_i+C_i-B_close_i。制造B_close仅含原料、WIP和真实未归属非WIP存量，不含同批已放行入Q的closingFG。纳入失败批、零产出、启停、待机、清洗、废品与真实返工；未测历史不得设零。 区分毛收货与经证明确已扣除存量变化的材料实际消耗/领用基准；同一原料存量变化仅校正一次，已实测耗用不得再次加减同一原料期初期末存量。分别保留互斥原料/WIP及纳入范围的非WIP在装/仓储实物量和每个继承交换向量。明确采购/收货、退回、毛发运和废物流动卡保留完整换算后实物方向；分配/存量校正只作用于另列负荷或消耗向量，不缩减毛流动。 | `jrc-ilcd-attributional-2010` |
| boundary_physical | all processes | 制造、FG/服务与合并物理门独立于负荷分配闭合。每种整份物料及相关元素：期初实物存量+真实外部毛投入=期末存量+真实外部毛输出；内部移交精确抵消。在装资产/液体另立新购、维修、退役和磨损账，不按经济分配份额缩毛收货、返货、发运、废物或包装。 | `jrc-glass-bref-2013`; `jrc-ilcd-attributional-2010` |
| boundary_species | all processes | 整份质量与元素平衡不证明分子物种或反应水路径。独立判定含水、游离/结构/化学生成水、蒸发及真实相态。水/物种有两个未知时须第二项独立观测，不能一个残差定两个未知。分开空气毛物种，不重复空气总量和子项；不得由COD/VOC/NOx/总硼/总碳或粒径区间虚构分子物种。 | `jrc-glass-bref-2013` |
| boundary_expand | all inventory rows | 本有限初始原子清单不声称所有工厂仅有这些物料。逐项对照真实供货、资产/维修、维护制剂、气/水出口和包装，在建模前补每种实际缺失独立交换、原生广延属性、协议和不确定度。真实核心产品/路线/门或必要物理/物种历史不闭合时不能产生可用结果；辅助UUID/供方缺口本身不改变产品身份。 | `jrc-glass-bref-2013` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | 完整原料至裸坯首次放行 | required | 声明的单光压制坯路线 | foreground | 1 kg reference flow |
| services | 原批次放行后服务 | conditional | 实际发生且观察窗明确 | supporting | 原Q，不新增产量 |

### 过程：完整压制坯制造 (`manufacture`)

#### 输入

##### 产品流

###### 高纯石英砂 (`silica`)

称量实际低杂质配料所用整份洗选石英砂。要求洗选/净化路线与结晶石英身份一致，多晶型集合不能确立相容石英品级。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_batch`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：高纯石英砂
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_batch`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_batch`
- 来源：`jrc-glass-bref-2013`

###### 无水纯碱 (`soda`)

整份供货Na2CO3粉末，实测游离水、含量和杂质。湿法冶金回收路线或固定95%天然碱品级不能代表未特指的玻璃配料供货。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_batch`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：无水纯碱
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_batch`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_batch`
- 来源：`jrc-glass-bref-2013`

###### 碳酸钾配料投入 (`potash`)

仅当实际声明的单光硅酸盐配方真实采购本物料时纳入。整份供货物质只称量采购一次，氧化物/活性含量仅为成分子账，不新增采购；无默认配方比例。 合成固体K2CO3产品，CAS584-08-7，工厂生产混合；原生摩尔质量说明不是采购量或纯度。核对水合状态、含量和供应路线，排除肥料钾盐混合物。 原生参考属性→单位组→参考单位：`93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. 数量链接：本行x_i仅为未除原始`cp_batch`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：碳酸钾 `50187d31-fd0a-47c3-9aa2-84402ffb625e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_batch`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_batch`
- 来源：`jrc-glass-bref-2013`

###### 石灰石配料投入 (`limestone`)

仅当实际声明的单光硅酸盐配方真实采购本物料时纳入。整份供货物质只称量采购一次，氧化物/活性含量仅为成分子账，不新增采购；无默认配方比例。 Mass基准的石灰石Product，组成、品级、路线与供方明确未指定；不虚构纯CaCO3含量或方解石等同。记录整份实际供货矿物及实测杂质。 原生参考属性→单位组→参考单位：`93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. 数量链接：本行x_i仅为未除原始`cp_batch`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：石灰石 `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_batch`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_batch`
- 来源：`jrc-glass-bref-2013`

###### 正硼酸配料投入 (`boric`)

仅当实际声明的单光硅酸盐配方真实采购本物料时纳入。整份供货物质只称量采购一次，氧化物/活性含量仅为成分子账，不新增采购；无默认配方比例。 原生生产、工厂供货的正硼酸晶体/粉末Product；原生无CAS和固定含量。不替代硼砂或B2O3，保留游离水及独立证据支持的脱水/反应水路径。 原生参考属性→单位组→参考单位：`93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. 数量链接：本行x_i仅为未除原始`cp_batch`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：硼酸 `5afb91cd-b49f-481a-9364-ad3100c47f2a`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_batch`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_batch`
- 来源：`jrc-glass-bref-2013`

###### 氧化铝配料投入 (`alumina`)

仅当实际声明的单光硅酸盐配方真实采购本物料时纳入。整份供货物质只称量采购一次，氧化物/活性含量仅为成分子账，不新增采购；无默认配方比例。 工厂拜耳法氧化铝Product；原生同义词/备注提及刚玉和水合赋存不代表可把氢氧化铝作为氧化铝采购。核对供货氧化物相、水合、含量与路线，不推测密度。 原生参考属性→单位组→参考单位：`93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. 数量链接：本行x_i仅为未除原始`cp_batch`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：氧化铝 `7bdf8e03-06f3-4377-bd78-ec92647a53ab`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_batch`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_batch`
- 来源：`jrc-glass-bref-2013`

###### 三氧化二锑澄清投入 (`antimony`)

仅当实际声明的单光硅酸盐配方真实采购本物料时纳入。整份供货物质只称量采购一次，氧化物/活性含量仅为成分子账，不新增采购；无默认配方比例。 固体Sb2O3产品，CAS1309-64-4，工厂混合，无固定生产路线或纯度。仅用于真实单独采购澄清剂，不等于阻燃整份配方或排放总锑。 原生参考属性→单位组→参考单位：`93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. 数量链接：本行x_i仅为未除原始`cp_batch`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：三氧化二锑 `846c44a9-426c-4f77-ab68-c52c894a4213`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_batch`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_batch`
- 来源：`jrc-glass-bref-2013`

###### 二氧化铈配料投入 (`ceria`)

仅当实际声明的单光硅酸盐配方真实采购本物料时纳入。整份供货物质只称量采购一次，氧化物/活性含量仅为成分子账，不新增采购；无默认配方比例。 CeO2产品，CAS1306-38-3，工厂混合，路线和含量未固定。本卡仅为实际存在的配料添加剂，不是抛光浆料；放行后光学精加工超出本路线。 原生参考属性→单位组→参考单位：`93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. 数量链接：本行x_i仅为未除原始`cp_batch`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：氧化铈 `b23ee368-01e2-4fcd-8e8f-e8115ee04555`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_batch`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_batch`
- 来源：`jrc-glass-bref-2013`

###### 硝酸钠晶体 (`nitrate`)

真实使用时的氧化剂；不能把基本资源或排放UUID用于外购NaNO3晶体。记录整份供货和真实分解/物种，不设通用反应收率。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_batch`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：硝酸钠晶体
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_batch`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_batch`
- 来源：`jrc-glass-bref-2013`

###### 无水硫酸钠澄清盐 (`sulfate`)

真实使用时记录整份采购澄清盐。要求实际品级与晶体结构相容；单斜/斜方描述冲突不能确立身份；不以含硫酸盐废物替代。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_batch`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：无水硫酸钠澄清盐
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_batch`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_batch`
- 来源：`jrc-glass-bref-2013`

###### 同组成眼镜玻璃回用碎料 (`cullet_in`)

实际同组成内部回料或另购相容碎玻璃须在原始记录中区分；内部return_in与return_out按质量和继承负荷向量抵消。放行后返回物保留原批次，不能当无负荷新碎料。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_batch`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：同组成眼镜玻璃回用碎料
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_batch`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_batch`
- 来源：`jrc-glass-bref-2013`

###### 制造电力 (`electricity`)

分别采集原料处理、电熔/澄清/搅拌/均化、剪料、液压驱动、压制/冷却、电退火、水泵、压缩空气发生、治理、启停、待机及清洗的真实电表；主表和分表不能重复。 中国用户侧电网平均交流电Product，1–35kV，到用户消费混合，净热值/MJ。仅适用于此边界、电压与地区；其他地区、电压或合同供电须更换身份。不重复供方已含输配电；1kWh=3.6MJ，电能没有载体质量。 原生参考属性→单位组→参考单位：`93a60a56-a3c8-11da-a746-0800200c9a66` → `93a60a57-a3c8-11da-a746-0800200c9a66` → MJ. 数量链接：本行x_i仅为未除原始`cp_energy`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用本行一次计算的x_i；通过`cp_energy`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_energy`
- 来源：`jrc-glass-bref-2013`; `corning-ophthalmic-manufacturing`

###### 处理后自来水 (`mains_water`)

记录真实冷却/清洗补水及处理来源。不把香港自来水供给及其筛查1000kg/m3当通用密度；各真实回路分开。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_water`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：处理后自来水
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_water`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_water`
- 来源：`jrc-glass-bref-2013`

###### 去离子水供给 (`diwater`)

实际外购去离子冷却/清洗或实验用水时，整份计量并声明供方水能边界；厂内制备逐项采真实原水、电力及树脂/药剂，不再重复外购供方。 去离子水Product，Mass；原生无CAS、地区、供方或温度。匹配真实供水质量和边界，不替代自来水或环境取水，密度和状态须独立测量。 原生参考属性→单位组→参考单位：`93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. 数量链接：本行x_i仅为未除原始`cp_water`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：去离子水 `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_water`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_water`
- 来源：`jrc-glass-bref-2013`

###### 水性石墨脱模悬浮液 (`release_agent`)

真实使用时记录整份外购石墨脱模制剂，载水、黏结剂和石墨含量仅子账。厂内配制则改采每种真实外购组分及混合能耗/损失。原生石墨润滑剂用Volume，没有独立密度不能绑定质量卡。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_aux`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：水性石墨脱模悬浮液
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_aux`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_aux`
- 来源：`jrc-glass-bref-2013`

###### 矿物液压油制剂 (`hydraulic_oil`)

压机使用的整份真实矿物液压制剂；在装液、补加、移出与泄漏分别核对。Volume基准液压油供给换算kg前须独立实测密度，不猜kg/m3。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_aux`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：矿物液压油制剂
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_aux`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_aux`
- 来源：`jrc-glass-bref-2013`

###### 矿物润滑油制剂 (`machine_oil`)

机器润滑剂与液压油、脱模剂分开。整份外购制剂一次，保留在用油存量及含水污染；PAO合成流不代表矿物油。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_aux`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：矿物润滑油制剂
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_aux`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_aux`
- 来源：`jrc-glass-bref-2013`

###### 铂玻璃接触部件 (`platinum_contact`)

真实新增/修复资产或部件时采实物收存、安装、期初期末存量、磨损、退役/退回部件及隐含负荷历史，另算当期服务负荷。不按每kg投整台新机，不设固定寿命，不按经济份额缩实物。匹配真实合金和部件结构，金属资源不是成品部件。 实物全额收存退废不使用分配份额；本卡x_i仅为独立记录的当期资本服务所对应上游供货负荷，按真实历史、已论证服务关系及原生广延单位表达。服务基准或历史未知时保持未解决，不把整份当期收货直接塞入x_i。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_assets`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：铂玻璃接触部件
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_assets`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_assets`
- 来源：`jrc-glass-bref-2013`

###### 铝硅质窑炉耐火砖 (`refractory`)

真实新增/修复资产或部件时采实物收存、安装、期初期末存量、磨损、退役/退回部件及隐含负荷历史，另算当期服务负荷。不按每kg投整台新机，不设固定寿命，不按经济份额缩实物。匹配真实合金和部件结构，金属资源不是成品部件。 实物全额收存退废不使用分配份额；本卡x_i仅为独立记录的当期资本服务所对应上游供货负荷，按真实历史、已论证服务关系及原生广延单位表达。服务基准或历史未知时保持未解决，不把整份当期收货直接塞入x_i。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_assets`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：铝硅质窑炉耐火砖
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_assets`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_assets`
- 来源：`jrc-glass-bref-2013`

###### 钢制眼镜坯压模 (`mould`)

真实新增/修复资产或部件时采实物收存、安装、期初期末存量、磨损、退役/退回部件及隐含负荷历史，另算当期服务负荷。不按每kg投整台新机，不设固定寿命，不按经济份额缩实物。匹配真实合金和部件结构，金属资源不是成品部件。 实物全额收存退废不使用分配份额；本卡x_i仅为独立记录的当期资本服务所对应上游供货负荷，按真实历史、已论证服务关系及原生广延单位表达。服务基准或历史未知时保持未解决，不把整份当期收货直接塞入x_i。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_assets`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：钢制眼镜坯压模
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_assets`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_assets`
- 来源：`jrc-glass-bref-2013`

###### 钢制料滴剪刀片 (`shear`)

真实新增/修复资产或部件时采实物收存、安装、期初期末存量、磨损、退役/退回部件及隐含负荷历史，另算当期服务负荷。不按每kg投整台新机，不设固定寿命，不按经济份额缩实物。匹配真实合金和部件结构，金属资源不是成品部件。 实物全额收存退废不使用分配份额；本卡x_i仅为独立记录的当期资本服务所对应上游供货负荷，按真实历史、已论证服务关系及原生广延单位表达。服务基准或历史未知时保持未解决，不把整份当期收货直接塞入x_i。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_assets`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：钢制料滴剪刀片
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_assets`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_assets`
- 来源：`jrc-glass-bref-2013`

###### 聚酯收尘滤袋 (`filter`)

真实新增/修复资产或部件时采实物收存、安装、期初期末存量、磨损、退役/退回部件及隐含负荷历史，另算当期服务负荷。不按每kg投整台新机，不设固定寿命，不按经济份额缩实物。匹配真实合金和部件结构，金属资源不是成品部件。 实物全额收存退废不使用分配份额；本卡x_i仅为独立记录的当期资本服务所对应上游供货负荷，按真实历史、已论证服务关系及原生广延单位表达。服务基准或历史未知时保持未解决，不把整份当期收货直接塞入x_i。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_assets`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：聚酯收尘滤袋
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_assets`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_assets`
- 来源：`jrc-glass-bref-2013`

###### 玻璃电熔炉组件 (`melter_asset`)

真实新增/修复资产或部件时采实物收存、安装、期初期末存量、磨损、退役/退回部件及隐含负荷历史，另算当期服务负荷。不按每kg投整台新机，不设固定寿命，不按经济份额缩实物。匹配真实合金和部件结构，金属资源不是成品部件。 实物全额收存退废不使用分配份额；本卡x_i仅为独立记录的当期资本服务所对应上游供货负荷，按真实历史、已论证服务关系及原生广延单位表达。服务基准或历史未知时保持未解决，不把整份当期收货直接塞入x_i。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_assets`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：玻璃电熔炉组件
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_assets`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_assets`
- 来源：`jrc-glass-bref-2013`

###### 液压玻璃压机组件 (`press_asset`)

真实新增/修复资产或部件时采实物收存、安装、期初期末存量、磨损、退役/退回部件及隐含负荷历史，另算当期服务负荷。不按每kg投整台新机，不设固定寿命，不按经济份额缩实物。匹配真实合金和部件结构，金属资源不是成品部件。 实物全额收存退废不使用分配份额；本卡x_i仅为独立记录的当期资本服务所对应上游供货负荷，按真实历史、已论证服务关系及原生广延单位表达。服务基准或历史未知时保持未解决，不把整份当期收货直接塞入x_i。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_assets`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：液压玻璃压机组件
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_assets`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_assets`
- 来源：`jrc-glass-bref-2013`

###### 电退火窑组件 (`lehr_asset`)

真实新增/修复资产或部件时采实物收存、安装、期初期末存量、磨损、退役/退回部件及隐含负荷历史，另算当期服务负荷。不按每kg投整台新机，不设固定寿命，不按经济份额缩实物。匹配真实合金和部件结构，金属资源不是成品部件。 实物全额收存退废不使用分配份额；本卡x_i仅为独立记录的当期资本服务所对应上游供货负荷，按真实历史、已论证服务关系及原生广延单位表达。服务基准或历史未知时保持未解决，不把整份当期收货直接塞入x_i。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_assets`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：电退火窑组件
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_assets`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_assets`
- 来源：`jrc-glass-bref-2013`

###### 玻璃配料供货公路货运服务 (`freight`)

逐批采真实载重、距离、装载/利用率与空返边界，tkm为质量距离而非货车质量。Mass基准货运身份与tkm不相容；不重复供方已含运输。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_transport`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：玻璃配料供货公路货运服务
- 流属性/单位：运输质量距离 / tkm
- 数量规则：采用本行一次计算的x_i；通过`cp_transport`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_transport`
- 来源：`jrc-ilcd-attributional-2010`

###### 外部换热水供给 (`exchange_water_in`)

真实供方水进入独立封闭换热器时记录整份毛质量、温压、焓，关联exchange_return及供方水能约定；不预设蒸汽或锅炉。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_water`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：外部换热水供给
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_water`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_water`
- 来源：`jrc-glass-bref-2013`

##### 废物流

##### 基本流

###### 环境入口空气中的氮气 (`air_n2`)

按物种和物态测量真实通风、压模冷却或压缩机毛进气；每回路体积只用一次，并用记录压力、温度、湿度下该气体的实测组成与密度。不把空气总量与子物种重复计量；其他真实微量物种逐一新增。 分子N2，CAS7727-37-9，空气资源。仅记录独立测得组成的真实环境空气N2毛投入，不重复空气总交换或外购氮气供方。 原生参考属性→单位组→参考单位：`93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. 数量链接：本行x_i仅为未除原始`cp_air`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_air`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`jrc-glass-bref-2013`

###### 环境入口空气中的氧气 (`air_o2`)

按物种和物态测量真实通风、压模冷却或压缩机毛进气；每回路体积只用一次，并用记录压力、温度、湿度下该气体的实测组成与密度。不把空气总量与子物种重复计量；其他真实微量物种逐一新增。 O2，CAS7782-44-7，空气资源；不代表外购瓶装氧气供方。分别保留毛投入、化学消耗/释放与出口量，不采用原生同位素/离子噪声。 原生参考属性→单位组→参考单位：`93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. 数量链接：本行x_i仅为未除原始`cp_air`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_air`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`jrc-glass-bref-2013`

###### 环境入口空气中的氩气 (`air_ar`)

按物种和物态测量真实通风、压模冷却或压缩机毛进气；每回路体积只用一次，并用记录压力、温度、湿度下该气体的实测组成与密度。不把空气总量与子物种重复计量；其他真实微量物种逐一新增。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_air`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：环境入口空气中的氩气
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_air`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`jrc-glass-bref-2013`

###### 环境入口空气中的水蒸气 (`air_h2o`)

按物种和物态测量真实通风、压模冷却或压缩机毛进气；每回路体积只用一次，并用记录压力、温度、湿度下该气体的实测组成与密度。不把空气总量与子物种重复计量；其他真实微量物种逐一新增。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_air`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：环境入口空气中的水蒸气
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_air`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`jrc-glass-bref-2013`

###### 环境入口空气中的二氧化碳 (`air_co2`)

按物种和物态测量真实通风、压模冷却或压缩机毛进气；每回路体积只用一次，并用记录压力、温度、湿度下该气体的实测组成与密度。不把空气总量与子物种重复计量；其他真实微量物种逐一新增。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_air`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：环境入口空气中的二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_air`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_air`
- 来源：`jrc-glass-bref-2013`

#### 输出

##### 产品流

###### 首次放行的未光学加工眼镜玻璃坯 (`finished_blank`)

本唯一产品输出链接参考对象。Q为压制、退火/冷却并按图纸、材质和应力验收后新增首次质量放行的裸坯净干质量；不含光学修面、抛光、镀层、熔接嵌片和包装。同批closingFG已入Q，不是另一制造产出。 仅选此宽泛已制造Product类别中未经光学加工的眼镜用玻璃成员：压制并退火后的单一无镀层非变色单光硅酸盐玻璃坯。正式名称中的其他成员不进入本交换。原生为工厂生产混合；CAS、配方、品级、光学精加工、几何、地区与供方未指定。中文备注提及制造用途，不能将其或泛化成品路线理解为抛光镜片；必须记录真实未加工状态、图纸与QC。 原生参考属性→单位组→参考单位：`93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg.

- 选定流：钟或表玻璃及类似玻璃，未经光学加工的眼镜用玻璃，供制作此种玻璃用的球面玻璃及切割部分 `86f99422-b0c1-4f90-8150-aa288e54a03f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：固定值 (`fixed_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：方法公式 (`method_formula`)
- 采集协议：`cp_release`
- 来源：`corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`

###### 同组成眼镜玻璃回用碎料 (`cullet_out`)

计量实际废料滴、坯或试验破碎物的内部回用路线；与cullet_in按kg及逐交换继承向量配对。不新增产品Q、外购投入或回收材料抵扣。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_balance`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：同组成眼镜玻璃回用碎料
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_balance`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`jrc-glass-bref-2013`

###### 退回供方的外部换热水 (`exchange_return`)

仅在真实供方换热水作为Product返出时使用；匹配独立记录的入水、质量、温压、焓与供方水能约定。不能把排污废水改称回水或虚构蒸汽锅炉；真实蒸汽服务必须新增原子蒸汽供给、载水质量、凝结水返还及热MJ子账，且不重复供方负荷。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_water`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：退回供方的外部换热水
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_water`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_water`
- 来源：`jrc-glass-bref-2013`

##### 废物流

###### 外运处理的不合格眼镜玻璃 (`glass_waste`)

保留整份真实独立去向的物料及含水、附着污染、组成、物态、处理去向和法律/经济状态。名称为单一实物流而非成分子项，不在同一废物上再加污染指标质量。真实回收/处置须独立模型，不自动抵扣。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_balance`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：外运处理的不合格眼镜玻璃
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_balance`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`jrc-glass-bref-2013`

###### 收集的眼镜玻璃配料粉尘 (`batch_dust`)

保留整份真实独立去向的物料及含水、附着污染、组成、物态、处理去向和法律/经济状态。名称为单一实物流而非成分子项，不在同一废物上再加污染指标质量。真实回收/处置须独立模型，不自动抵扣。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_balance`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：收集的眼镜玻璃配料粉尘
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_balance`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`jrc-glass-bref-2013`

###### 玻璃工序清洗废水 (`washwater`)

保留整份真实独立去向的物料及含水、附着污染、组成、物态、处理去向和法律/经济状态。名称为单一实物流而非成分子项，不在同一废物上再加污染指标质量。真实回收/处置须独立模型，不自动抵扣。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_balance`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：玻璃工序清洗废水
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_balance`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`jrc-glass-bref-2013`

###### 冷却回路排污水 (`cool_purge`)

保留整份真实独立去向的物料及含水、附着污染、组成、物态、处理去向和法律/经济状态。名称为单一实物流而非成分子项，不在同一废物上再加污染指标质量。真实回收/处置须独立模型，不自动抵扣。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_balance`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：冷却回路排污水
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_balance`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`jrc-glass-bref-2013`

###### 废聚酯收尘滤袋 (`filter_waste`)

保留整份真实独立去向的物料及含水、附着污染、组成、物态、处理去向和法律/经济状态。名称为单一实物流而非成分子项，不在同一废物上再加污染指标质量。真实回收/处置须独立模型，不自动抵扣。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_balance`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：废聚酯收尘滤袋
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_balance`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`jrc-glass-bref-2013`

###### 退役铝硅质耐火砖 (`refractory_waste`)

保留整份真实独立去向的物料及含水、附着污染、组成、物态、处理去向和法律/经济状态。名称为单一实物流而非成分子项，不在同一废物上再加污染指标质量。真实回收/处置须独立模型，不自动抵扣。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_balance`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：退役铝硅质耐火砖
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_balance`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`jrc-glass-bref-2013`

###### 退役钢制眼镜坯压模 (`mould_waste`)

保留整份真实独立去向的物料及含水、附着污染、组成、物态、处理去向和法律/经济状态。名称为单一实物流而非成分子项，不在同一废物上再加污染指标质量。真实回收/处置须独立模型，不自动抵扣。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_balance`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：退役钢制眼镜坯压模
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_balance`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`jrc-glass-bref-2013`

###### 退役钢制料滴剪刀片 (`shear_waste`)

保留整份真实独立去向的物料及含水、附着污染、组成、物态、处理去向和法律/经济状态。名称为单一实物流而非成分子项，不在同一废物上再加污染指标质量。真实回收/处置须独立模型，不自动抵扣。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_balance`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：退役钢制料滴剪刀片
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_balance`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`jrc-glass-bref-2013`

###### 送精炼的退役铂接触部件 (`platinum_return`)

保留整份真实独立去向的物料及含水、附着污染、组成、物态、处理去向和法律/经济状态。名称为单一实物流而非成分子项，不在同一废物上再加污染指标质量。真实回收/处置须独立模型，不自动抵扣。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_balance`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：送精炼的退役铂接触部件
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_balance`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_balance`
- 来源：`jrc-glass-bref-2013`

###### 废矿物液压油 (`waste_hydraulic_oil`)

整份独立收集的真实废油，保留含水/添加剂污染、移出液体质量和原在装油存量历史。 产生点的已用石油基/合成润滑油Waste流，处理未指定。记录含水及添加剂污染的整份真实废物，不设再生抵扣、通用组成或自动售出产品。 原生参考属性→单位组→参考单位：`93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. 数量链接：本行x_i仅为未除原始`cp_aux`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_aux`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_aux`
- 来源：`jrc-glass-bref-2013`

###### 废矿物机器润滑油 (`waste_machine_oil`)

整份独立收集的真实废油，保留含水/添加剂污染、移出液体质量和原在装油存量历史。 产生点的已用石油基/合成润滑油Waste流，处理未指定。记录含水及添加剂污染的整份真实废物，不设再生抵扣、通用组成或自动售出产品。 原生参考属性→单位组→参考单位：`93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. 数量链接：本行x_i仅为未除原始`cp_aux`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_aux`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_aux`
- 来源：`jrc-glass-bref-2013`

##### 基本流

###### 排向空气的矿物或化石二氧化碳 (`co2_process`)

仅对真实鉴定物种与相态进入真实环境介质的量计量，含失败、启停、待机和清洗。元素总量、NOx/SOx、VOC、COD或总颗粒物仅诊断子账，不证明本分子量；真实未测物种保留未解决，不设为零。 CO2，CAS124-38-9，排向未指定空气的基本流，仅化石/矿物碳来源。原生杂乱同位素/离子同义词不授权放射性或同位素CO2。用独立碳证据区分空气穿透、生物源和实际反应的矿物碳酸盐，不复制熔窑因子。 原生参考属性→单位组→参考单位：`93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. 数量链接：本行x_i仅为未除原始`cp_emissions`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_emissions`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_emissions`
- 来源：`jrc-glass-bref-2013`

###### 排向空气的一氧化氮 (`no_air`)

仅对真实鉴定物种与相态进入真实环境介质的量计量，含失败、启停、待机和清洗。元素总量、NOx/SOx、VOC、COD或总颗粒物仅诊断子账，不证明本分子量；真实未测物种保留未解决，不设为零。 NO，CAS10102-43-9，仅排向未指定空气的基本流。原生同义词含HNO噪声，本次采用分子NO，须真实物种测量，NOx按NO2计不是其质量。 原生参考属性→单位组→参考单位：`93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. 数量链接：本行x_i仅为未除原始`cp_emissions`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_emissions`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_emissions`
- 来源：`jrc-glass-bref-2013`

###### 排向空气的二氧化氮 (`no2_air`)

仅对真实鉴定物种与相态进入真实环境介质的量计量，含失败、启停、待机和清洗。元素总量、NOx/SOx、VOC、COD或总颗粒物仅诊断子账，不证明本分子量；真实未测物种保留未解决，不设为零。 NO2，CAS10102-44-0，排向未指定空气的基本流；同义词提及N2O4不能确定其质量。须物种和相态证据及必要的平衡处理，不得把总NOx假分为单一物种。 原生参考属性→单位组→参考单位：`93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. 数量链接：本行x_i仅为未除原始`cp_emissions`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_emissions`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_emissions`
- 来源：`jrc-glass-bref-2013`

###### 排向空气的二氧化硫 (`so2_air`)

仅对真实鉴定物种与相态进入真实环境介质的量计量，含失败、启停、待机和清洗。元素总量、NOx/SOx、VOC、COD或总颗粒物仅诊断子账，不证明本分子量；真实未测物种保留未解决，不设为零。 SO2，CAS7446-09-5，基本流，仅排向未指定空气，不是总SOx或硫酸盐粉尘。核对原生CAS、真实分子物种及地点，不设硫酸盐转化比例。 原生参考属性→单位组→参考单位：`93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. 数量链接：本行x_i仅为未除原始`cp_emissions`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_emissions`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_emissions`
- 来源：`jrc-glass-bref-2013`

###### 排向空气的水蒸气 (`water_air`)

仅对真实鉴定物种与相态进入真实环境介质的量计量，含失败、启停、待机和清洗。元素总量、NOx/SOx、VOC、COD或总颗粒物仅诊断子账，不证明本分子量；真实未测物种保留未解决，不设为零。 H2O，CAS7732-18-5，排向未指定空气的水蒸气基本流；排除同义词中的重水、氚水。区分蒸发、入口湿度、真实化学反应水与保留结构水；液滴须独立相态。 原生参考属性→单位组→参考单位：`93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. 数量链接：本行x_i仅为未除原始`cp_emissions`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_emissions`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_emissions`
- 来源：`jrc-glass-bref-2013`

###### 排向空气的二氮 (`n2_air`)

仅对真实鉴定物种与相态进入真实环境介质的量计量，含失败、启停、待机和清洗。元素总量、NOx/SOx、VOC、COD或总颗粒物仅诊断子账，不证明本分子量；真实未测物种保留未解决，不设为零。 N2，CAS7727-37-9，排向未指定空气的基本流。逐物种核对毛穿透量和真实生成量，不等于NOx、总氮或假设硝酸盐反应量。 原生参考属性→单位组→参考单位：`93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. 数量链接：本行x_i仅为未除原始`cp_emissions`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_emissions`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_emissions`
- 来源：`jrc-glass-bref-2013`

###### 排向空气的氧气 (`o2_air`)

仅对真实鉴定物种与相态进入真实环境介质的量计量，含失败、启停、待机和清洗。元素总量、NOx/SOx、VOC、COD或总颗粒物仅诊断子账，不证明本分子量；真实未测物种保留未解决，不设为零。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_emissions`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：排向空气的氧气
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_emissions`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_emissions`
- 来源：`jrc-glass-bref-2013`

###### 排向空气的氩气 (`ar_air`)

仅对真实鉴定物种与相态进入真实环境介质的量计量，含失败、启停、待机和清洗。元素总量、NOx/SOx、VOC、COD或总颗粒物仅诊断子账，不证明本分子量；真实未测物种保留未解决，不设为零。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_emissions`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：排向空气的氩气
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_emissions`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_emissions`
- 来源：`jrc-glass-bref-2013`

###### 环境二氧化碳穿透返出 (`co2_pass`)

仅对真实鉴定物种与相态进入真实环境介质的量计量，含失败、启停、待机和清洗。元素总量、NOx/SOx、VOC、COD或总颗粒物仅诊断子账，不证明本分子量；真实未测物种保留未解决，不设为零。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_emissions`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：环境二氧化碳穿透返出
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_emissions`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_emissions`
- 来源：`jrc-glass-bref-2013`

###### 排向空气的结晶石英粉尘 (`silica_dust_air`)

仅对真实鉴定物种与相态进入真实环境介质的量计量，含失败、启停、待机和清洗。元素总量、NOx/SOx、VOC、COD或总颗粒物仅诊断子账，不证明本分子量；真实未测物种保留未解决，不设为零。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_emissions`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：排向空气的结晶石英粉尘
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_emissions`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_emissions`
- 来源：`jrc-glass-bref-2013`

###### 排向空气的正硼酸蒸气 (`boric_air`)

仅对真实鉴定物种与相态进入真实环境介质的量计量，含失败、启停、待机和清洗。元素总量、NOx/SOx、VOC、COD或总颗粒物仅诊断子账，不证明本分子量；真实未测物种保留未解决，不设为零。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_emissions`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：排向空气的正硼酸蒸气
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_emissions`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_emissions`
- 来源：`jrc-glass-bref-2013`

###### 排向空气的三氧化二硼气溶胶 (`b2o3_air`)

仅对真实鉴定物种与相态进入真实环境介质的量计量，含失败、启停、待机和清洗。元素总量、NOx/SOx、VOC、COD或总颗粒物仅诊断子账，不证明本分子量；真实未测物种保留未解决，不设为零。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_emissions`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：排向空气的三氧化二硼气溶胶
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_emissions`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_emissions`
- 来源：`jrc-glass-bref-2013`

### 过程：原批次服务 (`services`)

#### 输入

##### 产品流

###### 原批次退回的未加工玻璃坯 (`fg_received`)

放行后外部退回保留原放行编号、玻璃干量/水/污染实测及完整负荷向量；重验、退回和再发运不新增Q。另留真实增量返工、电力、清洗、损失和包装。 仅选此宽泛已制造Product类别中未经光学加工的眼镜用玻璃成员：压制并退火后的单一无镀层非变色单光硅酸盐玻璃坯。正式名称中的其他成员不进入本交换。原生为工厂生产混合；CAS、配方、品级、光学精加工、几何、地区与供方未指定。中文备注提及制造用途，不能将其或泛化成品路线理解为抛光镜片；必须记录真实未加工状态、图纸与QC。 原生参考属性→单位组→参考单位：`93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. 数量链接：本行x_i仅为未除原始`cp_service`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：钟或表玻璃及类似玻璃，未经光学加工的眼镜用玻璃，供制作此种玻璃用的球面玻璃及切割部分 `86f99422-b0c1-4f90-8150-aa288e54a03f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_service`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`corning-ophthalmic-spec-f-2013`; `jrc-ilcd-attributional-2010`


任何真实放行后操作均须符合cp_service及calc_fg的许可、后续测试与真实处置；保留实际新增/移除、水分/相态转移及维修暂存，不假定不合格坯可恢复。
###### 放行后服务电力 (`service_electricity`)

计量声明观察窗及原批次的真实仓储、包装、搬运、重验/返工；仅使用该批次同一次原Q归一化。未观察未来服务既不是零，也不能外推全寿命。 中国用户侧电网平均交流电Product，1–35kV，到用户消费混合，净热值/MJ。仅适用于此边界、电压与地区；其他地区、电压或合同供电须更换身份。不重复供方已含输配电；1kWh=3.6MJ，电能没有载体质量。 原生参考属性→单位组→参考单位：`93a60a56-a3c8-11da-a746-0800200c9a66` → `93a60a57-a3c8-11da-a746-0800200c9a66` → MJ. 数量链接：本行x_i仅为未除原始`cp_service_energy`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用本行一次计算的x_i；通过`cp_service_energy`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service_energy`
- 来源：`jrc-ilcd-attributional-2010`

###### 压制纸板玻璃坯隔离托盘外购供货 (`tray_purchase`)

保留一个真实整件制品及其真实水分/状态。按calc_packaging记录四类互斥期初期末状态、单独采购、随供货实物收货、外部退回收货、毛实物外运、单独对外返还及废物；真实维修部件/水的增减采用各自实测且不重叠的流项。留存新增量必须同时保留于真实流入和完整期末存量；负荷/消耗历史另账，随供货已含负荷不重复买入，内部复用不造Q或信用。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_packaging`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。


- 选定流：压制纸板玻璃坯隔离托盘外购供货
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_packaging`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`


###### 压制纸板玻璃坯隔离托盘随供货实物收货 (`tray_supplier_included`)

仅在包装随真实供货跨外部边界抵达时适用，与单独采购和客户退回收货分开；一次实物收货保留来源归属，已含上游负荷不重复采购。 保留一个真实整件制品及其真实水分/状态。按calc_packaging记录四类互斥期初期末状态、单独采购、随供货实物收货、外部退回收货、毛实物外运、单独对外返还及废物；真实维修部件/水的增减采用各自实测且不重叠的流项。留存新增量必须同时保留于真实流入和完整期末存量；负荷/消耗历史另账，随供货已含负荷不重复买入，内部复用不造Q或信用。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_packaging`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。


- 选定流：压制纸板玻璃坯隔离托盘随供货实物收货
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_packaging`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`

###### 压制纸板玻璃坯隔离托盘外部返回收货 (`tray_returned_in`)

保留一个真实整件制品及其真实水分/状态。按calc_packaging记录四类互斥期初期末状态、单独采购、随供货实物收货、外部退回收货、毛实物外运、单独对外返还及废物；真实维修部件/水的增减采用各自实测且不重叠的流项。留存新增量必须同时保留于真实流入和完整期末存量；负荷/消耗历史另账，随供货已含负荷不重复买入，内部复用不造Q或信用。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_packaging`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。


- 选定流：压制纸板玻璃坯隔离托盘外部返回收货
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_packaging`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`

###### 瓦楞纤维纸板外箱外购供货 (`carton_purchase`)

保留一个真实整件制品及其真实水分/状态。按calc_packaging记录四类互斥期初期末状态、单独采购、随供货实物收货、外部退回收货、毛实物外运、单独对外返还及废物；真实维修部件/水的增减采用各自实测且不重叠的流项。留存新增量必须同时保留于真实流入和完整期末存量；负荷/消耗历史另账，随供货已含负荷不重复买入，内部复用不造Q或信用。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_packaging`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。


- 选定流：瓦楞纤维纸板外箱外购供货
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_packaging`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`


###### 瓦楞纤维纸板外箱随供货实物收货 (`carton_supplier_included`)

仅在包装随真实供货跨外部边界抵达时适用，与单独采购和客户退回收货分开；一次实物收货保留来源归属，已含上游负荷不重复采购。 保留一个真实整件制品及其真实水分/状态。按calc_packaging记录四类互斥期初期末状态、单独采购、随供货实物收货、外部退回收货、毛实物外运、单独对外返还及废物；真实维修部件/水的增减采用各自实测且不重叠的流项。留存新增量必须同时保留于真实流入和完整期末存量；负荷/消耗历史另账，随供货已含负荷不重复买入，内部复用不造Q或信用。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_packaging`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。


- 选定流：瓦楞纤维纸板外箱随供货实物收货
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_packaging`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`

###### 瓦楞纤维纸板外箱外部返回收货 (`carton_returned_in`)

保留一个真实整件制品及其真实水分/状态。按calc_packaging记录四类互斥期初期末状态、单独采购、随供货实物收货、外部退回收货、毛实物外运、单独对外返还及废物；真实维修部件/水的增减采用各自实测且不重叠的流项。留存新增量必须同时保留于真实流入和完整期末存量；负荷/消耗历史另账，随供货已含负荷不重复买入，内部复用不造Q或信用。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_packaging`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。


- 选定流：瓦楞纤维纸板外箱外部返回收货
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_packaging`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 毛实物发运的未加工玻璃坯 (`fg_dispatch`)

已识别历史批次的真实毛实物发运，区别于制造首次放行和净销售。制造/服务合并门抵消内部Q移交；展示openingFG+Q+外部返回=closingFG+毛发运+服务废物+有独立证据的其他逐项出口，含独立水分变化。 仅选此宽泛已制造Product类别中未经光学加工的眼镜用玻璃成员：压制并退火后的单一无镀层非变色单光硅酸盐玻璃坯。正式名称中的其他成员不进入本交换。原生为工厂生产混合；CAS、配方、品级、光学精加工、几何、地区与供方未指定。中文备注提及制造用途，不能将其或泛化成品路线理解为抛光镜片；必须记录真实未加工状态、图纸与QC。 原生参考属性→单位组→参考单位：`93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. 数量链接：本行x_i仅为未除原始`cp_service`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：钟或表玻璃及类似玻璃，未经光学加工的眼镜用玻璃，供制作此种玻璃用的球面玻璃及切割部分 `86f99422-b0c1-4f90-8150-aa288e54a03f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_service`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`corning-ophthalmic-spec-f-2013`; `jrc-ilcd-attributional-2010`

###### 压制纸板玻璃坯隔离托盘随毛实物发运外出 (`tray_gross_out`)

保留一个真实整件制品及其真实水分/状态。按calc_packaging记录四类互斥期初期末状态、单独采购、随供货实物收货、外部退回收货、毛实物外运、单独对外返还及废物；真实维修部件/水的增减采用各自实测且不重叠的流项。留存新增量必须同时保留于真实流入和完整期末存量；负荷/消耗历史另账，随供货已含负荷不重复买入，内部复用不造Q或信用。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_packaging`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。


- 选定流：压制纸板玻璃坯隔离托盘随毛实物发运外出
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_packaging`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`

###### 压制纸板玻璃坯隔离托盘向外部返还 (`tray_return_out`)

保留一个真实整件制品及其真实水分/状态。按calc_packaging记录四类互斥期初期末状态、单独采购、随供货实物收货、外部退回收货、毛实物外运、单独对外返还及废物；真实维修部件/水的增减采用各自实测且不重叠的流项。留存新增量必须同时保留于真实流入和完整期末存量；负荷/消耗历史另账，随供货已含负荷不重复买入，内部复用不造Q或信用。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_packaging`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。


- 选定流：压制纸板玻璃坯隔离托盘向外部返还
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_packaging`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`

###### 瓦楞纤维纸板外箱随毛实物发运外出 (`carton_gross_out`)

保留一个真实整件制品及其真实水分/状态。按calc_packaging记录四类互斥期初期末状态、单独采购、随供货实物收货、外部退回收货、毛实物外运、单独对外返还及废物；真实维修部件/水的增减采用各自实测且不重叠的流项。留存新增量必须同时保留于真实流入和完整期末存量；负荷/消耗历史另账，随供货已含负荷不重复买入，内部复用不造Q或信用。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_packaging`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。


- 选定流：瓦楞纤维纸板外箱随毛实物发运外出
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_packaging`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`

###### 瓦楞纤维纸板外箱向外部返还 (`carton_return_out`)

保留一个真实整件制品及其真实水分/状态。按calc_packaging记录四类互斥期初期末状态、单独采购、随供货实物收货、外部退回收货、毛实物外运、单独对外返还及废物；真实维修部件/水的增减采用各自实测且不重叠的流项。留存新增量必须同时保留于真实流入和完整期末存量；负荷/消耗历史另账，随供货已含负荷不重复买入，内部复用不造Q或信用。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_packaging`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。


- 选定流：瓦楞纤维纸板外箱向外部返还
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_packaging`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`

##### 废物流

###### 放行后破损的眼镜玻璃 (`service_glass_waste`)

记录到声明服务门为止，仓储、重包装、搬运、检查或运输中真实破碎的原批玻璃。制造负荷仍属原Q，仅新增实测后续服务，不通过记账创造替代Q。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_service`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。

- 选定流：放行后破损的眼镜玻璃
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_service`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_service`
- 来源：`corning-ophthalmic-spec-f-2013`; `jrc-ilcd-attributional-2010`

###### 压制纸板玻璃坯隔离托盘厂内废弃 (`tray_waste`)

保留一个真实整件制品及其真实水分/状态。按calc_packaging记录四类互斥期初期末状态、单独采购、随供货实物收货、外部退回收货、毛实物外运、单独对外返还及废物；真实维修部件/水的增减采用各自实测且不重叠的流项。留存新增量必须同时保留于真实流入和完整期末存量；负荷/消耗历史另账，随供货已含负荷不重复买入，内部复用不造Q或信用。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_packaging`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。


- 选定流：压制纸板玻璃坯隔离托盘厂内废弃
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_packaging`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`

###### 瓦楞纤维纸板外箱厂内废弃 (`carton_waste`)

保留一个真实整件制品及其真实水分/状态。按calc_packaging记录四类互斥期初期末状态、单独采购、随供货实物收货、外部退回收货、毛实物外运、单独对外返还及废物；真实维修部件/水的增减采用各自实测且不重叠的流项。留存新增量必须同时保留于真实流入和完整期末存量；负荷/消耗历史另账，随供货已含负荷不重复买入，内部复用不造Q或信用。 具体原子流UUID未绑定；实际身份/状态须在数据包使用前匹配，不得以集合流替代。 数量链接：本行x_i仅为未除原始`cp_packaging`经calc_raw_conversion、calc_history和实际分配后calc_reference的唯一结果，卡片与汇总不得再次相除。


- 选定流：瓦楞纤维纸板外箱厂内废弃
- 流属性/单位：质量 / kg
- 数量规则：采用本行一次计算的x_i；通过`cp_packaging`采集未除原始量。
- 数值来源模式：采集后计算 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集后计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging`
- 来源：`corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`

##### 基本流

## 7. 分配与共产品处理

本归因规则仅适用于无镀层非变色单光未经光学加工硅酸盐眼镜玻璃压制坯，从整份供货配料经电熔/澄清/均化、剪料、液压压制/冷却、电退火至唯一首次质量放行及真实原批服务。排除表盖、球体、熔接嵌片、变色活化、光学修面/抛光/镀层和其他加热/成形路线。各规则须连同本范围及祖先条件消费。

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | all processes | 仅用于经目标/范围选择后确需分配的归因清单情景。先专属计量和实物/虚拟细分，将独有原料、废品/返工和服务归真实产品/批次；工业制造文献不是分配依据。 | `jrc-ilcd-attributional-2010` |
| allocation_causal | shared process exchanges | 逐真实共享交换判定控制该交换数量的物理关系。仅在有因果关系时对加热采用实测热容/焓和热历史；加工时间、负载或其他广延驱动须逐交换论证。质量份额不能自动用于全部电力、冷却、资产或污染物。保留方法、测量、不确定度和加总守恒。 | `jrc-ilcd-attributional-2010` |
| allocation_residual | remaining shared exchanges | 仅对确实剩余且无决定性物理关系的共同过程负荷，才可按同一过程出口/入口门、实际状态的同期共功能市场价值与真实数量经济分配。说明剩余原因、期间、质量、包装状态、币种和波动；不得任意选物理/经济份额、固定比例、避免生产抵扣或自动碎料/回收收益。 | `jrc-ilcd-attributional-2010` |
| allocation_service | services | 放行后搬运/包装/仓储和真实退回保留原批Q及逐项原继承负荷向量；仅把真实增量服务/返工/损失负荷归其观察窗。不能从首次放行Q扣closingFG制造负荷、把closingFG加作新产出或由重验/发运制造Q。独立净交付研究须毛G/R、原交付逆转D_rev、期初期末FG历史及实测新增水/损失/返工，不能暗套本首次放行分母。 | `jrc-ilcd-attributional-2010` |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_batch | manufacture | silica; soda; potash; limestone; boric; alumina; antimony; ceria; nitrate; sulfate; cullet_in | 原始实测/历史记录 | 批次编号; 供货制品; 供方; 形态; 水分; 含量; 杂质; 收货/领用质量; 期初期末原料; 配方; 损失 | 校准称量整份供货并保留原始收货/配方记录，保留各实测组成，不重复采购成分子项。 采集与汇总仅累计每真实交换/批次未相除的原始广延量。先换算、核对历史并真实分配，仅calc_reference产生同一每1kg参考流的x_i；本汇总字段只引用结果，不能再除Q。 | kg | 每事件及期末核对 | 完整生产期间所有工况及另列原批服务观察窗 | 每真实线/熔窑/回路/库存和服务门 | per 1 kg reference flow | 校准; 原始记录; 独立组成/相态证据; 历史向量; 不确定度 |
| cp_energy | manufacture | electricity | 原始实测/历史记录 | 表号; 起止读数; 电压; 供电地区; 工序/工况; 区间; 变压器损耗边界; 分配驱动 | 按真实工况读主表/分表且不重复总量，含零产出期间；区分真实速率与累计读数。 采集与汇总仅累计每真实交换/批次未相除的原始广延量。先换算、核对历史并真实分配，仅calc_reference产生同一每1kg参考流的x_i；本汇总字段只引用结果，不能再除Q。 | kWh | 每事件及期末核对 | 完整生产期间所有工况及另列原批服务观察窗 | 每真实线/熔窑/回路/库存和服务门 | per 1 kg reference flow | 校准; 原始记录; 独立组成/相态证据; 历史向量; 不确定度 |
| cp_water | manufacture | mains_water; diwater; exchange_return; exchange_water_in | 原始实测/历史记录 | 回路; 来源; 累计体积或质量; 密度样品/状态; 温度; 压力; 焓; 湿度; 期初期末; 回水; 排污; 供方约定 | 实测每真实水回路与毛外部供给/返还/排污，独立采密度和相态；区分真实反应/游离/结构水并声明供方水能重叠。 采集与汇总仅累计每真实交换/批次未相除的原始广延量。先换算、核对历史并真实分配，仅calc_reference产生同一每1kg参考流的x_i；本汇总字段只引用结果，不能再除Q。 | kg | 每事件及期末核对 | 完整生产期间所有工况及另列原批服务观察窗 | 每真实线/熔窑/回路/库存和服务门 | per 1 kg reference flow | 校准; 原始记录; 独立组成/相态证据; 历史向量; 不确定度 |
| cp_aux | manufacture | release_agent; hydraulic_oil; machine_oil; waste_hydraulic_oil; waste_machine_oil | 原始实测/历史记录 | 供货制剂; 批次; 整份量; 实际活性/载体含量; 新液/在装/移出液; 含水; 泄漏; 清洗; 去向 | 称量整份外购制剂和每真实移出物流，含量子项仅子账；厂内配制须逐外购组分、能耗和损失。 采集与汇总仅累计每真实交换/批次未相除的原始广延量。先换算、核对历史并真实分配，仅calc_reference产生同一每1kg参考流的x_i；本汇总字段只引用结果，不能再除Q。 | kg | 每事件及期末核对 | 完整生产期间所有工况及另列原批服务观察窗 | 每真实线/熔窑/回路/库存和服务门 | per 1 kg reference flow | 校准; 原始记录; 独立组成/相态证据; 历史向量; 不确定度 |
| cp_assets | manufacture | platinum_contact; refractory; mould; shear; filter; melter_asset; press_asset; lehr_asset | 原始实测/历史记录 | 资产/部件号; 结构/合金; 收货质量; 修复质量; 期初期末在装/未装; 退役/退回质量; 磨损; 服务时间/负载; 继承向量 | 建立完整资产/部件/液体实物账，实测配置特定质量和真实新增/修复/退役；按真实历史和因果使用独立确定当期服务负荷，不设固定寿命或每kg整机。 采集与汇总仅累计每真实交换/批次未相除的原始广延量。先换算、核对历史并真实分配，仅calc_reference产生同一每1kg参考流的x_i；本汇总字段只引用结果，不能再除Q。 | kg | 每事件及期末核对 | 完整生产期间所有工况及另列原批服务观察窗 | 每真实线/熔窑/回路/库存和服务门 | per 1 kg reference flow | 校准; 原始记录; 独立组成/相态证据; 历史向量; 不确定度 |
| cp_air | manufacture | air_n2; air_o2; air_ar; air_h2o; air_co2 | 原始实测/历史记录 | 回路; 累计体积或真实速率; 区间; 压力; 温度; 湿度; 实测物种份额; 物种密度; 气源 | 按回路测真实毛进气并独立分辨N2/O2/Ar/CO2/H2O及各真实微量物种，区分环境和外购气源，不重复总交换与成分。 采集与汇总仅累计每真实交换/批次未相除的原始广延量。先换算、核对历史并真实分配，仅calc_reference产生同一每1kg参考流的x_i；本汇总字段只引用结果，不能再除Q。 | kg | 每事件及期末核对 | 完整生产期间所有工况及另列原批服务观察窗 | 每真实线/熔窑/回路/库存和服务门 | per 1 kg reference flow | 校准; 原始记录; 独立组成/相态证据; 历史向量; 不确定度 |
| cp_emissions | manufacture | co2_process; no_air; no2_air; so2_air; water_air; n2_air; o2_air; ar_air; co2_pass; silica_dust_air; boric_air; b2o3_air | 原始实测/历史记录 | 出口; 介质; 相态; 采样区间; 浓度; 累计干湿气体积或速率; 水; 物种证据; 元素结果; 不确定度 | 真实采样出口含启停、待机、清洗和逸散，取得独立分子/相态证据。物种浓度乘一致累计气体积，或真实质量速率仅积分一次；COD/VOC/NOx/元素总量和粉尘粒径区间另作诊断账。 采集与汇总仅累计每真实交换/批次未相除的原始广延量。先换算、核对历史并真实分配，仅calc_reference产生同一每1kg参考流的x_i；本汇总字段只引用结果，不能再除Q。 | kg | 每事件及期末核对 | 完整生产期间所有工况及另列原批服务观察窗 | 每真实线/熔窑/回路/库存和服务门 | per 1 kg reference flow | 校准; 原始记录; 独立组成/相态证据; 历史向量; 不确定度 |
| cp_balance | manufacture | cullet_out; glass_waste; batch_dust; washwater; cool_purge; filter_waste; refractory_waste; mould_waste; shear_waste; platinum_return | 原始实测/历史记录 | 物流; 毛方向; 整份质量; 水分; 相关元素; 分子/相态证据; 原料/WIP/碎料存量; 继承向量; 废品; 清洗; 去向 | 按一致门称量每整份物理进出口和存量，WIP/碎料携带前批负荷向量并抵消精确内部移交；区分废物处理、分子排放与已取得供方负荷。 采集与汇总仅累计每真实交换/批次未相除的原始广延量。先换算、核对历史并真实分配，仅calc_reference产生同一每1kg参考流的x_i；本汇总字段只引用结果，不能再除Q。 | kg | 每事件及期末核对 | 完整生产期间所有工况及另列原批服务观察窗 | 每真实线/熔窑/回路/库存和服务门 | per 1 kg reference flow | 校准; 原始记录; 独立组成/相态证据; 历史向量; 不确定度 |
| cp_release | manufacture | finished_blank | 原始实测/历史记录 | 放行号; 批次; 图纸; 玻璃种类; 表面状态; 裸品净干质量; 合格/不合格; 应力/材质/尺寸试验; 时间戳; 件数; 实测M配置 | 校准称量裸坯净干质量并追溯首次验收，每合格件只入Q一次。若用件数则测实际配置/批次M或直接称整批合格品，不用名义密度或通用单件重。 采集与汇总仅累计每真实交换/批次未相除的原始广延量。先换算、核对历史并真实分配，仅calc_reference产生同一每1kg参考流的x_i；本汇总字段只引用结果，不能再除Q。 | kg | 每事件及期末核对 | 完整生产期间所有工况及另列原批服务观察窗 | 每真实线/熔窑/回路/库存和服务门 | per 1 kg reference flow | 校准; 原始记录; 独立组成/相态证据; 历史向量; 不确定度 |
| cp_service | services | fg_received; fg_dispatch; service_glass_waste | 原始实测/历史记录 | 原放行号; 原Q; 期初期末FG; 内部Q移交; 毛发运G; 退回批R; 原发运号; 实测退回干质量/水/污染; 服务废物; 真实返工; 观察窗; 继承向量; 另做净交付研究时的D_rev; permission_record; postwork_test_scope; acceptance_disposition; new_removed_parts_water_species; repair_WIP_or_FG_substate; actual_first_release_state_mass | 保留完整原批账，在声明观察窗追真实毛发运/退回及新增服务/损失/返工。重验/再发运不新增Q。净交付替代基准另需原逆转桥和真实退回状态测量。 采集与汇总仅累计每真实交换/批次未相除的原始广延量。先换算、核对历史并真实分配，仅calc_reference产生同一每1kg参考流的x_i；本汇总字段只引用结果，不能再除Q。 逐原批次核对：期初FG实物+实际首次放行内部实物收货+真实外部退回物料+逐项真实新增材料/水/物种=期末FG实物+毛实物发运+真实单独对外返还+服务废物+逐项真实移除材料/水/物种/损失。首次放行实物收货按真实状态独立计量并关联干裸玻璃Q；水/污染/保留内容不变成干Q。维修暂存明确归FG保管子状态，或互斥维修WIP期初期末一次；原放行与原发运逆转独立于当前退回湿重/状态。仅记录真实制造商/规范许可且保持本未加工坯边界的相容操作，有明确后续测试和真实验收/处置；破损/不合格坯未经独立证明可接收即为拒收/废物。实际新增/移除部件及水相在数据完成前逐原子行记录，不假定修复或进退等质量。合并门抵消内部移交，原制造保留一次且所有已观察服务增量保留，不新增Q。 | kg | 每事件及期末核对 | 完整生产期间所有工况及另列原批服务观察窗 | 每真实线/熔窑/回路/库存和服务门 | per 1 kg reference flow | 校准; 原始记录; 独立组成/相态证据; 历史向量; 不确定度 |
| cp_service_energy | services | service_electricity | 原始实测/历史记录 | 原放行号; 原Q; 真实服务观察窗; 作业; 表号; 读数; 分配驱动 | 仅计真实原批服务增量，保留非生产和返工负荷并沿用原放行分母；未观测未来服务明示范围，不为零。 采集与汇总仅累计每真实交换/批次未相除的原始广延量。先换算、核对历史并真实分配，仅calc_reference产生同一每1kg参考流的x_i；本汇总字段只引用结果，不能再除Q。 | kWh | 每事件及期末核对 | 完整生产期间所有工况及另列原批服务观察窗 | 每真实线/熔窑/回路/库存和服务门 | per 1 kg reference flow | 校准; 原始记录; 独立组成/相态证据; 历史向量; 不确定度 |
| cp_transport | manufacture | freight | 原始实测/历史记录 | 发运号; 真实整份货物吨; 距离km; 方式; 载荷; 空返; 供方已含范围 | 逐真实运次用原始票据和距离，保留每独立路线与供方边界，不重复采购已含交付与同一运输服务。 采集与汇总仅累计每真实交换/批次未相除的原始广延量。先换算、核对历史并真实分配，仅calc_reference产生同一每1kg参考流的x_i；本汇总字段只引用结果，不能再除Q。 | tkm | 每事件及期末核对 | 完整生产期间所有工况及另列原批服务观察窗 | 每真实线/熔窑/回路/库存和服务门 | per 1 kg reference flow | 校准; 原始记录; 独立组成/相态证据; 历史向量; 不确定度 |
| cp_packaging | services | tray_purchase; tray_supplier_included; tray_returned_in; tray_gross_out; tray_return_out; tray_waste; carton_purchase; carton_supplier_included; carton_returned_in; carton_gross_out; carton_return_out; carton_waste | 原始实测/历史记录 | 材料/制品号; 水分; opening_empty; opening_attached_WIP; opening_attached_FG; opening_reusable; purchased; external_returns_received; closing_empty; closing_attached_WIP; closing_attached_FG; closing_reusable; gross_outbound; external_return_out; waste; internal_reuse; 原批次; supplier_included_receipts; supplier_burden_included; actual_repair_new_component; actual_removed_component; water_phase_in_out; independent_mass_state; flow_term_nonoverlap; complete_stock_moisture | 分别称量每真实整份托盘和外箱，归属前核对全部空/附着/复用存量和外部方向；真实周转箱、薄膜、栈板、标签、绑带均另立完整原子账。内部复用抵消，实物不得被分配消失。 采集与汇总仅累计每真实交换/批次未相除的原始广延量。先换算、核对历史并真实分配，仅calc_reference产生同一每1kg参考流的x_i；本汇总字段只引用结果，不能再除Q。 保留一个真实整件制品及其真实水分/状态。按calc_packaging记录四类互斥期初期末状态、单独采购、随供货实物收货、外部退回收货、毛实物外运、单独对外返还及废物；真实维修部件/水的增减采用各自实测且不重叠的流项。留存新增量必须同时保留于真实流入和完整期末存量；负荷/消耗历史另账，随供货已含负荷不重复买入，内部复用不造Q或信用。 真实维修部件和水相在建模前逐一原子交换列明；声明毛收货、领用或净消耗基准，不重复存量校正。 | kg | 每事件及期末核对 | 完整生产期间所有工况及另列原批服务观察窗 | 每真实线/熔窑/回路/库存和服务门 | per 1 kg reference flow | 校准; 原始记录; 独立组成/相态证据; 历史向量; 不确定度 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw_conversion | all inventory rows | 归属前把原始广延量换到本行分子单位：整份材料校准称量kg；电力MJ=3.6*电表kWh；tkm用实际吨和km。真实速率只积分一次，已积分气/液体积不再乘时间，用该物质状态独立实测密度/组成。计件须实测配置特定净质量M或整批称重kg，不从原生次级系数推密度/单件重。 | raw_i; conversion_i; cp_batch; cp_energy; cp_water; cp_air | C_i | `jrc-glass-bref-2013` |
| calc_history | all inventory rows | A_i=B_open_i+C_i-B_close_i，保留各向量分量并仅真实归属一次。制造B_close排除全部首次放行批FG；只有期末原料/WIP/未归属存量继承未放行负荷。内部碎料/熔体/Q移交抵消，不重复供方负荷。服务A_i仅为原批次观察窗的真实增量，不再造原制造。 按boundary_history区分收货与已校正实际消耗，C_i必须声明原始基准，不重复原料存量校正。实物流动卡保留完整换算后毛方向量，不能扣库存或乘经济负荷份额缩量。已执行服务增量即使对应FG留库也保留于原Q及观察窗；只有真实未消耗/未归属充注或服务存量可结转。 | B_open_i; C_i; B_close_i; cp_balance; cp_service; cp_assets | A_i | `jrc-ilcd-attributional-2010` |
| calc_reference | all inventory rows | x_i=A_i/Q；A_i为本行分子单位的归属后未归一化交换量，Q为唯一首次放行裸坯净干kg。此为唯一归一化，清单卡和采集汇总仅引用x_i，不再相除。Q=0保留全部原始负荷/历史，不出单位结果。成品1kg是声明参考身份，不是二次相除。 | A_i; Q; cp_release | x_i | `jrc-ilcd-attributional-2010` |
| calc_physical | all physical streams | 制造/FG/合并各门分别按期初存量+外部毛投入=期末存量+外部毛输出核对整份材料、水和相关元素。资产/在装液另账，抵消内部移交，区分真实反应/相态/物种路径。不用分配份额缩毛实物，不以一个残差拟合两个未知。 | gross_i; stock_open_i; stock_close_i; cp_balance; cp_emissions; cp_water | physical_closure_i | `jrc-glass-bref-2013` |
| calc_packaging | services | 逐一真实托盘和外箱分别核对：opening_empty+opening_attached_WIP+opening_attached_FG+opening_reusable+purchases+supplier_included_receipts+external_returns_received+X_in=closing_empty+closing_attached_WIP+closing_attached_FG+closing_reusable+gross_outbound+external_return_out+waste+X_out。X_in/X_out仅为另行实测、尚未计入其他流入/流出项的真实维修部件或水/材料转移。留在期末存量的水或材料必须同时保留于完整期末实物量和其真实流入项；在库存中绝不能抵消该流入，真实移除同理。数据完成前每种实际新增/移除部件及水相都另立原子行，独立记录状态/质量，不虚设维修或交换。内部复用抵消；整件与成分子账不重复采购，随供货包装保留实物收货而不重复供方已承担的采购负荷。毛实物方向不缩量，负荷/历史归属另账，不自动信用或新增Q。 | cp_packaging; stock_open_i; stock_close_i; gross_i | packaging_closure_i | `jrc-ilcd-attributional-2010` |
| calc_fg | services | 逐原批次核对：期初FG实物+实际首次放行内部实物收货+真实外部退回物料+逐项真实新增材料/水/物种=期末FG实物+毛实物发运+真实单独对外返还+服务废物+逐项真实移除材料/水/物种/损失。首次放行实物收货按真实状态独立计量并关联干裸玻璃Q；水/污染/保留内容不变成干Q。维修暂存明确归FG保管子状态，或互斥维修WIP期初期末一次；原放行与原发运逆转独立于当前退回湿重/状态。仅记录真实制造商/规范许可且保持本未加工坯边界的相容操作，有明确后续测试和真实验收/处置；破损/不合格坯未经独立证明可接收即为拒收/废物。实际新增/移除部件及水相在数据完成前逐原子行记录，不假定修复或进退等质量。合并门抵消内部移交，原制造保留一次且所有已观察服务增量保留，不新增Q。 | cp_service; cp_release; Q; gross_i | fg_closure_i | `jrc-ilcd-attributional-2010` |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | all processes | 实际场址须用图纸和验收记录证明完整原料至未光学加工压制坯路线和首次放行终端，不能把定性综合写成当前工厂事实或光学性能保证。 | 图纸; 配方; 工序日志; 首次放行QC |
| dq_history | all inventory rows | 保留完整生产期/工况、校准原始记录及逐存量继承向量；不静默截断过去负荷、失败试验或零产出负荷。报告不确定度、检出限与未观察服务期。 | 校准; 工况日志; 历史账; 不确定度 |
| dq_native | all inventory rows | 在消费规则上下文披露精确原生限制、真实供方/品级/地区/介质匹配和每未绑定原子身份。普通辅助项或未来工厂数量缺口与核心产品/方法证据缺口分别标明。 | 原生记录; 供方含量; 状态与属性证据 |
| dq_physical | all processes | 采用独立观测的整份质量、元素、分子物种与水/相态数据，匹配制造、FG/服务及合并门和包装、资产/液体平衡；诊断残差是核对工具，不是虚构物种实测。 | 质量/元素平衡; 分子/相态分析; 包装与资产账 |

## 9. 校验规则

本节仅校验无镀层非变色单光未经光学加工硅酸盐眼镜玻璃压制坯，覆盖整份原料电熔/澄清/均化、剪料、液压压制/冷却、电退火、首次质量放行及已观察原批服务。排除表盖、球体、熔接嵌片、变色活化和光学成镜。不扩大为整个37194类别；工程检查不替代科学、翻译或映射决定。

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_terminal | reference product | 核对图纸、硅酸盐类别、非变色单光状态、未光学加工表面、压制/退火路线与真实质量门。成镜、玻璃球/表盖和泛化光学件不能替代终端。核心原始路线/终端证据或真实核心原生身份未解决时，工程检查不能使草稿可用。 | `corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing` |
| validate_quantities | all inventory rows | 核对双语一致的首次放行Q与单位、唯一calc_reference A_i/Q及完整原始换算/历史归属。保留失败、零产出、启停、待机、清洗、返工和存量向量。未支持/未知关系标未解决，不声称通过；Q0不报告单位清单。 | `jrc-ilcd-attributional-2010` |
| validate_identity | all inventory rows | 对采用UUID逐一检查所有原生basename、同义词/备注、CAS、路线/形态/品级、地区/介质/类型及所有属性，包括精确参考属性和单位组链；使用官方中文名。供方仍须真实匹配，支持记录或分类不能单独证明适用性。明确保留未绑定具体原子流，不换成集合标签。 | `jrc-glass-bref-2013` |
| validate_closure | all processes | 在一致的制造、FG和合并门要求独立整份质量/元素及真实分子/相态/水证据。逐包装/资产/液体存量和各毛去向核对，独立于经济份额。诊断总量不能创造未测物种；真实出口/状态或继承历史缺失时不能形成具体可用清单。 | `jrc-glass-bref-2013`; `jrc-ilcd-attributional-2010` |
| validate_evidence | all processes | 完整制造商页面须披露为出版者来源的网页工具渲染文本，不是本地取得的出版者HTML/PDF。结合完整2013康宁规格和玻璃BREF，连同配料、成形、标准退火、变色反例及包装段落整体阅读。它们支持有界定性综合，不证明同一当代全电工厂订单、配方或默认数值。本地下载失败本身不构成核心内容缺口。科学判断、对齐译稿审查、映射接受和发布仍是独立决定。 | `corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-glass-bref-2013` |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 后续单光矿物眼镜片制造的玻璃坯采购建模 |
| allowed_use | 完成实际场址/路线/状态/物种/历史闭合和独立方法判断的归因清单 |
| excluded_use | 未解决草稿作为可用方法; 光学成镜或全分类覆盖; 默认配方/性能/寿命; 自动回收抵扣 |
| required_metadata | 单光玻璃坯图纸与尺寸配置; 硅酸盐配方及每种整份供货原料; 非变色且未经光学加工的表面状态; 电熔/澄清/均化及电退火路线; 压机/剪刀/模具与实际润滑状态; 材质与残余应力验收方法; 唯一首次放行批次及裸玻璃净干质量kg Q; 若使用计件则给出实测单件质量换算配置; 期初期末原料 WIP FG及在装液体向量; 来源特定原生身份限制与供方边界; 真实水相态/物种证据与物理闭合; 包装结构与完整收存退废路线; 原批次服务及明确观察区间 |
| required_quality_disclosure | 来源与路线适用限制; 原生身份/供方限制; 未测项; 历史向量; 分配; 物种与水证据; 服务观察窗; 不确定度 |
| update_trigger | 产品/表面/配方、供货形态、熔化/压制/退火/QC门、供方与原生限制、库存返货服务或原始证据变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-glass-bref-2013 | official_guidance | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/GLS_Adopted_03_2012_0.pdf | 2013玻璃BREF：定性原料、熔化、辅助物料与排放完整性，特种光学玻璃背景及反例；不采用配方、收率、能耗、排放或资产寿命默认数值。 |
| corning-ophthalmic-spec-f-2013 | handbook | https://www.corning.com/media/worldwide/csm/documents/Ophthalmic_Products_Specifications_(85_NQ_01).pdf | 康宁85 NQ 01，2013年10月F版：真实标准眼镜玻璃压制坯、验收描述与嵌片、高折射率、变色和料滴的区别；实际图纸优先，不复制通用公差。 |
| corning-ophthalmic-manufacturing | handbook | https://www.corning.com/cala/en/products/advanced-optics/product-materials/specialty-glass-and-glass-ceramics/ophthalmic-glass/corning-manufacturing-techniques.html | 完整出版者来源网页工具渲染技术页面：配料、熔化/澄清/调理、剪料、压制、标准退火与变色激活的区别及包装，支持定性路线综合。本地出版者HTML下载失败且不声称已取得；此来源不能证明同一个当前工厂、配方或全电订单。 |
| jrc-ilcd-attributional-2010 | official_guidance | https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 2010详细指南7.9.2–7.9.3节：在确需分配的归因情景下采用细分、逐交换决定性物理因果关系和剩余共同过程门市场价值；不预设后果型抵扣或物理/经济比例。 |
