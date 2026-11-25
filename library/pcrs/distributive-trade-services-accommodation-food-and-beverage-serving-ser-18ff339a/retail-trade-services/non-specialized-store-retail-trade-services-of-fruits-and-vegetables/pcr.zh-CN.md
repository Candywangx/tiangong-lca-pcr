---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-fruits-and-vegetables
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 非专营门店整颗鲜食苹果零售服务

## 1. 范围与适用性

本PCR保留果蔬零售身份，但可用方法特意限于苹果服务子集，不适用于整个分类叶。以下实质范围和义务为规范要求。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-fruits-and-vegetables |
| classification_refs | CPC 3.0 62121; narrower |
| covered_products | 一个已声明品种等级状态及scope_route配置的整颗鲜食苹果店内净质量零售服务 |
| excluded_products | 其他水果坚果蔬菜；预制保存产品；作为参考的果品生产；scope_route外加工送货 |
| representative_product | 一个品种特定的整颗鲜食苹果服务池，例如金冠，而非通用果蔬篮 |
| production_route | 收货、分拣、普通空气R134a冷藏、常温陈列、可选LDPE自助装袋、收银、逆向处理及剩余物管理 |
| market_state | 鲜活整颗原态可食苹果，固定品种及质量合同；记录收货和验收实际湿基状态 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 提供所定义苹果零售服务 |
| How much | 1 kg |
| How well | 按service_gates最终收银验收品种等级状态及实测净果质量；无数值默认质量阈值 |
| How long or cycle | 一个闭合收货队列池直至最终去向及退回解决，保留实际日期停留时长 |
| reference_flow_link | retail_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 整颗鲜食苹果门店零售服务，以验收净质量计吞吐 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 门店及地域; 品种及等级; 产地及收获批; 收货验收湿基状态; 质量验收合同; R134a设备配置; 冷藏温湿度历史; 常温陈列时长; 袋路线; 队列池日期及退回闭合; D及B_s/B_f映射; 上游门口边界; 共享驱动及资产台账; 未解决身份及不确定性 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mass_basis` | retail_service | Mass | kg | 最终验收苹果湿基净千克仅作为服务吞吐；收货状态背景量与终点参考量不同，须用calc_goods_background，不得假定相等。 |
| `mass_conversion` | failed_apples; cleaning_water; cleaning_effluent; apple_waste | Mass | kg | 相关时记录水分皮重密度。苹果用实际湿基称重；无匹配称重不得把数量或标称箱重转千克。水及废水须条件特定密度，不假定密度常数。 |
| split_labour_time | maintenance_service | 时间 | h | 仅计已签认的实际外购人工工时；工单数、面积及资产件数不能直接替代h。材料、能耗、工具、差旅和废物独立计量。自营工时仅作核对，不虚构外购交换；归属后仅按原最终参考分母归一一次。 |
| selected_energy_identity | split_support_electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | 所选交流电身份只有一个参考能量属性。实际归属量保留本行单位；其单位组中1kWh=3.6MJ。与另一能量单位来源合并或表达参考MJ交换前仅换算一次，同一分子不得重复换算，也不能推定供应组合。 |

## 5. 系统边界

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_route` | all processes | 仅适用于非专营门店整颗鲜食苹果（Malus domestica）的店内零售；每数据集声明一个品种、等级和收货状态，采用普通空气R134a冷藏及常温陈列，以校准净质量销售。排除冷冻、干制、罐装、榨汁、切配、店内清洗打蜡、混合品种复合参考、气调、送货到家及其他果蔬。包含顾客使用指定LDPE袋的自助装袋。 | `un-cpc`; `cde-apples` |
| `service_gates` | retail | 起点为含入库运输后的门店收货门口，终点为顾客在收银处最终验收约定品种、净质量、等级、无可见腐烂及已记录状态。预先声明实际质量合同及温湿度和时间规范；文献数值不成为通用验收限值。纳入收货、分拣、冷藏、常温陈列、收银、卫生清洁、撤销、剩余物处理及可归属资产。不发生店内果品加工。 | `cde-apples` |
| `goods_responsibility` | failed_apples | 本增量零售服务分子排除成功商品生产及入库运输；下游以B_s/D收货状态千克仅耦合一次收货门口背景，不能直接用1千克新产苹果。所有永久失败商品、腐损、缩耗及非销售外部转移，包括捐赠和退供应商，均以B_f/D收货状态背景纳入。零售商保留这些失败队列的背景责任；替代抵扣或供应商退款均不得移除责任。失败外部交接须注明接收者、实物状态、后续功能和处理责任，绝不自动视为废物。上游数据集须覆盖实际品种、产地、收获、贮存、包装及到同一门口的运输，仅扣除有证据的重叠。 |  |
| `physical_boundary` | retail | 服务清单不是全部收货苹果的生产模型。但cp_goods仍须闭合全部收货、库存、销售、退回、捐赠、退供应商、废弃、呼吸及水分历史。成功商品是服务参考产品之外的有记录载体；捐赠和退供应商产品输出是无负荷抵扣的实物载体。仅failed_apples导入失败商品辅助背景。废物载体仅链接一次处理，不同时记录处理服务及其排放。上游纸箱制造遵循商品门口责任；零售商纸箱处理仍纳入。 |  |
| `conditional_completeness` | all processes | 每个条件交换须保留设备登记、采购工单检索及运行检查，证明整个期间存在或不存在；不得凭空白发票推断不存在。发生状态未知、缺数量、身份未验证、背景未定义或平衡未闭合均阻止完整数据集。新增实际化学品、袋、更换件、溢漏、废物载体、清洁蒸发或排放，须在完整性声明前新增具名原子卡、匹配单过程协议并双语重生成。清洗果品或改用其他制冷剂须先修订范围。 | `jrc-retail` |
| `external_chain` | donated_apples; supplier_return_apples; failed_apples | 退供应商或捐赠是未提供本门店零售服务，不自动等于实物销毁。追踪唯一果品至有记录的接收方验收、状态、后续销售使用处理及最终背景责任方。按本PCR，外部非销售转移的原收货门口生产及入库运输仍由原服务的B_f承担。每份接收转移记录须带原队列ID、生产已承担标识、准确B_f收货等价量及原背景引用；后续接收方模型仅增加交接后活动，不得再次导入该原始生产。接收方不得凭财务贷记静默转移责任。同一果品若回来并在本店最终再售，须按calc_late_return重开原池，修订B_s/B_f、D及实际分子，并撤销外部标识版本。接收方去向或责任未解决即不完整。 |  |
| `asset_completeness` | assets | 必需零售资本明确为cold_assembly、retail_building、checkout_pos、weighing_scale及apple_display_rack，含租赁共享对应资产。每个真实资产按calc_assets分配；非自有不移除责任。建筑模块含结构壳、饰面、固定布线管道、固定通用照明及建筑通风，排除冷库机组和可移动POS秤架。完整冷库机组含绝热墙顶地板、门、内部灯、压缩机冷凝器蒸发器、管道控制及专用安装；排除建筑壳、R134a充注、运行维护及处置。独立终端载体须与实测制冷剂回收后的同一完整实物机组相匹配。其他四个资产模块各覆盖一个完整实际资产的制造安装及明确实测终端处理，排除运行维护。核供应商边界，保证板材控制灯线结构安装及终端处理均不在两模块重复。全部实际资产维护更换须具名新增原子卡，检查人工不含实物；必需资产缺证据即不完整，而非排除。 检查卡现仅为外购人工h，不得保留任何材料/工具/差旅/废物整包；按split_exchange_identity及c_split_quantity拆分并撤销旧包。 |  |
| `external_air_and_condensate` | all processes | 空气基本交换仅在实际门店外环境边界发生。果品呼吸水分试验给出内部源项；任何室内源项都不自动向环境排放。冷库冷凝融霜水按cold_condensate作为独立实际废物载体，在排水交接点计量。若在同一共用表前与cleaning_effluent实物合流，须声明该实际同一载体，并用上游冷凝和清洁源计量组成，将实测完整液相在互斥过程视图间仅分配一次，两者之和必须等于唯一共用表质量。不得两卡各计完整合流质量，也不得把捕集果品水同时记水汽及废水。缺源项拆分或捕集证据即使相关结果不完整。液体留存时先计库存变化，直到真实交接。存在其他捕集物种载体时须新增各自实际原子载体卡。 |  |
| split_exchange_identity | all inventory rows | 每卡只允许一个准确交换身份及一个参考计量属性/单位；单位组不是第二属性，其他测量仅作换算证据。人工卡不再承接整包材料/能源/设备/废物。已列完整同质设备、原包装商品及真实混合废物可保留，但须有实际同范围背景/接收处理和完整组成，不得汇总异质物或选择项。同一原始交换只能计入一张核心卡或一个拆分来源；替换整包时撤销其全部旧表征，仅合并相同身份/属性/单位的互斥原始数量。实际额外物质、零件、燃料、制冷剂、排放及处理缺口必须具名新增双语卡和过程协议；未知不得置零或宣称完整。 |  |

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 整颗鲜苹果交付门店收货门口，品种湿基状态及上游责任已知 |
| starting_condition_role | foreground_service_gate |
| product_classification_scope | CPC 3.0 62121较窄苹果服务子集 |
| recursive_input_rule | 不自动采用递归零售服务投入；failed_apples是明确要求的收货门口苹果生产背景，不是本零售服务的另一副本。 |
| upstream_dataset_requirement | 状态相容来源，具产地期间品种包装前期贮存及入库运输边界；按goods_responsibility划分成功失败收货等价量 |
| disclosure | 披露增量服务边界、实物台账、最终湿基参考与收货状态背景差异、全部排除、未验证链接及实际门口条件 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | 苹果处理及零售 | required | 每个声明苹果服务池 | foreground | retail_service |
| cold | R134a冷藏 | required | 声明的R134a普通空气路线 | foreground | retail_service |
| assets | 寿命资产及维护支持 | required | 全部池要求建筑POS秤架及完整冷库资产；检查和终端交接为条件发生并须有发生或不存在证据 | support | retail_service |
| split_support | 清洁或维护的独立物理交换 | conditional | 实际发生；须逐项证明发生或不存在 | 互斥资源、设备与废物 | retail_service |

