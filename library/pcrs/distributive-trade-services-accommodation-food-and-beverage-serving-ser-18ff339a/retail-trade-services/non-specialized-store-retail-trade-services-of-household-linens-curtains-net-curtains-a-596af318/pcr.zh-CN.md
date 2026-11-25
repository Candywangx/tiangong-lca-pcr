---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-household-linens-curtains-net-curtains-a-596af318
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 非专门店干燥棉毛圈浴巾柜台自提零售服务


## 1. 范围与适用性

本PCR定义从门店接收到最终柜台验收一条干燥棉毛圈浴巾的明示部分增量零售服务。每个数据集固定一个实际供应商SKU、颜色、尺寸、面密度、整理方式、含水状态及原包装配置；不同SKU或配置不得平均成一个参考件。制造商代表规格只说明真实棉毛圈对象，不是实测清单。不覆盖洗涤、烘干、裁剪、缝制、窗帘安装、专门店销售、送货上门、绳网或其他纺织商品。第5节和calc_complete固定场所、资产、运输及失败商品上游责任的强制补全方法，补全前不得声称完整服务清单。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-household-linens-curtains-net-curtains-a-596af318 |
| classification_refs | CPC 3.0 62132; narrower |
| covered_products | 同一声明实际SKU、保持原包装配置的干燥未使用折叠全棉毛圈浴巾柜台交付零售服务 |
| excluded_products | 窗帘; 网帘; 绳索; 网具; 其他纺织品; 二手浴巾; 翻新或洗涤商品; 包裹配送 |
| representative_product | 示例为VÅGSJÖN 405.762.55亮蓝色浴巾，70乘140厘米、400克/平方米、全棉；必须采集实际批次、包装BOM、整理和接收净质量，不得通用采用网页包重 |
| production_route | 非专门店接收、干燥储存/陈列、有人柜台交付、实际退回与库存去向；不改变商品 |
| market_state | 未使用干燥棉毛圈浴巾及其记录的吊标、束带和原包装；开包/破损状态另记，不能计为合格原包装验收 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 接收、持有、陈列并在门店柜台向顾客交付声明浴巾 |
| How much | 一件最终有效验收服务，不是一千克棉或一笔付款 |
| How well | SKU正确、原包装配置保持记录状态、干燥未使用且无污染和损伤；最终接收方验收持续有效 |
| How long or cycle | 一个接收至最终去向队列，声明退货截点；晚到更正重开原队列分子与分母 |
| reference_flow_link | service_out |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一条干燥棉毛圈浴巾柜台自提零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 实际供应商SKU与批次; 颜色; 尺寸及面密度; 包含附属装饰的棉成分; 整理; 实测接收净质量与含水状态; 原吊标/束带/包装BOM与配置; 接收门; 门店与柜台路径; 池日期与配置; 最终验收及退货截点; 最终去向与背景责任方; 部分边界及补全模块版本 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| unit_service | service_out | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 一个参考件是一件合格最终服务。Q按calc_accept统计唯一有效最终验收记录，不是库存数、毛交付数或收款笔数。 |
| unit_electricity | counter_ac | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 归属后的使用点千瓦时按恰好3.6兆焦/千瓦时换算，再仅除Q一次。UUID不说明电网、供应方或电压。 |
| unit_carrier | bag_ldpe; receipt_paper; waste_bag; waste_receipt_core; waste_carton; waste_film; waste_tag; waste_towel; supplier_towel; external_towel; cleaning_water; cleaning_detergent; cleaning_effluent; waste_cleaner_bottle | 质量 | kg | 采用声明含水/状态下整个载体实测净质量并扣皮重。实际体积乘记录温度下批次实测密度可替代直称，不是额外乘数。不得用标称尺寸乘面密度或目录包重代替接收质量；湿废物不得默认为干棉。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 门店接收门接收实际干燥浴巾及原包装；同接收门上游责任另划分 |
| starting_condition_role | partial_incremental_service |
| product_classification_scope | CPC3.0 62132的更窄子集；其说明包括271、273及279组 |
| recursive_input_rule | 内部储存/退回/再售不递归添加另一个零售服务；保持一条单件谱系 |
| upstream_dataset_requirement | 兼容实际供应BOM/接收状态、明确B_S/B_F/B_T/B_O及源行分母 |
| disclosure | 全部强制补全模块及身份有证据前仅为部分直接增量；不暗示方法批准 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| bound_scope | all processes | 仅采用第2节路径与限定信息。逐批核实原吊标/束带/包装成分和交付状态；可见污渍、异味、受潮、霉变、撕裂或要求原包装被改变时，隔离并记录处置。不假定零售洗涤或商品消毒。若实际发生该处理，则在另行审查的转化扩展中英编写并同步前，本路径不适用。 | ikea-towel-spec |
| bound_partial | all processes | 直接前景包括实测柜台回路、新增袋/小票、实际原包装废物、失败浴巾去向及地面清洁。排除成功商品制造与进店运输、顾客出行/使用/报废，以及未展开的场所/资产/物流模块。本结果是部分增量；完整零售服务须依calc_complete、calc_assets、calc_transport及calc_background补全，且不得与直接行重叠。 | jrc-retail-2013 |
| bound_ownership | receiving | 通过内部移动、退回、开包与再售保持唯一接收批次/单件谱系。已售商品制造和到同一接收门运输仍为另披露的母系统责任B_S。原接收门等价千克/BOM负荷仅一次分至B_S、零售失败B_F、转移B_T和开放B_O。退供及外部持有失败须有具名接收方、物理状态、责任协议和继续承担，不自动为废物。原包装生产遵循同一母系统责任，但实际零售拆除处理仍在此。 | ghg-product-2011 |
| bound_extensions | all processes | 以发票、库存、现场走查及废物联单证明每个条件行是否存在。其他实际材料、清洁药剂、包装、污染、直接外界排放或浴巾状态变化，必须先在两语增加具名原子卡、单过程协议、属性/单位、去向及上游责任，才能完整。未知不等于零。真实完整设备、定义混合物或有证据的同质服务保留一项交换，不重复添加其组分。 | jrc-retail-2013 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receiving | 接收、干燥保管及最终库存去向 | required | 全部接收批次及实际失败/退回 | foreground | 关联柜台队列最终Q |
| counter | 有人柜台验收 | required | 每次尝试及有效最终交付 | foreground | service_out |
| cleaning | 地面清洁 | conditional | 实际地面清洁事件；证明不存在或替代处理 | foreground | 同一最终Q |

