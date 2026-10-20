---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.potassium-nitrate
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 硝酸钠转化路线的结晶硝酸钾肥料

## 1. 范围与适用性

本方法覆盖以外购固体硝酸钠及下述身份的粒状肥料级氯化钾生产未包衣结晶硝酸钾肥料至工厂门。水相转化、热态氯化钠富集盐分离和洗涤、冷却或真空结晶、离心、晶体洗涤、间接干燥和散装交付或装袋合并为一个前景单元，并保留各阶段独立记录。路线由cn-kn-conversion-2009说明书步骤1–7支持，sqm-nitrates-route提供生产者印证。专利是历史配置而非行业调查，其温度、配方、收率或节约资源声明均不作为默认值。

排除硝酸铵复分解或离子交换、硝酸中和、天然硝酸钾矿提纯、硝酸盐溶液原料、配方NK或NPK混合物、硝酸钠钾混盐、液肥、包衣及未列添加剂。采矿、钙质硝石浸取、提碘与氯化钾制造计入兼容上游数据集，不移植到本转化过程。用途标签不同本身不产生新的PCR身份；路线、状态或组成变化须审查适用性并显式补充原子交换。本方法采用外供蒸汽及已识别水性废物厂外处理边界；实际厂内燃烧或处理、向受纳水体直接排放必须完整补充证据和清单，不能漏项。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.potassium-nitrate |
| classification_refs | CPC 3.0 34646; 所选路线为narrower建议，尚无接受映射 |
| covered_products | 符合实测规格的未包衣结晶硝酸钾肥料；不是另配方的混合肥 |
| excluded_products | 其他制硝酸钾路线、液体、混盐、包衣或未识别配方 |
| representative_product | 一项真实验收SKU及其组成、水分和粒径；无规定牌号 |
| production_route | 硝酸钠与氯化钾水相转化、分盐、结晶、干燥和交付 |
| market_state | 工厂门固体晶体；按供货净质量，包装单独计 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供结晶硝酸钾肥料 |
| How much | 1千克验收供货产品净质量 |
| How well | 实际SKU的KNO3含量、水分、Na/Cl/硫酸盐杂质、N和K分析、粒径及验收要求 |
| How long or cycle | 声明生产及库存核算期，至工厂门；不含田间使用 |
| reference_flow_link | kn_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 硝酸钾 `d92c35ee-88a1-47cf-93e9-2fd499ceee23` |
| 参考流属性 | 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`) |
| 参考单位组 | `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 场址、报告期和SKU；供货状态及干湿基；产品及两种原料的实测组成；氯化钾等级、来源与供方；母液和晶体循环及存量；分盐规格和去向；蒸汽压力、干度与供方参考量；电网与电压；水源；包装构成；全部废物接收方、排放介质和测量口径；Q；分配和截断 |

必需限定信息须在数据包元数据、过程说明或参考流描述中声明，缺失即参考定义不完整。通用成品UUID仅定位产品身份，不提供供应过程、纯度或配方。

## 4. 计量与单位规则

