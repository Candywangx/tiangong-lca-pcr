---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-of-leather-leather-dust-powder-and-flour
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 接收厂门的牛湿蓝革修边料供料

## 1. 范围与适用性

本 PCR 是针对单一供料形态的有界技术综合：外购牛湿蓝皮实际修边形成的湿态、未染色、未涂饰三价铬鞣边角料，单独供应至接收的皮革纤维板工厂。原形成、分离、必要物理准备和接收交付各纳入一次。它不代表同一工厂、SKU、当代订单或实测行业因子。方法仅限需要归属分配的归因研究。

不能将湿态边角料与厚度削匀屑、磨革粉尘、粉末、未鞣或灰皮边料、白湿/植物鞣边料、成品革边料、皮革制品、纤维板或处理服务混合。文献区分了这些来源及其携带化学物。含铬状态、实际杀生剂、污染、法定废物/副产品分类及接收条件均须按实际批次确定；物料 UUID 或历史再利用实例均不构成豁免。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-of-leather-leather-dust-powder-and-flour |
| classification_refs | CPC 3.0:39220（较窄语义子集；不代表已接受映射） |
| covered_products | 单独供货且具有纤维板供料用途证据的湿态三价铬鞣牛湿蓝革边角料 |
| excluded_products | 削匀屑; 粉尘; 粉末; 未鞣边料; 白湿皮边料; 植物鞣边料; 成品革; 纤维板; 处置服务 |
| representative_product | 接收厂门未涂饰牛湿蓝革边角切片净湿料 |
| production_route | 外购湿蓝皮 → 原形成修边 → 单独收集分离 → 覆盖暂存及箱体准备 → 公路货运 → 接收首次放行 |
| market_state | 具有有据接收标准及实际废物/副产品状态的湿态含铬次生供料 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 向接收皮革纤维板厂提供已分离湿蓝革修边供料 |
| How much | 接收门首次放行1千克净湿修边料 |
| How well | 满足批次水分及铬/污染接收标准并声明法律状态；不设默认化学限值 |
| How long or cycle | 一个有身份的源端至接收端批群及首次验收事件 |
| reference_flow_link | accepted_feed |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 皮革废料，皮革屑、粉末 `886b2b1a-9f52-411c-852b-5c87a8351a02` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 牛种及源批次; 三价铬鞣制体系及保存路线; 未染色未涂饰湿蓝状态; 实际接收含水率及干物质基准; 边角切片形态及异物规格; 总铬及六价铬检测基准和检出限; 实际杀生剂及接触污染; 所属法域废物或副产品状态及获准接收功能; 接收方皮革纤维板供料接收及首次放行批次身份; 扣游离排液及包装的净湿质量; 毛形成量及附带继承负荷的期初期末库存; 源端和接收门地域时期及供方边界 |

实际数据集元数据或等效参考/过程上下文须声明全部限定信息。参考为湿质量；干物质和铬是独立分析子账。每张卡均将宽泛原生 Product 名称限定为一股实际物料。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用接收净湿质量，扣包装及游离排液。独立称量水分变化；未经显式换算和实测水分不得替代为干质量。Q 由 release_quantity 定义。 |
| raw_units | all inventory rows | 经核实本行参考属性 | 本行原生单位 | 归属前应用 raw_conversions，再应用 normalize_once。不能由流系数推每张皮重量、皮革密度、箱质量或服务寿命。 |