### 过程：苹果处理及零售 (`retail`)

#### 输入

##### 产品流

###### 门店收货门口的整颗鲜食苹果 (`failed_apples`)

这是最终未被付费顾客验收商品的辅助上游需求，不包括分给成功商品的收货等价背景。该行是服务负荷输入，不是全部实物吞吐量。

- 选定流：门店收货门口的整颗鲜食苹果
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_goods`
- 来源：`cde-apples`

###### 交流电 (`retail_electricity`)

照明、收银和可归属建筑服务的使用点用电，排除单独计量的冷库回路。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值, 低位热值 / MJ
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_retail_energy`
- 来源：`jrc-retail`

###### 门店进水口的市政饮用水 (`cleaning_water`)

苹果区、周转筐及共享卫生清洁用水；本路线不含果品清洗。

- 选定流：自来水 `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`jrc-retail`

###### 无水碳酸钠清洁粉 (`sodium_carbonate`)

仅在记录证明使用该单一指定物质时纳入；其他清洁配方须在完整性声明前新增各自原子卡。

- 选定流：无水碳酸钠清洁粉
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_consumables`
- 来源：`jrc-retail`

###### 低密度聚乙烯果品袋 (`pe_bag`)

发给苹果购买者的可选自助新袋，不含上游纸箱和顾客自带袋。

- 选定流：低密度聚乙烯果品袋
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_consumables`
- 来源：`jrc-retail`

##### 基本流

###### 来自外界环境空气的氧气，净可归属摄取 (`respiration_oxygen`)

本交换跨门店外环境边界；果品到室内源项、冷库门店转移及留存捕集物在真实终端去向确定前仍为内部活动。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_store_air`
- 来源：

#### 输出

##### 产品流

###### 整颗鲜食苹果门店零售服务，以验收净质量计吞吐 (`retail_service`)

参考输出是最终验收苹果质量对应的服务，不是苹果生产千克。

- 选定流：整颗鲜食苹果门店零售服务，以验收净质量计吞吐
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_goods`
- 来源：`cde-apples`

###### 转赠人食的整颗鲜食苹果 (`donated_apples`)

仅限有接收者验收记录的可食果品；不增加零售参考输出，不给避免生产抵扣。实物量采用发运湿质量。

- 选定流：转赠人食的整颗鲜食苹果
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 来源：`jrc-retail`

###### 实物退回供应商的整颗鲜食苹果 (`supplier_return_apples`)

记录接收者、状态和持续背景责任；单纯财务贷记不构成本交换。

- 选定流：实物退回供应商的整颗鲜食苹果
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 来源：`jrc-retail`

##### 废物流

###### 进入已记录处理路线的废弃整颗鲜苹果 (`apple_waste`)

在收集时计量一个湿果废物载体；排除分收包装和已经损失的水。处理路线背景仅链接一次。

- 选定流：进入已记录处理路线的废弃整颗鲜苹果
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 来源：`jrc-retail`

###### 废弃瓦楞纸板苹果箱 (`carton_waste`)

测量或报告水分的包装固体；上游纸箱制造遵循收货门口责任台账，此处不再增加一个新纸箱投入。

- 选定流：废弃瓦楞纸板苹果箱
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 来源：`jrc-retail`

###### 废弃低密度聚乙烯果品袋 (`pe_bag_waste`)

零售商边界内废弃的破损或未使用袋，不含随顾客交付的袋。

- 选定流：废弃低密度聚乙烯果品袋
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 来源：`jrc-retail`

###### 排水交接点的苹果区清洁废水 (`cleaning_effluent`)

在实测交接点的一个真实含水废物混合物，含已溶清洁剂；处理在外时不重复记录溶质废物或基本排放。

- 选定流：排水交接点的苹果区清洁废水
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`jrc-retail`

##### 基本流

###### 向外界环境空气净释放的果品源水蒸气 (`fruit_water_vapour`)

本交换跨门店外环境边界；果品到室内源项、冷库门店转移及留存捕集物在真实终端去向确定前仍为内部活动。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_store_air`
- 来源：

###### 向外界环境空气净释放的苹果源生物源二氧化碳 (`respiration_co2`)

本交换跨门店外环境边界；果品到室内源项、冷库门店转移及留存捕集物在真实终端去向确定前仍为内部活动。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_store_air`
- 来源：

###### 向外界环境空气净释放的苹果源乙烯 (`fruit_ethylene`)

本交换跨门店外环境边界；果品到室内源项、冷库门店转移及留存捕集物在真实终端去向确定前仍为内部活动。

- 选定流：乙烯 `fe0acd60-3ddc-11dd-a47d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_store_air`
- 来源：

### 过程：R134a冷藏 (`cold`)

#### 输入

##### 产品流

###### 交流电 (`cold_electricity`)

冷库回路压缩机风机除霜内部灯及控制用电，排除通用建筑照明及重复总表能量。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值, 低位热值 / MJ
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cold_energy`
- 来源：`jrc-retail`

###### 制冷剂R134a（1,1,1,2-四氟乙烷） (`r134a_charge`)