使用同一场址、产品、状态和路线的完整声明期间，纳入开停车、失败与零产出批次、停机、内部返工和在制品WIP。归一化前保留全部原始期间总量。保留批次标识，按返工和撤回后的最终去向确定实际正合格净产量Q，同一期间每份实物只计一次。透明承接期初WIP实物和既有负荷，结转期末WIP实物和负荷；两者均不得作为免费投入或凭空消失。用实际最终验收与发运、退货、库存和返工记录核对，不假定发运等于生产。Q>0时各归属期间总量仅除以同一Q一次，不平均批次强度，也不排除零产出批次。整个池Q=0时仅报告原始总量及存量、去向，不生成每千克结果。不兼容产品、状态或路线须先按有记录的实物归属分开，不得仅为取得正分母而混池。

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| measure_product | kn_product | 质量 | kg | 使用1千克验收供货产品净质量；Q为核算期验收成品净千克数，排除包装、不合格物及内部回用晶体。干KNO3量和N、K量属于附加分析，不另作分母。 |
| measure_solution | all inventory rows | 质量 | kg | 分别记录湿物流总质量及实测干物质、各组分比例，不重复加计载水。每项报告数量均按每1千克参考流。 |
| measure_energy | steam_import, electricity, condensate_return | 质量及净热值，低位热值 | kg and MJ | 蒸汽与冷凝水实物千克须与焓服务兆焦分开；按实测供汽、回水状态、放空损失和供方约定计算热量，MJ属性本身不证明净交付热量。电力：兆焦=千瓦时×3.6。 |
| measure_particles | pm_fine, pm_coarse, pm_large, pm_unsized | 质量 | kg | 同一排口和时段使用互斥干颗粒区间或未分粒径残量；收集尘和内部返回另记。声明排口气体体积标准状态、湿度、采样时段和治理。 |
| measure_pack | pe_liner, pp_sack, waste_pe, waste_pp | 质量 | kg | 各空包装组件分别称量，装料容量不是袋质量。先保留实际交付和报废数量，再按有证据的复用分配服务负荷。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 具有可追溯上游数据的外购固体NaNO3及规定粒状KCl，实际开车盐、水、电和外供蒸汽 |
| starting_condition_role | 前景制造入口，不是免除上游负荷的起点 |
| product_classification_scope | CPC 3.0 34646的所选固体肥料转化路线子集 |
| recursive_input_rule | 回用母液、盐洗液、湿晶体和回收尘为内部流，逐链接同量；外购硝酸钾不得替代本制备路线 |
| upstream_dataset_requirement | 匹配实际组成、状态、来源和计量基准的原料、公用工程、包装、运输及废物处理数据；身份命中不等于供方匹配 |
| disclosure | 披露工艺图、存量、循环、排口、厂外接收方、运输、资本品评估、截断和分配，分开实物账与负荷账 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | kn_conversion | 同一前景单元内按溶解转化→热分盐和洗涤→结晶、离心和洗涤→间接干燥→验收交付保留阶段日志。形式交换方程NaNO3 + KCl → KNO3 + NaCl描述分相中的守恒物种，不保证单程完全转化，也不规定投料配方。 | cn-kn-conversion-2009 |
| boundary_loops | kn_conversion | 记录内部母液、洗水、冷凝水和粉尘返回的两端、时段、质量与组成；物理转移量一致并核对期初、期末存量。内部转移不作为新增上游采购或成品产出。 | cn-kn-conversion-2009; jrc-lvic-aaf-2007 |
| boundary_complete | kn_conversion | 纳入实际上游公用工程生产、原料及接收方运输、包装和厂外废物处理。按证据审查资本品及实际辅料、维护物流的截断。纳入资本品时逐项识别设备实物流，并保留安装质量、服务期、产量和归属服务；不以年化服务质量冒充已安装实物存量。补齐其他实际原子交换后才可声称数据集完整。 | jrc-ilcd-2010 |
| boundary_environment | kn_conversion | 废物转移边界不免除后续处理负荷。按实际流登记定位各阶段废水与空气释放的介质及接收方，不由候选身份推定正排放，缺测不是零。厂内燃烧须计入燃料及完整物种和来源排放，不能用外购蒸汽代替。 | jrc-cww-2016 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| kn_conversion | 硝酸钾转化、分盐、结晶及交付 | required | 所选原料、路线及厂界 | 前景单元；阶段独立计量 | kn_product; 1千克参考流 |

每卡为一项交换。条件行采用实际测量数量或有记录的不适用结论；未知量保留缺失。落实真实接收方和供应过程，现场发现未列化学品、封口物、设备或排放时逐项补充。本文不提供配方或正数量默认值。

### 过程：硝酸钾转化与交付 (`kn_conversion`)

#### 输入

##### 产品流

###### 硝酸钾 (`returned_kn`)

仅实际外部退回同身份、同SKU未包衣KNO3并进行再加工时纳入，不作为替代外购原料或再次宣称新合成。保留退回湿质量、含量、原期间和批次及已承担的上游负荷。受污染或转化的退货须另核身份；内部返工属于循环，不是本外部投入。

- 选定流: 硝酸钾 `d92c35ee-88a1-47cf-93e9-2fd499ceee23`
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 保留本行完整同范围期间实物总量；仅在Q>0时除以Q一次。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_product
- 来源: jrc-ilcd-2010

###### 固体硝酸钠原料 (`feed_nano3`)

称量加入循环系统的新鲜固体硝酸钠；记录NaNO3含量、水分及硫酸盐和氯化物杂质。硝酸钠溶液需另核供货溶液身份并核算载水后方可适用。

- 选定流: 固体硝酸钠原料
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_materials，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_materials
- 来源: cn-kn-conversion-2009; sqm-nitrates-route

###### 肥料级氯化钾，粒状，氧化钾（K₂O）质量分数≥60.0% (`feed_kcl`)

