---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-sugar-confectionery-and-bakery-products
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 工厂封口标称1千克袋装甜菜白砂糖干货零售服务

## 1. 范围与适用性

本PCR覆盖非专门商店到店购物中的明确部分运营模块：收货保管、常温干货库存与陈列、专用陈列灯用电、实物验收与退货履历、原袋失败责任及实际干残余物交付。一份数据集仅覆盖一个实际制造商、SKU、标称1千克规格、工厂封口及经核实的包装配置。商品为不含添加剂、白色、干燥流动的甜菜白砂糖。本模块不代表开袋、分装、重新包装、烘焙、制冷、配送或线上履约。破袋、受潮、污染及其他不合格原袋必须保留在失败台账中，不得因正常销售路线是封闭包装而删除。按completion_modules排除明确的公共门店与资本活动，不得将本模块表述为完整零售足迹。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-sugar-confectionery-and-bakery-products |
| classification_refs | CPC 3.0 62125；narrower：仅限所述糖品零售模块；烘焙品、糖蜜及糖果不在范围内 |
| covered_products | 一个同质SKU、不含添加剂的甜菜白砂糖工厂封口标称1千克消费袋的零售服务 |
| excluded_products | 甘蔗糖；红糖、细砂糖、糖粉、果酱用糖或调味糖；代糖；糖浆或糖蜜；烘焙品与糖果；未经另建数据集区分的其他包装规格或结构 |
| representative_product | 工厂封口标称1千克袋装甜菜白砂糖干货零售服务；按同质分层分别核验实际供应商、SKU/配置、批次及原始完整BOM。 |
| production_route | 供应商包装收货→人工常温库存与陈列→顾客到店验收；失败品干式隔离与残余物交付 |
| market_state | 工厂封口的干燥流动结晶糖；按实际批次规格、封口、气味与污染及受潮结块观察判定合格 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 向最终使用顾客提供所声明的部分干货零售服务 |
| How much | 所声明单一标称1千克SKU的一袋最终验收并保留的完整商品；服务以袋数计量，不是实际糖质量的换算 |
| How well | 交付时封口及现行批次质量规格合格；合同实物退货期及已记录迟发更正后，验收仍有效 |
| How long or cycle | 从有证据的保管收货至最终验收、退货再售或终端失败；事前声明的同配置核算池涵盖全部失败和零销售时段 |
| reference_flow_link | retail_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一袋工厂封口标称1千克甜菜白砂糖的增量干货零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 制造商与SKU; 标称规格及实测原始装量; 原袋物料清单及供应商背景范围; 工厂封口与批次规格; 实际收货及最终状态; 门店与期间; 专用灯计量边界; 事前核算池及退货结清; 原袋去向标识; 残余物接收方与处理; 补足模块矩阵; 未验证身份与不确定性 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| count_service | retail_service; failed_background; supplier_transfer; failed_retained | 物品数量 | Item(s) | 按cp_goods采用声明的原整袋数及最终验收服务数；标称1千克标签不是实测换算系数。 |
| energy_basis | electricity_input | 净热值, 低位热值 | MJ | 采用cp_energy；1 kWh = 3.6 MJ；保留实际电力供方边界。 |
| mass_basis | containment_input; recovered_sugar; case_waste; film_waste; whole_bag_waste; sweep_waste | 质量 | kg | 按cp_containment或cp_residual采用经校准实测状态下的载体输入净质量。计数体积干湿浓度换算必须有实测适用基准。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 门店收货gate接管可识别的工厂包装袋，并记录原始净装量、整袋毛质量及供应商包装背景 |
| starting_condition_role | 零售运营gate；不是糖品制造，也不是无上游负担的输入 |
| product_classification_scope | CPC 3.0 62125中更窄的糖品子集；不等同于整项五级分类 |
| recursive_input_rule | 不得将本零售服务递归加入自身商品输入。供应商商品生产、原包装及入店运输必须匹配同一收货gate |
| upstream_dataset_requirement | 损失原袋背景采用收货时完整原袋，依据实测原始净装量及核实的包装物料清单和供应方范围；成功原袋另须由下游按规定耦合 |
| disclosure | 部分增量干货服务；所有列明的补足模块及未知项必须明确披露。既不是门店全部零售活动，也不是糖品制造产品 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | 本PCR跨制造商及品牌适用于已声明产品类别。品牌、型号、目录货号、SKU及商品名用于识别实际研究数据，不是排他性准入条件。下述材质/功能、产品状态、明确规定的固定规格、工艺/渠道及门口条件仍须满足。不同供应商、配置、版次或包装BOM须分别建立同质分层及其匹配的原始背景向量，不得将混合SKU个数乘以一个标本向量。使用实际测量数量及有依据的换算。厂家案例中的质量、尺寸、额定参数、配方及包装声明仅作示例，绝不是全类别默认值或完整BOM/LCI。实际存在不同部件、支持清洁剂、包装或载体时，须在声明完整前提供具体原子卡、匹配属性/单位、采集方法及不重叠来源边界；超出已声明类别的实际状态或路线须另行审查扩展。适用性、身份或证据未知仍为未解决。本候选类别扩展不构成独立科学或翻译审核批准。 |  |
| scope_gate | retail_service | 仅适用于所声明单一完整工厂袋SKU及人工常温路线。记录实际收货、库存、隔离、交付、退货及结清时间；不得将封口等同于不透水汽。按现行签署的供应商与批次条件判定验收；采用cp_conditions全程测温湿度，收货、每日库存复查及每次交付均检查封口、结块、气味与污染。不得将来源中的数值范围或法律符合性作为默认值。 | sugar-spec; sugar-products |
| reference_ownership | retail_service | N为最终合格且由最终使用方保留的唯一原袋数量。毛交付H与实物退回C为独立事件。无实物逆转的纯价格退款、贷记及折扣，仅在最终合格与验收仍有效时才不扣减N。若最终验收实际撤销但未退回实物，必须将该原袋移出N，并把实际外部保留的不合格袋记录为U_keep。同一完整原袋退回再售最多形成一次最终服务。不合格但外部保留的完整袋在实物上属于U_keep，不属于N，也不得自动列为废物；U_keep=F_keep+T_keep+O_keep仅划分其原始背景责任，不代表额外实物交付。重开原期间时必须同步更正分子、N与去向分配，不得将完整负担再次计入后续核算池。 | ghg-product |
| goods_background | failed_background | 每个原袋仅能分入成功S、不可逆失败F、向供应商或其他系统继续转移责任T、或未结责任O之一。一个破袋无论产生多少废物或回收后代，均保留一份完整原始背景；不给回收糖分配避免负担抵扣。F包括销毁原袋及背景仍归本服务的不合格外部保留原袋。T须经签署确认，将原始生产、包装及收货运输责任继续交给具名供应商或其他接收系统；无确认则仍属O，不得置零。T是互斥原始背景分区，绝非全部供应商交付事件数。另行记录实际供应商实物交付T_supplier及不合格外部保留U_keep，并保留接收方状态事件标识。T_keep已在U_keep中；外部保留原袋从F_keep或O_keep改归T_keep仅改变背景责任，不增加第二份实物输出。真正新向外对象或状态必须另具具体卡。S背景不在此重复计入，必须由下游按S/N原袋一次耦合，并采用其实际收货净装量与物料清单。不得以标称1千克代替实测原始装量，也不得假设收货质量等于最终质量。 | ghg-product |
| terminal_carriers | whole_bag_waste; sweep_waste; recovered_sugar | 在各互斥终端交付点采用实际整载体净质量。完整失败袋包含其中糖及原包装，不得再把这些组分重复列为废物。真实拆分后保留组分、原袋与去向标识，分别称量实际分离回收糖及实际整份扫集载体，后者包含任何承装袋。已包含的承装包装不得再次单列废弃。记录期初期末残余物库存及实际水分、污染变化；袋数对账不等于假设千克守恒。处理与运输方必须声明包含范围、目的地、载体组成及验收单位；缺失活动必须新增具名活动后才可完整。不得对已按去向实称的质量再次乘去向比例。 | jrc-retail; ghg-product |
| completion_modules | retail_service | 将本部分模块用于完整零售结果前，整合方必须建立精确gate、队列、N责任矩阵，并另行计量：(1)建筑制造、安装、维护、寿命终结及公共暖通、照明和其他公用工程；(2)陈列货架与专用灯具制造、维护及寿命终结；(3)收货库存工具、托盘、推车及其全部载货、空返、定位、预留和闲置使用；(4)结账POS、收据及顾客袋；(5)公共清洁、虫害控制、实际湿式泄漏处置及水、化学品、整股废液；(6)经核实供应方服务包以外的供应商退货、残余物及其他实际运输；(7)门店空气至外环境的糖尘或水分转移，区分内部产生、留存与捕集库存及互斥终端载体。上述活动在此排除，不得假设不存在或为零。必须依completion_method的固定方法，以具名流和协议补足实际模块；任何未解决模块均阻断完整零售的完整性声明。 | jrc-retail; ghg-product |
| conditional_extension | retail_service | 每个期间均以平面图、设备与活动日志、发票及事故记录核实发生或未发生。不同袋材结构、载体、化学品、现场加工或未知路线不得隐入既有卡。必须增加中英文具体卡和协议并重新生成，之后才可声明相关活动完整；未解决期间保留实际观察及不确定性。 | jrc-retail |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| retail | 增量干货零售 | required | 仅声明的同质袋模块 | foreground | retail_service |