以设备标签及供应商成分确认纯R134a；本路线排除混合物及其他制冷剂。

- 选定流：制冷剂，R134a（四氟乙烷） `210b4222-adda-4097-9e79-f2c9a6c172e4`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`
- 来源：`jrc-retail`

#### 输出

##### 废物流

###### 送往有资质再生方的回收R134a (`r134a_recovered`)

单一回收制冷剂载体，排除润滑油及混合制冷剂，后两者须另设实测卡。

- 选定流：送往有资质再生方的回收R134a
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`
- 来源：`jrc-retail`

###### 排水交接点的冷库冷凝及融霜废水 (`cold_condensate`)

一个实际冷库排水混合物，包含冷凝水及实测溶解悬浮组成；绝不是额外基本水排放。与清洁排水同载体时遵循external_air_and_condensate。

- 选定流：排水交接点的冷库冷凝及融霜废水
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cold_water`
- 来源：`jrc-retail`

##### 基本流

###### 向外界环境空气净释放的R134a（1,1,1,2-四氟乙烷） (`r134a_air`)

设备向室内空气泄漏不自动等于外排。标识已纳入封闭库存回收的捕集及任何互斥额外捕集，并验证实际外边界。

官方记录未提供中文baseName；中文保留相同标准化学标识。

- 选定流：HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`
- 来源：`jrc-retail`

### 过程：寿命支持 (`assets`)

#### 输入

##### 产品流

###### 不含制冷剂的绝热围护及制冷设备完整已安装R134a冷库 (`cold_assembly`)

一个含绝热板地板门内部灯管道控制及压缩机冷凝器蒸发器的完整实物冷库。仅含制造和专用安装，不含建筑壳充注运行维护及终端处理。

- 选定流：不含制冷剂的绝热围护及制冷设备完整已安装R134a冷库
- 流属性/单位：物品数量 / Item(s)
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`jrc-retail`

###### 制冷预防检查人工服务 (`maintenance_service`)

仅为实际外购人工工时，不包含材料、设备生命周期、电力、差旅、废物或处理。自营人工须记录工时用于核对，但不虚构外购服务交换。其他物理交换分别计入split_support，或具名扩展并与已有卡去重。

