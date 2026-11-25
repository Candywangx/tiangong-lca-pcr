---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-household-furniture
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 原扁平包装复合板家用边桌顾客自提零售服务

## 1. 范围与适用性

本PCR定义非专门实体店内未拆原扁平包装复合板家用边桌的顾客自提增量零售服务。类别内任何制造商均可适用；每个数据池固定实际供应商/SKU、尺寸、表面处理、完整组件/包装BOM及收货状态。保留的品牌目录仅为案例，不是准入标识、实测质量或LCI。排除金属框座椅、办公家具、其他家具、线上/配送路线、组装、展示样桌销售及顾客出行/使用/寿命终结，下游商品阶段须单独声明。任何来源均不证明实际门店资格、数值默认值或方法批准。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-household-furniture |
| classification_refs | CPC3.0:62141——非专门店家用家具零售服务；仅建议narrower关系 |
| covered_products | 顾客自提未拆原扁平包装复合板家用边桌零售服务，每池单一实际同质SKU/配置 |
| excluded_products | 38111金属框座椅；3812类；其他家具；已拆包/重包/组装商品；配送及顾客使用 |
| representative_product | 原扁平包装复合板家用边桌顾客自提零售服务；按同质分层分别核验实际供应商、SKU/配置、批次及原始完整BOM。 |
| production_route | 收货门保管→常温未拆包储存→人工拣货→结账→顾客出口验收及随访 |
| market_state | 成品家用边桌处于未改变、未拆开的原完整扁平销售包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 对一个明确定义原边桌包装提供零售可得性、结账及合格顾客自提 |
| How much | 1 Item(s) |
| How well | 精确合格SKU、交接时原封完整、已记录最终有效验收及完整保管/责任追踪 |
| How long or cycle | 一个原包装从收货门至声明最终观察及后续修订关联的零售历史 |
| reference_flow_link | service_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 顾客自提未拆原包装复合板家用边桌零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 实际SKU及颜色; 尺寸及完整收货BOM版次; 原销售包装部件/状态; 非专门店及收货门; 人工自提路线; 池及报告/随访窗口; 最终有效验收条件; 原ID追踪; Q; 背景S/F/O/T责任方; 资产/供应方模型边界; 电表拓扑; 修订版本; 共享支持模块部分覆盖 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| m_service | service_output | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 每参考流一个计数服务，按cp_service由最终有效原ID去重Q导出；不是家具kg或座椅数量。 |
| m_energy | electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 按calc_energy对实际kWh台账仅换算一次3.6MJ/kWh；电能不得套用计数属性。 |
| m_waste | failed_pack | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按cp_waste实际完整载体净交运kg；标称包装重量不能替代称重。 |
| m_packages | loss_supply; unqualified_retained; building_life; rack_life; pallet_life; trolley_life; checkout_life | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Item(s)为具精确源向量、分母及范围的明确定义完整原供给/包/工单当量，不能替代不明确的材料kg、运输或时间；实测暴露建立包份额后由calc_normalize除以Q。 |
| split_labour_time | cleaning_work | 时间 | h | 仅计已签认的实际外购人工工时；工单数、面积及资产件数不能直接替代h。材料、能耗、工具、差旅和废物独立计量。自营工时仅作核对，不虚构外购交换；归属后仅按原最终参考分母归一一次。 |
| selected_energy_identity | split_support_electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | 所选交流电身份只有一个参考能量属性。实际归属量保留本行单位；其单位组中1kWh=3.6MJ。与另一能量单位来源合并或表达参考MJ交换前仅换算一次，同一分子不得重复换算，也不能推定供应组合。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 完整未拆原边桌销售包装在门店收货门实际接收；商品生产/原包装/进货运输背景到此门结束 |
| starting_condition_role | incremental_service |
| product_classification_scope | CPC62141内较窄家用边桌零售服务，遵守38111和3812排除 |
| recursive_input_rule | 仅原ID台账证明独立兼容上游阶段时连接既往零售服务；退回/转售不得重建同一服务或原商品背景 |
| upstream_dataset_requirement | 精确收货门B_i含完整桌/紧固件/涂层/包装BOM及进货运输；本处仅计F，S伴随量交下游；资产/清洁须有已记录完整供应方 |
| disclosure | 增量服务排除验收商品生产及顾客出行/使用/报废；公开V_S/Q伴随量及全部未决绑定/供应方覆盖；不得声称完整产品系统 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | 本PCR跨制造商及品牌适用于已声明产品类别。品牌、型号、目录货号、SKU及商品名用于识别实际研究数据，不是排他性准入条件。下述材质/功能、产品状态、明确规定的固定规格、工艺/渠道及门口条件仍须满足。不同供应商、配置、版次或包装BOM须分别建立同质分层及其匹配的原始背景向量，不得将混合SKU个数乘以一个标本向量。使用实际测量数量及有依据的换算。厂家案例中的质量、尺寸、额定参数、配方及包装声明仅作示例，绝不是全类别默认值或完整BOM/LCI。实际存在不同部件、支持清洁剂、包装或载体时，须在声明完整前提供具体原子卡、匹配属性/单位、采集方法及不重叠来源边界；超出已声明类别的实际状态或路线须另行审查扩展。适用性、身份或证据未知仍为未解决。本候选类别扩展不构成独立科学或翻译审核批准。 |  |
| b_scope | all processes | 合格配置为非专门店、单一实际边桌SKU/颜色/尺寸/收货BOM和未拆且未改变的原销售包装、人工搬运以及顾客在门店出口自提。桌子为复合板家具，不是金属框座椅；CPC62141范围为组381但排除38111及3812。本边桌仅为较窄子集，不能推断覆盖全部家具或全部木制品。 | un-cpc62141; ikea-lack-spec |
| b_gates | retail | 从完整销售包装在门店收货门实际接收并承担卸货保管起，到声明随访观察日确认最终有效顾客验收止；后续撤销须重开原批次。纳入储存、拣货、结账、人工交接、失败尝试、顾客自行退回及损失。每次真实保管事件按实际日期记录。顾客出行（含自提/自退的全部道路）明确在本增量门店门内服务之外。不纳入供应商实体退回及跨店/内部物流：须以签字移动及采购/退货台账证明不存在。任一种实际发生均停止完整性，使用前须双语编写分别精确原状态的产品转移卡及路线活动/协议。 |  |
| b_service | service_output | 产出为对一个唯一原包装ID完成的零售服务，合格交接时仍未拆包。Q为最终有效原ID去重数量；失败尝试、无实物退回的验收撤销、内部移动及未合格验收的外部留存均无产出。单纯财务调整不撤销实物验收。同一原ID重复搬运或转售在关联全程零售台账中不得产生第二次完成服务。 |  |
| b_merchandise | loss_supply; failed_pack | 已售商品制造、完整原包装及到同一门店收货门的进货运输为验收商品伴随量，不能在增量服务中对全部收货计生产。每个原ID有一个B_i，覆盖实际整桌/紧固件/全部涂层/覆膜/封边及原包装，须采用供应商完整BOM或已核实完整SKU数据集。到收货门的进货运输属于B_i，卸货在本边界。原背景责任分区为S验收、F零售商承担失败/损失、O未决、T有记录具名后续责任方，各指示状态和为1。仅F进入loss_supply；向下游披露V_S/Q并结转O/T责任。T可为无移动的合同责任交接，绝不证明实物发出。供应商实体退回/跨店转移按b_gates禁止。最终转售以S替换原F/O/T并只冲回一次原F负担。unqualified_retained为真实原出口在验收无效时重分类，n_R绝不可再次作为出口加入实物平衡。须核实原封完整状态及接收方；外部留存已拆分或状态未知须补具体状态卡才可完成。财务或责任变动均不得推定废物流。 |  |
| b_configuration | all processes | 合格路线须有证据证明无零售商组装、拆包、样品/展示样桌、重包装、额外标签/袋/纸收据、动力搬运、零售商配送、燃料、购热及制冷/热泵设备。建筑采用电阻供暖，通风/照明均在电表范围。场址签字调查、公用工程图、销售/退回程序及采购台账证明不存在；未知不是零。任何实际发生者均须补充原子交换卡、协议、计算及对齐译文后才可声明数据完整；消费者保养/组装说明及制造商退货政策不属于门店活动数据。 | ikea-lack-spec |
| b_provider | assets; cleaning | 只可使用有证据的各具名实物资产完整生命周期包，不能将无关维修材料质量之和伪装成设备。每包承担制造、运输/安装、实际按事件发生的维护和报废处理，包含完整内含部件；排除全部现场运行电力及外包清洁。建筑包包含结构、固定电阻供暖、通风、照明、消防及电气设施，排除货架、结账站、手动托盘车和顾客推车。其他各资产包排除这些建筑部件及其余具名资产。结账站为有明确终端/扫描器/支付设备BOM的一个完整安装站。资产包的终端载体或维修件不得再作为前景废物/投入。须有型号/BOM、供应方边界、实际维护事件及终端证据，并以实际记录替换预期寿命记录。包覆盖缺失阻止完整性，租金不等于生命周期证据。 |  |
| b_cleaning | cleaning | cleaning_work仅为有签认工时的外购清洁人工h。实际水、每种清洁配方、擦巾、完整工具购置/退役、作业电力、差旅、废物/废水及排放分别在split_support或具名扩展计量；不再在人工背景保留整包。门店已计电量和其他现有背景去重，撤销原整包后按c_split_quantity仅归一一次。禁止商品现场清洗。不得从独立实测排液再扣内部回用或蒸发。未知组成/去向阻止完整性。 |  |
| b_waste | failed_pack | 唯一商品废物卡为实际隔离交运的完整原失败桌包装载体，包含原包装，可物理破损但全部原部件仍在同一载体。按联单记录实际净交运kg、接收方/处理、组成及源ID；退款、盘亏及供应商退回均不得推定废物。已拆分源部件和第三方混合垃圾不属本卡，完整性之前须按状态扩展。商品背景所有权和实物废物载体为不同台账；同一F原背景只计一次，不能按部件重复。不得默认回收替代抵扣。 |  |
| b_waste_transport | failed_pack | 下游failed_pack供应方承担门店签字交运后的收集/装车、到处理厂实际载重及空驶道路段、卸车和处理。供应方原记录须将联单ID对应完整载体净kg、实际路线距离/载重份额、含容器的总载荷、车辆/燃料/容量、空驶km、任何回程及处理数量/版本。采用互斥的两种供应方模式。在签字完整联单模式中，供应方已将实际收集、载重/空驶/回程、静止怠速及处理归属于本联单kg，后述分段计算仅用于QA，不得再次乘份额或增加活动。否则按互斥的载重去程、空驶/回程和静止怠速三类段重建未分配供应方向量，并保留原段/源ID。对各正距离载重去程段s，驱动d_bs=含容器的实际受益者载荷kg*该段km，全部受益者间份额f_bs=d_bs/sum_b(d_bs)；载重活动为载荷kg/1000*km，距离仅计一次。对每个空驶/回程段以及每个静止怠速区间分别采用驱动r_bs=预先有证据的正预留载荷容量kg*该精确段/区间内预留时长h，份额g_bs=r_bs/sum_b(r_bs)；全部受益者均用相同kg容量基准及精确起止时间。预留须包含失败联单及保留闲置容量；总驱动未知、不一致或全零均阻止完成。实际观察的空驶/回程车辆km及静止车辆h仍为非零活动，不能因零吨公里消除。各原段/区间供应方向量须覆盖其实际车辆km、h及实测燃料，对该向量仅乘对应份额一次，不能在已含向量之外再计距离、燃料或处理活动。完成前按每个段/区间及全受益者归属向量核对完整实际车辆km/h/燃料总量，包含回程。对交运载体kg仅连接一次完整废物运输加处理供应方，不再计门店电表、商品进货运输或清洁/资产载体。交运前门店人工暂存仍属retail/assets。 |  |
| b_partial_support | all processes | 本方法为部分增量实物门店门内服务。所列建筑/结账包是实物资产生命周期容量，不能声称覆盖完整公共IT、安保或后台运行。员工私人通勤及顾客出行/使用/报废明确在本PCR之外，不声称覆盖完整产品系统。实际必要且未证实已由既有供应方覆盖的共享IT/网络/云、人员安保和门店行政仍为单独未完成支持模块，不能因无卡视为零。补全须按calc_support_completion取得实际具名供应方/工单、原分母、全受益者及源ID去重。在按实际模块添加双语原子卡/协议并核实供应方范围前，须披露部分边界，不得称完整零售业务数据集。 |  |
| split_exchange_identity | all inventory rows | 每卡只允许一个准确交换身份及一个参考计量属性/单位；单位组不是第二属性，其他测量仅作换算证据。人工卡不再承接整包材料/能源/设备/废物。已列完整同质设备、原包装商品及真实混合废物可保留，但须有实际同范围背景/接收处理和完整组成，不得汇总异质物或选择项。同一原始交换只能计入一张核心卡或一个拆分来源；替换整包时撤销其全部旧表征，仅合并相同身份/属性/单位的互斥原始数量。实际额外物质、零件、燃料、制冷剂、排放及处理缺口必须具名新增双语卡和过程协议；未知不得置零或宣称完整。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| retail | 收货、暂存及合格顾客自提 | required | 全部合格数据集；可选资产须记录有证据不存在 | foreground_service | 每参考流 |
| residual | 失败背景及完整失败包交运 | conditional | 实际发生失败背景、未合格外部留存或完整包废物；否则须证据证明不存在 | residual_handling | 每参考流 |
| assets | 已记录实物资产生命周期容量 | required | 全部合格数据集；可选资产须记录有证据不存在 | capital_lifecycle | 每参考流 |
| cleaning | 完整外包零售区域清洁 | required | 全部合格数据集；可选资产须记录有证据不存在 | contracted_service | 每参考流 |
| split_support | 清洁或维护的独立物理交换 | conditional | 实际发生；须逐项证明发生或不存在 | 互斥资源、设备与废物 | service_output |