### 过程：增量干货零售（`retail`）

#### 输入

##### 产品流

###### 交流电 （`electricity_input`）

所声明专用陈列灯路的使用点购入电。通用流身份不能证明供应技术、电网因子或电压。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：3.6*E_c/N MJ；cp_energy；不得再次分配或归一化
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：jrc-retail; ghg-product

###### 门店收货时工厂封口标称1千克袋装甜菜白砂糖 （`failed_background`）

以收货时一个实际完整SKU原袋作为商品背景单位；产品包含糖、原包装及声明的上游运输。本输入是上游背景需求，不是第二次实物收货或内部物料流。仅计在所报已结清或更正背景版本中归入F的原袋，不计全部入货或各个后代载体。

- 选定流：门店收货时工厂封口标称1千克袋装甜菜白砂糖
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：F/N Item(s)；cp_goods；仍须原始净装量与包装物料清单
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_goods`
- 来源：sugar-spec; ghg-product

###### 高密度聚乙烯干残余物承装袋 （`containment_input`）

仅计零售方实际另加的HDPE承装包装，空袋单独称量。工厂包装已计入原商品背景。

- 选定流：高密度聚乙烯干残余物承装袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：可归属实际空袋质量/N kg；cp_containment
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_containment`
- 来源：jrc-retail

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 一袋工厂封口标称1千克甜菜白砂糖的增量干货零售服务 （`retail_service`）

