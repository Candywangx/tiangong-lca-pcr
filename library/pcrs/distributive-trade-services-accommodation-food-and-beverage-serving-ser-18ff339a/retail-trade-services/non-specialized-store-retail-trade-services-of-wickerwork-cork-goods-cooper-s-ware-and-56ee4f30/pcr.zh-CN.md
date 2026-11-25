---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-wickerwork-cork-goods-cooper-s-ware-and-56ee4f30
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 顾客自提完整SNIDAD清漆藤编篮的常温门店零售

## 1. 范围与适用性

本PCR定义非专门门店对同一原始配置IKEA SNIDAD 303.949.44篮的收货、常温落地陈列、人工销售和顾客自提增量服务；标称直径54厘米、高39厘米。它是CPC 3.0:62146的较窄子集，该分类说明指向319组木、软木、编结材料和稻草制品。不包括家庭家具、桶匠制品、软木制品、成套篮、其他尺寸或材料、门店配送、湿处理、重新涂漆、修理、电动演示及门店新增包装。不得把这些路线平均进入本参考。一个篮是含绑扎件及脚件的完整物体，不是一千克藤材，也不是一套。 适用还必须满足support_operation规定的经核验自然通风、无空气调节的全门店/共用支持路线；存在燃烧、制冷/热泵、外购冷热或状态未知使本路线不适用。