### 过程：收货、暂存及合格顾客自提 (`retail`)

#### 输入

##### 产品流

###### 交流电 (`electricity`)

一个使用点电能交换；任何包均排除现场运行用电，由本电表仅承担一次。 数量方法及最终除法见关联协议与计算表。

- 选定流: 电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 归属区间MJ / Q；包含闲置/闭店、收货、储存、结账、通风及电阻供暖。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_meter`
- 来源:

#### 输出

##### 产品流

###### 顾客自提未拆原包装复合板家用边桌零售服务 (`service_output`)

计数的零售服务，不是桌子生产产出。未解决服务流身份须匹配此精确功能及边界门。

- 选定流: 顾客自提未拆原包装复合板家用边桌零售服务
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_service`
- 来源:

### 过程：失败背景及完整失败包交运 (`residual`)

#### 输入

##### 产品流

###### 门店收货门的完整原装未拆复合板家用边桌销售包 (`loss_supply`)

数量及责任方法为calc_background，随后calc_normalize。此为原收货供给，不是后续失败载体；失败不能制造新包。 数量方法及最终除法见关联协议与计算表。

- 选定流: 门店收货门的完整原装未拆复合板家用边桌销售包
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 原源包失败计数n_F / Q，对各原收货门B_i仅连接一次，不增加废物部件计数。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_ownership`
- 来源: `ikea-lack-spec`

#### 输出

##### 产品流

###### 顾客未合格验收而留存的未拆原装完整复合板家用边桌包 (`unqualified_retained`)

真实实物产品转移，不是废物或功能共产品。核实原封/完整包装、接收方及状态；除有记录T责任方接受外由F承担原B_i，不给予避免生产抵扣。后续退回或最终验收须替换原事件状态版本及全部责任/分母向量。 数量方法及最终除法见关联协议与计算表。

- 选定流: 顾客未合格验收而留存的未拆原装完整复合板家用边桌包
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 最终外部留存且无有效验收的完整原包去重数量n_R / Q；替换原实际出口事件分类，不得虚构第二次实物移动。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_ownership`
- 来源:

##### 废物流

###### 隔离废弃完整原复合板边桌包装载体 (`failed_pack`)

一种真实完整混合源包装废物载体，含原桌及原包装，去往有证据处理；不代表任意废物类型集合。 数量方法及最终除法见关联协议与计算表。

- 选定流: 隔离废弃完整原复合板边桌包装载体
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 实际净交运载体kg / Q，不再按库存产生量二次修正。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_waste`
- 来源:

### 过程：已记录实物资产生命周期容量 (`assets`)

#### 输入

##### 产品流

###### 排除现场电力及清洁的完整零售建筑生命周期服务包 (`building_life`)

由b_provider定义的实物建筑及固定设施，按全寿命面积时间暴露计量。 数量方法及最终除法见关联协议与计算表。

- 选定流: 排除现场电力及清洁的完整零售建筑生命周期服务包
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 归属建筑寿命份额之和 / Q；一个完整包=一份精确建筑BOM生命周期。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_assets`
- 来源:

###### 排除现场电力及清洁的完整边桌储存货架生命周期服务包 (`rack_life`)

包含全部实际连接件的完整承载货架；体积时间暴露包含占用及预留空间。 数量方法及最终除法见关联协议与计算表。

- 选定流: 排除现场电力及清洁的完整边桌储存货架生命周期服务包
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 归属货架寿命份额之和 / Q；一个完整包=一台序列号/BOM货架。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_assets`
- 来源:

###### 排除现场电力及清洁的完整手动液压托盘车生命周期服务包 (`pallet_life`)

非动力人工搬运设备；包覆盖实际液压油维护及完整报废。 数量方法及最终除法见关联协议与计算表。

- 选定流: 排除现场电力及清洁的完整手动液压托盘车生命周期服务包
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 归属托盘车寿命份额之和 / Q；一个完整包=一台完整序列号/BOM托盘车。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_assets`
- 来源:

###### 排除现场电力及清洁的完整顾客手动平板推车生命周期服务包 (`trolley_life`)

门店内顾客搬运辅助工具；不包含顾客道路车辆及出行。 数量方法及最终除法见关联协议与计算表。

- 选定流: 排除现场电力及清洁的完整顾客手动平板推车生命周期服务包
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 归属推车寿命份额之和 / Q；一个完整包=一台完整序列号/BOM推车。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_assets`
- 来源:

###### 排除现场电力及清洁的完整已安装结账站生命周期服务包 (`checkout_life`)

明确定义的实物终端、扫描器、支付设备及安装架/线缆包；供应方模型按实际事件计更换，不再投入第二个站。 数量方法及最终除法见关联协议与计算表。

- 选定流: 排除现场电力及清洁的完整已安装结账站生命周期服务包
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 归属结账站寿命份额之和 / Q；一个完整包=一份有记录完整站BOM。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_assets`
- 来源:

### 过程：完整外包零售区域清洁 (`cleaning`)

#### 输入

##### 产品流

###### 零售区域清洁人工服务 (`cleaning_work`)

仅为实际外购人工工时，不包含材料、设备生命周期、电力、差旅、废物或处理。自营人工须记录工时用于核对，但不虚构外购服务交换。其他物理交换分别计入split_support，或具名扩展并与已有卡去重。

- 选定流：零售区域清洁人工服务
- 流属性/单位：时间 / h
- 数量规则：实测独占或一次归属的外购人工工时 / Q；cp_split_labour_cleaning。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_labour_cleaning`
- 来源：

### 过程：支持作业独立物理交换 (`split_support`)

仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

#### 输入

##### 产品流

###### 未浸渍的干燥纤维素清洁擦巾 (`split_cleaning_wipe`)

仅计实际首次使用的此组成干擦巾；不得按地面面积推定耗量，也不得把使用后湿擦巾质量当作投入。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：未浸渍的干燥纤维素清洁擦巾
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 完整手动聚丙烯刷毛扫帚 (`split_cleaning_broom`)

一个同质完整扫帚型号，排除可替换耗材和运行能耗；仅应用一次持续寿命台账受益份额。维修属于独立事件交换。 仅含制造/初始安装，排除另行实际计量的维护和终端处理。包装首次使用数量不再乘工具暴露份额。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：完整手动聚丙烯刷毛扫帚
- 流属性/单位：物品数量 / Item(s)
- 数量规则：实测同质完整型号数量乘其持续寿命受益份额，仅一次 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 供应地面清洁的饮用自来水 (`split_cleaning_water`)

独立计量清洁入口新鲜供水；直接称重，或实测体积乘相应实测密度。排除内部循环水及购入配方已含水。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：自来水 `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 十二烷基硫酸钠水性地面清洁配方 (`split_cleaning_sds`)

仅在实际供应商/SDS证实此单一配方时采用的条件性候选。实测供应态湿配方质量、浓度及来源批次；不指定必用化学品，不默认使用或虚构比例。其他实际配方须在完整性前另建具名卡。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：十二烷基硫酸钠水性地面清洁配方
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 完整可重复使用手动棉头地拖 (`split_cleaning_mop`)