## 5. 系统边界

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | trim; prepare | 纳入外购湿态铬鞣牛皮的实际原形成修边，链接一个完整上游湿蓝皮供方。上游已含的保存、浸灰脱毛、鞣制和挤水不能再列前景。若实际在厂内，应有证据地扩展为分别命名的供货制剂、燃料、水、化学品和实际物种，不能以该有界路线代表一体化制革厂。 | eu-jrc-tanning-2013; unido-leather-2019 |
| boundary_terminal | prepare | 纳入分选、搬运、必要覆盖暂存、实际箱体准备、向外运输和接收门首次验收。证据支持的预期用途为经接收方准备后用于皮革纤维板的未涂饰修边供料；纤维板制造、化学水解、铬回收和处置服务不属于产品参考。历史回收实例不等于当前法律许可或必然接收。 | eu-jrc-tanning-2013; unido-leather-2019 |
| boundary_atomic | all inventory rows | 实际存在的每种新增物料或物种均须建独立原子卡，包括去除的金属异物、整份洗涤制剂、新增保存杀生剂、燃料、气体、泄漏和处理残余。未用工序须有实测不存在依据；不能用集合“其他”隐藏真实负荷。所选路线无刻意干燥、新鞣制、蒸汽锅炉或厂内燃烧。实际热路线须另列精确蒸汽/热身份、焓、凝结水/供水约定及逐项外部返回。 | eu-jrc-tanning-2013; unido-leather-2019 |
| boundary_stocks | all inventory rows | 保留全部失败批、Q=0 批期、启停、空载、清场和真实新增返工。接收门首次放行前均为在制品，包括源端待发存货和在途物料。每个期初期末在制门均须按每种交换跟踪质量及继承向量；转移向量而非清除历史。复验不产生新产量。 | ilcd-allocation-2010 |
| boundary_interface | all inventory rows | 分开保留毛物理账和分配产品账。合并时仅抵消精确配对内部转移。对同一混合废水出口，总量和源分区是同一流的非叠加视图，并共用一个供方。收集本身不产生避免填埋或原生皮革信用。 | ilcd-allocation-2010 |

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 原修边前外购已三价铬鞣制的湿态牛湿蓝皮 |
| starting_condition_role | intermediate_input |
| product_classification_scope | CPC 3.0:39220 的窄供料子集；分类不是方法身份 |
| recursive_input_rule | 不能从外购已形成修边料起步并称原形成。真实同类外部输入须单独身份、历史及一个供方；不能假定无负荷或并入新增形成。 |
| upstream_dataset_requirement | 一个状态匹配且含保存及鞣制的整皮供方；不重复上游水或鞣剂采购 |
| disclosure | 实际物种/鞣制/状态、修边功能、供方覆盖、在制/成品向量、接收条件、废物/副产品状态、供方边界及所有未用/变更工序 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| trim | 湿蓝皮原形成修边 | required | 外购牛湿蓝皮实际形成 | formation | 完整皮张毛物理平衡及伴生归属；同一终端Q |
| prepare | 分选及接收门供料 | required | 独立湿修边料及有据接收供料功能 | preparation_delivery | accepted_feed |

每张卡为一个交换。数量引用唯一 normalize_once 结果，未分配毛观察量保留在采集账。按卡记录有条件不存在的依据，不能用集合“其他”补缺。

### 过程：湿蓝皮原形成修边 (`trim`)

#### 输入

##### 产品流

###### 进入原形成修边的湿蓝牛皮 (`wetblue_hide`)

接收已三价铬鞣制的牛湿蓝皮，记录保存方式、含水率、鞣剂，且未染色、未涂饰、未刻意干燥。整份供货皮质量及上游负荷仅计一次；所含水和鞣剂仅作组成子账，不能再次采购。候选原生牛湿蓝皮记录的中英文氧化铬表述冲突，身份解决前不采用流 UUID。

- 选定流：修边前的湿态三价铬鞣牛皮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节同一次归一化得到的 wetblue_hide 的 x_i，不再进行除法。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material_trim`
- 来源：`eu-jrc-tanning-2013`; `unido-leather-2019`

###### 修边用电 (`trim_electricity`)

计量实际动力裁切和源端搬运用电。手工裁切时须有该交换确实不存在的证据，不编造用电强度。 原生身份为使用点交流电，以标为净热值的能量属性按 MJ 表示。电压、技术、发电组合、供应方地域、交付边界和线损未指定；实际供电和线损仅记录一次。不预设为垃圾焚烧发电。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：报告第8节同一次归一化得到的 trim_electricity 的 x_i，不再进行除法。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy_trim`
- 来源：`eu-jrc-tanning-2013`; `unido-leather-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 伴生产出的保留皮张 (`retained_hide`)

称量同批用于继续制革的保留皮张。在修边门的伴生账中保留其毛物理量和所分得负荷；它不是参考产品，不给替代产品信用。因相同湿蓝皮身份冲突，不采用原生 UUID。

- 选定流：保留的湿态三价铬鞣牛皮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节同一次归一化得到的 retained_hide 的 x_i，不再进行除法。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material_trim`
- 来源：`eu-jrc-tanning-2013`; `unido-leather-2019`

###### 新形成的湿蓝革修边料 (`formed_trimmings`)

称量牛湿蓝皮在后续染色或涂饰前实际修边形成的边角料。这是向 prepare 的内部转移，不是额外首次放行量。保留完整毛形成量，包括后续不合格及库存变动；其物料和继承负荷与 received_trimmings 配对。 该原生 Product 身份为未指定处理的工厂端生产混合。本卡仅将其用于单独称量的湿态牛铬鞣革修边料；宽泛正式名称不允许混入削匀屑、粉末、未鞣边料或处置服务。它不提供含水率、铬含量、产率、地域或回收信用；运至接收门的运输另列服务。

- 选定流：皮革废料，皮革屑、粉末 `886b2b1a-9f52-411c-852b-5c87a8351a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节同一次归一化得到的 formed_trimmings 的 x_i，不再进行除法。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material_trim`
- 来源：`eu-jrc-tanning-2013`; `unido-leather-2019`

##### 废物流

###### 源端不可用修边料 (`trim_reject`)

仅称量本批被拒的湿态铬鞣边角料，并记录实际获准处理交接。不能将市政一般废填埋身份用于该工业含铬流。污染物种和法律状态须明确。