唯一的最终按袋计数参考服务；该袋保持完整合格。本输出是部分服务，不是糖品制造，也不是质量产出的替代。

- 选定流：一袋工厂封口标称1千克甜菜白砂糖的增量干货零售服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_goods`
- 来源：ghg-product

###### 实物退给供应商的完整工厂封口标称1千克甜菜白砂糖袋 （`supplier_transfer`）

实际向具名供应商退回的完整实物袋，保留实际事件及原袋履历。计实际T_supplier交付，与背景分区分离：签署接受继续责任的归T，否则待确认归O。既不是合格零售服务，也不是废物；其他系统的背景责任转移不得经此仅限供应商的卡处理。

- 选定流：实物退给供应商的完整工厂封口标称1千克甜菜白砂糖袋
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：T_supplier/N Item(s)；cp_goods；不抵扣负担
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_goods`
- 来源：ghg-product

###### 不合格但由外部保留的完整工厂封口标称1千克甜菜白砂糖袋 （`failed_retained`）

实际由明确外部接收方保留的不合格完整袋，包括最终验收撤销但实物未退回。U_keep仅计一次，与互斥背景责任F_keep、T_keep、O_keep分离。须记录接收方状态及签署责任；仅改归责任不得新增实物输出，O_keep阻断最终结清。