- 选定流：制冷预防检查人工服务
- 流属性/单位：时间 / h
- 数量规则：实测独占或一次归属的外购人工工时 / D；cp_split_labour_assets。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_labour_assets`
- 来源：

###### 含固定服务系统的完整已安装零售建筑壳 (`retail_building`)

一个已指定真实实物资产；完整模块包含有记录制造安装及资产特定终端处理，具实测完整数量和组件去向，排除运行维护及其他资产卡。缺完整模块证据即阻止完整性。

- 选定流：含固定服务系统的完整已安装零售建筑壳
- 流属性/单位：物品数量 / Item(s)
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`jrc-retail`

###### 完整已安装电子收银POS终端 (`checkout_pos`)

一个已指定真实实物资产；完整模块包含有记录制造安装及资产特定终端处理，具实测完整数量和组件去向，排除运行维护及其他资产卡。缺完整模块证据即阻止完整性。

- 选定流：完整已安装电子收银POS终端
- 流属性/单位：物品数量 / Item(s)
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`jrc-retail`

###### 完整已安装校准果品称重秤 (`weighing_scale`)

一个已指定真实实物资产；完整模块包含有记录制造安装及资产特定终端处理，具实测完整数量和组件去向，排除运行维护及其他资产卡。缺完整模块证据即阻止完整性。

- 选定流：完整已安装校准果品称重秤
- 流属性/单位：物品数量 / Item(s)
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`jrc-retail`

###### 完整已安装苹果陈列架 (`apple_display_rack`)

一个已指定真实实物资产；完整模块包含有记录制造安装及资产特定终端处理，具实测完整数量和组件去向，排除运行维护及其他资产卡。缺完整模块证据即阻止完整性。

- 选定流：完整已安装苹果陈列架
- 流属性/单位：物品数量 / Item(s)
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`jrc-retail`

#### 输出

##### 废物流

###### 制冷剂回收后的退役完整绝热冷库及制冷设备 (`cold_assembly_waste`)

制冷剂回收后的同一完整实物冷库。采用实际剩余机组直接校准净称，已移出部件制冷剂不得再次扣除；或采用calc_assets有记录实测干组件BOM重构。两模式互斥；单独移出载体仅记录一次。

- 选定流：制冷剂回收后的退役完整绝热冷库及制冷设备
- 流属性/单位：质量 / kg
- 数量规则：每 1 kg 参考流的实测归属交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`jrc-retail`

### 过程：支持作业独立物理交换 (`split_support`)

仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

#### 输入

##### 产品流

###### 一次性丁腈防护手套 (`split_inspection_glove`)

条件性实际干燥手套投入，使用前计量，不得代替所有检查耗材。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：一次性丁腈防护手套
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / D; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 完整电子式R134a制冷剂检漏仪 (`split_leak_detector`)

条件性实际同质工具型号及持续寿命台账；实际存在的另供电池、校准气体和电力须各有具名互斥卡，不得假定不存在。 仅含制造/初始安装，排除运行、维护和终端处理。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：完整电子式R134a制冷剂检漏仪
- 流属性/单位：物品数量 / Item(s)
- 数量规则：实测同质完整型号数量乘其持续寿命受益份额，仅一次 / D; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 已识别支持作业使用的交流电 (`split_support_electricity`)

仅计任何门店/资产/供应流尚未表征的实测支持用电。将上级电表划分成互斥区间/来源，同一kWh不得再加。记录电压/供应方，不推定电网组合。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

所选流使用单一净热值能量属性。清单保留声明的实测能量单位；能量单位组支持1kWh=3.6MJ。将kWh记录表达为参考MJ（含兼容来源合并）时仅换算一次，保留原kWh表计分子及来源归属，不能另加一次电力需求。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：此准确交换的实测独占或一次归属原始数量 / D; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 已识别支持访问的柴油轻型商用车运行服务 (`split_support_travel`)

仅适用于有实际记录的柴油轻型商用车访问，实测vehicle-km包括实际空驶调位。匹配完整车辆运行背景及全部受益方，其他动力/车型须另建卡。不得再加背景已含燃料或现有运输/资产供应已含行驶。此背景未含的静止怠速能耗须另立具名交换。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：已识别支持访问的柴油轻型商用车运行服务
- 流属性/单位：车辆行驶距离 / vehicle*km
- 数量规则：此准确交换的实测独占或一次归属原始数量 / D; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

#### 输出

##### 废物流

###### 带残留污染物的使用后丁腈检查手套 (`split_inspection_glove_waste`)

实际外运完整载体，识别污染物/状态及相容接收处理。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：带残留污染物的使用后丁腈检查手套
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / D; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 经独立记录移除电池后的退役完整电子式制冷剂检漏仪 (`split_leak_detector_waste`)

实测实际剩余完整载体，保留电池拆除事件；若存在电池则另建电池废物卡。完整工具处理和寿命归属须有支持。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：经独立记录移除电池后的退役完整电子式制冷剂检漏仪
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / D; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `full_pool` | all inventory rows | 优先按计量表及唯一事件细分。共享源总量Q和因果驱动x的归属量Q_i = Q*x_i/sum(x_j)，分母包括全部实际受益者，含其他部门、失败队列、闲置和闭店期间。冷藏使用占用立方米小时及已声明空置备用能力，卫生清洁用实测任务时间，照明用占用平方米小时；须验证物理关系并纳入所有受益者。不得仅按成功苹果销售分配或删去零驱动时段。 | `ghg-product` |
| `idle_zero` | all inventory rows | 预先声明同品种、等级、路线及配置的池与观察期，覆盖完整收货队列和退回处理。按结果产生前声明的保留能力份额分配零驱动备用量，核对含闲置闭店时间的全部Q。池内保留所有失败和零销售队列及实际负荷。全池零产出时保留原始总量并标记无法归一化，不得记零强度或删除；只可按预先合理规定与同配置池合并。 |  |
| `persistent_assets` | assets | 为每个资产及服务包跨全部期间和受益者维护持久台账：唯一序列号或包ID、完整制造安装负荷、实际服务历史、预期寿命能力、以前累计份额及剩余。按总寿命能力分配期间份额；累计不得超过一，寿命终点须按有记录受益者分配剩余。寿命修订重算剩余责任及以前分配的更正，不得重启全部制造负荷。制造安装、运行、检查、更换及寿命末期互不重叠。maintenance_service仅表示有据外购检查人工h，完整工单数不是该流数量。实际差旅、耗材、工具制造/末端及替换件按各自具体卡独立计量，人工背景必须排除这些来源；旧整包来源先撤销，不能与拆分来源并存。检查人工及其实际事件物理来源按工单支持周期全受益设备暴露归属，不再给该事件套完整设备制造寿命份额；检查工具自己的制造/末端仍按其独立全历史寿命台账。实物更换件须有独立完整产品卡。 |  |
| `no_coproduct_credit` | retail | 苹果实物载体不是额外零售服务或分配共产品。捐赠、降价、供应商贷记、处置收入及财务退款不产生第二功能输出或避免生产抵扣。实物退回事件须与资金事件分离。 |  |
| split_attribution | maintenance_service; split_inspection_glove; split_inspection_glove_waste; split_leak_detector; split_leak_detector_waste; split_support_electricity; split_support_travel | 优先直接独占计量；共用清洁事件按实际全受益清洁面积次归属每种原始物理数量，维修按实际工单支持周期全部受益方的原设备物理驱动分配。保留闲置、失败、关闭及零驱动负荷并按原规则结转，不能用销量删减。每项新工具的制造/退役使用持续资产寿命台账及历史修订差额；替换件属于其实际维修事件，不再当作原完整资产重复购置，新增替换件在事件时入账一次。已归属来源不再乘第二份额，工具终端不只归给退役期。背景已含某物理量则从旧背景中撤销该量或以本拆分替换整包，严禁两边同时表征。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | retail | failed_apples; retail_service | 可追溯队列事件及称重台账 | 场址；池；队列；唯一批子批；品种；等级；产地；收货状态；湿质量；皮重；收货时间；销售实物退回再售ID及时间；验收净质量；财务退款标识；最终去向；配对收货去向重量；水分样本；干物质；呼吸修正；B_s；B_f；期初期末库存；背景边界 | 在收货和收银处用校准净重秤；每次状态变化执行身份链接子批配对称重和代表性水分干物质测试；扫描每次移动；保留质量验收及供应商背景记录。 汇总义务：闭合全部库存及去向历史；calc_service及calc_goods_background确定D及互斥门口责任；一次归一化后每1千克参考流。 | kg | 每次收货交接退回；每日库存；匹配状态变化采样 | 全部收货队列至最终去向，并追溯晚退更新 | 同一门店收货门口、冷库、陈列、收银及退货台 | 每 1 kg 参考流 | 秤校准砝码；POS库存对账；采样代表性；签收验收；完整原始更正池台账 |
| cp_fates | retail | donated_apples; supplier_return_apples; apple_waste; carton_waste; pe_bag_waste | 发运及剩余物台账 | 场址；池；队列；事件ID；日期；载体；状态；湿重毛重皮重净千克；水分；接收者；后续功能；处理路线；保管；背景责任方；包装源ID | 在每次捐赠退供应商废物交接时校准称重；检查载体分流，获取接收者处理签字；按原事件ID与cp_goods核对。 汇总义务：按唯一事件每种实物载体求和一次，归原池，按calc_normalize仅除以D一次。 | kg | 每次交接；每日分收剩余物检查 | 完整池含失败零销售队列及晚退 | 门店发运及废物收集交接 | 每 1 kg 参考流 | 磅单；水分证据；接收者签字；废物合同；上游包装重叠检查 |
| cp_retail_energy | retail | retail_electricity | 单过程计量表视图 | 表ID；父表ID；回路；时间；期初期末千瓦时；校准；完整受益者驱动；空置备用；排除回路ID | 读取门店回路记录仪，与公用事业账单总表核对，检查覆盖；保留原表事件但仅选本过程视图。 汇总义务：calc_electricity后执行full_pool分配及calc_normalize；视图不得重复源千瓦时。 | kWh | 连续记录；每月核对时段及账单 | 池期间全部运行、闲置、闭店和失败时段 | 具名门店回路 | 每 1 kg 参考流 | 表检定；缺时段日志；完整分母；总分表对账 |
| cp_cold_energy | cold | cold_electricity | 单过程计量表视图 | 表ID；父表ID；回路；时间；期初期末千瓦时；校准；完整受益者驱动；空置备用；排除回路ID | 读取门店回路记录仪，与公用事业账单总表核对，检查覆盖；保留原表事件但仅选本过程视图。 汇总义务：calc_electricity后执行full_pool分配及calc_normalize；视图不得重复源千瓦时。 | kWh | 连续记录；每月核对时段及账单 | 池期间全部运行、闲置、闭店和失败时段 | 具名冷库回路 | 每 1 kg 参考流 | 表检定；缺时段日志；完整分母；总分表对账 |
| cp_consumables | retail | sodium_carbonate; pe_bag | 物料领用库存记录 | 场址；批；产品；配方；干湿基；水分；活性浓度；期初采购期末库存；领用；实际袋质量；受益任务；事件ID | 分别称量实际纯无水粉末及LDPE袋；核供应商成分；逐物料库存平衡；单记未用破损袋。 汇总义务：期初+采购-期末-外转与实际消耗核对；每物料分配一次后calc_normalize。 | kg | 每次领用交货；期末盘点 | 池期间全部运行、闲置、闭店和失败时段 | 苹果袋发放点及清洁库 | 每 1 kg 参考流 | 校准秤；成分表；收据；库存对账；不存在检查 |
| cp_water | retail | cleaning_water; cleaning_effluent | 独立供排水计量及平衡 | 表ID；日期；实际完整废水立方米；进口立方米；温度；实测密度千克每立方米；废水组成；w_water；期初期末存水；内部回用；实测蒸发；其他水转移；分配任务 | 分别读取门店供水及排水交接表，针对对应条件采样密度组成，校准水表并核供水账单；检查仅卫生清洁路线。 汇总义务：仅用calc_water直接完整液相计量及水组分核对；缺测量即不完整；full_pool归属并calc_normalize一次。 | m3; kg/m3; kg | 每个计量时段及清洁事件；条件变化代表采样 | 池期间全部运行、闲置、闭店和失败时段 | 门店进水、苹果区清洁任务及排水交接 | 每 1 kg 参考流 | 表及密度校准；样本；账单；完整供水存水蒸发排水对账 |
| cp_respiration | retail | respiration_oxygen; fruit_water_vapour; respiration_co2; fruit_ethylene | 匹配子批呼吸水分观测 | 子批ID；品种；状态；成熟度；时间；实际试验湿干质量m_trial；M_state_t库存千克；温度；湿度；气温；气压；绝对C_in_s及C_out_s；F_in及F_out；实测气体转换链；有符号r_blank_s；检出限；停留时段ID | 采用calc_respiration原始绝对浓度校准匹配子批方法及准确试验质量速率暴露转换。保留实测原始入口出口、本底及湿基试验千克；仅输出传入calc_air_boundary的内部源项原始E_s千克，绝不是终端基本千克。 汇总义务：原始源项E_s保持与最终每1千克参考流协议视图链接；仅经验证实际终端千克按calc_air_boundary归属并除以D一次。 | kg; h; degree C; kg/m3; m3/h; kg/(kg*h) | 连续环境日志；每次状态配置变化的匹配试验 | 池期间全部运行、闲置、闭店和失败时段 | 苹果子批、冷库及常温陈列 | 每 1 kg 参考流 | 仪器零跨及标准气；空白；代表性；水碳干物质闭合；不确定性 |
| cp_refrigerant | cold | r134a_charge; r134a_recovered; r134a_air | 物种库存及维护平衡 | 回收容器期初期末库存；捕集阶段；平衡已含捕集ID；额外捕集ID；实际外界物种通量；室内空气库存变化；资产ID；瓶ID；物种组成；皮重；日期；期初期末设备气瓶千克；购入；回收；封闭转移；调试；校准；受益冷量能力；T_nonrecovery发运ID；R_recovered发运ID；互斥集合检查 | 冷过程视图仅对共享原始外界空气台账中的R134a验证，保留不同源项终端及捕集ID，不重复门店物种记录；采用calc_air_boundary。 称气瓶及回收制冷剂，取得设备充注维修记录；独立核对同一截止点设备库存及全部转移。 汇总义务：calc_refrigerant保留全系统平衡后full_pool份额及calc_normalize；不得二次扣回收物。 | kg | 每次充注回收转移；期末完整库存 | 池期间全部运行、闲置、闭店和失败时段 | 冷库服务R134a设备及相连气瓶 | 每 1 kg 参考流 | 标签成分；校准秤；维修签收；气瓶登记；闭合库存平衡 |
| cp_assets | assets | cold_assembly; cold_assembly_waste; retail_building; checkout_pos; weighing_scale; apple_display_rack | 持久资产及有界服务包台账 | 序列包ID；完整设备规格；原始负荷；完整干质量；制冷剂排除；安装范围；全部受益者期间；能力；寿命修订；累计份额；剩余份额；工单；更换件；处置收据；资产种类；保留能力；暴露时段；H_a_i；实际过去暴露；有依据剩余暴露；L_a；f_a_i；终端组件去向；模块重叠矩阵；终端质量模式；直接剩余净千克；完整干组件BOM；移出部件ID质量；同设备边界；皮重校准 | 严格执行calc_assets直接净称与实测BOM互斥模式；已直接称量剩余机组不得再扣移出件及回收气体。 检查铭牌规格及供应商包，在有记录气体回收后称完整终端机组；把寿命台账及签收检查事件与发票审核。 盘点每个建筑POS秤架及完整冷库，含共享租赁资产。测完整寿命暴露及实际终端完整资产量；逐模块取得互斥制造安装终端边界。 汇总义务：calc_assets后calc_normalize；制造份额、检查事件和终端质量互斥；持久累计份额最多一。 | Item(s); kg | 每次资产检查处置事件；每期及寿命修订 | 池期间全部运行、闲置、闭店和失败时段 | 一个门店资产及全部过去当前未来受益者 | 每 1 kg 参考流 | 原供应商边界；序列台账；跨期对账；整机秤；工单及处理验收 |
| cp_store_air | retail | respiration_oxygen; fruit_water_vapour; respiration_co2; fruit_ethylene | 实际外界物种通量及源项终端对账 | 物种；源子批ID；原始E_s；边界路径ID；实际时间；气体温压；绝对入口出口浓度千克每立方米；入口出口流量立方米每小时；校准；其他门店源ID；捕集ID；捕集物种千克；载体ID；期初期末气体冷凝吸附库存；转化证据；原池ID | 用校准物种流量仪及温压转换测实际外界路径，匹配观测非果品源及源链接捕集库存样本。链接cp_respiration原始源记录，不重做试验室修正。检查全部通风循环蒸发器排水及捕集设备；路径捕集未知即不完整。 汇总义务：calc_air_boundary先验证外界物种净千克，再full_pool归属并calc_normalize一次；每个源捕集库存载体事件仅使用一次。 | kg; kg/m3; m3/h; h | 连续匹配源项外界时段；每次捕集排水事件；期初期末库存 | 池期间全部运行、闲置、闭店和失败时段 | 门店外界空气边界及可追溯室内苹果源隔室 | 每 1 kg 参考流 | 物种流量校准及标准气；全路径覆盖；签字排水捕集记录；独立闭合源项终端质量平衡；不确定性 |
| cp_cold_water | cold | cold_condensate | 冷凝融霜液体交接台账 | 排水ID；事件ID；日期时间；完整液相立方米；实际密度千克每立方米；温度；溶解悬浮组成；实测水分数；期初期末冷凝冰库存千克；果品源捕集归属；源拆分表；共用载体ID；直接称重千克；校准 | 直接称实际排水交接液体，或直接计完整液相体积并配条件特定实测密度，采用一种互斥模式。采样水及物种分数和留存冰液体，核融霜排水事件。若在同表与cleaning_effluent实物合流，保留上游实际源表及同一载体，仅分配互斥份额一次并核对其和；缺拆分证据即不完整。 汇总义务：实测完整液相载体净千克，按calc_air_boundary核捕集库存；full_pool归属后calc_normalize一次；不得将捕集物种千克再加为重复载体质量。 | kg; m3; kg/m3 | 每次融霜排水事件及计量时段；期初期末冰液库存 | 池期间全部运行、闲置、闭店和失败时段 | 冷库蒸发器排水至实际排水交接 | 每 1 kg 参考流 | 校准秤排水表及密度样本；水物种分析；融霜日志；库存对账；同载体去重证明 |
| cp_split_labour_assets | assets | maintenance_service | 独立原始交换台账 | event_id; source_id; 发生/不存在证据; 准确物质或型号; 实际组成/SDS; 参考属性; 单位; 原始数量; 原始分母; 工时起止; 电表区间及上下级关系; 密度及温度; 完整载体净质量; 接收方及处理范围; 工具资产ID; 原配/替换件; 寿命及全部历史受益方; 历史修订差额; 全受益驱动; 直接/已归属状态; 旧整包撤销; 重叠来源 | 逐事件核实实际投入和外运；工时按签认起止记录，物料/废物称重，电力读取互斥电表，车辆记录实际路线公里。补齐来源分母、组成、背景、接收处理和全受益方，执行split_attribution与c_split_quantity。实际不同配方/型号或额外排放须新增准确卡；本候选不得被默认套用。 | 逐卡一个属性/单位 | 每事件及来源修订 | 原完整来源周期及全部受益历史 | 实际工单及互斥现场/供应门 | 每参考流 | 签认工时、校准、组成、去重和接收凭证 |
| cp_split_support | split_support | split_inspection_glove; split_inspection_glove_waste; split_leak_detector; split_leak_detector_waste; split_support_electricity; split_support_travel | 独立原始交换台账 | event_id; source_id; 发生/不存在证据; 准确物质或型号; 实际组成/SDS; 参考属性; 单位; 原始数量; 原始分母; 工时起止; 电表区间及上下级关系; 密度及温度; 完整载体净质量; 接收方及处理范围; 工具资产ID; 原配/替换件; 寿命及全部历史受益方; 历史修订差额; 全受益驱动; 直接/已归属状态; 旧整包撤销; 重叠来源 | 逐事件核实实际投入和外运；工时按签认起止记录，物料/废物称重，电力读取互斥电表，车辆记录实际路线公里。补齐来源分母、组成、背景、接收处理和全受益方，执行split_attribution与c_split_quantity。实际不同配方/型号或额外排放须新增准确卡；本候选不得被默认套用。 | 逐卡一个属性/单位 | 每事件及来源修订 | 原完整来源周期及全部受益历史 | 实际工单及互斥现场/供应门 | 每参考流 | 签认工时、校准、组成、去重和接收凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_service | retail_service | D为闭合池在顾客门口最终验收苹果湿基净千克之和，实物退回时撤销该次验收，再销售仅在新的最终验收时增加。拒收、重复搬运、内部转移、失败销售及捐赠不是服务输出；仅资金退款不改变D。参考输出为1千克。 | accepted_mass; physical_returns; resale_acceptance; cp_goods | D；参考输出 |  |
| calc_goods_background | failed_apples | 对每个可追溯收货队列k，用校准的配对收货和去向称重及匹配子批实测水分、干物质观测，将最终售出果品分配为收货等价B_s,k；报告包括呼吸干物质损失和水分变化的实测状态转换。不得把缩耗水当作湿废果，或假定最终千克等于收货千克。在该闭合队列的每个唯一果品达到最终去向后，B_f,k = R_k - B_s,k，R_k为实收湿千克。B_f,k须保留全部丢失单位、拒收捐赠退供应商果品及无法归属成功果品的收货等价缩耗。记录互斥收货质量责任分区B_s + B_f = R，成功果品自身缩耗归B_s，不再归B_f。优先按身份配对称重；只有独立实测呼吸干物质变化、代表性采样和不确定性时才能采用干物质映射。缺转换证据即阻止背景耦合。 | R_k; fate_mass; paired_weights; moisture; respiratory_dry_loss; cp_goods; cp_respiration | B_s；B_f；B_f/D服务背景；B_s/D下游耦合 |  |
| calc_normalize | all inventory rows | 对每个非参考行，先完成状态单位转换，再将完整已归属原始总量仅除以D一次。记录源原始总量、分配份额、归属分子和最终值；预分配或已归一化供应商量须还原一致原始基准或标明已为最终值，绝不二次分配归一化。D须大于零。 | raw_total; attributable_share; D; cp_goods | 每1千克参考流的交换 |  |
| calc_electricity | retail_electricity; cold_electricity | 使用1 kWh = 3.6 MJ把实测使用点千瓦时转换为兆焦，再分配并除以D一次。门店总表池在门店分配前扣除有证据冷库回路；已排除冷库的门店分表不得再扣。链接背景注明供应地域、年份、电压、供电组合及输配损耗边界。 | kWh_retail; kWh_cold; source_meter_boundary; D | 每1千克参考流的兆焦 |  |
| calc_water | cleaning_water; cleaning_effluent | 供水质量 = V_import*rho_supply；完整废水交接质量 = V_discharge*rho_discharge，使用独立直接计量表及记录温度组成下的实测密度。直接废水体积是含溶解清洁剂及夹带苹果固体的整个液相废物混合物，不是推算水体积。采样水质量分数w_water，另作水组分平衡：进口水+期初存水 = 期末存水+完整废水中的水组分+独立实测蒸发+其他有记录水转移；内部回用抵消。水组分 = 完整废水质量*w_water，绝不得以水组分替代完整废水交换。进口量已排除内部回用，直接实测排水也不再扣蒸发。本PCR只允许直接排水计量；缺计量密度组成记录即不完整，不授权重建废水数量。 | V_import; rho_supply; V_discharge; rho_discharge; w_water; temperature; stored_water; measured_evaporation; other_water_transfers; D; cp_water | 每1千克参考流的供水及废水千克 |  |
| calc_refrigerant | r134a_charge; r134a_recovered; r134a_air | R134a释放 = 期初设备及气瓶库存 + 购入 - 期末设备及气瓶库存 - T_nonrecovery - R_recovered。所有项在同一截止点按纯R134a千克称重。T_nonrecovery仅指无需再生而封闭送出直接再用或销售的制冷剂；R_recovered仅指按r134a_recovered称重送往再生的回收物。两者发运事件ID集合互斥，交集必须为空；回收发运绝不再从T_nonrecovery扣除。内部气瓶设备回收容器转移抵消，不属于外发。解决调试瓶残及终点库存，购入和回收保持不同实测清单交换。物种释放及购入向完整受益者归属后仅除以D一次；设备制造排除充注。 该库存平衡是扣除同一封闭库存或回收发运已反映捕集后的进入室内空气原始千克源项，须明确这些捕集事件ID。它不自动构成外环境基本排放。两个截止点均纳入回收容器库存，核对捕集阶段，并将原始平衡传入calc_air_boundary作外排及室内空气库存修正。calc_air_boundary不得再扣已含于期末封闭库存或R_recovered的捕集；本库存台账外额外实测捕集须有互斥事件ID。 | opening_stock; acquired; closing_stock; T_nonrecovery; R_recovered; dispatch_event_IDs; D; cp_refrigerant | 每参考供给回收R134a千克；传给calc_air_boundary的原始库存平衡源项千克 |  |
| calc_respiration | respiration_oxygen; fruit_water_vapour; respiration_co2; fruit_ethylene | 仅使用一种原始绝对浓度模式。对每个仪器监测子批及条件时段，在记录的实际气体温压下测物种入口出口绝对质量浓度C_in,s和C_out,s（千克每立方米）以及匹配的入口出口体积流量F_in和F_out（立方米每小时）；保留仪器摩尔或体积分数转质量浓度的实测转换。r_s = sigma_s*(F_out*C_out,s - F_in*C_in,s) - r_blank,s，单位为整个实测子批的物种千克每小时；CO2、乙烯和水蒸气的sigma_s=+1，摄氧为-1。r_blank,s为同符号约定的匹配空室净速率。入口浓度及空室本底各扣一次，不再额外扣环境本底；本原始模式不得采用供应商已扣入口或本底的率。测该时段子批当前湿质量m_trial（千克）；k_s = r_s/m_trial，单位为物种千克每湿苹果千克小时。对每个匹配的实际库存状态，按实际湿苹果库存质量及停留小时积分E_s = integral k_s(state,t)*M_state(t) dt，保留所得E_s为传入calc_air_boundary的原始果品内部源项或摄取千克；此处不归一化，也不将其视为外环境排放。M_state(t)包含失败退回及零销售库存，绝非仅最终售出质量；每个子批测量及实际库存时段仅使用一次。独立核对湿干质量、水及碳平衡；本底不匹配、不明负净率、无依据气体转换或缺代表性状态数据均为未解决。不得再除以试验质量、最终苹果质量或占用量。 | C_in_s; C_out_s; F_in; F_out; gas_temperature; gas_pressure; measured_gas_conversion; sigma_s; r_blank_s; m_trial; M_state_t; residence_intervals; cp_respiration; D | E_s原始内部源项或摄取千克；k_s物种千克每湿苹果千克小时 |  |
| calc_assets | cold_assembly; cold_assembly_waste; retail_building; checkout_pos; weighing_scale; apple_display_rack | 对每个资产a及期间受益者i，在全部实际运行闲置闭店及失败时段测能力保留量乘时间的暴露H_a,i。冷库用保留内部立方米小时，建筑用保留建筑面积平方米小时，POS用保留收银工位小时，秤用保留称量工位小时，架用保留层板平方米小时。全部受益者含其他门店部门进入同一资产台账。L_a是同单位完整寿命暴露，等于实测过去暴露加有依据剩余暴露；f_a,i = H_a,i/L_a。对一个完整资产制造安装负荷仅乘f_a,i一次。冷库终端废物载体q_terminal,a,i = 实测完整干终端机组千克*f_a,i，采用同一份额，不能再乘期间份额；其处理背景链接一次。建筑POS秤及架的完整资产背景模块包含各自有证据的终端拆解处理、实际完整资产数量及组件去向；对每完整模块仅乘f_a,i一次，前景不再另加其终端废物处理。实际退役时L_a设为实测总寿命暴露，核对sum_i H_a,i=L_a及sum_i f_a,i=1，分配剩余并出具修正以前份额的版本差额。每次L_a修订均重算全部累计份额及剩余台账；不得重启完整资产或二次分配终端负荷。实际签收检查事件另按完整期间受益者的保留冷能力归属，并归一化一次。缺资产总量、以前份额、剩余暴露或终端边界证据即阻止完整性。 终端质量须记录一种互斥模式：直接校准净称W_direct是在制冷剂及已移出部件离开后剩余整机质量，不得再扣这些质量。仅在无法直接称重时，才可用实测组件BOM重构W_BOM = sum(完整干组件质量) - sum(唯一已移出干组件质量)；记录同一设备、回收皮重边界及剩余部件，已不含制冷剂的干BOM不得再扣制冷剂。不得混用W_direct与W_BOM，也不得对W_direct应用removed_part修正。terminal_mass设为唯一选定净量后，仅乘f_a,i并除以D一次；已移出部件须独立实际载体核算，不重复完整机组份额。 maintenance_service仅按cp_split_labour_assets和c_split_quantity计外购人工h；不得采用资产寿命份额或工单计数。 | asset_ID; H_a_i; L_a; f_a_i; past_exposure; remaining_exposure; full_asset_module; terminal_mass; inspection_events; D; cp_assets; terminal_mass_mode; W_direct; measured_full_dry_components; uniquely_removed_components | 每1千克参考流的归属件数及千克 |  |
| calc_late_return | all inventory rows | 晚到实物退回须重开原队列池版本：撤销以前验收千克，将实际逆向处理、贮存、清洁、包装、处置及其他新增负荷计入原分子，修订B_s/B_f及实物去向，再重算全部归一化行。保留事件日期、原值及差额凭据；不得又分给新队列。再销售保留同一唯一商品历史，仅计最终验收。仅资金退款更新财务，不改实物去向或D。 | original_cohort_ID; return_event_ID; original_numerator; incremental_events; revised_D; revised_fates | 有版本的更正原池交换 |  |
| calc_air_boundary | respiration_oxygen; fruit_water_vapour; respiration_co2; fruit_ethylene; r134a_air | 基本流边界为门店外环境；果品到室内空气、冷库到卖场、蒸发器冷凝及循环均为内部转移。保留calc_respiration的湿基映射及原始绝对浓度公式。果品CO2乙烯及水源项千克使用G_s=E_s，摄氧使用G_O2=-E_O2；R134a使用calc_refrigerant原始源项并标识其中已扣捕集事件集合。逐物种闭合N_s,air = G_s - C_s,additional - DeltaS_s - K_s，其中C_s,additional为跨非空气边界移出且未在G_s扣过的实测物种净千克；DeltaS_s为室内空气、留存冷凝融霜水、吸附捕集介质及其他已声明内部库存中可归属物种的期末减期初变化；K_s为独立有证据、且未在果品源项包含的净化学生物转化。每项记录符号、源归属及不确定性；摄氧采用相对实测匹配本底的有符号氧亏缺和库存变化。捕集但留存物料计DeltaS，随载体排出者计C，不得两计；冷库门店内部循环抵消。以独立实测实际外界入口出口质量通量integral(F_out*C_out,s - F_in*C_in,s)dt核对此源项至终端平衡，记录气体温压并覆盖全部实际外通风及泄漏路径，其他非果品门店源项须单独实测且一致归属。外边界检验也须用绝对浓度；单凭通风体积绝不能作为物种排放因子。试验室入口本底修正已经包含于E_s，不得再施于E_s；外界入口扣除属于另一实际外界通量检验，其他源按唯一记录仅扣一次。正向释放物种仅以已验证N_s,air记基本输出；氧气基本输入为已验证-N_O2,air。终端千克向完整受益者归属后仅除以D一次。捕集未知、库存转化未测、缺边界路径、符号不明或源项终端不闭合均不完整，不能置零。须用设备运行证据记录捕集转化确实不存在。废水中的捕集物种属于一次计量完整液相载体，不再记基本排放或重复溶质废物。 | E_s; G_s; C_s_additional; captured_event_IDs; DeltaS_s; K_s; actual_exterior_inlet_outlet_flux; other_store_sources; cp_store_air; cp_cold_water; cp_refrigerant; D | 每1千克参考流的已验证终端物种千克 |  |
| c_split_quantity | maintenance_service; split_inspection_glove; split_inspection_glove_waste; split_leak_detector; split_leak_detector_waste; split_support_electricity; split_support_travel | 对每个准确身份r及其单一单位，先以原始来源分母D_source还原已归一来源q_source，得到x_raw=q_source*D_source；已是原始量则不再还原。按split_attribution仅作一次尚未完成的归属，按来源ID/事件/版本去重，撤销旧整包和旧历史版本。合计互斥原始量为X_r；q_r=X_r/D，只除最终参考分母一次。人工只计实测外购h，不计原工单数/面积为人工量；自营工时仅核对。资产数量、物料kg、电力kWh、车辆vehicle*km及载体kg分别计算，禁止跨属性相加或用人工工时乘已实测物理量。未知量/身份/背景阻止完整性。 | X_r; D_source; q_source; D; cp_split_labour_assets; cp_split_support | q_r |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | all inventory rows | 逐具名流核官方状态类型名称介质属性单位及实际用途；明确保留候选缺口。电力身份仅为使用点无供应方能量，不是供电因子。 | 原始直读身份记录及逐行绑定决定 |
| q_goods_state | failed_apples; retail_service | 缺收货至终点湿基映射、干物质呼吸证据、闭合唯一商品历史及B_s+B_f=R责任时不得出完整结果。正常水分损失及成功果品呼吸仍归同一成功果品收货等价。 | 配对校准称重、水分试验、队列台账、背景链接 |
| q_coverage | all processes | 每个计量物料去向资产源均与全部受益者及闭合池核对。缺时段为未知；实测零须检出不存在证据。实际新增流触发原子扩展后才能完整。 | 完整源对账、不存在检查、未解决清单及不确定性 |
| q_traceability | all inventory rows | 每行保留地点实际期间方法校准原事件ID、转换、分配分子分母、背景边界、更正版本及一次最终归一化。协议视图不得重复源事件。 | 可审核原始至最终计算工作簿及签字交接记录 |
| q_media_boundary | respiration_oxygen; fruit_water_vapour; respiration_co2; fruit_ethylene; r134a_air; cold_condensate | 果品呼吸源项及设备库存损失不是外界基本排放。要求逐物种源项终端闭合，含实测捕集、室内液体吸附库存变化及独立验证外界通量。捕集转化未知不为零。冷凝融霜水及其中捕集物种以一个完整液相废物载体跨界；与清洁实物共享排水仅计量归属一次。直接终端资产净称不得再次扣移出组件。 | 唯一ID关联的原始源项、外界通量、捕集排水库存及直接净称BOM模式证据 |
| q_quantity_failed_apples | failed_apples | 按calc_goods_background和calc_normalize计算B_f / D，保留收货状态千克。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_goods |
| q_quantity_retail_electricity | retail_electricity | 使用calc_normalize处理已归属的原始总量；cp_goods确定D。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_retail_energy |
| q_quantity_cleaning_water | cleaning_water | 按calc_water将V_import * rho_supply一次归属后除以D；不得再减内部回用量。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_water |
| q_quantity_sodium_carbonate | sodium_carbonate | 使用calc_normalize处理已归属的原始总量；cp_goods确定D。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_consumables |
| q_quantity_pe_bag | pe_bag | 使用calc_normalize处理已归属的原始总量；cp_goods确定D。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_consumables |
| q_quantity_respiration_oxygen | respiration_oxygen | 仅采用calc_air_boundary中经捕集及内部库存转化对账验证的实际终端物种千克，归属后仅除以D一次。原始果品源项E_s不是本交换。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_store_air |
| q_quantity_retail_service | retail_service | 1 千克参考流；calc_service；cp_goods。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_goods |
| q_quantity_donated_apples | donated_apples | 使用calc_normalize处理已归属的原始总量；cp_goods确定D。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_fates |
| q_quantity_supplier_return_apples | supplier_return_apples | 使用calc_normalize处理已归属的原始总量；cp_goods确定D。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_fates |
| q_quantity_apple_waste | apple_waste | 使用calc_normalize处理已归属的原始总量；cp_goods确定D。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_fates |
| q_quantity_carton_waste | carton_waste | 使用calc_normalize处理已归属的原始总量；cp_goods确定D。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_fates |
| q_quantity_pe_bag_waste | pe_bag_waste | 使用calc_normalize处理已归属的原始总量；cp_goods确定D。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_fates |
| q_quantity_cleaning_effluent | cleaning_effluent | 按calc_water将V_discharge * rho_discharge一次归属后除以D。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_water |
| q_quantity_fruit_water_vapour | fruit_water_vapour | 仅采用calc_air_boundary中经捕集及内部库存转化对账验证的实际终端物种千克，归属后仅除以D一次。原始果品源项E_s不是本交换。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_store_air |
| q_quantity_respiration_co2 | respiration_co2 | 仅采用calc_air_boundary中经捕集及内部库存转化对账验证的实际终端物种千克，归属后仅除以D一次。原始果品源项E_s不是本交换。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_store_air |
| q_quantity_fruit_ethylene | fruit_ethylene | 仅采用calc_air_boundary中经捕集及内部库存转化对账验证的实际终端物种千克，归属后仅除以D一次。原始果品源项E_s不是本交换。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_store_air |
| q_quantity_cold_electricity | cold_electricity | 使用calc_normalize处理已归属的原始总量；cp_goods确定D。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_cold_energy |
| q_quantity_r134a_charge | r134a_charge | 按calc_refrigerant将气瓶实际初充和补充的R134a归属后除以D；不得假定补充量等于泄漏量。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_refrigerant |
| q_quantity_r134a_recovered | r134a_recovered | 按calc_refrigerant将实际称重且送出边界的回收量除以D。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_refrigerant |
| q_quantity_r134a_air | r134a_air | 使用calc_refrigerant原始库存源项及calc_air_boundary终端修正；每个捕集仅扣一次，解决室内空气库存，将已验证外排千克归属后仅除以D一次。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_refrigerant |
| q_quantity_cold_assembly | cold_assembly | 按calc_assets将一个完整资产制造安装包乘以持久可归属寿命份额后除以D。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_assets |
| q_quantity_maintenance_service | maintenance_service | 按calc_assets将符合已声明服务包边界的完成签收检查工单数归属后除以D。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_assets |
| q_quantity_cold_assembly_waste | cold_assembly_waste | 按calc_assets将实测剩余整机质量乘以持久可归属寿命末期份额后除以D。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_assets |
| q_quantity_retail_building | retail_building | 按calc_assets将一个实际完整资产全寿命背景模块乘f_a,i后除以D；不重复制造安装终端处理。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_assets |
| q_quantity_checkout_pos | checkout_pos | 按calc_assets将一个实际完整资产全寿命背景模块乘f_a,i后除以D；不重复制造安装终端处理。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_assets |
| q_quantity_weighing_scale | weighing_scale | 按calc_assets将一个实际完整资产全寿命背景模块乘f_a,i后除以D；不重复制造安装终端处理。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_assets |
| q_quantity_apple_display_rack | apple_display_rack | 按calc_assets将一个实际完整资产全寿命背景模块乘f_a,i后除以D；不重复制造安装终端处理。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_assets |
| q_quantity_cold_condensate | cold_condensate | 按cp_cold_water实测完整液相排出千克，并按calc_air_boundary核留存库存及捕集果品源水；仅以一个互斥载体量除以D。 | 原始源、归属分子、准确状态转换及最终每参考结果；cp_cold_water |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_scope` | all processes | 确认品种等级状态、普通空气R134a冷藏、常温陈列及收银净质量门口；不兼容加工、混品种或制冷剂不在范围内。 |  |
| `v_reference` | retail_service | 要求D为正、唯一最终验收商品历史、精确1千克服务输出及一次归一化。拒收、实物退回、再售、仅资金退款、内部转移和捐赠须可区分。 |  |
| `v_balance` | all inventory rows | 拒绝未闭合库存、湿基转换、水、制冷剂、源电表或持久资产平衡；验证B_s+B_f=R及成功商品下游恰好耦合一次。零产出池保留为不可归一化。 |  |
| `v_complete` | all inventory rows | 目标机械检查不批准方法或未解决身份。完整数据集须逐行绑定UUID属性单位介质、实际数量及背景、全部条件发生决定、实际新增原子流及双语一致；不得用无依据默认值。 |  |
| `v_returns` | all inventory rows | 按日期及差额审核晚退对原分子、D、湿基映射、背景及去向的更正；确保逆向处理事件不再向后续队列重复计量。 |  |
| split_completeness | all inventory rows | 核查每条准确身份和单一参考属性、全部实际工单组成、互斥计量、旧整包撤销、无重复来源/设备终端、全受益历史归属及最终分母一次归一。来源未验证、额外真实交换未建卡、数量未知或只写“合同包含”均不完整。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 前景增量零售服务 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 经适用性审查、绑定完成、数量平衡和不确定性实测的已声明苹果服务路线 |
| excluded_use | 整个分类覆盖；果品生产参考；笼统零售比较；身份状态转换或分母未解决时的完整结果 |
| required_metadata | 必需限定信息；具名条件交换；参考吞吐；上游成功失败收货状态分区；准确供应包边界；单过程协议视图 |
| required_quality_disclosure | 来源期间地域；样本代表性；缺失；仪器不确定性；零产出池；原始及晚退更正结果；未解决UUID背景及候选限制 |
| update_trigger | 品种等级状态、加工贮藏制冷剂渠道、供应背景、实际流、退回结果、资产寿命或来源证据变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc | official_guidance | UNSD, CPC Version 3.0, subclass 62121, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62121 | 分类含蔬菜水果坚果及预制保存组；仅支持较窄范围声明 |
| cde-apples | official_guidance | California Department of Education, Apples, Storage section, reviewed 2026-08-17, https://www.cde.ca.gov/ls/nu/fd/apples.asp | 苹果冷干贮藏及使用前不清洗支持所声明路线；学校食品指导，不提供零售合规阈值或损失因子 |
| jrc-retail | official_guidance | Schönberger, Gálvez Martos and Styles (2013), Best Environmental Management Practice in the Retail Trade Sector, EUR 25998 EN, doi:10.2791/1775; section 1.2 direct/indirect aspects, refrigeration and food-waste sections; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 电力制冷卫生包装及剩余物管理相关性；不借用数值基准，不宣称完整SRD符合性 |
| ghg-product | standard | WRI/WBCSD (2011), Product Life Cycle Accounting and Reporting Standard, chapter 9, printed page 63, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 仅用于一般细分及物理分配层次；池、湿基背景责任、退回更正及资产台账是明确PCR设计决定，不是来源强制因子 |