一个固定完整型号及原配拖头/手柄，仅应用一次持续寿命分配；另行安装的替换拖头须有独立具名事件输入/输出卡。 仅含制造/初始安装，排除另行实际计量的维护和终端处理。包装首次使用数量不再乘工具暴露份额。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：完整可重复使用手动棉头地拖
- 流属性/单位：物品数量 / Item(s)
- 数量规则：实测同质完整型号数量乘其持续寿命受益份额，仅一次 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 完整空HDPE瓶身及聚丙烯瓶盖清洁剂瓶 (`split_cleaner_bottle`)

仅为实际匹配包装配置的条件性候选。制造/首次使用与配方净湿质量分开；加此瓶前须从配方背景排除其制造或记录来源级撤销。重复使用须有实际寿命台账。其他实际包装须具名另建卡。 仅含制造/初始安装，排除另行实际计量的维护和终端处理。包装首次使用数量不再乘工具暴露份额。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：完整空HDPE瓶身及聚丙烯瓶盖清洁剂瓶
- 流属性/单位：物品数量 / Item(s)
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
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
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
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
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

#### 输出

##### 废物流

###### 带有零售地面污物的使用后纤维素擦巾 (`split_used_wipe`)

实测实际外运完整载体，包括所含液体和污物；记录状态及接收方接纳。排除单独外运的游离液体。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：带有零售地面污物的使用后纤维素擦巾
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 实际废物交接时的干燥零售地面清扫物 (`split_sweepings`)

一种实际共同收集、组成有记录且处理相容的混合固体载体；不得汇总不同废物类别。排除独立外运的擦巾和退役工具。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：实际废物交接时的干燥零售地面清扫物
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 退役完整手动聚丙烯刷毛扫帚 (`split_broom_waste`)

扣除此前已拆出部件后的完整剩余扫帚；实测终端净质量采用与购置相同的持续寿命受益历史，不重复列组分废物。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：退役完整手动聚丙烯刷毛扫帚
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 处理交接时收集的水性零售地面清洁废液 (`split_cleaning_effluent`)

直接实测实际外运全液体净kg，或采用相应温度/组成下V_discharge*rho_discharge；不得从直接实测排液再扣蒸发、回用或库存。溶解清洁剂是载体组成，不另列重复废物流。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：处理交接时收集的水性零售地面清洁废液
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 带残留污物的退役完整手动棉头地拖 (`split_mop_waste`)

实测此前拆件后的实际完整剩余载体，保留湿度/状态和完整接收处理范围；按同一资产历史归属退役，不仅归给退役期销量。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：带残留污物的退役完整手动棉头地拖
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 带残留配方的使用后HDPE瓶身及聚丙烯瓶盖清洁剂瓶 (`split_cleaner_bottle_waste`)