这是有固定补全义务的部分增量方法；不能将未纳入的店内支持、商品生产及出行影响暗示为零。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-wickerwork-cork-goods-cooper-s-ware-and-56ee4f30 |
| classification_refs | CPC 3.0:62146；仅建议narrower关系，不是已接受映射 |
| covered_products | 经实物核验为清漆藤编材料路线的完整单个SNIDAD 303.949.44篮 |
| excluded_products | 家具；竹材替代；新增衬里；套装；改制篮；门店配送；制造 |
| representative_product | SNIDAD 303.949.44；标称直径54厘米、高39厘米；以实际批次及BOM为准 |
| production_route | 人工收货、常温陈列、顾客自提；无新增包装或商品处理 |
| market_state | 已涂饰成品篮，绑扎件和脚件完整；记录实际含水率及包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供从门店收货门到顾客实物交接及最终有效验收的指定篮零售服务 |
| How much | 一个最终有效验收的独立原始篮ID；Q对每个此类ID仅计一次 |
| How well | 实际SKU及配置正确、篮完整可用、凭证匹配；事先声明最终验收条件 |
| How long or cycle | 事先固定的门店及配置核算池，声明退货观察截止日；迟到事件修订原核算池 |
| reference_flow_link | retail_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 顾客自提完整SNIDAD清漆藤编篮的常温门店零售 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 门店及渠道; 核算池及版本和日期; 原始篮ID及收货批次; 解决竹藤冲突的供应商完整BOM及材料核验; 植物身份及含水率方法; 清漆及绑扎件/脚件/衬里规格; 实际原包装BOM; 区分包装质量的篮净质量; 最终验收规则及截止日; 保管/状态/去向台账; S/F/O/T背景责任; 缺失支持模块清单及补全状态; 经核验全门店/房东无燃烧/无制冷/无外购冷热自然通风证据 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| service_unit | retail_service | 物品数量 | Item(s) | 统一使用正式单位Item(s)。每参考流1件最终有效原始篮零售服务；Q为最终有效不同原始ID数，不能使用实物交接总次数、质量或套数。 |
| carrier_mass | whole_basket_waste; carton_waste; film_waste | 质量 | kg | 每个实际载体直接净称重，质量与计数独立；不按目录包装质量或估计含水率换算。 |
| selected_energy_identity | retail_electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | 所选交流电身份只有一个参考能量属性。实际归属量保留本行单位；其单位组中1kWh=3.6MJ。与另一能量单位来源合并或表达参考MJ交换前仅换算一次，同一分子不得重复换算，也不能推定供应组合。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已制成且材料经核验的完整篮及实际原包装在门店收货门进入保管。 |
| starting_condition_role | 增量服务门；供应商生产及到此门运输仍有独立背景责任。 |
| product_classification_scope | CPC 3.0:62146的藤编篮较窄子集；不是家庭家具。 |
| recursive_input_rule | 不得把同类零售服务重复作为核心输入；真实外包支持须有边界并去重。仅三张保管卫星输出basket_handover、basket_supplier_return及basket_external_retention不得再次链接制造。basket_receipt按background_ownership通过每个F原始供应商来源承载一次B_F；不得另加B_F。 |
| upstream_dataset_requirement | 每原始物取得完整B_j及收货门边界；支持提供商须有原LCI及分母；未知保持未决。 |
| disclosure | 部分核心边界、原Q、S/F/O/T、原始来源、材料冲突及固定支持缺口随结果披露。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| material_gate | custody | 制造商材料表将篮体及绑扎件列为藤和清漆、脚件列为聚乙烯及镀锌钢，但同一来源的描述或图像措辞出现竹。目录不能解决此冲突。收货时取得关联批次的供应商BOM并鉴别实物材料；保留植物种及来源或明确未解决的身份、清漆配方和干涂层质量、完整绑扎件及脚件以及任何衬里/胶/标签、干湿基准及含水率试验条件。使用前确认实际路线；材料或组成未知阻止完整建模。不得认为竹与藤环境等价。包装质量0.96千克不是实测篮净质量或组成比例。 | ikea-snidad |
| partial_boundary | retail; residual | 所评估核心仅包括可归属的使用点电力、实际完整废篮/原纸箱/聚乙烯膜交接及服务承担的原商品失败背景。basket_receipt是携带F原始收货商品背景的表征责任输入。basket_handover、basket_supplier_return及basket_external_retention为必须的实物卫星输出，不参加表征环境汇总且不链接上游。这是部分增量模块：全店占用及建筑、照明灯具、收银设备和软件、清洁、供暖/制冷/通风、职工出行及顾客出行均在核心之外；必须依complete_support及asset_lifetime固定方法补全支持。核心结果必须保留这些缺口，不得称为完整零售服务。最终验收商品的供应商生产及到同一收货门的进店运输通过B_S/Q在下游附加，绝不通过F责任输入或卫星输出附加。 |  |
| route_gate | retail | 使用已观察的人工落地陈列及顾客自提记录。门店新增袋、纸质小票、胶带、处理化学品、篮清洁、电动搬运设备、修理、脱漆、替换脚件或其他实际新增交换，在完整前必须补充具体原子卡、关联协议及双语一致投影。路线定义不会使其变为零。不存在必须由全池现场检查、采购及库存记录和员工确认支持；是否存在未知会阻止路线适用，或保留为披露的部分缺口。消费者干布护理及可能回收/能量回收的建议，不证明门店清洁、实际处理或避免负担抵扣。 | ikea-snidad |
| custody_state | custody; residual | 使用仅商品计数平衡，其中supplier_received与physical_customer_returns互斥，gross_customer_handovers为最初验收交接（含后续撤销），external_nonaccepted_handoffs为最初未验收外部出库，互不重叠：G_close=G_open+supplier_received+physical_customer_returns-gross_customer_handovers-supplier_handoffs-external_nonaccepted_handoffs-condemned-internal_asset_transfers-lost。报废判定把同一原始物从商品转入暂存废物；held_waste_close=held_waste_open+condemned-waste_dispatch，单位为原始ID当量。外运仅减少暂存废物，不能再次从商品扣除。质量独立记录；水分及储存变化不改变物体数量。遗失/被盗ID是独立商品出库，须调查责任，不能虚构为已外运废物。实际废物托运千克直接测量，不再按产生量及库存平衡二次修正。 每个实物事件ID只属于一个流入或流出类别。后撤销交付仍仅在原gross_customer_handovers内；external_nonaccepted_handoffs只计从未已入gross的额外实际出库。supplier_received不含已记physical_customer_returns的重复退回。 |  |
| background_ownership | custody | 每个原始j保留完整收货门上游清单向量B_j，包括篮材料/涂层/脚件、实际原包装及制造和到该门的运输。每个完整原始物仅一次归入互斥最终责任S（最终有效验收）、F（服务承担的失败/损失，含门店承担责任的外部留存）、O（未决库存/暂存废物责任）或T（具名供应商/内部资产/其他持续责任）。责任不是实物移动。供应商退货保留原始来源及版本和具名责任人；不得自动消失或抵扣。验收并再次出售的原始物仅携带一个B_j，不得再次计制造。部分组件分离必须取得已验证供应商组件清单向量并守恒确切来源及边界，绝不按B_j的质量比例分割。转作永久陈列资产的T沿用同一原始来源及寿命台账，不得同时计F及新增购置。 |  |
| state_carriers | residual | 完整报废篮废物包含实物现有清漆、绑扎件及脚件；不得再输出其藤/钢/聚乙烯组成。保留原始ID及毛/皮/净称重和接受该完整涂饰混合材料载体的接收处理合同。开封/损坏篮退给供应商不能由完好篮转移描述：完整报告前须增写状态特定卡。外部留存未验收篮须有实际接收者、状态、验收撤销及背景责任人，不能自动记为门店废物。原纸箱及膜卡仅含已验证互不重叠的托运部分。原包装BOM、其他载体、接收覆盖或实际处理未知阻止完整性。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| custody | 原始篮保管及责任 | required | 全部原始物及事件；F责任输入及实物卫星输出 | F产品背景输入及独立不表征保管输出 | Q |
| retail | 人工常温零售 | required | 已核验指定路线 | 增量服务核心 | Q |
| residual | 原载体实际废物交接 | conditional | 存在实际托运；无托运留存暂存库存，未知阻断 | 含接收运输/处理边界的终端载体 | Q |
| support_completion | 固定支持补全 | excluded_by_default | 部分核心外；完整服务声明前强制补全 | 全店支持及寿命模块 | Q |