### 过程：接收及库存去向 (`receiving`)

#### 输出

##### 产品流

###### 原包装完好退供的干燥未使用棉毛圈浴巾 (`supplier_towel`)

条件性实物转移，不给抵扣且不产生新服务。须核实接收方及继续承担B_T；包装改变的转移须增加实际状态扩展。

- 选定流：原包装完好退供的干燥未使用棉毛圈浴巾
- 流属性/单位：质量 / kg
- 数量规则：实际完好退供交接千克 / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stock`
- 来源：`jrc-retail-2013`

###### 撤销验收后顾客保留原包装完好的干燥棉毛圈浴巾 (`external_towel`)

条件性已知原包装完好干燥整条浴巾，记录实际包装状态及具名接收方；不是店内废物。若污染、潮湿、拆成部件或状态未知，本卡不得代替；须补实际状态及责任才能完整。

- 选定流：撤销验收后顾客保留原包装完好的干燥棉毛圈浴巾
- 流属性/单位：质量 / kg
- 数量规则：实际外部失败浴巾千克 / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stock`
- 来源：`jrc-retail-2013`

##### 废物流

###### 废弃干燥瓦楞纸板运输箱 (`waste_carton`)

条件性。实际在店弃置的接收原箱；与留用周转箱分开。处理供应方及去向为必需；不给避免产品抵扣。

- 选定流：废弃干燥瓦楞纸板运输箱
- 流属性/单位：质量 / kg
- 数量规则：实际联单净千克 / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stock`
- 来源：`jrc-retail-2013`

###### 废弃聚乙烯原运输缠绕膜 (`waste_film`)

条件性。核实实际PE膜聚合物及拆除位置；不是新增手提袋。处理供应方及去向为必需；不给避免产品抵扣。

- 选定流：废弃聚乙烯原运输缠绕膜
- 流属性/单位：质量 / kg
- 数量规则：实际联单净千克 / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stock`
- 来源：`jrc-retail-2013`

###### 废弃附聚丙烯扣的纸板吊标 (`waste_tag`)

条件性。仅在附件与成分有证据时作为一个实际收集混合载体；不另输出纸与PP组分。单独棉束带须另立实际卡。处理供应方及去向为必需；不给避免产品抵扣。

- 选定流：废弃附聚丙烯扣的纸板吊标
- 流属性/单位：质量 / kg
- 数量规则：实际联单净千克 / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stock`
- 来源：`jrc-retail-2013`

###### 已去原包装的废弃干燥棉毛圈浴巾 (`waste_towel`)

条件性。实际作为非危险纺织废物送出的干燥损伤或拒收棉浴巾；称剩余整巾。单独送出的原吊标/膜不在此质量内。潮湿、霉污染或化学污染废物须另表征卡及处理。处理供应方及去向为必需；不给避免产品抵扣。

- 选定流：已去原包装的废弃干燥棉毛圈浴巾
- 流属性/单位：质量 / kg
- 数量规则：实际联单净千克 / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stock`
- 来源：`jrc-retail-2013`

### 过程：柜台验收 (`counter`)

#### 输入

##### 产品流

###### 交流电 (`counter_ac`)

仅计互不重叠的有人收银实测回路；补全模块照明和HVAC排除此类回路ID。供应地域、电压及供电组合仍须数据集证据。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值, 低位热值 / MJ
- 数量规则：3.6 * attributed_counter_kWh / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_counter`
- 来源：`jrc-retail-2013`

###### 低密度聚乙烯手提袋 (`bag_ldpe`)

条件性新增且已核实LDPE牌号的袋；排除商品原包装。保留实际袋质量与顾客拒领。其他聚合物袋另立卡。

- 选定流：低密度聚乙烯手提袋
- 流属性/单位：质量 / kg
- 数量规则：净发放袋千克 / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_counter`
- 来源：`jrc-retail-2013`

###### 不含卷芯的热敏小票纸 (`receipt_paper`)

条件性实际确定净纸配方与涂层，排除芯与运输包装。记录实际纸卷毛重、拆除运输皮重、芯BOM/材质及校准空芯质量。净纸 = 毛卷重 - 实际外皮重 - 实测芯重；芯千克不得计入纸消耗或已印纸废物。采用以该净纸量表达且相应芯生产仅含一次的供应方背景，或加互斥显式芯生产模块；供应边界须标明采用模式。包含打印失败；未用纸卷库存与已印中间库存分开。纯电子小票须有不耗纸证据。

- 选定流：不含卷芯的热敏小票纸
- 流属性/单位：质量 / kg
- 数量规则：已消耗小票纸千克 / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_counter`
- 来源：`jrc-retail-2013`

#### 输出

##### 产品流

###### 一条干燥棉毛圈浴巾柜台自提零售服务 (`service_out`)

仅为零售服务。每一原单件谱系的正确最终验收仅贡献一次。后续撤销验收即使无实物退回也应剔除；保持有效验收的退款不剔除。

- 选定流：一条干燥棉毛圈浴巾柜台自提零售服务
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_counter`
- 来源：`ikea-towel-spec`; `ghg-product-2011`

##### 废物流

###### 废弃低密度聚乙烯手提袋 (`waste_bag`)

条件性实际在店弃置的新增LDPE袋，含不再可用的损坏或拒领袋。与袋消耗和未用库存对账；顾客持有已发放袋不是该店废物。称实际整袋及实际污染状态；另一聚合物或受污染共收载体须实际扩展。处置不再添加第二次袋制造。

- 选定流：废弃低密度聚乙烯手提袋
- 流属性/单位：质量 / kg
- 数量规则：实际废袋联单净千克 / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_counter`
- 来源：`jrc-retail-2013`

###### 废弃干燥纸板热敏小票卷芯 (`waste_receipt_core`)

条件性实际去纸后单独干燥纸板芯。核实纸卷BOM、芯材及实测空芯净质量；不假定每卷有芯，也不把塑料芯当纸板。若实际芯与残纸共收，须具体整载体扩展且不重复单独芯/纸送出。原芯制造仅在供应方纸卷背景或显式互斥纸板芯生产模块中存在一次。

- 选定流：废弃干燥纸板热敏小票卷芯
- 流属性/单位：质量 / kg
- 数量规则：实际纸板芯联单净千克 / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_counter`
- 来源：`jrc-retail-2013`

###### 废弃已打印热敏小票纸 (`waste_receipt`)