- 选定流：不合格但由外部保留的完整工厂封口标称1千克甜菜白砂糖袋
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：U_keep/N Item(s)；cp_goods
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_goods`
- 来源：ghg-product

###### 向明确非零售接收方交付的分离回收干甜菜白砂糖 （`recovered_sugar`）

仅计实际分离糖，按真实转移状态称量。须明确接收方、质量状态及实际用途；不得暗示食品适用性，也不得恢复失败原袋的零售资格。

- 选定流：向明确非零售接收方交付的分离回收干甜菜白砂糖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际分离转移净质量/N kg；cp_residual
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residual`
- 来源：jrc-retail; ghg-product

##### 废物流

###### 干燥瓦楞纸板运输箱废物 （`case_waste`）

零售gate实际移除的外层瓦楞纸箱，排除留存库存及工厂消费袋。原纸箱制造仅在经证实的收货背景计入，不得再次增加。

- 选定流：干燥瓦楞纸板运输箱废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际归属整箱废物净质量/N kg；cp_residual
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residual`
- 来源：jrc-retail

###### 低密度聚乙烯运输外包膜废物 （`film_waste`）

实际识别的LDPE运输外包膜移除并交付；必须有材质声明，其他聚合物须另卡。

- 选定流：低密度聚乙烯运输外包膜废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际归属LDPE膜废物净质量/N kg；cp_residual
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residual`
- 来源：jrc-retail

###### 送处理的失败完整工厂袋装甜菜白砂糖 （`whole_bag_waste`）

实际完整或封存的完整原消费袋及其全部剩余糖与包装，作为一个真实载体称量。实际包装组成及处理验收条件决定其未解决身份。