### 过程：原始篮保管 (`custody`)

#### 输入

##### 产品流

###### 归属服务失败责任的实际原收货包装内完整SNIDAD 303.949.44篮 (`basket_receipt`)

N_F/Q Item(s)，N_F对每个归F的不同原始物仅计一次，并链接其实际原收货门篮及包装B_j清单。这是表征的产品责任输入，仅一次携带B_F/Q，不是所有实物收货、退回时新增制造或质量份额。实物供应商收货及顾客重复退回仅在独立cp_custody台账保留。必须取得实际原包装BOM、原始供应商来源及到收货门运输边界；不得假定包装。不得另加B_F重复该输入。

- 选定流：归属服务失败责任的实际原收货包装内完整SNIDAD 303.949.44篮
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_F/Q Item(s)，N_F对每个归F的不同原始物仅计一次，并链接其实际原收货门篮及包装B_j清单。这是表征的产品责任输入，仅一次携带B_F/Q，不是所有实物收货、退回时新增制造或质量份额。实物供应商收货及顾客重复退回仅在独立cp_custody台账保留。必须取得实际原包装BOM、原始供应商来源及到收货门运输边界；不得假定包装。不得另加B_F重复该输入。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_custody`
- 来源：ikea-snidad

#### 输出

##### 产品流

###### 向顾客实物交接的完整SNIDAD 303.949.44篮 (`basket_handover`)

实际最初验收完整篮实物交接总事件数 / Q；仅保管卫星记录。包含后来撤销的实物交接；不得以最终有效Q代替此分子。实物退回为独立台账条目，不是负新增制造。

- 选定流：向顾客实物交接的完整SNIDAD 303.949.44篮
- 流属性/单位：物品数量 / Item(s)
- 数量规则：实际最初验收完整篮实物交接总事件数 / Q；仅保管卫星记录。包含后来撤销的实物交接；不得以最终有效Q代替此分子。实物退回为独立台账条目，不是负新增制造。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_custody`
- 来源：

###### 退回供应商保管的完好完整SNIDAD 303.949.44篮 (`basket_supplier_return`)

实际完好完整篮向供应商实物交接数 / Q；以记录的交接为纳入条件。仅保管卫星记录，须有接收人/名称/状态及持续B_j责任人。损坏或组件打开的退货须另设状态特定卡，不能用此完好交换。

- 选定流：退回供应商保管的完好完整SNIDAD 303.949.44篮
- 流属性/单位：物品数量 / Item(s)
- 数量规则：实际完好完整篮向供应商实物交接数 / Q；以记录的交接为纳入条件。仅保管卫星记录，须有接收人/名称/状态及持续B_j责任人。损坏或组件打开的退货须另设状态特定卡，不能用此完好交换。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_custody`
- 来源：

###### 完整但未验收而由外部留存的SNIDAD 303.949.44篮 (`basket_external_retention`)

实际最初未验收完整篮外部实物出库数 / Q，以观察到事件为条件且与basket_handover互斥。状态为原始组件仍全在的完好/损伤涂饰篮，记录实际损伤及接收者。仅保管卫星记录，不是服务产出，也不自动标为废物。后续验收撤销而无新移动，仅更新原交接状态，不在本卡再计出库。按有证据责任将B_j归F/O/T。缺组件须新增具体卡。

- 选定流：完整但未验收而由外部留存的SNIDAD 303.949.44篮
- 流属性/单位：物品数量 / Item(s)
- 数量规则：实际最初未验收完整篮外部实物出库数 / Q，以观察到事件为条件且与basket_handover互斥。状态为原始组件仍全在的完好/损伤涂饰篮，记录实际损伤及接收者。仅保管卫星记录，不是服务产出，也不自动标为废物。后续验收撤销而无新移动，仅更新原交接状态，不在本卡再计出库。按有证据责任将B_j归F/O/T。缺组件须新增具体卡。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_custody`
- 来源：

### 过程：人工常温零售 (`retail`)

#### 输入

##### 产品流

###### 零售使用点交流电 (`retail_electricity`)

按pool_allocation实测互不重叠可归属电力千瓦时 / Q；原始总量含实际待机及失败时段，并对原池版本作有符号修订。供应商支持包内电力不得再计。

所选流使用单一净热值能量属性。清单保留声明的实测能量单位；能量单位组支持1kWh=3.6MJ。将kWh记录表达为参考MJ（含兼容来源合并）时仅换算一次，保留原kWh表计分子及来源归属，不能另加一次电力需求。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：按pool_allocation实测互不重叠可归属电力千瓦时 / Q；原始总量含实际待机及失败时段，并对原池版本作有符号修订。供应商支持包内电力不得再计。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：ghg-product-allocation