- 选定流：不合格湿态三价铬鞣牛革修边料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节同一次归一化得到的 trim_reject 的 x_i，不再进行除法。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_waste_trim`
- 来源：`eu-jrc-tanning-2013`; `unido-leather-2019`

##### 基本流

###### 源端水分损失 (`trim_evaporation`)

仅在存在时记录独立测量的环境水分蒸发。它是物理水分损失，不是推定化学反应或额外干燥过程，不预设密度或排放因子。

- 选定流：排入空气的水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节同一次归一化得到的 trim_evaporation 的 x_i，不再进行除法。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_balance_trim`
- 来源：`eu-jrc-tanning-2013`; `unido-leather-2019`

### 过程：分选及接收门供料 (`prepare`)

#### 输入

##### 产品流

###### 内部修边料接收 (`received_trimmings`)

按精确批号、湿态、毛质量和完整继承交换向量与 formed_trimmings 匹配。合并时内部转移抵消，不能链接第二个上游供方。 该原生 Product 身份为未指定处理的工厂端生产混合。本卡仅将其用于单独称量的湿态牛铬鞣革修边料；宽泛正式名称不允许混入削匀屑、粉末、未鞣边料或处置服务。它不提供含水率、铬含量、产率、地域或回收信用；运至接收门的运输另列服务。

- 选定流：皮革废料，皮革屑、粉末 `886b2b1a-9f52-411c-852b-5c87a8351a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节同一次归一化得到的 received_trimmings 的 x_i，不再进行除法。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material_prepare`
- 来源：`eu-jrc-tanning-2013`; `unido-leather-2019`

###### 准备及接收门用电 (`handling_electricity`)

计量实际分选、搬运、洗箱泵及接收设备用电；保留空载、启停、失败批次和清场负荷。不能与源端裁切电表重叠。 原生身份为使用点交流电，以标为净热值的能量属性按 MJ 表示。电压、技术、发电组合、供应方地域、交付边界和线损未指定；实际供电和线损仅记录一次。不预设为垃圾焚烧发电。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：报告第8节同一次归一化得到的 handling_electricity 的 x_i，不再进行除法。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy_prepare`
- 来源：`eu-jrc-tanning-2013`; `unido-leather-2019`

###### 洗箱自来水 (`cleaning_water`)

采集清洗空箱和接触设备的实际供水。不预设对供货修边料水洗。实际加入并留在物料中的水须另记，不能通过稀释虚增合格干革或首次放行量。 原生 Product 为送至用户或工厂的经处理公共饮用自来水，不是原水取水或去离子水。参考属性为质量/kg；其附加体积系数不是废水或皮革的实测密度。采用当地处理供水供方及实测数量和状态。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节同一次归一化得到的 cleaning_water 的 x_i，不再进行除法。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`eu-jrc-tanning-2013`; `unido-leather-2019`

###### 新箱采购 (`new_bin`)

按实际供货记录一个带盖 HDPE 成品箱，采用实测制品质量并记录箱盖及材质规格。本行仅为外部新增采购；上游制造通过实测服务批群账仅归属一次。不能以 HDPE 树脂或25千克种子袋 UUID 替代周转箱。

- 选定流：带盖可重复使用高密度聚乙烯周转箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节同一次归一化得到的 new_bin 的 x_i，不再进行除法。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`eu-jrc-tanning-2013`; `unido-leather-2019`

###### 收到外部空箱返回 (`returned_bin_received`)

按序列身份和状态记录实际外部返回箱。它们是附带剩余继承负荷与服务账的实物输入，不是新增采购，也不能将内部复用当采购。

- 选定流：带盖可重复使用高密度聚乙烯周转箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节同一次归一化得到的 returned_bin_received 的 x_i，不再进行除法。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`eu-jrc-tanning-2013`; `unido-leather-2019`

###### 货车运至接收门 (`road_freight`)

记录实际出厂交付、拒收返程和可归属的空箱回程。距离采用实际路线距离，记录装载限制和供方空驶约定。一个供方包含其自身燃料及实际气态/颗粒排放。 原生 Product 描述货车公路货运，以货物质量乘距离计量。尽管备注举到一般货运，它不表示车辆购置或空海运服务。车型、载荷、燃料、排放标准、地域、装载和空返由所选供方说明。计入实际运输的箱体皮重及被拒料。每个不重叠路段只选一个完整供方，不再叠加其燃料或尾气。

- 选定流：货车 `d55f1329-cd61-44c0-8000-9367d38d5634`
- 流属性/单位：Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- 数量规则：报告第8节同一次归一化得到的 road_freight 的 x_i，不再进行除法。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`
- 来源：`ilcd-allocation-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 接收门首次放行供料 (`accepted_feed`)

这是唯一参考输出：新形成批次在皮革纤维板接收厂门首次质量放行，扣箱皮重称量，并具有实际水分及铬/污染规格。到货复验、转售、重复放行和已放行批次返回不能形成新产量。包含本次放行的成品库存是去向，不是另一份产出。 该原生 Product 身份为未指定处理的工厂端生产混合。本卡仅将其用于单独称量的湿态牛铬鞣革修边料；宽泛正式名称不允许混入削匀屑、粉末、未鞣边料或处置服务。它不提供含水率、铬含量、产率、地域或回收信用；运至接收门的运输另列服务。

- 选定流：皮革废料，皮革屑、粉末 `886b2b1a-9f52-411c-852b-5c87a8351a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_release`
- 来源：`eu-jrc-tanning-2013`; `unido-leather-2019`

###### 随毛实物发运的周转箱 (`bin_gross_shipment`)

保留随全部毛实物货物发运的箱，包括后来拒收或返回的货物。箱皮重不入 Q；包装库存流转和服务负荷另记，不能当皮革共产品。

- 选定流：带盖可重复使用高密度聚乙烯周转箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节同一次归一化得到的 bin_gross_shipment 的 x_i，不再进行除法。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`eu-jrc-tanning-2013`; `unido-leather-2019`

###### 另行对外空箱退还 (`bin_external_return`)

另记退给外部所有人的空箱，不与已随毛发运计量的箱重复。同一个向外实物只能出现在一个外出支路。

- 选定流：带盖可重复使用高密度聚乙烯周转箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节同一次归一化得到的 bin_external_return 的 x_i，不再进行除法。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`eu-jrc-tanning-2013`; `unido-leather-2019`

##### 废物流

###### 准备或接收拒料 (`gate_reject`)

将该湿态铬鞣边角料流与异物、磨革粉及废水分别称量。保留原负荷以及实际新增分选、运输和处理；既有批次冲回不能成为新供料产量。

- 选定流：不合格湿态三价铬鞣牛革修边料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节同一次归一化得到的 gate_reject 的 x_i，不再进行除法。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_waste_prepare`
- 来源：`eu-jrc-tanning-2013`; `unido-leather-2019`