- 选定流：送处理的失败完整工厂袋装甜菜白砂糖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际整载体交付净质量/N kg；cp_residual；不得另计内含糖或原袋废物
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residual`
- 来源：jrc-retail

###### 送处理的干糖泄漏扫集物及破原袋与实际HDPE承装物 （`sweep_waste`）

实际废物交付点的一份物理混合载体，须测糖、包装及污染组分，并保持互斥载体标识。实际不同混合物或不兼容处理须另卡，不得把本卡当作选择器。

- 选定流：送处理的干糖泄漏扫集物及破原袋与实际HDPE承装物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际整份扫集载体交付净质量/N kg；cp_residual；承装物已包含
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residual`
- 来源：jrc-retail

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| pool_allocation | electricity_input | 优先采用专用实测灯路。若所声明电表还服务其他陈列，每个时段k按永久分配的受照货架面积A_ck除以全部受益方面积A_allk分配，糖品预留空位也计入。E_c=sum(E_k*A_ck/A_allk)。保留关闭、闲置及零销售时段；无驱动量即待确定分配，不得删除。全部受益方与整表对账。不得从独立互不重叠的母表重复扣除此灯路；公共门店补足仅在可追溯母表确实包含它时扣除。 | ghg-product; jrc-retail |
| completion_method | retail_service | 补足模块先直接细分或计量，再采用所声明因果驱动：建筑与公共照明用面积小时，暖通用实际分区调节面积小时，POS与收据用实测交易事件，清洁用事件和面积记录，搬运用实测载货加空载活动分钟及预留闲置台账。各完整共享核算池必须分配给全部受益方；未知路线或范围保持未解决。资产制造采用f_c=x_c/L，即本期受益方实测暴露x_c除以同一驱动下有证据的全受益方预期寿命总暴露L，纳入期前履历与预留闲置。维护一份持续资产台账；寿命修订时替换旧版本分配，累计比例<=1，最终剩余责任仅分配一次。实际维护按事件计量，采用精确同质合同工作范围，或分别计材料与服务；完整原设备部件、替换件及供应方已含能源运输处理互斥。退役时R=1-sum(全部历史受益方已记f_posted)；w_c=x_lifetime_c/sum(x_lifetime_all)；h_c=f_posted_c+R*w_c，并向原核算池记有符号更正。修订L时以delta=f_new-f_posted替换旧比例，不得重置资产。终端整载体质量或数量仅乘h_c一次，不再乘制造比例。实际终端直接称量与部件重建互斥；直接净称重不得再次扣已移除部件。外部运输记录含包装的实际毛吨数乘实际载货千米，核实供方是否涵盖每次真实空载行程。若不能证明已涵盖，须另计实测空载vehicle-km，且从载货供方中一次移除精确重叠负担；未知范围阻断完整性，零吨数不能抹去行程。空气补足须在一致温压及干湿基准下测原始内部源、外界进出通量、室内与捕集净库存及实际终端外送；未知捕集与外界路径不得置零。整股入污水管网质量采用直接实测V*rho，或包含溶质的互斥全液质量重建；不得只用水平衡重建，也不得重复扣除回用或蒸发。 | ghg-product; jrc-retail |
| no_credit | failed_background; recovered_sugar; supplier_transfer | 不主张避免生产或回收抵扣。实际回收糖为实物转移，须记录接收方、状态及后续责任；不得据此撤销原袋失败。供应商转移保留经确认的继续背景责任。全部核算池内归属及更正完成后，可归属原始总量只除以N一次。整池零产出不可归一化，必须披露；事前声明的同配置合池保留全部负担，不得只挑有销售期间。 | ghg-product |
| raw_attribution | containment_input; recovered_sugar; case_waste; film_waste; whole_bag_waste; sweep_waste | 直接糖品原袋事件载体归其原核算池。对于实际共用运输箱或膜，先称互斥整份废弃载体，再按所声明SKU实测装箱毛体积除以来源箱或托运中全部原受益方实测装箱毛体积，一次分配。采用实际尺寸及装箱数，不得用标称糖kg或销售额；保留失败零销售原袋。比例须合计一，载体质量须与实测总量对账。专用于糖品的承装袋扫集载体直接归属；实际混入其他商品时，必须有自身具体流协议及来源组分记录才可完整，不得隐作通用选择器。来源组成未知或体积驱动为零缺失，均保持未解决。 | jrc-retail; ghg-product |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | retail | 原袋及最终服务 | 收货保管验收去向台账 | parent_id; 制造商; SKU; 批次; 标称规格; 供应商现行签署规格; 精确封口及袋材物料清单; 实际原始净毛质量; 包装皮重; 来源背景gate与范围; stock_open; stock_close; receipts; terminal_parent_removals; supplier_return_back_entries; S; H; C; N; F; F_keep; T; T_supplier; U_keep; T_keep; O_keep; O; 时间; 原因; 接收方; 退货期结清; 迟发更正 | 每次保管事件扫描计数原袋。用经校准秤称毛质量；依据可追溯供应商批次记录，或事前按批次与包装线分层的配对袋破坏性抽样确定原始净装量；称实际倒空包装，记录样本数、离散性、代表性及被抽样原袋真实去向。以供应商物料清单及试验或文件证据核实材料层、油墨胶黏剂与整包装范围；照片不能证明组成。不得仅由标称标签或毛质量推断净装量。退货再售全过程保留唯一原袋履历。 | Item(s); kg | 每次收货事件及每次结清更正 | 整个事前核算池，加实物退货期及已知后续更正 | 门店收货库存顾客接收gate中的一个实际SKU | 每参考流 | 校准；供应商签署物料清单及背景；配对抽样；序列事件履历；责任确认及对账 |
| cp_energy | retail | 专用陈列照明 | 电表及受益方图 | meter_id; 灯路图; 起止读数及翻转; 时段kWh; A_ck; A_allk; 预留闲置面积; 驱动版本; 供方; 母表包含关系 | 连续或在每个声明时段边界读取经校准电表；以隔离试验及平面图核实实际灯路。记录全部小时，包括关店及无销售期间。仅有必要时按pool_allocation分配；供方和电压另行记录，不能由通用流推断。 | kWh; m2 | 每个电表时段及灯路面积变化 | 完整核算池，含闲置关店与失败队列 | 所声明专用灯路及全部受益方 | 每参考流 | 电表校准、灯路试验、读数与全受益方对账 |
| cp_containment | retail | 零售方HDPE袋 | 采购空袋称量与使用台账 | bag_id; 供应商; 材质规格; 空袋质量; 期初采购期末库存; 使用数; 事件原袋载体标识; 供方已含范围 | 核实实际HDPE材质，用经校准秤称各同质批次代表空袋并记录抽样变异。实际消耗与库存及载体事件对账，不得仅用采购量。零值须库存及事故记录证明未用；未知材质保持未解决。 | kg; Item(s) | 每批及每次使用库存事件 | 完整核算池，含隔离与残余物库存 | 仅限零售方另加干式承装物 | 每参考流 | 材质声明；校准称量；库存与载体对账 |
| cp_residual | retail | 实际转移及残余载体 | 拆分称量库存与交付台账 | 原袋组分载体标识; 事件时间; 来源类型; 整载体毛皮净kg; 糖包装水分及异物组成; 期初期末残余库存; 拆分矩阵; 回收接收方及状态; 处理接收方路线; 包装制造责任; 供方运输处理范围; 来源托运箱标识; 实测装箱毛体积份额及全部受益方数量; 归属版本; 不确定性 | 在移除入库及终端交付点，用经校准秤称实际互斥载体，容器皮重只扣一次。按供应商规格识别实际瓦楞纸板及LDPE，不得凭外观推断。整失败袋与拆分后代互斥。依据可追溯原物料清单及配对抽样或分离称量确定组成，同时保留完整物理载体质量。各残余库存与后代须逐原事件对账。任何湿清理、逸散糖尘水分或未知缺料均触发具名补足模块；不得默认零，也不得擅自当作排放。 | kg | 每次拆分库存移动及交付 | 完整核算池及留存残余物至最终去向 | 门店移除隔离及实际接收gate | 每参考流 | 秤皮重校准；原标识；照片加材质物料清单证明；联单与接收验收；处理运输合同 |
| cp_conditions | retail | 保管条件及实际路线 | 连续条件及发生未发生检查 | logger_id; 温度; RH; 校准; 时间; 货架库存位置; 封口结块气味污染; 现行签署验收条件; 报警处置; 平面图; 实际设备; 过程事故发票证据; 缺失时段 | 在实际库存陈列位置设置经校准且时间对齐的温湿度记录仪，保留连续原始记录与时钟核对；按scope_gate检查。将每个事故追溯至原袋及实际响应。以日志发票核实排除或条件活动是否发生；未发生声明也须覆盖同一完整期间。缺失时段须以独立记录重建并披露不确定性，否则保持未解决，不得置零。 | degC; %RH; time; status | 连续记录；收货每日每次交付及事故 | 完整收货至最终去向保管及核算池 | 实际库存陈列隔离场所 | 每参考流 | 校准；完整日志；签署规格；检查事故链 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_parent | retail_service; failed_background; supplier_transfer; failed_retained | N=count(唯一最终验收保留原袋)；收货与期初原袋责任=S+F+T+O，各最终原袋标识互斥；结清的单服务核算池中S=N。F=终端失败原袋+F_keep，每原袋一次；U_keep=F_keep+T_keep+O_keep，各责任互斥且不新增实物输出；q_failed=F/N，q_supplier=T_supplier/N，q_unqualified_keep=U_keep/N。T_supplier仅计实际供应商交付事件，不等于T；其他经确认继续系统保留实际接收方状态及既有实物载体。毛袋数库存核对：stock_open+receipts+C=H+T_supplier+terminal_parent_removals+stock_close；内部移动相抵。H包含真实失败外部交付及重复销售事件；receipts与退回记录实物进入事件，而原始背景分区仅计唯一原袋标识。U_keep是H经实际C更正后的最终保留子集，不是另一向外事件。N另行更正，不得代入毛库存方程。O阻断最终结清；N=0不得相除。 | N; S; F; F_keep; T; T_supplier; U_keep; T_keep; O_keep; O; H; C; stock_open; stock_close; receipts; terminal_parent_removals; cp_goods | normalized_parent_counts | ghg-product |
| calc_energy | electricity_input | 仅对有证据的共用灯路E_c=sum(E_k*A_ck/A_allk)；否则E_c=专用实测kWh。q_energy=3.6*E_c/N MJ。电表翻转、时钟及灯路变更在归属前更正。A_allk包含预留闲置受益方；缺驱动或电表时段保持未解决。 | E_k; A_ck; A_allk; N; cp_energy | q_energy | ghg-product; jrc-retail |
| calc_mass | containment_input; recovered_sugar; case_waste; film_waste; whole_bag_waste; sweep_waste | q_mass=m_attributed/N kg。m_attributed来自实际消耗HDPE，或实际互斥终端载体毛重减容器皮重；按原事件与接收方一次归属后汇总；内部数量不得固定为N或标称1千克。直接整载体称量与物料清单重建互斥；直接净质量已排除移除部分。包装组分保留在真实载体内。留存残余库存须实测，在原核算池更正中追至后续真实去向，不得视为已交付。缺去向或数量阻断结清，不得置零。 | m_attributed; N; cp_containment; cp_residual | q_mass | jrc-retail; ghg-product |
| calc_background | failed_background; retail_service; supplier_transfer | 每个原袋i保留实际收货糖净质量n_i、原消费袋及可归属来源运输箱膜物料清单p_ij与同gate完整供应商背景P_i，包含有记录的入店运输。B_F=sum(F中P_i)，B_S=sum(S中P_i)，B_T=sum(T中P_i)，B_O=sum(O中P_i)；这些是背景责任，不是kg求和。计数流F/N仅对本单一同质实际袋及供方配置有效；若各批实际原始装量、物料清单或背景不同，须汇总实际批次特定B_F/N，不得替为标称装量系数。下游仅一次加入B_S/N及固定补足模块。供应商转移完整携带B_T；B_O阻断结清结果。破原袋背景不得再次乘废物载体比例、去向比例或实际最终水分。 | n_i; p_ij; P_i; S; F; T; O; N; cp_goods | background_responsibility_and_coupling | ghg-product |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_completion | all inventory rows | 除electricity_input外，所有选定流仍为未验证的具体候选。最终数据集前，须以原官方流与支持记录及匹配哈希核对实际制造商SKU状态、流类型方向、属性单位及接收介质或接收方；绑定精确身份，否则保持不可用。相似搜索命中不充分。历史电力证据仅证明通用产品流身份及MJ换算，不证明当前供应商因子。 | 原官方记录状态哈希链；供应商接收方身份与范围；逐行完成条件 |
| execution_quality | all inventory rows | 记录全部原始单位、时间标识、校准、抽样设计及不确定性；对账实际核算池库存灯路载体。缺值、未知身份材质、未确认转移与未测路径保持未解决。不得将示例、来源范围、价格或估计作为默认值或合规限值。须在评判差额前，依据仪器及抽样证据确定并论证计量不确定性与对账容差；不得把差额强行归入空气或废物以凑平。 | 原文件及签署更正；校准抽样不确定性；平衡与异常日志 |
| completion_evidence | retail_service | 部分模块完成与完整零售完成必须区分。整合方逐项记录completion_modules的实际发生未发生、额外具名交换协议、固定归属方法、源队列N及去重。未知供方范围阻断其实际交付结清；缺公共门店资本空气模块阻断完整零售声明，不阻断如实明确的部分报告。 | gate队列行供方矩阵；实际补足计量；未解决清单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | retail_service; failed_background | 要求一个实际同质袋配置、实测原始装量物料清单背景证据、最终合格及退货结清记录、N>0，且无O或未解决的最终残余去向。检查袋数原袋分区及独立毛交付退回库存方程；不得混淆标称kg、实测内容物或计数服务。 | ghg-product; sugar-spec |
| validate_exchange | all inventory rows | 每张使用卡须有一个实际身份、声明的供方或接收方边界、单位、真实过程关联协议、原始数量、一次归属及一次除以N。审核整载体与组分、供应商转移及背景责任是否重叠。未知或不兼容材质路线须具体新卡并同步，不得替入相似流。 | jrc-retail; ghg-product |
| validate_disclosure | retail_service | 所有输出均标明本部分干货模块，声明全部排除与未验证行；完整零售或商品加零售使用前须固定补足矩阵及B_S/N。候选标记及技术检查不等于科学批准、法律合规、当前供应方身份或发布就绪。 | ghg-product; jrc-retail |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 仅用于精确单一袋配置的所声明部分干货零售服务，并保留来源期间与责任上下文 |
| allowed_use | 通过gate队列N去重矩阵，一次加入B_S/N成功原袋背景及全部实测completion_modules；保留此处已计失败原袋背景 |
| excluded_use | 整个CPC五级项；甘蔗糖或其他产品包装；未补足的完整门店零售；糖制造流；法律合规或消费者废物预测 |
| required_metadata | 制造商与SKU; 标称规格及实测原始装量; 原袋物料清单及供应商背景范围; 工厂封口与批次规格; 实际收货及最终状态; 门店与期间; 专用灯计量边界; 事前核算池及退货结清; 原袋去向标识; 残余物接收方与处理; 补足模块矩阵; 未验证身份与不确定性 |
| required_quality_disclosure | 部分边界、原始装量物料清单抽样、不确定性、条件退货结清、供方范围、零产出队列、迟发更正、缺失数据及每项未验证身份 |
| update_trigger | SKU包装结构封口来源路线变化；实际额外过程；供方边界或仪器变化；新增退货；收货去向更正；经审核身份新证据 |