条件性实际送处理的打印失败或作废小票；排除未用纸卷及顾客持有小票。须核实实际涂层及处理准入。

- 选定流：废弃已打印热敏小票纸
- 流属性/单位：质量 / kg
- 数量规则：实际小票废物净千克 / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_counter`
- 来源：`jrc-retail-2013`

### 过程：地面清洁 (`cleaning`)

#### 输入

##### 产品流

###### 地面清洁用自来饮用水 (`cleaning_water`)

条件性门店地面清洁，不是商品洗涤。进口表计已排除内部回用，不再扣回用。

- 选定流：自来水 `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属进口水千克 / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning`
- 来源：`jrc-retail-2013`

###### ECOVER柠檬草生姜全用途清洁浓缩液，配方3000714 (`cleaning_detergent`)

条件性单一真实配制产品：ECOVER柠檬草生姜全用途清洁剂，历史配方3000714、5升条码5412533000061、TDS24/05/2017。使用前核对实际批次标签、SDS及声明水/醇/柠檬酸盐/脂肪酸/甘油辛酸酯/乳酸/非离子表活/香精成分。现同品牌产品可不同，不假定等价或未声明添加物。保留含自身水的一整个配方，不重复组分投入。称库存消耗配方，含实际送出瓶残液；液体平衡仅用concentrate_to_liquid_kg。不采用标称剂量/密度/包重；其他配方须另卡。

- 选定流：ECOVER柠檬草生姜全用途清洁浓缩液，配方3000714
- 流属性/单位：质量 / kg
- 数量规则：归属整浓缩液千克 / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning`
- 来源：`ecover-cleaner-formulation`

#### 输出

##### 废物流

###### 带原瓶盖、标签及实测残液的ECOVER配方3000714五升空瓶 (`waste_cleaner_bottle`)

条件性历史五升完整物理容器，HDPE瓶、PP盖及PE/PP标签；绑定前核实实际包装BOM及配方。称含实际配方残液的整个载体；不重复聚合物或残液废物组分。保留可用浓缩液是库存，不是废物。原容器生产仅在供应背景或互斥显式模块中进入一次。