###### 收集的洗箱废水 (`wash_effluent`)

在交接处计量这一股实际收集的水性废水，含实测溶解和悬浮含铬物。链接一个实际处理供方，不能再将所含污染物记为直接河流排放。若实际为直接排放，则应改用分别命名的实测物种及接收环境。

- 选定流：含铬周转箱清洗废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节同一次归一化得到的 wash_effluent 的 x_i，不再进行除法。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_waste_prepare`
- 来源：`eu-jrc-tanning-2013`; `unido-leather-2019`

###### 废弃破损箱 (`broken_bin`)

单独称量 HDPE 制品报废量，披露附着皮革污染及去向接收条件。废物 UUID 尚未解决；聚合物名称不证明适用清洁聚乙烯回收。

- 选定流：破损高密度聚乙烯周转箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节同一次归一化得到的 broken_bin 的 x_i，不再进行除法。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`eu-jrc-tanning-2013`; `unido-leather-2019`

##### 基本流

###### 准备期间向空气的水分损失 (`handling_evaporation`)

独立于废水及泄漏测量分选、覆盖储存和运输中的实际蒸发。总铬或 COD 是分析平衡指标，不能当成气态铬或具体有机物质量。

- 选定流：排入空气的水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告第8节同一次归一化得到的 handling_evaporation 的 x_i，不再进行除法。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_balance_prepare`
- 来源：`eu-jrc-tanning-2013`; `unido-leather-2019`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | all inventory rows | 本稿仅在声明的归因研究中使用归因分配。先拆分专属操作并对清单进行实测或虚拟细分；仅服务于合格修边料的准备直接归属。记录分配前毛账和保留皮张伴生账。 | ilcd-allocation-2010 |
| allocation_causality | trim | 对每个剩余交换分别识别其决定性物理因果。将皮张干物质、所含水和铬追溯至保留皮张、边角料、拒料及实测损失。为保留皮张成形的裁切并非自动由边角料质量决定，须识别真实功能。明确处理革损负荷。质量守恒本身不是普适质量分配键。 | ilcd-allocation-2010 |
| allocation_residual | trim | 仅在前述步骤无法解决某剩余共享交换后，才使用实际共功能在同一修边门、同一状态的同期市场价值。比较前剔除后续运输、调理和包装价值；披露价格、质量基准、零值或负值及敏感性。未知价格需要审查，不能用固定比例或任意选物理/经济分配。 | ilcd-allocation-2010 |
| allocation_logistics | prepare | 包装、搬运和运输先按实测专属服务归属；共享服务须有证据地采用决定性限制载荷和时长/距离。保留包装批群制造负荷及剩余服务潜力。新采购与返回为实物支路，不是重复制造。不预设周转箱寿命或回收替代信用。 | ilcd-allocation-2010 |
| allocation_status | accepted_feed | 逐门声明实际法律及经济状态。Product 流可表示为有据回收功能供应的物料，但不证明终止废物状态或无危险性。若实际交易为处理服务，或接收方不能在法律/技术上接收含铬边角料，则不能使用此 Product 参考，也不能默默改名。 | eu-jrc-tanning-2013; unido-leather-2019; ilcd-allocation-2010 |