该质量参考身份仅用于所述未包衣粒状肥料级原料，且须符合原生生产混合位置限定的中国工厂来源。核实实际KCl含量、水分和添加物；K2O当量标签不是规定配方含量或纯KCl质量。匹配上游来源、等级与交付基准；其他氯化钾等级需另核身份。

- 选定流: 肥料级氯化钾，粒状，氧化钾（K₂O）质量分数≥60.0% `c8585965-5595-48da-9260-2970ed1905cb`
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_materials，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_materials
- 来源: cn-kn-conversion-2009; sqm-nitrates-route

###### 氯化钠 (`startup_nacl`)

仅在初次母液配制或有记录的补充使用新鲜盐时纳入；该身份要求实际纯度≥99.5%。保留期初、期末母液存量，不逐批重复计入全部循环盐，也不假定持续补充。

- 选定流: 氯化钠 `a413ea86-0887-42c8-be77-3bee86d5863b`
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_materials，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_materials
- 来源: cn-kn-conversion-2009

###### 去离子水 (`water_process`)

计量外购去离子水的溶解、盐与晶体洗涤及清洗用量。记录水质和供方；内部洗水回用与回收冷凝水另记，不作新鲜水采购量。

- 选定流: 去离子水 `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_water，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_water
- 来源: cn-kn-conversion-2009; jrc-lvic-aaf-2007

###### 冷却塔补水用市政自来水 (`water_cooling`)

实际存在间接冷却回路时纳入外部补水。核实水源、处理和上游供应过程；分别记录循环、蒸发、飘滴和排污。循环水不重复计作外部投入。

- 选定流: 冷却塔补水用市政自来水
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_water，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_water
- 来源: jrc-lvic-aaf-2007; jrc-cww-2016

###### 交流电 (`electricity`)

所选身份限定CN用户侧小于1千伏的电网平均交流电；其他地域、电压、供电组合或交付接口须匹配已核实的身份与背景。混合、泵、真空设备、离心机、冷却、干燥辅助设备与包装分阶段计量后汇总。匹配电网、电压和供应过程；记录千瓦时并按3.6换算为兆焦。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 (`93a60a56-a3c8-11da-a746-0800200c9a66`); 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_energy，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_energy
- 来源: jrc-lvic-aaf-2007

###### 间接加热用外购工艺蒸汽 (`steam_import`)

记录蒸汽实物千克数、绝压或表压、温度、干度及交付计量点。核实供方背景参考量和冷凝水约定，用完整实测焓账推导可用热量。不规定压力、兆焦/千克或净供热默认值；本行保持千克，不另重复购热交换。

- 选定流: 间接加热用外购工艺蒸汽
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_energy，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_energy
- 来源: jrc-lvic-aaf-2007

###### 聚乙烯薄膜 (`pe_liner`)

仅实际袋装交付使用PE内衬时纳入；称量交付内衬薄膜及损耗，核实PE树脂、等级和化工产品适配性。原生CPC分类与薄膜名称、CAS和说明冲突，须披露并向供应过程澄清；不得用于PET或整只多层复合袋。

- 选定流: 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_pack，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_pack
- 来源: jrc-ilcd-2010

###### 肥料用聚丙烯编织袋 (`pp_sack`)

实际使用PP外袋时纳入，排除另称的PE内衬。采集袋数、空袋净质量抽样、缝合或封口结构、组成和复用次数；清单使用袋自身质量，不使用名义装料容量。不同封口材料须另列原子交换。

- 选定流: 肥料用聚丙烯编织袋
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_pack，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_pack
- 来源: jrc-ilcd-2010

#### 输出

##### 产品流

###### 聚乙烯薄膜 (`delivered_pe`)

仅实际随产品交付的PE内衬，按其完整实测实物质量计，不属于KNO3净千克，也无独立可销售共功能。保留包装实物去向，不向该辅助产出分配生产负荷，也不重复计上游薄膜供应。投入行的身份限制和分类瑕疵同样适用。

- 选定流: 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 保留本行完整同范围期间实物总量；仅在Q>0时除以Q一次。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_pack
- 来源: jrc-ilcd-2010

###### 肥料用聚丙烯编织袋 (`delivered_pp`)

实际随成品交付的PP外袋，排除PE内衬。保留其伴随净成品离开厂界的实测实物千克数；本行为包装去向，不是另一肥料产品或分配共产品，存量、复用和报废去向另记。

- 选定流: 肥料用聚丙烯编织袋
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 保留本行完整同范围期间实物总量；仅在Q>0时除以Q一次。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_pack
- 来源: jrc-ilcd-2010

###### 硝酸钾 (`kn_product`)

工厂门验收合格的干燥结晶肥料成品。参考数量为1千克供货产品净质量，包含实测残余水分与杂质，排除包装。湿晶体为内部中间物，保留阶段称重和分析，不另建第二个参考成品交换。

- 选定流: 硝酸钾 `d92c35ee-88a1-47cf-93e9-2fd499ceee23`
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `source_rule`
- 采集协议: cp_product
- 来源: cn-kn-conversion-2009; sqm-nitrates-route

###### 含残余硝酸盐的回收氯化钠富集盐 (`salt_coproduct`)

仅有接收方和规格证据的实际可销售合格部分作为共产品。称量湿盐总量、干物质、NaCl、KNO3、NaNO3和杂质；此混合回收盐尚无纯氯化钠身份依据。分配负荷时仍保留完整实物产出。

- 选定流: 含残余硝酸盐的回收氯化钠富集盐
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_salt，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_salt
- 来源: cn-kn-conversion-2009; jrc-ilcd-2010

###### 外送返回的蒸汽冷凝水 (`condensate_return`)

实际向蒸汽供方返回冷凝水时纳入，实测回水点千克数、温度及接收方。关联蒸汽账，仅按所用供应过程约定处理回水。工艺蒸气冷凝后内部回用属于不同内部物流，不是本行。

- 选定流: 外送返回的蒸汽冷凝水
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_energy，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_energy
- 来源: jrc-lvic-aaf-2007

##### 废物流

###### 硝酸钾富集不合格晶体 (`rejected_kn`)

实际外送处理的KNO3富集不合格固体成品，须与氯化钠废盐和收集尘分开。记录湿总质量、水分、各盐组分、拒收原因及接收方。同一边界内部重新溶解或返工的物料仍属循环，不作为外部废物产出。

- 选定流: 硝酸钾富集不合格晶体
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 保留本行完整同范围期间实物总量；仅在Q>0时除以Q一次。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_waste
- 来源: jrc-ilcd-2010; jrc-cww-2016

###### 含硝酸盐和氯化物的母液排放液 (`brine_purge`)

从已声明共用收集槽向经核实厂外接收方转移的母液排放液或洗涤废水，保留总水量与全部溶质。记录密度、体积或质量、硝酸根与以N计的区别、K、Na、Cl、硫酸盐及处理适配性。不同接收方或组成的物流分开；该废物转移不是淡水排放。

- 选定流: 含硝酸盐和氯化物的母液排放液
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_waste，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_waste
- 来源: cn-kn-conversion-2009; jrc-cww-2016

###### 冷却塔排污水 (`cooling_blowdown`)

仅实际发生冷却回路排污并厂外转移时纳入，与硝酸盐母液分开。记录湿质量、盐类、处理添加物及接收方；不复用造纸厂废水身份。实际直接外排需另列受纳介质水流、物种排放和处理清单。

- 选定流: 冷却塔排污水
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_waste，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_waste
- 来源: jrc-cww-2016

###### 氯化钠废物 (`salt_waste`)

实际送处理或处置的氯化钠为主不合格盐饼，排除已售部分；记录干湿质量、硝酸盐、K和接收方。广义废盐身份仅支持物理定位，不代表纯NaCl含量或指定处置过程。

- 选定流: 氯化钠废物 `f5950ab1-1f6e-4ff6-a769-242cae592daa`
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_salt，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_salt
- 来源: cn-kn-conversion-2009; jrc-cww-2016

###### 粉尘 (`collected_dust`)

仅计入被收集后实际外送处置的硝酸盐粉尘，记录产生阶段、干基组成和接收方。内部返回的收集粉尘记于循环账，不另计废物产出或空气排放。

- 选定流: 粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_waste，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_waste
- 来源: jrc-cww-2016

###### 受硝酸盐污染的聚乙烯内衬废料 (`waste_pe`)

发生过程包装损耗时纳入；PE单独称量并记录污染与接收方。机械回收厂已清洗PE身份不能代表此未经处理的受污染转移物流。

- 选定流: 受硝酸盐污染的聚乙烯内衬废料
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_pack，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_pack
- 来源: jrc-ilcd-2010

###### 受硝酸盐污染的聚丙烯编织袋废料 (`waste_pp`)

发生PP编织袋损耗时纳入；排除PE内衬质量及随产品交付的包装。记录污染和实际回收或处置接收方，不以袋装产品容量作为废物质量。

- 选定流: 受硝酸盐污染的聚丙烯编织袋废料
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_pack，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_pack
- 来源: jrc-ilcd-2010

##### 基本流

###### 颗粒物 (PM2.5) (`pm_fine`)

治理后由原料搬运、干燥、筛分和灌装逸出的实测干颗粒物，粒径≤2.5微米，排向空气未特指；包括无组织排放。不从总尘臆造比例；盐组成用于元素账，不重复计为气态硝酸盐质量。

- 选定流: 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_air，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_air
- 来源: jrc-cww-2016

###### 颗粒物 (PM2.5 - PM10) (`pm_coarse`)

排向空气未特指的干颗粒物，粒径大于2.5且不超过10微米。仅在采样与基准兼容时由实测嵌套累计量差分得到；不得把包含PM2.5的PM10累计量再次与PM2.5相加。

- 选定流: 颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_air，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_air
- 来源: jrc-cww-2016

###### 颗粒物（> PM10） (`pm_large`)

排向空气未特指、粒径大于10微米的干颗粒物。区分收集盐尘与实际空气损失，不能因缺少粒径测量而填零。

- 选定流: 颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_air，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_air
- 来源: jrc-cww-2016

###### 颗粒物，粒径未特指 (`pm_unsized`)

排向空气未特指的实测逸尘中，无法可靠区分粒径的部分使用本替代行。同一排口、时段和质量只能使用本行或已分粒径部分，不能双计；披露缺失的粒径证据和影响评价覆盖限制。

- 选定流: 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_air，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_air
- 来源: jrc-cww-2016

###### 水蒸气 (`water_vapour`)

实际进入空气未特指的未冷凝真空或干燥蒸气及冷却蒸发水，区分蒸发的分子水、回收冷凝水与液态飘滴。使用各回路水和焓记录及湿度测量，披露残余不确定性，不强行闭合水账。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_water，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_water
- 来源: cn-kn-conversion-2009; jrc-lvic-aaf-2007; jrc-cww-2016

###### 排向空气的液态飘滴水 (`water_drift`)

实际有冷却塔飘滴时纳入，受纳介质为空气未特指。数量仅为液态水组分；液滴携带的干盐计入互斥的颗粒物行，不以水蒸气UUID替代液滴。

- 选定流: 排向空气的液态飘滴水
- 流属性/单位: 质量 (`93a60a56-a3c8-11da-a746-0800200b9a66`); 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: 采集本行核算期实际数量，除以Q；使用cp_water，不套用案例量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: cp_water
- 来源: jrc-cww-2016

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocate_status | salt_coproduct, salt_waste | 根据规格、接收方和市场证据判断实际可销售共功能；实物上分开销售盐和不合格盐。不可售盐计入处理负荷，不获产品抵扣；不假定理论NaCl均可销售。 | jrc-ilcd-2010 |
| allocate_hierarchy | kn_conversion | 对已声明的归因型LCI，先细分可分活动，独占的后处理和包装直接归属。其余共同负荷按有证据的决定性物理因果关系分配，单凭化学计量不能证明该关系；不能证明时使用同期分离点产品净可实现收益并做价格、质量敏感性分析。明确数量、价格、系统模型和份额合计，不给默认份额。 | jrc-ilcd-2010 |
| allocate_physical | kn_conversion | 先闭合未分配的质量、水和元素账；另在负荷账对环境负荷贡献分配。实物账保留真实KNO3、盐、废物和排放全量，内部链接两端同量，不将共产品实物产出乘以分配份额。 | jrc-ilcd-2010 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

每 1 kg 参考流；先保留完整同范围期间原始总量，含失败和零产出批次及返工、WIP；仅Q>0时除一次，Q=0不生成结果。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | kn_conversion | 成品验收与产量 | foreground_record | SKU; lot; final accepted net kg; failed/zero-output batches; rework identity; opening/closing WIP and finished stock; dispatch; rejects; external returned mass/assay/inherited burden; moisture; size; Q | 用校准秤或可追溯称量与放行记录核对同一产品；期初期末盘存；销售、退货和再加工对应唯一批次。 | kg | 每批；核算期汇总 | 完整声明期，含停机和库存变化 | 同一场址、路线和SKU | 每 1 kg 参考流 | 校准、批次、化验、交付与存量的可追溯记录 |
| cp_materials | kn_conversion | 原料与库存 | foreground_record | supplier; delivery; issue; return; NaNO3/KCl/NaCl; water; sulfate; additives; opening/closing raw and loop stock; assay uncertainty | 称量实际到货和投料；化验各组分与干湿基；分阶段计量，核对仓储和母液存量；保持原料总量和纯组分量独立。 | kg | 每批、每次开停车及盘存 | 完整声明期，含停机和库存变化 | 同一场址、路线和SKU | 每 1 kg 参考流 | 校准、批次、化验、交付与存量的可追溯记录 |
| cp_water | kn_conversion | 水和循环 | foreground_record | water source; purchased kg; meter volume; measured density/T; wash recycle; condensate; cooling circulation; evaporation; drift; moisture; opening/closing water | 水表或称量与实测温度密度对应；逐回路匹配转移两端；用湿度、冷凝回收和液态飘滴测量核对水去向。 | kg | 连续或每批，含开停车 | 完整声明期，含停机和库存变化 | 同一场址、路线和SKU | 每 1 kg 参考流 | 校准、批次、化验、交付与存量的可追溯记录 |
| cp_energy | kn_conversion | 蒸汽、回水与电 | foreground_record | stage meters; kWh; steam kg; pressure absolute/gauge; T; dryness; condensate kg/T; vent kg; heat loss; supplier reference; enthalpy method | 核对校准分表、供汽与回水计量点；用声明的水蒸气物性方法求同一参考态焓，区分蒸汽质量、净热和背景参考量。 | kg; kWh; MJ | 连续及供应账单期 | 完整声明期，含停机和库存变化 | 同一场址、路线和SKU | 每 1 kg 参考流 | 校准、批次、化验、交付与存量的可追溯记录 |
| cp_salt | kn_conversion | 分盐去向 | foreground_record | wet salt kg; dry mass; NaCl; nitrate ion/N; K; Na; chloride; saleable/reject split; buyer; specification; receipt | 称量并代表性采样分盐；分析干湿基和主要离子；以实际验收和接收单分开售盐与废盐，不套用纯盐组成。 | kg | 每批及每次转移 | 完整声明期，含停机和库存变化 | 同一场址、路线和SKU | 每 1 kg 参考流 | 校准、批次、化验、交付与存量的可追溯记录 |
| cp_waste | kn_conversion | 废物及接收方 | foreground_record | stream origin; wet kg; density; water; nitrate/N; K; Na; Cl; sulfate; dust composition; receiver; treatment route; transfer manifest | 逐一称量固废、粉尘和水性转移，流量比例采样并分析；追踪厂外处理及运输；不同接收条件分行。 | kg | 每次转移；匹配生产时段 | 完整声明期，含停机和库存变化 | 同一场址、路线和SKU | 每 1 kg 参考流 | 校准、批次、化验、交付与存量的可追溯记录 |
| cp_pack | kn_conversion | 包装 | foreground_record | component resin; empty count and sampled net mass; PE liner; PP sack; closures; filled net kg; rejects; shipped kg; reuse records | 校准秤抽称空组件，核对采购、使用、损耗和交付；另记录复用周期与实际周转次数；袋容积或装料量不能替代实物质量。 | kg | 每批及包装规格变化 | 完整声明期，含停机和库存变化 | 同一场址、路线和SKU | 每 1 kg 参考流 | 校准、批次、化验、交付与存量的可追溯记录 |
| cp_air | kn_conversion | 逸尘 | foreground_record | stage; outlet; fugitive source; gas flow; standard T/P; dry/wet gas basis; sample time; filter mass; size distribution; abatement; operating hours | 在治理后排口采用适用的代表性颗粒物测量及粒径方法；记录空白、检出限、气体基准和时段；另调查无组织源，未知粒径只用未分粒径残量。 | kg | 覆盖正常、非正常及开停车 | 完整声明期，含停机和库存变化 | 同一场址、路线和SKU | 每 1 kg 参考流 | 校准、批次、化验、交付与存量的可追溯记录 |
| cp_assets | kn_conversion | 资本品与完整性 | foreground_record | equipment id; installed physical kg; actual material/BOM; life; cumulative throughput; shared service; maintenance; cut-off evidence | 逐设备登记安装实物量与服务期；如纳入负荷，另算归属服务当量并单列原子设备交换。记录所有未列辅料、治理及物流的纳入或截断证据。 | kg; year | 安装或更新，年度复核 | 完整声明期，含停机和库存变化 | 同一场址、路线和SKU | 每 1 kg 参考流 | 校准、批次、化验、交付与存量的可追溯记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_denominator | kn_product | Q=同范围完整期间按最终去向逐份唯一计数的实际合格净产量；用cp_product核对验收、发运、退货、期初期末库存及返工，排除包装和不合格物。不将退货、内部返工或WIP作为新增免费产品，所有失败与零产出批次保留在同一总池。Q=0时不归一化。 | cp_product | Q in kg | jrc-ilcd-2010 |
| calc_normalise | all inventory rows | Q>0时归一化交换=完整同范围期间归属交换总量/Q，仅除一次；保留原始阶段总量、失败批次、存量变化及期初期末WIP的实物与负荷结转。参考产出为1千克，实物账核对后再分配环境负荷；Q=0时无归一化结果。 | campaign quantities; Q | exchange per 1 kg reference flow | jrc-ilcd-2010 |
| calc_components | kn_conversion | 组分质量=湿物流总质量×声明湿基的实测组分质量分数。若含量为干基，先乘实测干物质比例。核对总量、Na/K/N/Cl以及H/O和实际杂质元素：投入+期初存量=产品+废物+空气损失+期末存量。NaNO3 + KCl → KNO3 + NaCl只用于摩尔守恒检查，不假定实际收率。 | cp_materials; cp_salt; cp_product; cp_air | unallocated component ledger | cn-kn-conversion-2009; jrc-ilcd-2010 |
| calc_water | kn_conversion | 对工艺及冷却各回路：外部输入分子水+期初水量=产品和湿盐水分+水性转移+外送回水+蒸气+液态飘滴+期末水量。内部转移核对两端后抵消；保留原料、产品实测水分及内部回收冷凝水。本交换反应无化学计量净生成水。 | cp_water; cp_energy; cp_waste | molecular water ledger | jrc-lvic-aaf-2007 |
| calc_heat | steam_import, condensate_return | 交付边界净焓=Σ(供汽质量×供汽比焓)−Σ(外送回水质量×回水比焓)，使用同一焓参考态；核对放空、凝结、冷却损失及存量和能量变化，得到有效工艺热。按核实的供方参考量约定链接，不将蒸汽千克和推导热兆焦作为两次供给。 | cp_energy | kg steam and separate MJ heat ledger | jrc-lvic-aaf-2007 |
| calc_emissions | pm_fine, pm_coarse, pm_large, pm_unsized | 采用体积流率时，排放质量=Σ(干基浓度×兼容干基标准体积流率×时段长度)；采用已积分气体体积时，排放质量=Σ(干基浓度×兼容干基标准体积)，不再乘时间。保留原始期间排放总量，再仅除以Q一次。仅按兼容实测差值拆分嵌套累计量；干PM与液态、气态水分开，不设默认粒径分布。 | cp_air | actual dry released particle kg | jrc-cww-2016 |
| calc_service | pp_sack, pe_liner | 包装实物量=实测空组件质量×实际组件数；保留实际投用、交付和损失质量。复用负荷按有记录的周转次数另算服务份额；资本服务为逐设备实测安装质量×服务期内归属服务份额，安装存量另行完整保留。 | cp_pack; cp_assets | physical and burden service ledgers | jrc-ilcd-2010 |

### 数据质量要求

实物总质量账须将随产品交付的包装及包装废料与KNO3净质量分开，元素账保留包装C/H及有关杂质。物质与水账区分有证据的反应生成、消耗和转移；本盐交换的化学计量无净生成分子水。不得从COD或未解释残差推导反应水、蒸发量、转化率或产率。水性分析中硝酸根与硝酸盐氮须明确化学计量换算，均不作为额外湿物流交换。

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | 核对流全字段及供方数量基准；空UUID不等于零量；真实化学组成不能被分类标签覆盖。 | cp_materials; cp_product |
| quality_closure | kn_conversion | 先保留完整实物账再做负荷账；以仪器和分析不确定性解释残差，不强制闭合或指定通用容差。 | cp_materials; cp_water; cp_salt; cp_air |
| quality_coverage | kn_conversion | 含开停车、排放、废盐、清洗、包装与库存，逐项记录纳入、不适用、未测和实际截断；不把厂外接收视为负荷消失。 | cp_waste; cp_pack; cp_assets |
| quality_no_defaults | kn_conversion | 本方法不提供配方、收率、纯度、水热电耗或排放因子默认值。 | primary site records; cn-kn-conversion-2009 limitations |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | kn_product | 要求唯一最终KNO3成品产出，必需限定信息、Q及双语一致的供货湿基净千克分母完整。核实产品与等级，拒用不兼容路线或混合物身份。 | jrc-ilcd-2010; jrc-cww-2016 |
| validate_balance | kn_conversion | 分配前检查含存量变化的实物总量、元素和水账，内部转移两端质量守恒。Na/K/N/Cl账既含产品，也含售盐、废盐、母液与粉尘；保留水分及未冷凝损失。按实测不确定性调查残差。 | jrc-ilcd-2010; jrc-cww-2016 |
| validate_utility | steam_import, condensate_return, electricity | 分别核对原生属性单位、供方压力状态参考量与实际数量换算。UUID身份不证明背景兼容；蒸汽焓和供方基准未解决时数据集不能完整链接，不能虚设蒸汽压力。 | jrc-ilcd-2010; jrc-cww-2016 |
| validate_destinations | salt_coproduct, salt_waste, brine_purge, collected_dust | 保留真实销售和不合格证据及接收方链接；物种分析与整份湿物流交换质量分开。不得把母液再次计为基本流排放，或以纯盐供应过程代表受污染混合共产品。 | jrc-ilcd-2010; jrc-cww-2016 |
| validate_particles | pm_fine, pm_coarse, pm_large, pm_unsized, water_drift | 每份逸尘仅一次计入兼容互斥粒径段或未分粒径残量，披露未知粒径与介质精度。收集或回用尘不作排放；液态飘滴水与水蒸气、干盐颗粒分开。 | jrc-ilcd-2010; jrc-cww-2016 |
| validate_completeness | kn_conversion | 检查各阶段、原料、公用工程、包装、运输、处理、资本品决策和实际附加交换；报告未测数量、空身份、供方缺口、跳过的检查与剩余覆盖。不能仅凭PCR机械检查声称清单完整。 | jrc-ilcd-2010; jrc-cww-2016 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 用于路线、等级和交付基准兼容的工厂门硝酸钾投入，保留原始证据与适用限定。 |
| allowed_use | 所选硝酸钠转化固体肥料路线，真实场址、核算期、SKU和供方。 |
| excluded_use | 田间肥效或施肥排放、其他制备路线或配方液体、纯活性物基准替代、默认工厂量。 |
| required_metadata | 参考限定信息、Q、过程图、实物及负荷账、存量循环、成品及盐的组成和去向、供方接收方与运输、分配、截断和方法版本。 |
| required_quality_disclosure | 测量分析方法及不确定性，时间与场址覆盖；空UUID和供方兼容性债务；粒径及蒸汽基准缺口；实际额外物流、资本品及审查范围。 |
| update_trigger | 产品或原料组成、路线、供汽、电网、水源、包装、排放治理、接收方、资本品、分配市场或证据变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| cn-kn-conversion-2009 | literature | CN100532260C, 2009-08-26, description steps1–7 and claims; original Chinese. https://patents.google.com/patent/CN100532260C/zh | 硝酸钠转化、含残余硝酸钾的热分盐、洗涤、循环和结晶、干燥路线原始证据；历史专利案例，不采用其温度、配比、收率、节水节能默认量。 |
| sqm-nitrates-route | literature | SQM Industrial Chemicals, Natural Resources, sodium nitrate & potassium nitrate; undated producer page. https://sqmindustrialchemicals.com/natural-resources/ | 生产者印证硝酸钠和氯化钾经结晶、精制、干燥得到硝酸钾；上游矿山现场案例不作通用投入或产能假设。 |
| jrc-lvic-aaf-2007 | official_guidance | European Commission JRC, LVIC-AAF BREF, August2007, scope and section1.5.1; printed33/PDF61. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-03/LVIC-AAF.pdf?download=1 | 采用通用能源审计、氮、水、蒸汽质量账及回用管理；无硝酸钾专属排放水平、配方或能耗默认值。 |
| jrc-cww-2016 | official_guidance | European Commission JRC, CWW BREF,2016, BAT2–3, printed543–544/PDF573–574. https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf | 化工流、反应副产物与排放来源登记、盐和氮物种分析、基于风险的监测；不从候选流推定正排放或现行合规。 |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for LCA, Detailed guidance, first edition2010, sections7.4.2 and7.9.2–7.9.3; printed197/205/255–264. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 组分与元素能量核对、归因型LCI的细分、决定性物理因果及后续经济分配；不自动以质量分配，无默认价格份额或闭合容差。 |
| unsd-cpc3-2025 | official_guidance | UNSD CPC Ver3.0 Structure,30Jun2025,34641–34647. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 分类产品边界与相邻肥料差异，仅作映射证据，不定义制备方法。 |