- 选定流：带原瓶盖、标签及实测残液的ECOVER配方3000714五升空瓶
- 流属性/单位：质量 / kg
- 数量规则：实际整瓶联单千克 / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning`
- 来源：`ecover-cleaner-formulation`

###### 含ECOVER配方3000714的水基地面清洁废液 (`cleaning_effluent`)

条件性送核实污水处理的整个液体载体；不是基本水排放。仅采用互斥的直称、计量体积或全液体重构模式之一。

- 选定流：含ECOVER配方3000714的水基地面清洁废液
- 流属性/单位：质量 / kg
- 数量规则：归属整废液千克 / Q
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning`
- 来源：`jrc-retail-2013`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| alloc_direct | all inventory rows | 优先采用互不重叠直表与事件归属。共享柜台运行用实测活跃交易秒，共享库存空间用占用体积时，地面清洁逐次用实际清洁面积次；在全部实际受益对象间分配完整共享池。营业关闭/闲置/失败时段留在事先固定同配置池中。总驱动量为零时阻止分配，除非池开启前已前瞻声明有物理依据的正容量/预留时间驱动，覆盖闲置时段及全部受益者；零产出池无法归一化且不能丢弃。 | ghg-product-2011 |
| alloc_assets | completion modules | 建筑、货架、收银终端、灯具、HVAC及可重复拖把/桶依calc_assets使用持久资产ID和全部受益对象寿命暴露。制造/安装与实际运行、维护事件及终端处理分离。购置/退役数量用于核对台账，不是在寿命份额以外另加消耗设备。废料、捐赠、退供或再售不自动给抵扣。 | ghg-product-2011 |
| alloc_normalize | all inventory rows | 先保留原事件/表计总量，再归属一次，然后以最终Q仅除归属分子一次。已为队列选定的量，不再乘第二次SKU、去向、成分或责任份额。不规定销售价格分配。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_stock | receiving | 原浴巾谱系及物理去向 | event_ledger | pool_id; item_id; SKU; supplier_lot; pack_BOM; 棉/装饰成分; 整理; 颜色; 尺寸; 面密度; 含水/状态; event_id; 实际日期; 接收净千克; 毛交付; 实物退回; 验收; 撤销; 仅退款; 退供; 外部持有; 期初库存; 期末库存; 损失; 废物联单; 皮重; 接收方; 责任方; B_S; B_F; B_T; B_O; stock_open; stock_close; receiving_net_kg; gross_handover; physical_return; supplier_return; external_retention; losses; waste_ticket; consignment_gross; tare; waste_open; generation; waste_close; receiving_gate; original_receiving_equivalent_kg; original_m_i; p_ik; z_iS; z_iF; z_iT; z_iO; P_zk; lot_moisture_at_each_gate; repeated_net_weights; signed_environmental_exchange_kg; E_env; carrier_component_masses; whole_pack_handover_net_kg; moisture_drift_kg; uncertainty; unique_background_parent_id; responsibility_owner; pack_BOM; B_S; B_F; B_T; B_O | 在接收区用校准秤称实际批次，保留皮重及包装BOM证据；每次交接/退回/隔离/送出扫码，并调查件数/质量差。以适合实际整理的校准方法测批次含水，并保留接收、储存及送出配对校准重复净重；独立于计数损失记录环境暴露、观察质量漂移、其他实际转移及带符号不确定性。观察含水状态，不假定干重因子。 | Item(s); kg | 每次事件; 每日库存对账; 每次晚到退货 | 全部声明池日期直至最终去向及后续更正 | 接收区、干燥货架及实际外部接收方 | 每参考流 | 校准证书、供应商BOM、签署验收/去向/转移记录、照片及废物联单；未知字段阻止完整清单 |
| cp_counter | counter | 验收、非重叠电量与新增包装 | meter_and_event_ledger | pool_id; event_id; item_id; 最终验收ID; 撤销日期; 仅退款; 回路ID; 父表ID; 表起止; 倍率; 校准; 千瓦时; 电量时段; 全受益对象活跃秒; 闲置/关闭秒; 袋SKU; LDPE牌号; 袋净质量; 袋发放; 小票卷ID; 未用卷期初/接收/期末; 已印库存期初/期末; 纸发放; 打印失败千克; 废物联单; 退供; final_acceptance_id; revocation_date; refund_only; item_id; meter_start/end; multiplier; parent_meter_id; circuit_id; reset_correction; raw_pool_X; d_c; d_all; idle/closed_seconds; unused_stock_open; acquisitions; unused_returns; unused_stock_close; supplier_returns; printed_stock_open/close; roll_id; roll_BOM; roll_gross_kg; external_roll_tare_kg; actual_core_material; empty_core_net_kg; net_paper_kg; core_stock_open; core_acquired_kg; core_stock_close; core_dispatch_net_kg; core_background_mode; provider_roll_scope; actual_discarded_bag_consignment_net_kg; actual_paperboard_core_consignment_net_kg; bag_waste_generation_kg; bag_waste_stock_open/close; paper_issued; failed_print_kg; waste_ticket; consignment_gross; tare; waste_open; generation; waste_close | 在柜台扫描最终验收并关联库存原件。每时段读可追溯校准回路表，含关闭时段；以校准秤称发放LDPE袋、实际废袋、毛小票卷、卷外皮重及实际空芯；核实纸/芯BOM及供应制造边界，再分别核对净纸、未用库存、失败打印、实际芯去向及废物联单/皮重。相减前核实回路拓扑。 | Item(s); s; kWh; kg | 每次交易及包装事件; 时段表计; 每日纸卷/小票对账 | 完整事先同配置池，含失败与闲置 | 仅有人柜台及声明电回路 | 每参考流 | 验收审计、拓扑图、表校准、发票、秤检查、库存发放及废物记录；袋/纸不存在须证据 |
| cp_cleaning | cleaning | 地面清洁全液体 | cleaning_event_ledger | event_id; pool_id; 全受益对象清洁面积; 清洁模式; 水表起止; 进口水千克; 浓缩液批次; SDS; 浓缩液千克; 稀释水千克; 废液模式; 废液净千克; 废液立方米; 密度千克/立方米; 温度; 液体期初/期末; 源池液体进口; 整液出口; 蒸发千克; 分开输出溶液千克; 清洁剂/污物进口千克; 池外进口千克; 供应方边界; 处理联单; effluent_mode; effluent_net_kg; effluent_m3; density_kg_m3; temperature; liquid_open/close; imported_water_kg; concentrate_kg; cleaner/dirt_import_kg; evaporation_kg; separately_exported_solution_kg; whole_liquid_exports; out_of_pool_import_kg; concentrate_to_liquid_kg; concentrate_stock_open; concentrate_acquired_kg; concentrate_stock_close; concentrate_supplier_return; bottle_residue_kg; cleaner_container_BOM; bottle_capacity; formulation_id; actual_whole_bottle_consignment_kg; consignment_gross; tare; waste_open; generation; waste_close; raw_pool_X; d_c; d_all | 在地面清洁供水及排水/容器端用校准水表/秤逐次计量；记录温度并测实际混合批次密度。分别称整废液载体及各库存/出口项。确认清洁剂产品和接收处理；保留无清洁/替代清洁剂观察。 | kg; m3; m2; degree C | 每次清洁与排出; 每日进口库存出口平衡 | 同一服务池全部清洁/闲置事件 | 服务声明库存与柜台的实际地面 | 每参考流 | 校准、批次SDS、实测密度、面积记录及签署处理联单；未决平衡须披露且阻止完整声明 |
| cp_modules | receiving | 明示补全模块台账 | module_ledger | module_id; version; 源交换ID; 源行ID; 源池; 原分母D; 已归一量; 原量; 身份; 方向; 类型; 属性; 单位; 状态; 期间; 全受益驱动; 归属驱动; 回路/资产/行程/处理ID; 重叠登记; 供应边界; 未知项; module_id; version; source_exchange_id; source_pool; normalized_quantity; original_denominator_D; raw_quantity; allocated_driver; all_beneficiary_driver; overlap_register; identity; direction; type; property; unit; state; raw_pool_X; d_c; d_all | 为每个必需模块取得实际供应方或展开前景源行。逐项审查原分母、边界及版本；以回路、资产、行程及处理ID与直接记录对账。恢复源原分子；不把影响值加到物理流。 | source-row unit | 每个模块/版本/池及更新 | 完全相同声明配置与队列覆盖 | 场所、建筑、货架、POS、照明、HVAC、拖把/桶、物流及废物供应方 | 每参考流 | 原源行/分母、签署供应方边界、重叠审计、不存在模块证据；模块未完整则保留部分状态 |
| cp_assets | receiving | 寿命资产及HVAC外界去向 | persistent_asset_ledger | 资产ID; 型号; 整机BOM; 制造安装版本; 运行边界; 维护事件ID; 替换部件质量; 拆出部件去向; 当前暴露; 全部既往暴露; 预期总寿命暴露L; 分配版本; 既往分配; 剩余; 终端模式; 终端净载体千克; 部件BOM; 制冷剂物种; 充注; 补充; 回收送出; 室内空气库存; 捕集冷凝; 最终外界通量; 捕集去向; asset_id; exposure_current; expected_lifetime_total_exposure_L; allocation_version; prior_allocations; residual; terminal_mode; terminal_net_carrier_kg; component_BOM; maintenance_event_id; refrigerant_species; charge; refill; recovery_sent_out; internal_air_storage; captured_condensate; final_outside_flux; measurement_mode; blank_correction; initial_charge_mode; opening_charge; commissioning_factory_charge; measured_virgin_charge_from_supply; measured_reused_recovery; closing_charge; measured_circuit_extraction; total_circuit_loss; store_internal_source; direct_outside_source; unresolved_loss; leak_location; recovery_loss_location; supply_loss_location; measured_outlet_flux; recovered_open; circuit_extraction_received; external_recovery_received; recovered_close; reused_to_circuit; recovery_shipped_out; measured_recovery_losses; supply_open; purchases; supply_close; charge_to_circuit; supplier_returns; measured_supply_losses; extraction_receipt_id; species_sampling_intervals; sampling_uncertainty; actual_other_internal_sources; store_air_open/close; captured_species_kg; X_intact; contained_handoff_event_id; contained_handoff_species_kg; charged_device_recipient; charge_evidence_method; charge_uncertainty; initial_charge_provider_scope; external_recovered_provenance; external_recovered_type; reclamation_background_source; prior_virgin_owner; inlet_species_concentration; outlet_species_concentration; inlet_carrier_flow; outlet_carrier_flow; gas_temperature_pressure; inlet_background_species_kg; outlet_species_kg; net_external_species_kg; outside_measurement_mode; capture_destination; prospective_driver_version; pool_open_date; exposure_all_periods_beneficiaries; actual_all_life_exposure_E_a; signed_historical_corrections | 读持久资产/场所台账及供应方原BOM；记录全部受益者及校准面积/容量/时间驱动。称事件替换件与实际终端载体；保留前瞻固定驱动/版本及退役时全部历史分配带符号替换。每次维护以校准瓶称分别记录回路抽取、回收接收、再用及原生库存；实际携气整机交接记录设备/接收方/门、实测内含物种千克、互斥抽取/保留部分、合格充注证据及不确定性；审查初充/外购再生产品供应边界及先前生产责任；校准物种实际进出口浓度/载体流量采样，带实际温压及积分背景质量，覆盖声明运行和闲置模式并保留不确定性；记录绝对/差分/已扣模式使背景仅扣一次。核对制冷剂库存、回收送出、室内/捕集库存、直接室外位置及最终外界去向。 | Item(s); kg; m2*h; capacity*h | 每暴露时段、维护、寿命修订及退役 | 跨服务池完整持久寿命 | 建筑、货架、POS、照明、HVAC、清洁工具及相关供应方 | 每参考流 | 原BOM/合同、全寿命分配台账、秤、维护及回收凭证；寿命/供应边界未知阻止补全 |
| cp_transport | receiving | 非重叠实际运输 | trip_ledger | 行程ID; 供应方; 起止门; 路程千米; 各受益者货质量; 占用体积; 额定容量; 满载/空载; 静止怠速小时; 燃料ID; 燃料千克; 表计; 供应方所含返空; 供应方燃料/资产/维护边界; 上游母行程; 失败责任方; 重叠ID; trip_id; cargo_mass_by_beneficiary; occupied_volume; rated_capacity; route_km; loaded/empty; stationary_idle_h; fuel_id; fuel_kg; provider_included_return_empty; overlap_ids; upstream_parent_trip | 读实际路径及燃料/车距供应记录；核实载货、空返及静止怠速覆盖。成功商品进店运输仅在其母边界计；失败来源接收运输遵循calc_background。 | kg; km; t*km; h | 每次行程及怠速时段 | 队列所需全部行程，含失败载货 | 声明接收、退供及处理路径 | 每参考流 | GPS/里程表、燃料发票、载货清单、供应方返程边界及静止记录；覆盖未知阻止完整 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_accept | service_out | Q = 声明截点有效合格最终验收的唯一原单件谱系数。毛交付、拒收、重复扫码、内部移动及撤销验收不产生新产出。退回后再售，同一原单件至多一项最终有效服务。即使顾客保留失败物也撤销Q；单纯退款/折扣不撤销验收。晚到退回/决定按实际日期更正原池Q、成本和去向，不把更正转至新池。Q = 0的池保留并披露为无法归一化。 | cp_counter; cp_stock; final_acceptance_id; revocation_date; refund_only; item_id | Q | ghg-product-2011 |
| calc_stock | supplier_towel; external_towel; waste_towel | 核对实物件数及实际状态质量台账：期初 + 新接收 + 顾客实物退回 + 内部调入 = 期末 + 顾客实物毛交付 + 退供交接 + 实际库存损失 + 内部调出。外部持有失败是原毛交付的分类子集，不再次扣库存。内部移动在关联地点间抵消且不产生另一制造负荷。件数闭合与质量闭合分开。对每种一致实际状态载体的千克账，左侧仅一次加带符号独立实测净环境交换E_env；观察含水/储存漂移是对该交换的独立检查，不是第二平衡项。浴巾主体千克及每种原包装载体千克分别记账；完整原包装交接卡是整个物理载体，其记录组分质量与同一整重核对，不把整体和组分作为重复交换相加。在接收、储存和送出时测批次含水并校准重复净称，记录吸水/失水及其他实际转移并保留带符号不确定性。即使干燥未使用浴巾，也不得把千克差额强塞浴巾损失。未解释差额阻止质量闭合。废物送出另建联单账；历史接收等价背景质量不是当前实物交接。 | cp_stock; stock_open; stock_close; receiving_net_kg; gross_handover; physical_return; supplier_return; external_retention; losses; lot_moisture_at_each_gate; repeated_net_weights; signed_environmental_exchange_kg; E_env; carrier_component_masses; whole_pack_handover_net_kg; moisture_drift_kg; uncertainty | 已对账实物去向 |  |
| calc_share | counter_ac; cleaning_water; cleaning_detergent; cleaning_effluent | 对实测共享池X，X_c = X * d_c / sum(d_all)，包含全部受益对象且归属量之和 = X。柜台用活跃交易秒，清洁用面积次，库存用占用体积时；共享前优先直接细分。闲置/关闭/失败时段纳入事先配置池。驱动未知或为零时，仅采用该池开启前前瞻声明、具物理依据且覆盖关闭/闲置/失败时段的正值全受益容量/预留时间驱动；无该证据时分配未完整，不置零。已直接归属的X_c不再乘第二份额。 | cp_counter; cp_cleaning; cp_modules; raw_pool_X; d_c; d_all; idle/closed_seconds | 归属原分子 | ghg-product-2011 |
| calc_meter | counter_ac | kWh_raw = (表终 - 表初) * 可追溯倍率，并更正复位。仅当子回路位于实测父边界内才扣子表，且仅扣一次。非重叠回路读数直接相加而不相减。仅对剩余实测共享池用calc_share，按3.6兆焦/千瓦时换算并仅除Q一次；独立核对全店电量 = 直接回路 + 补全模块回路。 | cp_counter; meter_start/end; multiplier; parent_meter_id; circuit_id; reset_correction; Q | 每参考流counter_ac兆焦 |  |
| calc_material | bag_ldpe; receipt_paper | 袋原消耗 = 期初未用库存 + 购入 + 未用退回 - 期末未用库存 - 完好未用退供；与实际发放、弃置及缺失对账，保留拒收交易。纸原消耗仅以净纸千克采用同样未用卷平衡：实际毛卷千克扣实测外皮重及实际BOM空芯千克。芯购入/库存/送出另建载体账。以净纸千克表达的供应背景相应芯制造仅含一次；若供应方不含芯，强制补全以实际归属芯千克和兼容供应方增加显式纸板芯生产行，并消除全部重叠。不采用目录卷重，也不无证据假定无芯。LDPE消耗含发放、弃置及未决缺失袋；实际弃置袋入waste_bag，不新增另一生产投入。芯千克和废袋千克分别实测联单/皮重/去向。已印期初/期末中间库存与未用纸卷分开；已印期初/期末中间库存另核对发放与失败打印，不作未用卷。若袋/纸已直接发放并归属，不再第二次套库存消耗平衡。配方及单件质量由校准批次称重记录。原消耗归属一次后除Q。 | cp_counter; unused_stock_open; acquisitions; unused_returns; unused_stock_close; supplier_returns; printed_stock_open/close; paper_issued; failed_print_kg; roll_id; roll_BOM; roll_gross_kg; external_roll_tare_kg; actual_core_material; empty_core_net_kg; net_paper_kg; core_stock_open; core_acquired_kg; core_stock_close; core_dispatch_net_kg; core_background_mode; provider_roll_scope; actual_discarded_bag_consignment_net_kg; actual_paperboard_core_consignment_net_kg; bag_waste_generation_kg; bag_waste_stock_open/close; Q | 每参考流袋和纸千克 |  |
| calc_dispatch | waste_carton; waste_film; waste_tag; waste_towel; waste_receipt; waste_bag; waste_receipt_core; waste_cleaner_bottle | 对每项实际状态联单，送出千克 = 实测毛重 - 实际皮重。归属联单净质量相加后仅除Q一次。独立检查期初废物 + 产生 - 送出 - 期末废物 = 已调查差额；不再从实际送出扣库存或产生。吊标+扣仅在实际一并收集时作为一个整个载体，不重复组分。原包装生产留在商品母边界，但实际拆除/处理量仍保留。 | cp_stock; cp_counter; waste_ticket; consignment_gross; tare; waste_open; generation; waste_close; Q | 每参考流各实际废物载体千克 | jrc-retail-2013 |
| calc_liquid | cleaning_water; cleaning_detergent; cleaning_effluent | 选择并记录一个废液模式：整个载体直称净千克，或实测排放立方米 * 实际整废液密度千克/立方米，或全液体千克重构。重构 = 期初源池液体 + 进口水 + 实测concentrate_to_liquid_kg + 进入液体的实测污物/其他源池质量 - 期末源池液体 - 实测蒸发 - 单独输出的源池溶液质量 - 其他实测源池液体出口。各项为整液/源质量，排除新增外部干布/容器质量，不重复浓缩液内的水。仅水体积平衡不能重构整废液质量。直测排放模式不扣蒸发/库存，供给平衡独立。浓缩液库存消耗 = 期初可用配方 + 购入 - 期末可用配方 - 完好退供；与concentrate_to_liquid_kg + 实际bottle_residue_kg + 其他有证据配方去向对账。瓶残液仅一次包含于整瓶废物，不是清洁废液。源配方边界及源包装生产仅保留一次。池外液体进口另记并分配其处理责任，不作源池产生。清洁面积归属一次及/Q一次。 | cp_cleaning; effluent_mode; effluent_net_kg; effluent_m3; density_kg_m3; temperature; liquid_open/close; imported_water_kg; concentrate_kg; cleaner/dirt_import_kg; evaporation_kg; separately_exported_solution_kg; whole_liquid_exports; out_of_pool_import_kg; concentrate_to_liquid_kg; concentrate_stock_open; concentrate_acquired_kg; concentrate_stock_close; concentrate_supplier_return; bottle_residue_kg; Q | 每参考流实际源池归属整载体千克 |  |
| calc_background | supplier_towel; external_towel; waste_towel; service_out | 每一原单件i保留实测接收浴巾净质量original_m_i（千克）及独立原包装BOM p_ik（每件各物理载体k的千克）。以互斥原单件责任指标z_iS/z_iF/z_iT/z_iO归属且其和为1；后代及内部移动不成为新原单件。B_z = sum_i(original_m_i * z_iz)，单位为实测原接收门浴巾千克当量；P_zk = sum_i(p_ik * z_iz)，另为原包装载体千克。因此B_total = B_S + B_F + B_T + B_O且各P_total,k = sum_z(P_zk)。这些是物理活动量，绝非影响负荷；仅在兼容检查后按各源单位关联匹配供应过程。不把影响数值加到千克/BOM，一个服务Item(s)没有固定千克。B_S/Q单独披露给下游成功商品生产及到接收门运输；不假定1条或标称千克等于实测母背景。对零售承担责任的失败品，将B_F/Q及实际上游生产、原包装及同接收门进店运输加入补全零售服务。B_T须有明确接收方继续承担；未知则保留责任未决，不置零也不给自动抵扣。退回/再售仅更正此划分一次，不新增接收负荷。废物后代载体不各自再次取得原浴巾背景。 | cp_stock; cp_transport; cp_modules; receiving_net_kg; original_m_i; p_ik; z_iS; z_iF; z_iT; z_iO; P_zk; pack_BOM; B_S; B_F; B_T; B_O; responsibility_owner; upstream_parent_trip; Q | 互斥成功母系统披露及失败背景 | ghg-product-2011 |
| calc_assets | completion modules | 对每个完整建筑/货架/POS/照明/HVAC/拖把/桶资产a，采用当前受益暴露e_ac除预计全部受益者总寿命暴露L_a：f_ac = e_ac/L_a，持久累计份额 <= 1且L_a >= 已观察总暴露。建筑用含关闭时段占用面积时；货架用占用容量体积时；终端/照明/HVAC/工具用有依据的全受益容量时，含闲置。有物理依据的容量/预留时间驱动及各闲置时段全部受益者，在池开启前前瞻声明，不得事后选择方便的替代。寿命修订时重算并替换旧版本分配，记录按受益者/期间带符号差额，不重启制造。退役时用实测全寿命总暴露E_a = sum(全部受益者和期间e_ab)，重算每个最终份额e_ab/E_a并以带符号修正替换全部历史受益者分配；任何舍入剩余仍按同一实际全寿命暴露分配，不得仅给最新期间1 - 既往份额。核对全部最终份额 = 1。f_ac对互斥制造/安装源行用一次，对实际终端载体/处理责任另用一次，不作f_ac平方。终端净重直称已排除拆出件；部件BOM重构是互斥替代，仅扣有证据拆出件一次。维护替换、拖把洗涤、耗材及拆出件用实际事件记录，不把无关质量合并成虚构整设备。供应方已含运行/维护/退役时，另行行排除。 | cp_assets; cp_modules; asset_id; exposure_current; expected_lifetime_total_exposure_L; allocation_version; prior_allocations; residual; terminal_mode; terminal_net_carrier_kg; component_BOM; maintenance_event_id; prospective_driver_version; pool_open_date; exposure_all_periods_beneficiaries; actual_all_life_exposure_E_a; signed_historical_corrections; Q | 用于calc_complete的归属资产/事件/终端原源行 | ghg-product-2011 |
| calc_hvac | completion modules | 把实际照明/HVAC运行回路、购热或每种燃料、每种制冷剂及维护/处理载体展开成真实独立卡，带状态、属性/单位、直接记录及供应方排除。泄入店内空气是内部源，不自动是基本外界排放。逐实际物种与回路选一个初始门：期间期初容纳充注，或投运门工厂初充，不并用。池内接收整台带气设备时建立其独立初始门记录；该内含接收不是既有回路的另一补充。回路平衡为opening_charge + measured_virgin_charge_from_supply + measured_reused_recovery - closing_charge - measured_circuit_extraction - X_intact = total_circuit_loss。X_intact是完整设备在记录退役/转移交接门离开时仍内含的实际物种千克。每个物理部分的携气交接与回路抽取互斥；实际部分抽取及剩余携气交接仅在实测互斥部分时并存。X_intact采用可追溯合格维护/充注记录或同类独立采样部分的校准回收表征测量核实，带设备ID、实际门、状态、不确定性及具名接收方；铭牌最大值不是实测残存充注。X_intact仅一次在实际整设备载体/处理边界内输出，不作基本排放，也不在整载体以外另加制冷剂转移。内含量未知阻止闭合，不置零。按实际泄漏位置把该实测差额分为实测store_internal_source、direct_outside_source及unresolved_loss；不假定室外机泄漏进入室内。回收库存另闭合recovered_open + circuit_extraction_received + external_recovery_received - recovered_close - reused_to_circuit - recovery_shipped_out - measured_recovery_losses = 差额。原生补充库存另闭合supply_open + purchases - supply_close - charge_to_circuit - supplier_returns - measured_supply_losses = 差额。实际抽取及接收ID仅关联一次；recovery_shipped_out只出回收库存，不再扣回路。工厂初充生产在完整资产制造背景中仅含一次；排除其另行运行制冷剂购入。核实资产供应方包含实际初充；若不含，以实际初充生产源仅一次补入制造模块并保留该边界更正。在场内部库存/再用保持内部，不为再用重加原制造。外购再生产品制冷剂采用声明再生成分边界：把实际供应方回收/再生、净化/调配及交付归入再生投入千克；先前原生制造留在原先责任方，不重加。核实供应方边界且已含重叠仅扣一次。外部接收废制冷剂载体不是再生产品：产生可再用产品输出前先记录其实际回收处理及责任，并用独立核实状态/类型卡。来源或供应边界未知阻止补全，不作零生产假设。实际回收/补充损失同样按实测室内/室外位置分开。仅把store_internal_source、实际室内回收/补充损失及实测其他内部源，与店内空气物种期初/期末库存、捕集/冷凝物种及实际终端载体、实测出口通量核对。原始绝对进出口模式下，在入口和出口均测物种浓度、校准载体流量、门、实际温压及时间覆盖；室内至外界净转移 = 同一声明基准积分实际出口物种千克 - 积分实际入口/背景物种千克。实际入口/背景实测或用有边界实际采样及不确定性支持，绝不默认零。最终外界通量为实际direct_outside_source + 该实测室内到外界净转移 + 实际室外回收/补充损失，不再添加内部产生量。最终差分或已扣背景测量为互斥模式，不再扣入口/背景。损失位置或状态未决阻止补全。校准瓶秤逐服务时段采集添加/抽取/库存；最终出口校准物种浓度/流量采样覆盖全部实际运行及闲置模式，保留采样不确定性，未知非零模式阻止补全。最终差分直测或已扣空白速率，与进出口相减互斥；仅扣背景一次，带符号负值留作调查，不钳零不给抵扣。回收送出不再作为另一容纳转移扣除。冷凝水入清洁排水时为互斥实测整载体或排水明确部分，不同时作为空气排放和液体出口。最终去向、回收或供应边界未知阻止完整清单。 | cp_assets; cp_cleaning; cp_modules; refrigerant_species; charge; refill; recovery_sent_out; internal_air_storage; captured_condensate; final_outside_flux; measurement_mode; blank_correction; initial_charge_mode; opening_charge; commissioning_factory_charge; measured_virgin_charge_from_supply; measured_reused_recovery; closing_charge; measured_circuit_extraction; total_circuit_loss; store_internal_source; direct_outside_source; unresolved_loss; leak_location; recovery_loss_location; supply_loss_location; measured_outlet_flux; recovered_open; circuit_extraction_received; external_recovery_received; recovered_close; reused_to_circuit; recovery_shipped_out; measured_recovery_losses; supply_open; purchases; supply_close; charge_to_circuit; supplier_returns; measured_supply_losses; extraction_receipt_id; species_sampling_intervals; sampling_uncertainty; actual_other_internal_sources; store_air_open/close; captured_species_kg; X_intact; contained_handoff_event_id; contained_handoff_species_kg; charged_device_recipient; charge_evidence_method; charge_uncertainty; initial_charge_provider_scope; external_recovered_provenance; external_recovered_type; reclamation_background_source; prior_virgin_owner; inlet_species_concentration; outlet_species_concentration; inlet_carrier_flow; outlet_carrier_flow; gas_temperature_pressure; inlet_background_species_kg; outlet_species_kg; net_external_species_kg; outside_measurement_mode; Q | 互斥实际运行及终端交换行 | jrc-retail-2013 |
| calc_transport | completion modules | 每次实际载货行程计算sum(载货千克 * 路程千米)/1000吨千米，在全部受益者间按声明货量/容量分配；蓬松浴巾可能须有证据的实测占用体积/容量分配。核实供应方是否包含实际空程与静止怠速。若不含，则以实际燃料/运行源记录加入非重叠实测空载车千米及静止怠速小时；吨千米为零绝不令空载活动为零。采用有证据燃料/资产/维护边界的供应方运输包，或展开实际燃料、车辆运行及资产行，按行程ID去重。成功商品到接收门的上游行程留在母边界，失败份额依calc_background仅一次。 | cp_transport; cp_modules; trip_id; cargo_mass_by_beneficiary; occupied_volume; rated_capacity; route_km; loaded/empty; stationary_idle_h; fuel_id; fuel_kg; provider_included_return_empty; overlap_ids; Q | 互斥实际原运输活动源行 | ghg-product-2011 |
| calc_complete | all processes | 强制模块为场所/建筑制造安装/退役、货架、收银终端、照明、HVAC、可重复地面清洁工具及实际维护/洗涤、非重叠物流、废物/废液运输处理，以及B_F上游制造/原包装/接收运输。每个模块m及原子源行j，恢复原量R_mj = 已归一x_mj * 有证据原分母D_m，或直接采用有证据原量R_mj，两者不并用。源全量只用一次有依据全受益驱动得A_mj；已归属行保持A_mj = R_mj。按源交换ID/版本/池去除完全重复，并用回路/资产/行程/处理登记消除全部重叠。仅合并实际交换、方向、流类型、属性、单位、状态及边界完全一致的量：N_j = A_direct_j + sum(A_mj)。显式换算兼容单位，保留不同物种/载体，最终N_j/Q仅一次。不把千克与兆焦、影响与活动或原量与归一量相加。声称完整前须在两语增列实际原子卡/协议/计算并同步。缺原分母、原源行、方法、路径或供应边界阻止补全；保持部分标签并列未决模块。 | cp_modules; cp_assets; cp_transport; cp_stock; cp_cleaning; cp_counter; module_id; version; source_exchange_id; source_pool; normalized_quantity; original_denominator_D; raw_quantity; allocated_driver; all_beneficiary_driver; overlap_register; Q | 每参考流补全兼容原子清单 | jrc-retail-2013; ghg-product-2011 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | 参考服务及每个未绑定行在数据集发布前须有官方直读UUID/类型/状态/属性/单位/介质核实，以及匹配供应配方/规格及数量/背景证据。服务身份不得用浴巾生产UUID。柜台交流电身份不提供供应组合。 | 直读原记录与完整性凭证; 供应SKU/BOM/SDS; 数量及兼容背景边界 |
| quality_cohort | service_out; all processes | 分配前声明事先池和截点；保留失败/零销售事件，将晚到验收变化核至原分子分母。外部持有/顾客失败状态或背景责任未知阻止完整清单。 | 单件/事件谱系、验收历史、库存与责任账、更正日志 |
| quality_measurement | all inventory rows | 校准原测量与不确定性须覆盖实际期间、配置、含水及温度。制造商标称尺寸/面密度/包重、缩水/护理限制或首次洗涤建议不是清单默认、零售损失因子，也不说明实际洗涤。调查差额，不默默把未知置零。 | 校准、批重、观察、原字段记录及签署差额调查 |
| quality_completion | all processes | 每个条件卡有正/负存在证据。完整清单须有非重叠模块及calc_complete下实际行展开。资产剩余、维护件、空载运输、HVAC最终外界去向及全液体平衡须对账；未知显式保留并阻止完整状态。 | 模块/源行登记、生命周期账、行程记录、处理联单、两语实际卡及重叠审计 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| valid_reference | service_out | 要求一个声明实际SKU/配置、唯一正Q及服务/参考输出显示精确匹配。Q = 0为显式无法归一化结果，不发布归一数值。未解决服务UUID仅为候选身份，不是已核实数据集身份。 |  |
| valid_accounting | all processes | 要求calc_stock实物平衡与calc_background责任、calc_accept分母分开，并有原队列晚到更正。确认每一原单件背景仅分一次，废物后代之间不重复祖先负荷。 | ghg-product-2011 |
| valid_projection | all inventory rows | 全部强制义务须进入支持的规则/协议/计算/质量字段，两语ID、公式、限定及条件匹配。每张卡关联恰好一个真实协议过程。保持已核UUID/属性/单位链及未决身份；未知量、缺源及部分模块不得作完整通过。 |  |
| valid_module | all processes | 声称完整服务前执行calc_complete并独立核查原分母恢复、源行单位兼容、精确ID去重、最终单次归一、持久资产、实际空程、HVAC外界去向及全液体证据。披露排除与未决不确定性，不因这些设计规则声称完整标准符合。 | jrc-retail-2013; ghg-product-2011 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 部分增量前景零售服务；仅calc_complete合格展开可声称完整零售服务 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 以同一最终分母与披露B_S/Q成功商品母系统及非重叠模块组合 |
| excluded_use | 纺织制造、浴巾使用/洗涤/烘干、全CPC叶等价、窗帘安装、专门店或配送服务 |
| required_metadata | 实际供应商SKU与批次; 颜色; 尺寸及面密度; 包含附属装饰的棉成分; 整理; 实测接收净质量与含水状态; 原吊标/束带/包装BOM与配置; 接收门; 门店与柜台路径; 池日期与配置; 最终验收及退货截点; 最终去向与背景责任方; 部分边界及补全模块版本 |
| required_quality_disclosure | 原测量、未知及身份; 队列更正; 资产/版本账; 模块覆盖及缺行; 地域/技术/期间; 不确定性及母背景责任 |
| update_trigger | SKU/包装/状态变化、路径或供应方变化、晚退货、表计更正、寿命修订或新模块/供应方证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ecover-cleaner-formulation | handbook | ECOVER Belgium N.V., Technical Data Sheet, 24/05/2017, formulation3000714, 5L barcode5412533000061; https://cdn-s1.lyreco.com/staticswebshop/sds/ITIT/TS_ITIT_4192577_2018-04-03.pdf | 一种历史真实配制地面清洁剂及物理容器；使用前须匹配实际批次/SDS/配方及包装。不采用剂量、浓度份额、包重、密度或现配方等价 |
| ikea-towel-spec | handbook | IKEA Taiwan, VÅGSJÖN 405.762.55; https://www.ikea.com.tw/en/products/bath-textiles/towels/vagsjon-art-40576255 | 仅为真实代表棉毛圈对象及标称规格；实际接收质量、包装、成分及零售路径须一手采集；护理建议不在零售过程 |
| jrc-retail-2013 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector, EUR 25998 EN, 2013, executive summary and lighting section; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 定性零售能源、供应链、物流及废物范围；不采用标杆量值，也不声称该源规定本PCR公式 |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, chapter 9 p.63; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 分配前细分及物理关系；具体队列、资产及补全公式是声明PCR采集设计，不是原文引用或完整标准符合 |