仅在接收方接纳实测组成/状态时计实际带盖和残留外运完整载体，不重复列残留或瓶盖废物。直接净kg独立于原湿配方kg。可重复使用返还须有独立保管路线，不自动成为废物。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：带残留配方的使用后HDPE瓶身及聚丙烯瓶盖清洁剂瓶
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q; cp_split_support.
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
| a_pool | all processes | 在观察销售前预先声明SKU/配置/场址/渠道池及报告/随访窗口。停机、闭店、失败和零销量区间保留在同池，不能只选销售日。Q=0整池保留为不可归一化的原始清单，只能按预先声明同配置合池规则合入，不能删除或除以1。迟发验收撤销须修订Q和全部原池归一化分子，不得同时保留旧版及替代版负担。 |  |
| a_shared | electricity; cleaning_work; assets | 共享分配之前须优先细分和专表实测。共享池X_t按X_pt=X_t*d_pt/sum_b(d_bt)分给所有实际受益者b，包括其他商品、失败库存、闲置/闭店预留。电力须先建立互斥实测的设备运行、静止待机及固定照明/供暖回路kWh分量池，识别包含及独立回路，并将各池完整合计核对至实际总表。各分量池独立分配：运行设备按受益者实测kW*h，同配置待机池按受益者预留device*h，各固定照明/供暖区域池按精确时段受益者预留m2*h。池内驱动分子及全部受益者分母须为同单位。仅所得归属电力MJ分子可以相加，不能将kWh、device*h或m2*h加为一个驱动。分量分解未知或总表残差未解释阻止完成，不得视为零。清洁按calc_cleaning明确来源模式；货架按占用/预留体积时间；结账按占用/预留站时间；车按占用/预留设备时间；建筑按独占/预留面积时间。闲置预留须预先指定使用者并保留，全部受益者总驱动未知或为零则阻止分配。不能用零距离消除静止容量，也不能以价格替代物理驱动。核对完整实测总量，份额不得重复乘。本PCR借用GHG分配原则设计，不声称该标准规定这些精确驱动。 清洁按calc_cleaning事件/来源细分，同一同质pass按实测清洁m2，先归属事件数量后求和；独立计量持续时间相关来源才用其本池实测m2*h且互斥。两种驱动不能对同来源任选；每个来源仅有一种固定实测驱动模式。 | ghgp-product-2011 |
| a_assets | building_life; rack_life; pallet_life; trolley_life; checkout_life | 各资产a跨所有期间和受益者保留唯一序列号/BOM/寿命台账。e_ap为按a_shared驱动实测的受益者暴露量；L_a(v)为同单位且包括既往受益者及闲置预留的有证据预期总寿命暴露。当前包份额f_ap(v)=e_ap/L_a(v)，不得每期新增一整资产。跨受益者/期间累计f不得超过1。寿命修订时以e_ap/L_a(new)替换全部历史分配，签发带符号差额及替代版本，不能重启制造。报废时以实际全寿命暴露E_a替代预期，对所有受益者重算e_ap/E_a，使总和为1，包含最终残差及实际维护/报废模型。对完整包只乘一次份额；终端材料已在包内，不再乘额外制造份额。供应方若无完整服务包，使用前须建立具原子卡的独立部件/事件模型，不得宣称完整。 |  |
| a_no_credit | all processes | 唯一功能产出为service_output。毛利、供应商退款及转售收入均非环境共产品。记录实物转移及最终所有权，不给予避免生产抵扣。即使服务无成功产出，全部商品失败负担F及失败搬运仍保留于声明批次。 |  |
| split_attribution | cleaning_work; split_cleaning_wipe; split_cleaning_broom; split_used_wipe; split_sweepings; split_broom_waste; split_cleaning_water; split_cleaning_sds; split_cleaning_mop; split_cleaning_effluent; split_mop_waste; split_cleaner_bottle; split_cleaner_bottle_waste; split_support_electricity; split_support_travel | 优先直接独占计量；共用清洁事件按calc_cleaning明确来源模式在全受益者间归属每种原始物理数量，维修按实际工单支持周期全部受益方的原设备物理驱动分配。保留闲置、失败、关闭及零驱动负荷并按原规则结转，不能用销量删减。每项新工具的制造/退役使用持续资产寿命台账及历史修订差额；替换件属于其实际维修事件，不再当作原完整资产重复购置，新增替换件在事件时入账一次。已归属来源不再乘第二份额，工具终端不只归给退役期。背景已含某物理量则从旧背景中撤销该量或以本拆分替换整包，严禁两边同时表征。 清洁按calc_cleaning事件/来源细分，同一同质pass按实测清洁m2，先归属事件数量后求和；独立计量持续时间相关来源才用其本池实测m2*h且互斥。两种驱动不能对同来源任选；本明确来源模式替换旧未分层的清洁面积时/面积次措辞。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | retail | 服务验收及实物保管 | 事件台账 | 池ID; 保管事件ID; 原包装ID; SKU; 颜色; 尺寸; 收货BOM版次; 实际收货计数/毛质量; 原包装配置/皮重/部件BOM; 期初/期末ID; 收货; 实物总交接; 退回; 拒收; 验收状态/日期; 撤销日期/原因; 供应商交接; 内部转移; 外部损失接收方/状态; 最终随访; 原/新版本链接; 部分支持模块登记; 互斥实测供应方分量池/源ID; 父源数量/属性/单位及核对; 精确分量区间; 受益者原始驱动值/单位; 未知分解标识; 商品/待运废物期初期末包ID; 内部判废事件; 实际源/材料/湿度状态kg; 已记录质量增减及湿度变化 | 收货、结账/出口及每次退回扫描唯一ID；检查原封及精确SKU，核验合格验收证据并独立核对实物库存；实际质量采用校准秤/部件检查，背景完整性采用供应商签字BOM。公开包装重量不是实测。 汇总方法：calc_accept; calc_stock; calc_normalize；保留失败及Q=0原池 | Item(s); kg；支持源数量保留各自交换/属性/单位；各支持池驱动保留其独立声明单位 | 每次保管/验收事件；每日核对 | 预设整批及后续撤销 | 收货门到顾客出口及实际退回路径 | 每参考流 | 签字收货/验收；盘点；秤校准；供应商完整BOM；版本历史 |
| cp_meter | retail | 电力 | 区间电表台账 | 表/回路ID; 拓扑; 总表包含关系; 起止kWh; 日期; 校准; 回路负荷; 实际功率时间; 静止待机kWh; 区域面积时间; 受益者驱动; 完整总量; 分配版本; 供电方/电压/地域; 交付损耗; 互斥分量池ID/类别; 实际分量kWh; 父表及同单位核对; 精确区间; 各受益者原始驱动值及单位; 运行kW*h; 同配置待机device*h; 固定区域m2*h; 未解释残差 | 对包括闭店的所有区间读取校准电表；将各回路映射至实测总表并识别独立回路；依设备功率及实测待机核实a_shared驱动；核对账单并去除供应方内含重复。 汇总方法：calc_energy; calc_shared; calc_normalize每参考流一次 | 电力分子kWh后换MJ；各池独立驱动kW*h或device*h或m2*h，绝不相加 | 区间读数及每次拓扑变更 | 全部运行/闲置/闭店期 | 同一预设门店池及全部受益者 | 每参考流 | 校准；回路图；账单核对；驱动证据 |
| cp_ownership | residual | 原商品背景责任 | 源所有权台账 | 原ID; 收货门; 完整SKU/BOM/包装源向量B_i; 源分母/单位/版本; 进货运输覆盖; S/F/O/T状态; 责任日期; 具名后续责任方; 独立实物交接ID; 损失归宿/接收方; 既往负担; 替代差额; 原批Q; 原出口保管事件ID; n_R; 留存接收方; 当前原封完整包状态; 验收/撤销证据; 独立供应商/跨店实物移动不存在证据 | 逐一追踪完整原包及实际供应源模型至共同边界门；核实完整部件及运输边界。依接收方/状态/延续责任跟踪实际留存/损失包；T仅记录本场址责任交接，不含允许的供应商或跨店实物发出。仅将这些禁止移动作为路线资格筛查。不能按所有权状态推定实物废物。 汇总方法：calc_background; calc_restore; calc_normalize；另列S/Q伴随量及O/T结转 | Item(s); original vector units | 每次收货及终态/修订事件 | 原始全历史，不限销售期 | 共同收货门及全部最终责任方 | 每参考流 | 供应商完整BOM模型；运输证据；转交接收；责任协议 |
| cp_waste | residual | 完整原失败包载体 | 称重/联单台账 | 联单ID; 原包装ID; 实物状态; 全部原部件存在; 毛kg; 皮kg; 净kg; 交运日期; 实际接收方/处理; 期初/产生/期末废物库存; 组成; 不确定性; 判废包数; 待运废物期初期末ID; 供应方装车/载重/空驶/回程段ID; 含容器载荷kg; 距离km; 车辆/燃料/容量; 全联单份额; 处理供应方版本; 互斥供应方模式; 签字完整联单kg归属及覆盖路线/怠速范围; 段源ID/分类及实际起止; 受益者实载payload_kg; 实际载重段segment_km; 每个空驶/回程段及怠速区间各受益者预先声明的预留载荷capacity_kg及预留duration_h; 实际vehicle_km; 实际vehicle_h; 逐段/区间实际燃料; 全部受益者完整总量; 供应方向量及源版本; 分配或QA标识 | 校准净称重及签字接收联单；检查完整源包装组成；仅采用直接交运模式，独立核对产生量/库存。不能从实测净交运中再次扣库存。 汇总方法：calc_waste; calc_normalize；供应方处理仅对实测kg连接一次 | kg | 每次交运及盘点 | 原批全部交运及后续修订 | 隔离载体从门店门到处理交接 | 每参考流 | 秤校准；皮重；照片/部件核查；联单及处理记录 |
| cp_assets | assets | 五类分别定义的完整生命周期包 | 持续序列号资产/供应方台账 | 资产ID/类型; 精确完整BOM/序列号; 供应方包ID/版本/向量; 原分母; 排除项; 安装日; 维护事件ID/实际部件; 报废状态/接收方; 历史受益者; 占用/预留暴露e_ap; 闲置/闭店时长; 总寿命暴露L_a; 实际最终E_a; 新旧分配版本; 带符号差额; 累计份额 | 按b_provider逐一检查建筑/货架/手动托盘车/顾客推车/结账包。测量全寿命场址面积时间、货架预留体积时间及各设备预留/占用时间。审核供应方部件/事件/处理模型及电力/清洁互斥边界；以实际维护/报废更新，不能按设备质量或租赁费用推断完整生命周期。 汇总方法：calc_assets; calc_restore; calc_normalize每参考流一次；逐行视图且源ID不重复 | Item(s); m2*h; m3*h; device*h | 连续预留/时间记录及每次维护/寿命修订/报废 | 所有历史/当前/未来受益者直至最终修正 | 五类资产及全部使用者 | 每参考流 | BOM/供应方签字边界；暴露台账；实际维护记录；寿命依据；全历史差额 |
| cp_cleaning | cleaning | cleaning_work | 清洁人工及物理来源核对 | 工单ID/版本; 区域; 实际面积; 起止; 方法; 供应方向量及分母; 实际水/清洁剂组成; 布/设备磨损; 供应方出行; 完整废水/废物载体; 处理; 门店电力排除; 全受益者实际pass清洁m2; 原池; cleaning_pass_id; driver_mode; cleaned_m2; all_beneficiary_cleaned_m2; independently_measured_time_dependent_source; source_m2h; all_beneficiary_source_m2h | 核实人工实际工时并与所有原始物理组成对账；分别采用cp_split_labour_cleaning及cp_split_support，不再生成完整清洁工单当量。 按calc_cleaning在计量前固定来源模式，保留每实际pass的时间与面积，不把全池面积时与单pass面积混用。 | h | 每份实际工单 | 包括闲置清洁的完整预设池 | 已记录零售区域及完整供应方边界 | 每参考流 | 签字工单；数量记录；化学组成；废水/处理记录；排除审核 |
| cp_split_labour_cleaning | cleaning | cleaning_work | 独立原始交换台账 | event_id; source_id; 发生/不存在证据; 准确物质或型号; 实际组成/SDS; 参考属性; 单位; 原始数量; 原始分母; 工时起止; 电表区间及上下级关系; 密度及温度; 完整载体净质量; 接收方及处理范围; 工具资产ID; 原配/替换件; 寿命及全部历史受益方; 历史修订差额; 全受益驱动; 直接/已归属状态; 旧整包撤销; 重叠来源; cleaning_pass_id; driver_mode; cleaned_m2; all_beneficiary_cleaned_m2; independently_measured_time_dependent_source; source_m2h; all_beneficiary_source_m2h | 逐事件核实实际投入和外运；工时按签认起止记录，物料/废物称重，电力读取互斥电表，车辆记录实际路线公里。补齐来源分母、组成、背景、接收处理和全受益方，执行split_attribution与c_split_quantity。实际不同配方/型号或额外排放须新增准确卡；本候选不得被默认套用。 按calc_cleaning在计量前固定来源模式，保留每实际pass的时间与面积，不把全池面积时与单pass面积混用。 | 逐卡一个属性/单位 | 每事件及来源修订 | 原完整来源周期及全部受益历史 | 实际工单及互斥现场/供应门 | 每参考流 | 签认工时、校准、组成、去重和接收凭证 |
| cp_split_support | split_support | split_cleaning_wipe; split_cleaning_broom; split_used_wipe; split_sweepings; split_broom_waste; split_cleaning_water; split_cleaning_sds; split_cleaning_mop; split_cleaning_effluent; split_mop_waste; split_cleaner_bottle; split_cleaner_bottle_waste; split_support_electricity; split_support_travel | 独立原始交换台账 | event_id; source_id; 发生/不存在证据; 准确物质或型号; 实际组成/SDS; 参考属性; 单位; 原始数量; 原始分母; 工时起止; 电表区间及上下级关系; 密度及温度; 完整载体净质量; 接收方及处理范围; 工具资产ID; 原配/替换件; 寿命及全部历史受益方; 历史修订差额; 全受益驱动; 直接/已归属状态; 旧整包撤销; 重叠来源; cleaning_pass_id; driver_mode; cleaned_m2; all_beneficiary_cleaned_m2; independently_measured_time_dependent_source; source_m2h; all_beneficiary_source_m2h | 逐事件核实实际投入和外运；工时按签认起止记录，物料/废物称重，电力读取互斥电表，车辆记录实际路线公里。补齐来源分母、组成、背景、接收处理和全受益方，执行split_attribution与c_split_quantity。实际不同配方/型号或额外排放须新增准确卡；本候选不得被默认套用。 按calc_cleaning在计量前固定来源模式，保留每实际pass的时间与面积，不把全池面积时与单pass面积混用。 | 逐卡一个属性/单位 | 每事件及来源修订 | 原完整来源周期及全部受益历史 | 实际工单及互斥现场/供应门 | 每参考流 | 签认工时、校准、组成、去重和接收凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_accept | service_output | Q=声明观察版本时最终验收仍有效的原ID去重数量。保留全部失败/零销售批；筛选最终有效ID后不能再扣撤销。后续撤销更新原版本。 | original_ID; final_acceptance_status; observation_version; cp_service | Q |  |
| calc_stock | retail; residual | C0_goods+C0_held_waste+收货+顾客实物退回=顾客实物总交接+废包交运+未另计外部流出+C1_goods+C1_held_waste（全为Item(s)）。顾客总交接仅含一次unqualified_retained原离开。判废只改变goods/held_waste状态：W0_count+新判失败包-已交运失败包=W1_count。另按源/材料/状态kg核对：期初质量+收货质量+退回质量+已记录新增质量+已记录吸湿增重=交接质量+交运质量+外部流出质量+期末质量+已记录移除质量+已记录失湿减重。计数及质量台账不可混合，须实测实际状态kg并调查不确定性/残差。不纳入供应商/跨店移动。 | C0_goods; C0_held_waste; receipts; customer_physical_returns; gross_customer_handovers; waste_package_dispatches; otherwise_unrecorded_external_exits; C1_goods; C1_held_waste; W0_count; new_failed_packages; dispatched_failed_packages; W1_count; opening_mass; received_mass; returned_mass; documented_added_mass; documented_moisture_gain; handover_mass; dispatch_mass; external_exit_mass; closing_mass; documented_removed_mass; documented_moisture_loss; cp_service; cp_waste | 已平衡实物台账 |  |
| calc_background | loss_supply | 对各原源i，指示状态S_i+F_i+O_i+T_i=1。原包失败数n_F=sum_i F_i。收货门失败原背景向量V_F=sum_i F_i*B_i。验收伴随向量V_S=sum_i S_i*B_i；保留V_O及V_T责任。一份原向量随最终所有权，不随每个后续载体。最终转售用版本差额替换既往状态及全部既往已计向量。 | S_i; F_i; O_i; T_i; B_i; source_denominator; prior_vector; source_version; cp_ownership | n_F; V_F; V_S; V_O; V_T |  |
| calc_energy | electricity | E_raw_MJ=3.6*E_raw_kWh。实测总表仅扣属于其边界且可独立归属的排除分回路一次；独立表仅加一次。所得完整区间池按calc_shared分配，保留待机/闭店。 | start_kWh; end_kWh; topology; contained_exclusions_kWh; disjoint_kWh; interval; driver; cp_meter | attributable_MJ |  |
| calc_shared | electricity; cleaning_work; building_life; rack_life; pallet_life; trolley_life; checkout_life | X_pt=X_t*d_pt/sum_b(d_bt)，采用a_shared的精确逐行物理驱动。全部受益者分配合计须等于X_t。直接专测X_pt不再分配，不能再乘份额。包括闲置/闭店期，总驱动未知/全零阻止完成。 | X_t; d_pt; d_bt; beneficiary_list; reservation_rule; cp_meter; cp_assets; cp_cleaning | 已归属原始行分子 | ghgp-product-2011 |
| calc_assets | building_life; rack_life; pallet_life; trolley_life; checkout_life | f_ap(v)=e_ap/L_a(v)；原始包当量=sum_a f_ap(v)。先将完整供应方包向量还原至一个精确资产。每次L_a修订替换全部历史分配，对各历史受益者/期间以delta=e_ap/L_a(new)-e_ap/L_a(old)修正。报废时令L_a=实际E_a，重算全部受益者，归属最终残差使sum f=1，并用实际事件向量替换预期维护/报废。不得重启制造或对终端载体乘两次。 | e_ap; L_a_old; L_a_new; E_a_actual; asset_ID; complete_provider_vector; source_denominator; source_version; prior_allocations; actual_maintenance_events; retirement_vector; cp_assets | 原始包当量; 已修正供应方向量; 带符号历史差额 |  |
| calc_cleaning | cleaning_work | 人工及本次清洁事件各实际原始物理来源，先细分为可独占事件；不能直接归属时，在同一同质清洁pass内按各受益者实际cleaned_m2分配，全部受益者份额和一。跨事件以各事件各自实测原始数量逐项归属后求和；“面积次”只表示按实际pass累加该面积，不把不同耗时事件混成同一均值。只有独立测得的持续时间相关来源池，才使用该池逐受益清洁m2*h，且不同时套面积次。需记录driver_mode和来源/事件ID，源池全分母已知为正；与split_attribution一致。人工数量是外购实测h，不是面积、次数或材料量。每种其他物理量独立归属，已归属量不再分配。先撤销旧整包，最终仅按Q归一一次。 | work_order_ID; measured_purchased_labour_h; cleaning_pass_id; driver_mode; cleaned_m2; all_beneficiary_cleaned_m2; independently_measured_time_dependent_source; source_m2h; all_beneficiary_source_m2h; cp_split_labour_cleaning | attributed purchased labour h before one /Q |  |
| calc_waste | failed_pack | W_dispatch=sum_consignment(毛kg-皮kg)，或互斥替代模式采用直接认证净kg。期初+产生-交运=期末的独立库存核查不得改变实测交运。对实际完整载体仅连接一次处理，不重复原背景部件。 运输供应方计算按b_waste_transport：签字完整联单模式已将路线/怠速/处理归属至kg，分段数据仅作QA。互斥重建模式对各载重去程段用d_bs=payload_kg*segment_km及f_bs=d_bs/sum_b(d_bs)；对各空驶/回程段和静止怠速区间分别用r_bs=reserved_capacity_kg*reserved_duration_h及g_bs=r_bs/sum_b(r_bs)。对覆盖实际车辆km/h/燃料的完整原供应方向量仅乘一次对应份额，并核对全受益者总量。驱动未知/不一致/全零阻止完成。 | measurement_mode; gross_kg; tare_kg; certified_net_kg; consignment_ID; opening_waste; generation_waste; closing_waste; treatment_vector; cp_waste; provider_mode; signed_consignment_kg_scope; segment_ID; segment_class; source_ID; actual_start_end; payload_kg; segment_km; reserved_capacity_kg; reserved_duration_h; all_beneficiary_drivers; actual_vehicle_km; actual_vehicle_h; actual_fuel; complete_provider_vector; source_version; allocation_QA_flag | 原始净交运kg |  |
| calc_restore | loss_supply; failed_pack; building_life; rack_life; pallet_life; trolley_life; checkout_life | 对各已按D_source归一化的外部模块行r，在其精确池/版本还原raw_original_r=normalized_r*D_source，再仅乘一次兼容源归属份额。按精确源ID去重并选择替代版本后，仅对相同交换身份/属性/单位分子求和。商品V_S伴随量在增量服务外，资产终端载体在供应方内。共同Q最终归一化仅在calc_normalize执行。 | normalized_r; D_source; source_pool; source_version; attributable_source_share; exchange_identity; property; unit; source_ID; replacement_links; cp_ownership; cp_waste; cp_assets; cp_cleaning | 兼容且去重的原始分子 |  |
| calc_normalize | all inventory rows | Q>0时各行数量=其去重已归属原始分子 / Q，每参考流仅最终除一次。service_output=Q/Q=1 Item(s)。Q=0保留且不可归一化，不得虚构分母。迟发修订同时替换原分子及Q并传递至伴随向量。 | Q; raw_row_numerator; source_ID; original_pool; replacement_version; cp_service | 每参考流交换数量 |  |
| calc_support_completion | retail | 对每个实际必要且未纳入已核实供应方的支持模块k，采集精确供应方/工单/模型、原池/窗口/版本/分母D_k、原子交换身份/属性/单位分子和完整边界。源归一化行乘D_k还原。优先专测。否则先将供应方各实测源分子拆成互斥的计算运行、网络运行、计算闲置及网络闲置分量池，各池保留精确源行ID/单位、时段及父源分子，同单位分量完整合计须核对至父源。各计算运行池仅含一种精确同质计算容量类别，以实测运行CPU-core*h为驱动，包含失败/中断执行；网络运行池用实测传输bytes，包含失败事务的实际字节。计算闲置池用预先预留CPU-core*h，网络闲置池用预先预留Mb/s*h，各自在一种已记录同质容量类别及精确共同区间内。各分量池按该池单一同单位驱动比率独立分给全部实际受益者，保留闭店/闲置/失败预留，总驱动须已知且为正。安保保留为独立实测原源池并用受保护m2*h，行政保留为独立实测原源池并用实际task*h。不得将tasks、bytes、CPU-core*h、Mb/s*h、m2*h或task*h加成一个驱动，也不得合并不兼容源交换数量。供应方分量分解未知或残差未解释阻止完成，不得默认为零。实际补全模块协议须保留各互斥池分子/身份/属性/单位、父源核对、受益者原始驱动值/单位及精确区间。仅所得相同交换/属性/单位已归属原始分子可相加。通过供应方明确排除及源ID核对排除已计现场电力/资产生命周期/清洁。按calc_restore仅将相同交换/属性/单位且原源ID唯一的原始已归属分子相加，最后仅共同除以最终Q一次。供应方未知或驱动不可核对阻止支持模块完成。声称补全前须按实际观察模块双语编写精确卡及单过程协议并同步；本公式本身不会新增交换。 | provider_model; service_order; D_k; source_pool; source_window; source_version; atomic_exchange; property; unit; component_pool_ID; component_class; component_raw_source_numerator; parent_raw_source_numerator; parent_reconciliation; exact_compute_capacity_class; active_CPU_core_hours; transferred_network_bytes; reserved_CPU_core_hours; reserved_network_Mbps_hours; protected_zone_m2_hours; administrative_task_hours; driver_unit; interval_start_end; all_beneficiary_driver_values; provider_exclusions; source_ID; Q | 已归属兼容支持模块原始分子; 明确部分/完整边界 |  |
| c_split_quantity | cleaning_work; split_cleaning_wipe; split_cleaning_broom; split_used_wipe; split_sweepings; split_broom_waste; split_cleaning_water; split_cleaning_sds; split_cleaning_mop; split_cleaning_effluent; split_mop_waste; split_cleaner_bottle; split_cleaner_bottle_waste; split_support_electricity; split_support_travel | 对每个准确身份r及其单一单位，先以原始来源分母D_source还原已归一来源q_source，得到x_raw=q_source*D_source；已是原始量则不再还原。按split_attribution仅作一次尚未完成的归属，按来源ID/事件/版本去重，撤销旧整包和旧历史版本。合计互斥原始量为X_r；q_r=X_r/Q，只除最终参考分母一次。人工只计实测外购h，不计原工单数/面积为人工量；自营工时仅核对。资产数量、物料kg、电力kWh、车辆vehicle*km及载体kg分别计算，禁止跨属性相加或用人工工时乘已实测物理量。未知量/身份/背景阻止完整性。 | X_r; D_source; q_source; Q; cp_split_labour_cleaning; cp_split_support | q_r |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | all inventory rows | 逐行绑定一个匹配的产品/废物身份，核实属性/单位链及实物/服务范围；从保留原始直读确认正式双语名及限定。电力仅为不绑定供应方的使用点流。未解决服务、商品、资产/清洁包或废物身份均不得宣称已核实；完成须有精确供应方模型及实际数量。 | 身份直读原件；链；完整模型/BOM/供应方范围及逐行审核 |
| q_sources | all processes | 制造商用于识别真实代表配置，不证明本门店路线或完整BOM。材料栏目包含桌面、桌腿及Panel，含纸覆膜、涂层、三聚氰胺膜和塑料封边，不能简化成纯木。包装重量3.59kg不是家具净质量，最大承重10kg不是桌质量，标称尺寸不是前景数量。以实际供应商部件/紧固件/包装BOM及校准收货实测为准。 | 实际SKU/颜色/配置；供应商BOM；称重及包装检查 |
| q_absence | all processes | 记录合格路线调查及每项条件资产/失败/废物的发生或有证据不存在，含日期、检查人、照片、图纸及采购覆盖。设备未知、供应方遗漏、废物状态未决或受益者驱动未解决不能变为零。 | 签字场址调查；图纸；采购；条件纳入决定 |
| q_time | all processes | 保留完整观察窗口、闲置/闭店/失败区间、原库存及迟发退回历史、版本修正凭据和全部受益者资产/服务分配台账。报告预期寿命、因果驱动及最终所有权的不确定性/敏感性；不得采用无依据数字默认或宣称完整。 | 批次登记；校准；误差界；差额凭据；敏感性模型 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_reference | service_output | 核实单一实际SKU/配置及未拆包合格交接；对最终有效原ID去重得到Q。Q须等于产出台账，不能再次扣除撤销。核查最终随访/迟发修订关联、实物退回与纯财务变动及原ID服务不重复。 |  |
| v_balance | retail; residual | 对纳入路线以原ID加保管事件ID、全程计数单位核对C0_goods+C0_held_waste+收货+顾客实物退回=顾客实物总交接+实际废包交运+未在其他出口记录的外部流出+C1_goods+C1_held_waste。顾客总交接包含有效验收及未合格外部留存的原出口各一次；终态重分类不能新增移动。顾客退回为新日期向内事件。供应商/跨店移动按b_gates须证明不存在。废物产生是商品到待运废物的内部状态变化，非第二次保管出口：另核对期初待运废包数+新判失败完整包数-交运废包数=期末待运废包数。按实际湿度变化及部件增减独立核对实测材料/源/状态kg，计数项不能与kg相加。接收方/状态/背景未知或未解释残差阻止完成。 |  |
| v_electricity | electricity | 核查电表拓扑、回路重叠、区间覆盖/校准，且MJ=3.6*kWh仅换算一次。仅当分表属于总表实测边界时才扣除；独立表仅加一次，绝不扣除。背景连接须有实际供电地点/电压/时期/供应方及交付损耗；通用电力UUID不能证明电网组合。 |  |
| v_complete | all processes | 每个条件行须有签字的存在/不存在证据。除电力外各流UUID及全部包供应方模型仍须逐行验证身份/完整性；空白不等于零或批准。按b_provider/b_cleaning核查完整资产/清洁包边界及实际发票/维护/处理。未覆盖路线、成分、排放或额外交换须具体增加双语原子项并重新同步，不能藏在通用扩展条款中。 |  |
| v_normalize | all processes | 各卡仅有一个已归属原始分子，按calc_normalize最终除以Q一次。资产/包份额、组成份额及分配份额各只作用一次。外部归一化模块须按原分母/池/版本还原为原始量；按精确源ID去重，仅合并兼容交换/属性/单位分子，最后统一除以最终Q一次。kg不能与MJ相加，原始总量不能与归一化量相加。保留不确定性、校准、模型版本及替代差额；源规格不提供现场默认值。 |  |
| split_completeness | all inventory rows | 核查每条准确身份和单一参考属性、全部实际工单组成、互斥计量、旧整包撤销、无重复来源/设备终端、全受益历史归属及最终分母一次归一。来源未验证、额外真实交换未建卡、数量未知或只写“合同包含”均不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | incremental_retail_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 相同配置顾客自提零售服务，并明确V_S/Q商品伴随量及完整下游产品系统阶段 |
| excluded_use | 家具制造数据集；通用零售业均值；未补支持模块的完整零售业务数据集；配送/组装/已用家具；已批准完整产品足迹 |
| required_metadata | 全部参考限定；原ID/Q台账；S/F/O/T伴随向量；过程/卡/供应方边界；单位；源哈希/版本；合池及寿命修订 |
| required_quality_disclosure | 部分实物门店门内边界及实际共享IT/安保/后台补全缺口；实际测量不确定性、不存在证据、模型完整性及全部未核实身份；预期与实际寿命；不宣称标准符合性 |
| update_trigger | 验收撤销、最终责任/归宿变化、SKU/BOM/包装/场址/电表/供应方变更、资产寿命/维护/报废或新观察交换 |

## 11. 数据源

保留的厂家及零售商来源说明本产品类别的案例和明确引用的技术区别，不将适用性限定于所列品牌/型号，也不为其他配置提供数值清单默认值。实际产品与供应商证据仍须按b_product_family取得。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc62141 | official_guidance | UNSD CPC Version3.0 subclass62141; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62141 | 分类边界：组381但排除38111及3812；不提供方法或因子 |
| ikea-lack-spec | standard | IKEA UK, LACK side table white55×55cm, article304.499.08; https://www.ikea.com/gb/en/p/lack-side-table-white-30449908/ | 仅制造商代表材料/配置栏目；非完整BOM、场址清单、退回期限或分配因子 |
| ghgp-product-2011 | standard | WRI/WBCSD (2011), Product Life Cycle Accounting and Reporting Standard, Chapter9, printed p63; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 优先细分再分配、底层物理关系及一致处理。具体零售驱动和寿命修订属本PCR设计，非标准强制值或全面符合声明 |