## 8. 前景数据采集、计算与质量规则

全部协议采集原始单位的未归一化观察量。aggregation_rule 仅标目的报告基准“每参考流”并引用 normalize_once；采集本身不除 Q。保留零产出期及每个原始失败/拒收批记录。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | prepare | 首次放行及接收规格 | weighing and acceptance | 批号; 原形成工序; 鞣制; 毛重; 皮重; 净湿质量; 游离液; 含水率; 干物质; 总铬; 六价铬; 检测基准; 检出限; 污染物; 法律状态; 接收许可; 新首次放行标志; 拒收; 返回; 原交付 | 经校准接收秤配同批皮重及水分采样；按有据的铬、污染标准及法域决定核对买方验收。采集原始质量，不采比率。 | kg | 每批及每次去向 | 含期初期末库存的完整匹配批群 | 源修边场址至接收厂门 | 每参考流 | 校准; 原始批次和库存记录; 实际范围证据; 独立核对 |
| cp_material_trim | trim | 整皮及边料流转 | physical batch ledger | 批号; 产品状态; 物种; 供货组成; 毛质量; 皮重; 净质量; 干物质; 保留皮张; 新形成边料; 内转编号; 期初在制; 期末在制; 逐交换继承向量; 失败; 返工; 游离液 | 经校准秤称量完整供货皮及每个独立出口，识别配对内转及库存批群，保留供方范围。组成子账不得变为额外整份采购。 | kg | 每批及库存门 | 含期初期末库存的完整匹配批群 | 源修边场址至接收厂门 | 每参考流 | 校准; 原始批次和库存记录; 实际范围证据; 独立核对 |
| cp_material_prepare | prepare | 整皮及边料流转 | physical batch ledger | 批号; 产品状态; 物种; 供货组成; 毛质量; 皮重; 净质量; 干物质; 保留皮张; 新形成边料; 内转编号; 期初在制; 期末在制; 逐交换继承向量; 失败; 返工; 游离液 | 经校准秤称量完整供货皮及每个独立出口，识别配对内转及库存批群，保留供方范围。组成子账不得变为额外整份采购。 | kg | 每批及库存门 | 含期初期末库存的完整匹配批群 | 源修边场址至接收厂门 | 每参考流 | 校准; 原始批次和库存记录; 实际范围证据; 独立核对 |
| cp_energy_trim | trim | 分别计量用电 | meter record | 表号; 工序; 起读数; 止读数; 原始kWh; 原始MJ; 供电电压; 供电边界; 供方地域; 空载; 启停; 失败; 清场; 计量重叠 | 使用经校准电表，在 normalize_once 前对共享表进行有据工程归属；保留全部原读数、损耗约定及实际生产/非生产时间。 | kWh; MJ | 每班及每批 | 含期初期末库存的完整匹配批群 | 源修边场址至接收厂门 | 每参考流 | 校准; 原始批次和库存记录; 实际范围证据; 独立核对 |
| cp_energy_prepare | prepare | 分别计量用电 | meter record | 表号; 工序; 起读数; 止读数; 原始kWh; 原始MJ; 供电电压; 供电边界; 供方地域; 空载; 启停; 失败; 清场; 计量重叠 | 使用经校准电表，在 normalize_once 前对共享表进行有据工程归属；保留全部原读数、损耗约定及实际生产/非生产时间。 | kWh; MJ | 每班及每批 | 含期初期末库存的完整匹配批群 | 源修边场址至接收厂门 | 每参考流 | 校准; 原始批次和库存记录; 实际范围证据; 独立核对 |
| cp_water | prepare | 清洗自来水 | water meter record | 水表; 起读数; 止读数; 体积; 实际水温; 独立密度; 质量; 清洗事件; 残留水; 供水方; 重叠 | 计量原始清洗供水，仅按实测状态独立换算水体积，并与废水、湿接触残留和蒸发核对。即使 Q 为零，也采集全部清洗。 | kg; m3 | 每次清洗 | 含期初期末库存的完整匹配批群 | 源修边场址至接收厂门 | 每参考流 | 校准; 原始批次和库存记录; 实际范围证据; 独立核对 |
| cp_packaging | prepare | 单种HDPE周转箱制品及六支路 | serial stock ledger | 制品编号; 箱盖配置; 聚合物; 实测同款皮重; 期初空箱; 期初在制附箱; 期初成品附箱; 期初周转; 新采购; 收到外部返回; 期末空箱; 期末在制附箱; 期末成品附箱; 期末周转; 毛发运; 对外退还; 废弃; 剩余服务潜力; 制造负荷向量; 实际服务使用 | 计数及称量可匹配序列箱，湿残留另记。核对 packaging_six_legs，仅归属实测服务批群消耗的制造负荷及实际清洗/运输；保留未用期末潜力，不猜寿命。 | kg; item | 每次流转及结存 | 含期初期末库存的完整匹配批群 | 源修边场址至接收厂门 | 每参考流 | 校准; 原始批次和库存记录; 实际范围证据; 独立核对 |
| cp_transport | prepare | 每路段一个公路货运供方 | carrier activity record | 货物编号; 路段; 公路距离; 装载革质量; 装载箱皮重; 拒收载质量; 返箱载荷; 限制质量或体积; 装载; 空驶约定; 供方; 已含燃料; 已含尾气; 车辆地域时期 | 以实际路线及承运单据核对毛载质量和所选服务数据集，包括可归属返程。先计算原始吨公里再归属，不能重复承运燃料或排放。 | kg; km; t*km | 每次行程 | 含期初期末库存的完整匹配批群 | 源修边场址至接收厂门 | 每参考流 | 校准; 原始批次和库存记录; 实际范围证据; 独立核对 |
| cp_waste_trim | trim | 逐项拒收边角或水性废水流 | handover and assay | 流编号; 批号; 湿质量; 游离水; 干物质; 铬分析; 溶解分; 悬浮分; 污染物身份; 去向; 法律分类; 供方; 混合出口; 源分区; Q0负荷 | 称量每个固体流并计量实际水性交接；独立采样铬及其他实际污染物。源分区仅为同一出口的非叠加视图。处理链接一次，保留许可及回单。 | kg | 每次交接及代表采样 | 含期初期末库存的完整匹配批群 | 源修边场址至接收厂门 | 每参考流 | 校准; 原始批次和库存记录; 实际范围证据; 独立核对 |
| cp_waste_prepare | prepare | 逐项拒收边角或水性废水流 | handover and assay | 流编号; 批号; 湿质量; 游离水; 干物质; 铬分析; 溶解分; 悬浮分; 污染物身份; 去向; 法律分类; 供方; 混合出口; 源分区; Q0负荷 | 称量每个固体流并计量实际水性交接；独立采样铬及其他实际污染物。源分区仅为同一出口的非叠加视图。处理链接一次，保留许可及回单。 | kg | 每次交接及代表采样 | 含期初期末库存的完整匹配批群 | 源修边场址至接收厂门 | 每参考流 | 校准; 原始批次和库存记录; 实际范围证据; 独立核对 |
| cp_balance_trim | trim | 湿干水及铬平衡 | independent balance observations | 门; 期初库存; 期末库存; 毛形成; 外部接收; 毛外出; 干物质; 游离液; 蒸发; 逐物种排放; 铬; 独立观察; 不确定性; F编号; X重复证据 | 采用独立称量、水分/固体测试及水/铬采样。不能用一个残差同时拟合蒸发和固体损失。本机械路线不设反应水；实际化学反应须有独立物种证据并改变路线。 | kg | 每门及每批群 | 含期初期末库存的完整匹配批群 | 源修边场址至接收厂门 | 每参考流 | 校准; 原始批次和库存记录; 实际范围证据; 独立核对 |
| cp_balance_prepare | prepare | 湿干水及铬平衡 | independent balance observations | 门; 期初库存; 期末库存; 毛形成; 外部接收; 毛外出; 干物质; 游离液; 蒸发; 逐物种排放; 铬; 独立观察; 不确定性; F编号; X重复证据 | 采用独立称量、水分/固体测试及水/铬采样。不能用一个残差同时拟合蒸发和固体损失。本机械路线不设反应水；实际化学反应须有独立物种证据并改变路线。 | kg | 每门及每批群 | 含期初期末库存的完整匹配批群 | 源修边场址至接收厂门 | 每参考流 | 校准; 原始批次和库存记录; 实际范围证据; 独立核对 |
| cp_allocation_trim | trim | 毛清单及归属向量 | attribution worksheet | 交换编号; 原始量及单位; 换算证据; 专属子工序; 虚拟细分; 决定性物理因果; 剩余共享负荷; 共同门状态; 同期价格; 归属负荷; 伴生向量; 期初期末在制向量; 成品历史; 敏感性 | 保留原始未分配记录，按第7节逐交换作决定，再于 normalize_once 前组装 A_i。保留未知价格、剔除的下游收费及分配敏感性。 | native row unit | 每交换及报告批群 | 含期初期末库存的完整匹配批群 | 源修边场址至接收厂门 | 每参考流 | 校准; 原始批次和库存记录; 实际范围证据; 独立核对 |
| cp_allocation_prepare | prepare | 毛清单及归属向量 | attribution worksheet | 交换编号; 原始量及单位; 换算证据; 专属子工序; 虚拟细分; 决定性物理因果; 剩余共享负荷; 共同门状态; 同期价格; 归属负荷; 伴生向量; 期初期末在制向量; 成品历史; 敏感性 | 保留原始未分配记录，按第7节逐交换作决定，再于 normalize_once 前组装 A_i。保留未知价格、剔除的下游收费及分配敏感性。 | native row unit | 每交换及报告批群 | 含期初期末库存的完整匹配批群 | 源修边场址至接收厂门 | 每参考流 | 校准; 原始批次和库存记录; 实际范围证据; 独立核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_quantity | accepted_feed | Q = 本批群在接收门新首次放行的净湿修边料质量之和，同一实物批只计一次。扣游离排液和全部包装；发运与复验为另行毛视图。Q=0 时保留完整原始账及负荷，不输出单位结果。 | new_release_mass; lot_identity; cp_release | Q | eu-jrc-tanning-2013; unido-leather-2019 |
| prepare_attribution | all inventory rows | 对每个交换 i 先将原量换为本行单位，再应用有据的逐交换分配。A_i = 可归属当期外部负荷加继承期初在制向量减继承期末在制向量，精确抵消内部转移，伴生产出分得负荷另记。保留真实失败/清场/返工负荷及已识别损失所携负荷。A_i 绝不是已归一化量。 | raw_i; conversion_i; allocation_i; opening_vector_i; closing_vector_i; cp_allocation_trim; cp_allocation_prepare | A_i | ilcd-allocation-2010 |
| normalize_once | all inventory rows | 仅在 Q > 0 时执行 x_i = A_i / Q 一次。所有非参考卡和采集汇总标签均引用这一每参考流结果；卡片、采集方法或汇总不能再除一次。accepted_feed 卡为声明的1千克参考身份。仅供物理审计的伴生产出及包装流转明确标记，不能变为信用。 | A_i; Q | x_i | ilcd-allocation-2010 |
| physical_gates | trim; prepare | 对每门修边供料库存账执行：期初库存加外部供料接收加新形成修边料质量 = 期末库存加全部供料毛实物外出加实测损失；合并时配对内部流转抵消。该供料库存方程不把新增修边料再加到整皮物料输入；完整原修边工序质量平衡为输入皮张 = 保留皮张加边角料加其他分别计量外出物加库存变化加损失。形成 F 仅计新增物料；修正 X 仅删除已在同侧 OTHER 中出现的精确重复，须有身份和原入账证据。不能以重复 X 扣除普通废物、在制品或返回。分别跟踪湿质量、干革、游离液、水和总铬，分析化合物仅作所含子账。首次修边门按完整皮张与保留皮张、边角料和损失平衡。 | opening_mass; external_receipts; F; X; closing_mass; gross_outward; measured_loss | physical_balance | eu-jrc-tanning-2013; unido-leather-2019 |
| fg_destinations | accepted_feed | Q 为接收门首次放行量。已在期末成品 FG 中的新放行物料已含于 Q，不能再加一次。成品期初加 Q 加实际外部返回接收 = 成品期末加向后毛交付加对外退还加成品废弃，并记录可识别水分变化。已放行批返回时保留期初期末成品逐交换历史负荷及原交付冲回。放行后储存/发运为独立服务账，合并时内部已放行产品转移抵消，不能创造更多 Q。 | opening_FG; Q; returned_FG; closing_FG; gross_delivery; returned_outward; FG_waste | FG_balance | ilcd-allocation-2010 |
| packaging_six_legs | cp_packaging | 对这一种实体周转箱：期初空箱加期初附于在制/成品的箱加期初周转存量加新增外购加收到外部返回 = 期末空箱加期末附于在制/成品的箱加期末周转存量加随毛实物发运外出的箱加另行对外退还加箱体废弃。每个序列制品在每侧库存或外部事件仅计一次。内部复用抵消；内部周转与外部返回均不是新增制造、Q 或自动共产品。源端、接收端及合并门使用同一方程，箱皮重不进入革质量。 | opening_bin; new_bin; external_return_received; closing_bin; gross_shipment_bin; outward_return_bin; bin_waste | bin_balance | ilcd-allocation-2010 |
| raw_conversions | all inventory rows | 采用每个已用身份的精确参考属性/单位链。kWh × 3.6 = MJ；实测货物含所带箱体的 kg × km / 1000 = t*km，保留承运供方空驶约定。累计气液体积已是总量，不能再乘时间；只有真实速率才积分。体积转质量须独立测量该物质在实际状态的密度；件数转质量须实测同款制品皮重。不能从次级系数推皮革密度或箱质量。 | raw_unit; actual_state; independent_density; article_tare; distance | converted_raw_i | ilcd-allocation-2010 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 保持原生描述与实际供货状态、供方接口和流类型兼容。未解决的上游、伴生及辅助UUID仍保持具体未绑定交换。将整张湿蓝牛皮及保留主皮交换接入定量数据包前，须解决其真实身份和供方覆盖；不得绑定相互矛盾的候选或推定每张皮质量。该输入身份缺口本身不否定已有证据支持的修边供料参考终端或制造路线。 | 完整原生直读; 供方声明; 接收规格 |
| dq_coverage | all inventory rows | 采用覆盖季节、场址及实际路线的代表时期，含失败批、Q0、清洗及所有库存门。缺数与实测零值区分，分配结果旁保留完整毛账。 | 日历; 完整批记录; 表计校准; 库存核对 |
| dq_science | accepted_feed | 按声明基准检验实际水分、铬物种及污染物，记录不确定性和检出限，保留供方与接收方技术/法律证据。来源表格均值不能变为前景因子或安全限值。 | 采样计划; 实验方法; 接收/拒收回单 |
| dq_attribution | all inventory rows | 保留每流换算、分配决定及期初期末继承向量。分别约束水分、损失、共享服务和价值不确定性；代数闭合不能代替独立测量。 | 原始工作表; 向量账; 敏感性; 来源上下文 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | accepted_feed | 拒绝混合皮革形态或未核实的接收用途/状态。须为未染色未涂饰的湿态三价铬鞣牛革边角切片；排除削匀屑、粉末、生/灰皮、白湿皮或植物鞣边料、皮革制品及纤维板。缺少水分、铬/污染或合法接收证据即为适用性未决。 | eu-jrc-tanning-2013; unido-leather-2019 |
| validate_denominator | all inventory rows | 仅一个 accepted_feed 参考行等于1千克，并采用接收门首次放行 Q。其余卡均以同一 Q 引用 normalize_once；协议采原始总量。重复归一化、成品重复产出、重复放行或 Q=0 输出单位结果均失败。 | ilcd-allocation-2010 |
| validate_balances | trim; prepare | 核对完整原修边质量、边料库存 F 及精确重复 X、分别的湿/干/水/铬平衡、逐交换在制历史、成品去向及包装六支路。不能由一个残差推两个未知，也不能将 COD/总 VOC 当具体化学物质量。 | eu-jrc-tanning-2013; unido-leather-2019; ilcd-allocation-2010 |
| validate_sources | all inventory rows | 在提取核验之外独立检查来源适用性及限制。工业来源支持所述工艺区别，不支持 LCA 分配或当前法律许可；归因 ILCD 上下文仅在第7节范围适用。未知量值关系及未解决原生矛盾保持审查待决。 | ilcd-allocation-2010 |
| validate_providers | all inventory rows | 每个外部服务或物料接口一个供方；内部配对边料无第二供方。混合出口总量与分区不相加。不重复运输服务燃料/尾气，不造蒸汽/凝结水，不给自动共产品或回收信用。 | ilcd-allocation-2010 |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | background_dataset |
| allowed_use | 经身份及适用性审查后的状态匹配归因接收供料 |
| excluded_use | 处理服务报告; 后果型回收信用; 泛皮革粉末; 成品革或纤维板替代; 未核实危险废物豁免 |
| required_metadata | 牛种及源批次; 三价铬鞣制体系及保存路线; 未染色未涂饰湿蓝状态; 实际接收含水率及干物质基准; 边角切片形态及异物规格; 总铬及六价铬检测基准和检出限; 实际杀生剂及接触污染; 所属法域废物或副产品状态及获准接收功能; 接收方皮革纤维板供料接收及首次放行批次身份; 扣游离排液及包装的净湿质量; 毛形成量及附带继承负荷的期初期末库存; 源端和接收门地域时期及供方边界 |
| required_quality_disclosure | 实测与未知数据、原生身份限制、失败/Q0覆盖、首次放行批群、在制/成品负荷历史、包装库存/服务、供方重叠及分配敏感性 |
| update_trigger | 鞣制、物种、涂饰、水分状态、出口功能/状态、实际工序、供方边界或身份冲突解决发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| eu-jrc-tanning-2013 | official_guidance | European Commission JRC. Tanning of Hides and Skins BREF (2013), doi:10.2788/13548; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/TAN_Published_def.pdf; §§2.3.4–2.3.5, 3.5.2, 4.11.1.2–4.11.1.5; printed pp.21,74–75,197–199 | 原修边与削匀区别; 携带化学物; 表3.17条件/脚注; 表4.20未涂饰边料出口及相邻限制。不提供数值默认或法律批准。 |
| unido-leather-2019 | official_guidance | UNIDO. The Framework for Sustainable Leather Manufacture, second edition (2019); https://leatherpanel.org/sites/default/files/publications-attachments/the_framework_for_sustainable_leather_manufacturing_2nd_edition_2019_f.pdf; pp.26–27,62; Figs.5,6,39 | 独立机构工艺上下文、湿蓝边料与削匀/粉尘的区别、继承铬及保存残留。示例化学平衡不是前景因子。 |
| ilcd-allocation-2010 | official_guidance | European Commission JRC. ILCD Handbook: General Guide for LCA — Detailed Guidance, first edition March 2010; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf; §§7.9.2–7.9.3, printed pp.255–272 (PDF275–292) | 归因细分/虚拟细分、逐交换决定性物理因果、剩余同状态共同门市场价值及服务归属。不提供固定分配比例或数值复用。 |