## 11. 数据源

保留的厂家及零售商来源说明本产品类别的案例和明确引用的技术区别，不将适用性限定于所列品牌/型号，也不为其他配置提供数值清单默认值。实际产品与供应商证据仍须按b_product_family取得。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc | official_guidance | 联合国统计司CPC3.0子类62125；https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62125 | 分类范围：234、235、236组；仅取更窄糖品子集；不是零售方法 |
| sugar-spec | standard | The Silver Spoon Company，SSC - Granulated Sugar，RCS-SS-004修订11，复核日期30/07/2026，第1及4页；https://media.supplychain.nhs.uk/media/documents/AES123/Marketing/90633_AES123%2030.07.23%20Silverspoon.pdf | 制造商原始规格：无添加干甜菜糖、规格中有1kg及干燥常温保管注意事项。不能证明实际袋材物料清单、当前批合规或通用数值限值；必须实际供应商证据 |
| sugar-products | literature | Silver Spoon，Our Products，Granulated Sugar；https://www.silverspoon.co.uk/our-products#product-granulatedsugar | 仅确认具名制造商的颗粒糖产品；同一制造商不算独立第二规格证据，不推断包装组成 |
| jrc-retail | official_guidance | Schoenberger等，Best Environmental Management Practice in the Retail Trade Sector，EUR25998EN（2013），DOI10.2791/1775，第1.2、2.1.6.7、2.4节；https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 零售照明能源废物范围背景；不推断基准数量、分配比例、合规或完整零售完整性 |
| ghg-product | standard | WRI/WBCSD，Product Life Cycle Accounting and Reporting Standard（2011），第6、7、9章；https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 功能单位参考流、透明边界及细分因果分配背景。本PCR的原袋核算池部分模块与补足方程为所选方法设计，不是原文要求，也不宣称全面符合该标准 |