#### 输出

##### 产品流

###### 顾客自提完整SNIDAD清漆藤编篮的常温门店零售 (`retail_service`)

每参考流1件；Q>0时为Q/Q，使用final_service及cp_acceptance。这是一个验收原始物的服务，不是商品制造流。

- 选定流：顾客自提完整SNIDAD清漆藤编篮的常温门店零售
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：

### 过程：实际废物交接 (`residual`)

#### 输入

#### 输出

##### 废物流

###### 含绑扎件及脚件的完整报废清漆SNIDAD篮 (`whole_basket_waste`)

实际直接净称重的完整废篮托运千克 / Q；以实际交给具名接受供应商为条件。实物现有涂层/绑扎件/脚件仅计一次。暂存未外运不是外运。使用state_carriers及cp_waste；环境处理/收集来源仅一次覆盖该完整载体。

- 选定流：含绑扎件及脚件的完整报废清漆SNIDAD篮
- 流属性/单位：质量 / kg
- 数量规则：实际直接净称重的完整废篮托运千克 / Q；以实际交给具名接受供应商为条件。实物现有涂层/绑扎件/脚件仅计一次。暂存未外运不是外运。使用state_carriers及cp_waste；环境处理/收集来源仅一次覆盖该完整载体。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：

###### 原始瓦楞纸板纸箱废物 (`carton_waste`)

实际直接净称重的原瓦楞纸箱废物千克 / Q；仅在原包装BOM及实际分开托运证实时适用。排除随完整废篮去向的附着物及其他分开去向部分。分别记录留存/交顾客包装及原始来源责任；不得假定存在纸箱。

- 选定流：原始瓦楞纸板纸箱废物
- 流属性/单位：质量 / kg
- 数量规则：实际直接净称重的原瓦楞纸箱废物千克 / Q；仅在原包装BOM及实际分开托运证实时适用。排除随完整废篮去向的附着物及其他分开去向部分。分别记录留存/交顾客包装及原始来源责任；不得假定存在纸箱。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：

###### 原始聚乙烯包装膜废物 (`film_waste`)

实际直接净称重的原聚乙烯膜废物千克 / Q；仅在实际材料鉴别及分开托运证实时适用。不得替换为通用塑料。对附着于其他已外运载体的膜去重；膜组成未知时，完整前须新增已鉴别卡。

- 选定流：原始聚乙烯包装膜废物
- 流属性/单位：质量 / kg
- 数量规则：实际直接净称重的原聚乙烯膜废物千克 / Q；仅在实际材料鉴别及分开托运证实时适用。不得替换为通用塑料。对附着于其他已外运载体的膜去重；膜组成未知时，完整前须新增已鉴别卡。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| final_service | retail_service | Q是截止日最后有效验收仍成立的不同原始ID集合基数。实物退回后重售最多贡献一个最终有效ID。即使没有实物退回，撤销也使验收无效；不得从已最终有效的集合再次扣撤销。仅退款或折扣而验收仍有效不减少产出。总实物保管、事件次数、拒收尝试及退货分开记录。事先固定同配置核算池保留重复工作、失败及零销售时段。Q=0时保留原始总量并标为不可归一化，不得删除或有选择地转给成功时段。迟到退货按实际日期和版本替换原池分子、Q及B责任/去向，不得在收到退货的池再次收费。 |  |
| pool_allocation | retail_electricity | 先使用声明核心内实际搬运/陈列/收银电力的专用电表；若母表包含该电路，制作互不重叠支持时仅减一次。不得从已独立的电表再减。不可避免共用电力先拆分实测活动、待机及固定来源分子池，使其千瓦时合计与母表一致。活动池按所有受益者实测带电交易秒数分配；待机及固定池按所有受益者实测预留面积乘时间分配，包含闭店及失败时段。每池一个同单位驱动量，且总量已知为正。不得把秒与平方米小时相加、使用销售额或让零驱动隐藏待机能耗。仅分配后汇总同单位可归属千瓦时，再除Q一次。因果驱动或分池未知时保留未分配实测千瓦时并阻止完整服务结果。 | ghg-product-allocation |
| asset_lifetime | support_completion | 对每件实际完整店壳/装修、固定照明、陈列支持及收银资产a取得型号/BOM或已验证完整供应商生命周期包、购置及来源ID、安装、所有既往受益者暴露和替换版本。每资产声明一个因果单位，f_ab=e_ab/L_a，其中e_ab为当前受益者暴露、L_a为含全部过去/当前/未来受益者的预期总寿命暴露。店壳及灯具可按面积乘时间，收银按交易秒；不得相加不同驱动。制造/安装清单向量乘f_ab；累计寿命份额<=1。报废时使用实际总寿命暴露替换每个历史受益者份额并记剩余及修订；寿命变更替换所有旧版本，绝不重启完整制造。终端整资产净载体仅乘同一最终寿命份额一次；整设备直接净称重与BOM重构互斥。实际替换/维护使用事件特定来源及所有该事件受益者；排除制造商包内修理/寿终及供应商包内公用工程，避免重复购置、维护、运行及退役。 |  |
| complete_support | support_completion | 完整服务声明前，补全固定占用包，覆盖同门店/核算池实际建筑/灯具/陈列/收银资本及寿终、核心电表外的共用照明及收银电力、经核验无燃烧/制冷/外购冷热的自然通风、卫生/清洁运行及实际维护。取得签署的供应商LCI边界及原始数量基准，或逐个编写实际原子交换及协议；单张发票不足。供应商归一化行x按有证据原分母D_x恢复为同池原始分子N_x=x*D_x，按适用的独立电表/pool_allocation或asset_lifetime分配，然后仅对同流身份/属性/单位/边界按确切来源ID及版本去重汇总，原始总分子仅除最终Q一次。不得千焦与千克相加或归一化量与原始量相加。占用包不能再次含核心电力及废物来源。运行或供应商覆盖未知保留为具名阻断缺口，不能视为零。 |  |
| support_operation | support_completion | 本PCR只允许有证据的自然通风、无空气调节门店路线，在门店支持控制边界内无现场燃烧、无制冷/热泵/含制冷剂运行设备、无外购热或冷。使用路线前检查全部门店及共用房东设备、公用工程合同/账单、采购/维护清单及完整核算日期；供应商/房东证明必须覆盖共用支持而不仅篮区域。状态未知或存在任何此类设备/能源使本路线不适用：使用前须编写并独立审查特定扩展路线，完整规定燃料/制冷剂初充、运行、回收、含物转移、室内/控制体及外部环境介质方法。不得把未知设备简单标零。实际电力仍按pool_allocation计量。自然通风不证明商品零排放；室内产生不能报告为向外部空气的基本流转移。任何商品来源物种排放/捕集主张，须另有经审查实测进/出口、空气库存、商品库存及捕集控制体模块和实际外部介质，并对终端捕集载体去重；未提供时不推断排放因子或负抵扣，结果保持明确部分。 |  |
| cleaning_completion | support_completion | 必须的门店清洁支持采集实际配方身份/浓度及原供应制剂千克、水表边界和密度/状态、容器/擦布库存及带日期清洁事件。最终原制剂质量去向互斥：未用期末库存、容器留存残液、湿布留存制剂、已排制剂及另捕集固体；used为中间状态，由这些后续去向替换，不能作为另一相加去向。制剂来源千克排除新增冲洗水及污物。完整废液数量仅二选一：直接毛减皮净液称重，或实测实际完整废液体积乘同载体实测密度；不从水平衡重构，也不因蒸发/回用再扣。供水表本已排除内部回用。湿布、容器残液及排液托运各用实际完整载体净质量，来源部分互不重叠；湿质量不是原制剂千克。宣称支持完整前须编写实际已鉴别配方、水、擦布生命周期及完整废物载体原子卡/协议；身份或接收许可未知阻止补全。 |  |
| transport_completion | support_completion; residual; custody | 每个实际运输来源规定趟次/分段p、车辆/供应商、载货距离千米、实际完整托运毛载荷千克、行驶小时及静止怠速小时、容量千克、每个实际受益者b的预留容量C_pb千克及预留时间t_pb小时，包含运营方/未利用容量责任。载货吨千米=payload_kg*distance_km/1000是活动核查，不是完整空载趟次计量。保留实际空载调位及怠速分段。供应商已对确切托运清单分配时，恢复其原基准并保留分配；分段记录仅核查，不再乘份额。否则取得完整互不重叠原始分段清单向量N_p，明确车辆制造/安装/维护/寿终及运行电力/燃料/上游边界；核验每阶段仅覆盖一次，排除已在B_j或废物供应商包内边界。各段仅按w_pb=C_pb*t_pb、share=w_pb/sum_b(w_pb)分配一次，使所有分母项为千克小时。即使载荷/距离为零，也纳入实际行驶及静止怠速预留时间；预留及受益者须与合同/路线容量和时长核对。存在活动而预留总量未知或零阻止补全，不能赋零。仅汇总兼容已分配交换单位，然后仅除共用Q一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_custody | custody | F原始物产品责任输入及独立保管卫星 | 原始前景记录 | original_id; receipt_lot; supplier_model/BOM/material_test; botanical_identity/provenance; bamboo/rattan_conflict_resolution; moisture_value/method/wet_dry_basis; actual_lacquer/binding/feet/liner/label; original_pack_BOM; gross/tare/net_basket_kg; event_id/date/state/recipient; goods_open/supplier_received/physical_customer_returns/initially_accepted_handovers/supplier_handoffs/external_nonaccepted/condemned/internal_asset/lost/goods_close; held_waste_open/condemned/dispatch/close; B_j/source/version/receiving_gate; S/F/O/T_owner; component_inventory_vectors; N_F; F_original_ids; original_supplier_inventory_vector; original_pack_BOM; mutually_exclusive_event_category | 每个原始物收货并赋条码；检查关联批次材料及含清漆/脚件的完整BOM。用校准秤排除另记包装称量；记录水分仪器、校准、温度/时间及干湿基准。以供应商/顾客凭证核对带日期移动及独立商品/暂存废物状态。取得原收货门供应商清单及进店运输边界；无供应商已验证组件时仅转移完整向量。 独立识别每个F原始物，仅一次把其收货门B_j链接至basket_receipt的N_F/Q责任输入；实物重复收货次数不作为该数量。逐事件核验互斥类别，后撤销无新移动仅重分类原gross交付终态。 | Item(s); kg | 每事件及期末 | 全部原始物，含失败及未售库存 | 同门店及配置；来源母体历史 | 每参考流 | 批次BOM、照片、材料鉴别、秤及水分校准、清单来源凭证及签署责任 |
| cp_acceptance | retail | 最终有效参考服务 | 原始前景记录 | pool_id/version/start/end/cutoff; original_id; sale/physical_handover/return/revocation/resale/refund_event_id/date; final_valid_acceptance; rejected_attempt; source_pool_correction; Q | 按original_id连接销售和带日期验收/退货记录，核查实际验收条件，独立重算最后有效状态；保留事件历史及迟到修订版本。 | Item(s) | 每事件；期末及迟到事件修订 | 全部声明池，含零产出 | 同门店及篮配置 | 每参考流 | 收银/验收凭证、带日期退回状态、唯一ID审计 |
| cp_energy | retail | 使用点电力 | 原始前景记录 | pool/version; meter_id/circuit_boundary/start/end/kWh/calibration; core_submeter_in_parent; active/idle/fixed_kWh; beneficiary_id; powered_seconds; reserved_m2; duration_h; corrections; Q | 全池读取校准电表；记录电路图及重叠母/子表。核验活动/待机/固定千瓦时来源分池及全部受益者同单位驱动。保留待机/闭店/失败时段及带日期修订。 | kWh; s; m2*h | 间隔读数及期末核对 | 全部营业/闭店/零销售间隔 | 核心电路；全部实际共用受益者 | 每参考流 | 电表校准、电路图、间隔日志及分配核对 |
| cp_waste | residual | 完整篮及互不重叠原包装实际外运 | 原始前景记录 | consignment/date/recipient/provider_contract/treatment/transport_boundary/loaded_empty_idle_coverage/provider_allocation_status; source_original_id/B_owner; state/components; gross/tare/net_kg/scale/calibration/moisture; original_pack_BOM/material; carton_kg; PE_film_kg; whole_basket_kg; opening/generated/held/dispatch/closing; retained/customer_transferred_pack; overlap_ids; Q; trip_id/segment_p/beneficiary_b; payload_kg/distance_km/travel_h/idle_h/capacity_kg/C_pb/t_pb; provider_already_attributed; N_p/source_phase_boundaries | 使用校准毛/皮秤称每批实际分开载体；鉴别完整涂饰篮组件及实际包装聚合物/纤维。核验接收合同接受确切载体并覆盖运输/处理，或另取不重叠运输模块。实际供应商须覆盖观察到的载货、空载及静止怠速活动；空载趟次不是零运输。已归属托运清单保留其分配，分段记录仅作核查，不再次相乘。空载/怠速覆盖未知阻止完整。独立核对暂存废物及原材料状态，实际外运净千克绝不二次调整。 缺少提供商已归属覆盖时，只能按transport_completion取得原始分段向量及同单位千克小时分配，不能套载货吨千米给空载或怠速。 | kg | 每外运；期末库存 | 全部托运及暂存 | 同池，保留原始来源谱系 | 每参考流 | 称重单、照片、供应商边界及来源ID去重 |
| cp_support | support_completion | 固定缺失支持补全 | 原始前景记录 | module/site/pool/version/owner; original_provider_LCI/source_id; normalized_row/flow/property/unit/D_x; raw_N_x; duplicate_source_scope; parent/submeter_scope; active/idle/fixed_pools/drivers; asset_id/model/BOM/installation/acquisition/lifetime_versions/all_past_beneficiary_e/L; retirement_net_or_BOM_mode; replacement_event; terminal_carrier; actual_electricity; cleaning_formulation/source_kg/fates; water/effluent_meter/density; wet_carrier_kg; room_species_inlet/outlet/storage/capture; operation_presence/absence_evidence; Q; natural_ventilation_inspection; no_combustion/no_refrigeration/no_purchased_heat_cold_evidence; landlord_shared_equipment_scope; cleaning_formulation_identity/concentration/supplied_kg/unused_stock/container_residue/wetcloth_retained/drained/capturedsolid; used_intermediate_reclassification; whole_effluent_mode/gross/tare/volume/density; cloth/container/drain_carrier_ids; trip_id/segment_p/beneficiary_b; vehicle/provider; payload_kg/distance_km/travel_h/idle_h/capacity_kg/C_pb/t_pb; provider_already_attributed; N_p/source_phase_boundaries | 取得确切已签署供应商包，或为固定完整支持清单采集具名单项来源记录。核验实际运行设备/采购/维护，识别燃料/制冷剂/清洁及不存在证据。恢复原始分母；审计所有历史资产受益者及修订版本。来源、物种、原基准、因果暴露或供应商排除缺失时阻止补全，不选默认值。 路线仅限经全门店及房东支持核验的无燃烧/无制冷/无外购冷热自然通风条件；有或未知即不适用。对清洁使用cleaning_completion的互斥最终制剂去向及直接完整废液计量；对运输使用transport_completion的分段原始来源及千克小时全受益者预留。 | source-specific unchanged | 每原始来源/事件；期末及寿命修订 | 全部固定模块清单；全部资产历史 | 同门店/池及确切供应商边界 | 应用complete_support、asset_lifetime及support_operation；仅汇总原始兼容行，按来源/版本去重，最终Q仅除一次。 | 供应商LCI及原基准、资产/BOM台账、运行/不存在检查、修订及边界核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_count | retail_service | Q为截止时final_valid_acceptance=true的不同original_id数。应用final_service版本替换。Q>0时产出一个服务件，否则保留未归一化原始池。 | original_id; final_valid_acceptance; cutoff; source_pool_correction; cp_acceptance | Q；一个参考服务件 |  |
| background_sum | basket_receipt; basket_handover; basket_supplier_return; basket_external_retention; retail_service | B_S为归S完整B_j之和，B_F为归F完整B_j之和，B_O/B_T独立保留。服务背景=B_F/Q；已售商品下游背景=B_S/Q，在增量服务之外仅附加一次。对同交换单位逐分量满足B_S+B_F+B_O+B_T=原始B_j之和。不得给完整B_j再乘篮千克比例、外运比例或已归一化保管次数。 N_F=不同F原始ID数；basket_receipt的N_F/Q输入以每原始物的原供应商B_j来源承载B_F/Q，不能再额外加B_F/Q。总收货事件仅作保管核对，不进该输入数量。 | B_j; receiving_gate; source/version; S/F/O/T_owner; component_inventory_vectors; Q; cp_custody; cp_acceptance; N_F; F_original_ids; original_supplier_inventory_vector; original_pack_BOM | 每参考流来源守恒背景向量 |  |
| electricity_sum | retail_electricity | 每个互不重叠的千瓦时来源池p使用E_pb=E_p*d_pb/sum_b(d_pb)。活动d为powered_seconds；待机/固定d为reserved_m2*duration_h。核对sum_b(E_pb)=E_p，再算E_core=sum_p(E_pb)；行数量=E_core/Q。不同驱动单位不进入同一求和。专表E_core不再共用分配。 | active/idle/fixed_kWh; powered_seconds; reserved_m2; duration_h; beneficiary_id; core_submeter_in_parent; Q; cp_energy | 每参考流千瓦时 | ghg-product-allocation |
| dispatch_sum | whole_basket_waste; carton_waste; film_waste | 对每个实际已鉴别载体使用consignment_net_kg=gross_kg-tare_kg并汇总互不重叠已接受托运。外运行=sum(consignment_net_kg)/Q。期初+产生-外运=期末仅为独立暂存废物核查；不得据此二次扣外运或替代实测托运。 | consignment_id; gross_kg; tare_kg; carrier_identity/state; overlap_ids; provider_contract; Q; cp_waste | 每个载体的每参考流千克 |  |
| support_restore | support_completion | 每来源行按有证据原分母恢复raw_N_x=normalized_row_x*D_x；对完整生命周期资产应用同池不重叠分配或f_ab=e_ab/L_a，并在寿命修订时替换每个旧受益者/版本。仅相加兼容且按来源去重的原始交换分子，含承载F责任输入的核心，B_F不额外重复添加，然后仅除Q一次。原始量与归一化量不得混加。遵循complete_support及support_operation；缺模块保持部分。 遵循cleaning_completion及transport_completion，并仅使用support_operation限定已核验路线。 | normalized_row_x; D_x; raw_N_x; source_id/version; duplicate_source_scope; e_ab; L_a; all_past_beneficiary; lifetime_versions; replacement_event; terminal_carrier; actual_operation_sources; Q; cp_support; natural_ventilation_absence_evidence; whole_effluent_mode; formulation_final_fates; segment_p; beneficiary_b; N_p; C_pb; t_pb; provider_already_attributed | 每参考流已补全兼容清单，或明确部分状态 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | custody | 完整数据集前解决实际藤/竹材料冲突、植物种/来源、完整供应商BOM、涂层、脚件、衬里及原包装；明确保留未决谱系。不得将目录0.96千克转换为净质量或默认干物质。 | 关联批次供应商声明、实物鉴别及校准测量 |
| q_time | retail; custody; residual | 覆盖事先声明的完整时段及全部失败/未售/闭店事件；迟到事件必须替换原池。观察日期与记账日期分开。 | 不可变事件ID及版本化核对 |
| q_uncertainty | retail_electricity; whole_basket_waste; carton_waste; film_waste | 保留仪器不确定性、电表覆盖、水分状态及接收覆盖。来源未建立类别行业区间；明确保留实测数据及未解决区间证据，不编造数值因子。 | 校准记录、原始间隔单据及供应商合同 |
| q_support | support_completion | 每个结果必须附部分模块缺口。补全须有签署的确切供应商边界/原分母或新增实际原子卡、全部历史资产版本、运行记录及同来源去重。必要固定照明及灯具不能因已有电力而消失。 必须记录support_operation的全门店/房东路线不存在证据；存在或未知时路线不适用，而非仅保留未知燃料/制冷剂后继续。 | 固定清单、原供应商清单、资产历史及双语投影审计 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| identity_check | custody; retail | 要求原始ID/批次核对、材料冲突解决、实际完整BOM及水分/包装基准。缺UUID明确保持未绑定；绑定前从正式原件确认名称/类型/属性/单位/状态/介质，不得推断等价。本候选不建立方法批准、全标准符合性或定量行业区间。 |  |
| denominator_check | retail_service | 独立于总交接次数重新计算最终有效集合。每次退回/撤销/重售/损失须匹配原始来源及池修订。分别核对仅商品计数平衡、暂存废物状态台账及废物实测托运量。调查差异及不确定性；不得把未解释负值截零或虚构废物去向。 |  |
| source_conservation | custody; residual; support_completion | 验证完整原始物S/F/O/T背景向量之和等于原始B，来源/版本责任唯一且进店运输/包装边界真实。B_F仅进入服务一次，B_S仅进入已售商品下游一次；O保持未决，T须有具名持续模型。实物接收者及状态输出不能替代背景责任。核验完整废篮与分开的包装部分及实际供应商处理/运输覆盖，不加抵扣。 |  |
| completeness_gate | support_completion | 明确保留缺失模块/身份/数量/区间证据。完整报告要求确切供应商/原始池/版本凭证、全资产历史寿命替换、所有同单位受益者、已定义支持运行，以及每个实际未表述交换的新原子卡，随后双语同步。在此之前仅报告带原Q及未归一化零产出池的部分核心。Q=0、责任人未知、来源边界缺失或供应商覆盖未知均禁止归一化完整结果。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 部分增量零售服务；保管为卫星台账 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按实际配置及相同收货门组合商品B_S/Q和已补全不重叠支持；明确部分披露 |
| excluded_use | 整叶覆盖、篮制造足迹、竹藤等价、家具零售、完整企业/服务宣称、默认回收抵扣 |
| required_metadata | 门店及渠道; 核算池及版本和日期; 原始篮ID及收货批次; 解决竹藤冲突的供应商完整BOM及材料核验; 植物身份及含水率方法; 清漆及绑扎件/脚件/衬里规格; 实际原包装BOM; 区分包装质量的篮净质量; 最终验收规则及截止日; 保管/状态/去向台账; S/F/O/T背景责任; 缺失支持模块清单及补全状态; 经核验全门店/房东无燃烧/无制冷/无外购冷热自然通风证据 |
| required_quality_disclosure | 全部未绑定身份、材料/BOM/数量/区间证据缺口、支持包缺失、仪器不确定性、零Q及历史修订 |
| update_trigger | 材料/配置/包装/门店/路线/接受条件/背景责任或寿命/供应商边界变化及迟到退货 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-62146 | official_guidance | United Nations Statistics Division, CPC 3.0:62146 explanatory note; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62146 ; retrieved2026-10-27 | 分类说明指向319组；较窄解释不是映射批准 |
| ikea-snidad | handbook | IKEA SNIDAD 303.949.44 basket, rattan54x39cm, manufacturer product page; https://www.ikea.com/ca/en/p/snidad-basket-rattan-30394944/ ; retrieved2026-10-28 | 代表商品及材料栏目；同源竹/藤措辞冲突、无完整定量BOM；不提供门店数据/制造因子或质量默认值 |
| ghg-product-allocation | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard2011, chapter9 printed63/PDF65 Tables9.1–9.2; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 仅支持先细分后按物理关系分配的一般顺序；具体驱动、服务池、寿命及责任是本PCR采集设计，不宣称完整标准符合性 |
