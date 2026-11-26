---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-beverages
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 密封500mL PET瓶装无气泉水常温人工货架零售服务

## 1. 范围与适用性

本规则适用于明确的局部人工常温货架零售服务；边界和补全义务见具名规则，不是瓶装水生产或完整门店服务。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-beverages |
| classification_refs | CPC 3.0 62126：非专门店饮料零售服务；narrower |
| covered_products | 密封500 mL一次性PET瓶装无调味无气泉水，按同质SKU声明瓶盖/标签，常温人工钢货架零售的所述局部服务 |
| excluded_products | 其他规格/包装、碳酸水、调味或酒精饮料、矿泉水法律类别的泛化、开封/漏瓶路线、冷藏、自动设备、批发、电商、现场饮用及未补全的全门店服务 |
| representative_product | 密封500mL PET瓶装无气泉水常温人工货架零售服务；按同质分层分别核验实际供应商、SKU/配置、批次及原始完整BOM。 |
| production_route | 供应方成品收货验收—去除外箱/膜—逐瓶手搬上架—合格客户验收及原批次退货闭合—分类实际残余物交接 |
| market_state | 原瓶密封、未泄漏、未过期、按供应方储存说明的常温零售；不以国际来源的矿泉水称谓代替当地泉水分类核实 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 密封500 mL PET瓶装无气泉水的常温人工货架零售服务 |
| How much | 一瓶最终合格验收商品的服务；不是标称500 mL水量的生产 |
| How well | 同质SKU、原封完整、标签/保质期和供应方储存及合同验收要求满足并记录 |
| How long or cycle | 从指定签字收货至最终客户验收与原批次合同退货闭合；迟到事件须更正原版本 |
| reference_flow_link | retail_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 密封500 mL PET瓶装无气泉水的常温人工货架零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | SKU及泉水分类/来源; 500mL PET瓶盖标签规格; 原封完整及未漏证据; 供应方储存/保质期/验收要求; 场址及人工常温路线; 预设池和N/版本; 实物交付退货与最终合格ID; 原商品背景及失败责任; 货架完整配置及寿命台账; 实际无冷藏电动工具湿清洁泄漏证据; 局部边界及具名补全矩阵; 原始计量校准及不确定性 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| count_basis | retail_service; failed_goods_background; supplier_return; external_failed | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 按唯一原瓶和相同N计数；500mL只为规格，不换算kg。参考服务与实物商品角色不同。 |
| mass_basis | dry_wipe; shelf_asset; replacement_bolt; cardboard; shrink_film; whole_bottle_waste; used_wipe; removed_bolt; terminal_shelf | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 实际净质量，使用校准秤及互斥载体/组件边界；原始kg归属后仅除N一次。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已灌装、密封且按指定SKU签字验收的成品及原运输纸箱/LDPE膜到达门店收货关口 |
| starting_condition_role | foreground_input |
| product_classification_scope | CPC62126的特定泉水瓶人工货架局部零售服务子集；不覆盖241–244全部商品 |
| recursive_input_rule | 上游商品生产不是同一零售服务递归；延续退回商品保留原ID及背景，不重新投入同一服务1单位 |
| upstream_dataset_requirement | 同一收货关口的完整瓶装商品/外箱膜份额/入库运输背景及精确供应方范围，成功与失败责任按calc_goods互斥 |
| disclosure | 局部货架模块；具名遗漏模块、相同原批次N、未决身份及末端计划均须披露；不得作为完整零售服务 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | 本PCR跨制造商及品牌适用于已声明产品类别。品牌、型号、目录货号、SKU及商品名用于识别实际研究数据，不是排他性准入条件。下述材质/功能、产品状态、明确规定的固定规格、工艺/渠道及门口条件仍须满足。不同供应商、配置、版次或包装BOM须分别建立同质分层及其匹配的原始背景向量，不得将混合SKU个数乘以一个标本向量。使用实际测量数量及有依据的换算。厂家案例中的质量、尺寸、额定参数、配方及包装声明仅作示例，绝不是全类别默认值或完整BOM/LCI。实际存在不同部件、支持清洁剂、包装或载体时，须在声明完整前提供具体原子卡、匹配属性/单位、采集方法及不重叠来源边界；超出已声明类别的实际状态或路线须另行审查扩展。适用性、身份或证据未知仍为未解决。本候选类别扩展不构成独立科学或翻译审核批准。 |  |
| route | all inventory rows | 仅适用于密封、无调味、无气泉水，标称500 mL一次性PET瓶，须明确瓶盖、标签规格及同质SKU。接收已灌装商品及干瓦楞纸箱、LDPE收缩膜；逐瓶手搬至完整钢货架；本模块不含推车、托盘车、电机、冷藏、分装、开瓶、现场重新包装或车辆交付。按供应商标签/说明及实际温度、保质期、封口检查决定验收；不得虚构温度或法律限值。 | evian-faq; evian-500ml |
| gates | all inventory rows | 起点为签字门店收货验收；纳入所述货架作业直至客户最终合格验收及原批次退货闭合，包括失败、闲置期间和残余物处理。起点前收货拒收须有证据并由供应商负责；签字收货后门店造成的损坏仍归本池。客户占有或付款本身不等于合格验收。 | ghg-product-2011 |
| partial_completion | all inventory rows | 这是局部人工货架零售模块。完整零售结果必须补入具名模块：建筑制造/安装/维护/末端，常温照明与HVAC用电/制冷剂/设备，收银/POS及通信，实际推车/托盘车使用与资本，共同卫生/水/化学品/排水，员工配套/场址活动，入库运输及成功商品生产。指定负责数据生产者须维护源ID/模块重叠矩阵，使用相同批次/版本/N和相容参考基准；保留失败、闲置及零产出份额。完整货架资本、干擦巾、更换螺栓及本模块废物载体仅在此负责，其他模块不得重复纳入。每项必需模块具备证据、原始活动、分配及互斥交接/回读前，不得宣称完整零售足迹；模块覆盖未知阻断该主张。 | jrc-retail-2013; ghg-product-2011 |
| absence_extension | all inventory rows | 每个报告池及每次事件均通过现场巡查、设备登记、收据、清洁和损坏记录核实路线中不存在的过程。若出现开瓶/漏瓶、液体排放、泄漏蒸发、湿清洁、其他包装、电动搬运、专用照明或其他实际交换，受影响池完整前须增加具名具体双语卡/协议及支持计算。保留原事件及分子；不得以无证据零值、遗漏或完整瓶载体静默替代。空气、污水、捕获液及留存库存按实际接收介质闭合；进入室内的源数量不得自动视为外环境排放。 | jrc-retail-2013 |
| carrier_background | failed_goods_background; cardboard; shrink_film; whole_bottle_waste | 收货商品背景为一瓶原灌装商品，加有证据的原运输箱/膜份额及至相同关口的入库运输。成功背景B_success/N仅在下游耦合一次；只有门店最终负责的失败背景B_service/N进入failed_goods_background。供应商继续流转、再售及未决库存保留谱系，不增第二次生产负担或回收抵扣。按实际收集交接追加废物处理；核实服务是否已含后续运输和处理，未覆盖则具名补服务。载体所含物不另作为交换。 | ghg-product-2011 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| shelf | 人工货架及商品台账 | required | 实际符合限定路线 | 局部经营和完整货架资本 | 1 Item(s) retail_service |
| residual | 分类残余物交接 | required | 全池核实各流发生/不存在 | 实际载体末端责任 | 1 Item(s) retail_service |

### 过程：人工货架及商品台账（`shelf`）

#### 输入

##### 产品流

###### 门店收货关口的密封500 mL一次性PET瓶装无气泉水 (`failed_goods_background`)

B_service/N; calc_goods; cp_goods。本输入为零售失败所承担的原完整瓶装商品背景，包括原瓶盖、标签、源水、灌装及入库运输。继续流转、再售及暂存瓶不进入本输入，并保留其原背景台账。

- 选定流: 门店收货关口的密封500 mL一次性PET瓶装无气泉水
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: B_service/N; cp_goods。本输入为零售失败所承担的原完整瓶装商品背景，包括原瓶盖、标签、源水、灌装及入库运输。继续流转、再售及暂存瓶不进入本输入，并保留其原背景台账。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_goods`
- 来源: `ghg-product-2011`; `jrc-retail-2013`

###### 未浸渍的纤维素纸干擦拭巾 (`dry_wipe`)

A_wipe/N; calc_material; cp_shelf。货架除尘实际消耗的干擦拭巾质量；本路线不含湿擦、化学浸渍或泄漏吸附。

- 选定流: 未浸渍的纤维素纸干擦拭巾
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_wipe/N; cp_shelf。货架除尘实际消耗的干擦拭巾质量；本路线不含湿擦、化学浸渍或泄漏吸附。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_shelf`
- 来源: `ghg-product-2011`; `jrc-retail-2013`

###### 已安装的完整独立螺栓连接粉末涂层钢制零售货架 (`shelf_asset`)

sum(f_j*m_initial_j)/N; calc_asset; cp_asset。称重的完整资产包括框架、层板、原支脚、紧固件及涂层；其合同背景包含安装和原始交付。不含灯具、布线、收银机、推车、建筑或更换螺栓。

- 选定流: 已安装的完整独立螺栓连接粉末涂层钢制零售货架
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: sum(f_j*m_initial_j)/N; cp_asset。称重的完整资产包括框架、层板、原支脚、紧固件及涂层；其合同背景包含安装和原始交付。不含灯具、布线、收银机、推车、建筑或更换螺栓。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_asset`
- 来源: `ghg-product-2011`; `jrc-retail-2013`

###### 碳钢货架更换螺栓 (`replacement_bolt`)

A_bolt/N; calc_material; cp_shelf。报告池期间实际安装的更换螺栓；原厂螺栓仍在shelf_asset中。声明的维护为手工拧紧；电动工具、润滑剂、更换涂层或其他零件出现时，完整性确认前须具名扩展。

- 选定流: 碳钢货架更换螺栓
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: A_bolt/N; cp_shelf。报告池期间实际安装的更换螺栓；原厂螺栓仍在shelf_asset中。声明的维护为手工拧紧；电动工具、润滑剂、更换涂层或其他零件出现时，完整性确认前须具名扩展。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_shelf`
- 来源: `ghg-product-2011`; `jrc-retail-2013`

#### 输出

##### 产品流

###### 密封500 mL PET瓶装无气泉水的常温人工货架零售服务 (`retail_service`)

1 Item(s); cp_goods; calc_reference。恰为一瓶最终合格验收瓶装商品的服务，不是一升、一千克、一笔整体交易或瓶装商品生产。

- 选定流: 密封500 mL PET瓶装无气泉水的常温人工货架零售服务
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `method_formula`
- 采集协议: `cp_goods`
- 来源: `ghg-product-2011`; `jrc-retail-2013`

###### 退回供应商继续流通的密封500 mL PET瓶装无气泉水 (`supplier_return`)

C_supplier/N; calc_goods; cp_goods。记录实物出库转移、接收方及验收证据；不作为废物或避免生产抵扣。原背景及后续零售责任随唯一瓶号继续转移。

- 选定流: 退回供应商继续流通的密封500 mL PET瓶装无气泉水
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: C_supplier/N; cp_goods。记录实物出库转移、接收方及验收证据；不作为废物或避免生产抵扣。原背景及后续零售责任随唯一瓶号继续转移。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_goods`
- 来源: `ghg-product-2011`; `jrc-retail-2013`

###### 外部留存但未合格验收的密封500 mL PET瓶装无气泉水 (`external_failed`)

F_external/N; calc_goods; cp_goods。由接收方留存的实际最终失败交付不是成功服务或门店废物。须一次记录最终状态、接收方及原背景责任。

- 选定流: 外部留存但未合格验收的密封500 mL PET瓶装无气泉水
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: F_external/N; cp_goods。由接收方留存的实际最终失败交付不是成功服务或门店废物。须一次记录最终状态、接收方及原背景责任。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_goods`
- 来源: `ghg-product-2011`; `jrc-retail-2013`

### 过程：分类残余物交接（`residual`）

#### 输出

##### 废物流

###### 干燥瓦楞纸板运输箱废物 (`cardboard`)

W_carton/N; calc_waste; cp_residual。称量实际分离纸箱，排除可重复使用库存与皮重；入库纸箱制造留在完整商品背景中，不再设第二次采购输入。

- 选定流: 干燥瓦楞纸板运输箱废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: W_carton/N; cp_residual。称量实际分离纸箱，排除可重复使用库存与皮重；入库纸箱制造留在完整商品背景中，不再设第二次采购输入。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residual`
- 来源: `ghg-product-2011`; `jrc-retail-2013`

###### 干燥LDPE饮料组合包收缩膜废物 (`shrink_film`)

W_film/N; calc_waste; cp_residual。实际分离的LDPE收缩膜；核实聚合物身份，称量不含纸箱。不设默认组合包瓶数或膜质量。

- 选定流: 干燥LDPE饮料组合包收缩膜废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: W_film/N; cp_residual。实际分离的LDPE收缩膜；核实聚合物身份，称量不含纸箱。不设默认组合包瓶数或膜质量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residual`
- 来源: `ghg-product-2011`; `jrc-retail-2013`

###### 带瓶盖与标签的拒收密封500 mL PET瓶装无气泉水废物 (`whole_bottle_waste`)

W_bottle/N; calc_waste; cp_residual。实际完整密封载体质量包括水、瓶身、瓶盖及标签；不得另增所含水、PET、瓶盖或标签废物行。B_service按原瓶计一次，不按此废物质量计。

- 选定流: 带瓶盖与标签的拒收密封500 mL PET瓶装无气泉水废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: W_bottle/N; cp_residual。实际完整密封载体质量包括水、瓶身、瓶盖及标签；不得另增所含水、PET、瓶盖或标签废物行。B_service按原瓶计一次，不按此废物质量计。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residual`
- 来源: `ghg-product-2011`; `jrc-retail-2013`

###### 沾尘的干纤维素纸擦拭巾废物 (`used_wipe`)

W_wipe/N; calc_waste; cp_residual。实际废干擦拭巾含收集货架灰尘，扣除容器皮重；不得在该载体隐藏湿巾或饮料泄漏混合物。

- 选定流: 沾尘的干纤维素纸擦拭巾废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: W_wipe/N; cp_residual。实际废干擦拭巾含收集货架灰尘，扣除容器皮重；不得在该载体隐藏湿巾或饮料泄漏混合物。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residual`
- 来源: `ghg-product-2011`; `jrc-retail-2013`

###### 拆除的碳钢货架螺栓废物 (`removed_bolt`)

W_bolt/N; calc_waste; cp_residual。实际维护拆除件为事件废物；末端保留螺栓仍随完整货架，不得在本行再次称量。

- 选定流: 拆除的碳钢货架螺栓废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: W_bolt/N; cp_residual。实际维护拆除件为事件废物；末端保留螺栓仍随完整货架，不得在本行再次称量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_residual`
- 来源: `ghg-product-2011`; `jrc-retail-2013`

###### 报废的完整粉末涂层钢制零售货架废物 (`terminal_shelf`)

sum(f_terminal_j*m_terminal_j)/N; calc_asset; cp_asset_end。末端直接净称已排除先前拆件，不得再次扣除removed_bolt。包括仍安装的更换件及支脚；不再乘第二次材料比例或制造比例。

- 选定流: 报废的完整粉末涂层钢制零售货架废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: sum(f_terminal_j*m_terminal_j)/N; cp_asset_end。末端直接净称已排除先前拆件，不得再次扣除removed_bolt。包括仍安装的更换件及支脚；不再乘第二次材料比例或制造比例。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_asset_end`
- 来源: `ghg-product-2011`; `jrc-retail-2013`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| shared | all inventory rows | 先按SKU/任务/容器直接识别。共享干擦巾/螺栓事件按整个事件覆盖期所有实际受益对象记录的货架面积小时分配：a_i=x_i/sum(x_all)，原总量只分配一次。空置保留容量作为明确分配的闲置受益对象，并包括失败批次。全部驱动为零或未知时保留未决原始池，不得自动均分或置零。所有分配份额须与原总量对账后才除N。人体代谢能与工时不是物质交换；用于执行PCR测量的数据/设备不作为货架经营投入。 | ghg-product-2011 |
| asset_ledger | shelf_asset; terminal_shelf | 对完整货架的所有受益对象和期间维护唯一持续台账。calc_asset以货架面积小时确定制造及末端责任，包括保留/闲置区间；预期寿命变化须更正旧分配，不得重启制造。更换螺栓采购/拆除归实际维护事件，不再乘寿命比例。不得采用替代抵扣、避免生产或价格分配。 | ghg-product-2011 |
| return_pool | all inventory rows | 采集前预先固定一个配置/场址/SKU批次池、报告日期及合同退货/验收闭合规则；该池保留零销售和纯失败期间。迟到退货须重开原版本：更正N及所有应归属经营/材料/资产分子、责任与最终去向；带符号负更正替换旧量，不另加至新批次。仅财务退款不改变实物库存或合格验收，除非有证据改变其状态。再售商品在唯一历史中只产生一次最终服务和一次成功背景。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | shelf | 瓶装商品身份、验收、库存及背景责任 | stock_acceptance_ledger | 场址; 销售地区/日期; 供应商当前SKU/瓶身/盖/标签组成及建模时的再生含量记录; SKU/标签/照片; 泉水来源; 标称500mL; PET/盖/标签; 批号; 唯一瓶号或已对账批次ID; 原收货ID/瓶数; 期初期末库存; 总交付H; 实物退货U; 返工/再售关联; 最终合格ID; 失败/继续/暂存ID; 接收方; 责任; 签字收货; 到期日; 常温温度; 最终闭合日期/版本; 原背景/供应方及入库运输范围; 原收货完整瓶净/毛kg、干瓶身/盖/标签皮重/BOM、原灌装内容物kg及抽样不确定性 | 在收货、每次交付/退货及每日货架结存时扫码/按收据计数并盘点；保留失败及供应商退货签收。按calc_goods分区每个原瓶；标称容量仅为标签规格，不是实际kg或验收瓶数。收货时取得配置一致的供应商灌装产品记录/BOM，或对同批次校准毛称并破坏性采样干包装组件皮重；原灌装kg为毛重减实测干包装皮重，记录抽样/温度与不确定性。不得由标称500mL推导组成、灌装kg或包装kg；须取得原相容完整单件生产/入库背景，否则阻断背景完整性。取得客户合同验收证据，追踪退货期届满或有文件的最终解决。 calc_reference; calc_goods；先核对原实物流转，最终N另列；每个数量仅按参考流归一一次 | Item(s); kg; degC | 每次流转及每日结存；闭合与每次迟到事件 | 完整预设池及原批次更正 | 门店收货点、货架及客户/供应商交接记录 | 每参考流 | 签字单据；扫码审计；每日盘点对账；标签及说明证据；最终客户和接收方记录；背景重叠矩阵 |
| cp_shelf | shelf | 实际干擦巾及更换螺栓 | material_event_ledger | 源事件ID; 货架ID; SKU/任务; 期初/采购/转移/期末干材料质量; 巾等级; 螺栓材质/规格; 安装/拆除ID; 皮重; 秤分度/校准; 全受益面积小时; 闲置份额; 无泄漏/无湿清洁/设备证据 | 用校准天平称库存及实际领用/退回；检查未用与耗用材料、手工拧紧工单和每日路线不存在证据。干材料按实际供货状态称量并声明湿度/状态，不设默认干比例。无关材料等级或实际新化学品须在完整前分为具名卡。 calc_material；原总量分配一次后/N，每参考流 | kg | 每次领退/维护事件；每日不存在核查；期初期末盘点 | 全池包括闲置和失败期间 | 指定货架及互斥源料箱 | 每参考流 | 校准证/校验砝码；供应商组成；库存对账；工单ID及分配台账 |
| cp_asset | shelf | 完整货架制造/安装责任 | asset_lifetime_ledger | 资产ID/配置; 原安装/供应方范围; 原净kg; 各组件边界; 校准秤; 受益货架面积与保留区间; 启用日期; 预期总寿命面积小时L_j; 版本; 既往份额; 闲置/失败责任; 维护拆装; 末端计划 | 服务前称量完整已安装货架净质量，排除运输包装；或采用配置一致且可追溯的原称重。每日记录所有受益对象实际占用/保留面积区间，包括空置/闭店期间；每期结算与确认报废时审查L_j。不得设默认货架kg或寿命。 calc_asset；完整原始kg乘本期份额后/N，每参考流 | kg; m2*h | 初始配置；每日暴露量；每次寿命修订 | 资产全寿命及每个报告池 | 同一具名完整货架 | 每参考流 | 完整供应方BOM/范围；原称重/校准；持续寿命版本与份额汇总 |
| cp_residual | residual | 实际分离实物废物载体 | waste_handoff_ledger | 源事件/容器/份额ID; 流身份; 完整封口; 完整瓶数及毛/净kg; 纸箱/LDPE/废巾/螺栓kg; 皮重; 期初期末废物暂存; 转移; 接收方; 去向/处理; 服务商运输/处理范围; 共享全受益驱动; 秤校准 | 货架处分类每个具名流，用校准秤称量每次实际交接及暂存结存。完整密封瓶废物为单一载体；瓶数关联原失败ID，称完整内容物，不以标称体积换算质量。不存在须以巡查和收集清单记录，不以缺发票代替。 calc_waste；实物库存先闭合，再分配和/N，每参考流；不重复所含组件 | kg; Item(s) | 每次废物事件/交接及期初期末暂存 | 完整原批次包括迟到退货去向 | 货架收集点至有文件的接收方交接 | 每参考流 | 称重单；接收签收；校准；聚合物/BOM记录；原瓶ID及容器份额对账 |
| cp_asset_end | residual | 完整末端货架载体及寿命责任 | terminal_asset_ledger | 资产ID; 实际报废; 完整剩余载体净kg; 皮重; 保留支脚/螺栓/更换件; 拆件ID; 实际寿命面积小时与全受益对象; 最终份额版本/更正; 接收方; 处理/供应方范围 | 实际报废时直接净称完整剩余货架，按ID对账历史事件拆装并关联已核实接收方。不得在任意报告结算时虚构末端废物；报废前以实际计划载体边界披露预期责任，报废确认质量及f_terminal后更正原版本。末端数据未知则保持暂定。 calc_asset；实际完整净载体乘f_terminal后/N，每参考流，恰一次 | kg; m2*h | 确认报废及每次计划/修订审查 | 资产全寿命及原受益版本 | 同一资产实际废物交接点 | 每参考流 | 末端称重/校准；转移清单；原件与更换组件对账；最终寿命份额总和 |
| cp_completion_operations | shelf | 另行补全的共同场所、照明/HVAC、收银及员工配套模块采集视图 | completion_meter_task_ledger | 源事件ID; 模块/组件/回路/供应方ID; 原批次/N/版本; 完整主表与分表回路图; 实际期初期末读数及单位/校准; 直接SKU/任务读数; 覆盖日期; 所有受益对象面积/保留闲置小时; 收银任务秒和声明闲置容量归属; 员工配套在场/任务/待命秒; 实际制冷剂物种、原充注/回收/空气捕集库存与转移; 原厂充注供应方边界; 外环境通量及接收证据 | 对各遗漏模块采集互斥实际场址记录，保留精确流/供应方定义；该视图不在货架清单新增通用交换。先细分/直接计量，再对实测余量采用completion_operations。记录所有营业、闭店、失败、闲置区间及每次制冷剂事件；按设备/事件记录核查不存在过程。未知数量保留未决。 每参考流 | native meter units; kg; m2*h; s | 每个计量区间/任务/事件；全池期初期末 | 相同预设批次及每次原版本更正 | 同一门店有文件的互斥外部补全模块 | 每参考流 | 回路包含关系；校准表计；面积/时间/任务日志；全受益对象及供应方重叠对账 |
| cp_completion_housekeeping | residual | 另行补全共同卫生用水、具体化学品和完整废液的采集视图 | completion_liquid_carrier_ledger | 源/事件/容器/份额/模块ID; 进水及排水表边界/读数; 实际密度/温度; 每种具名清洁配方与化学浓度/质量; 清洁剂/商品溶解份额; 实测水/液体暂存; 回用回路; 蒸发/捕集/其他排放测量; 追溯至本液池的外送留存份额，排除新加外部干巾/容器质量; 受益清洁面积/次数记录; 完整废液接收/处理及服务商范围; 互斥直测或重构模式 | 进水外购及各实际化学品分别测量，实际排出整液称量或计量。采用completion_housekeeping，不得由仅水量平衡推断完整废液。共用排水管份额须与其他实际载体互斥；要求仪器校准、实测溶液组成和不存在/事件覆盖。具体卡加入补全模块，不在此设清洁集合行。 每参考流 | kg; m3; kg/m3; degC | 每次清洁/化学品领用及排放；期初期末液体暂存 | 相同全池，包括闭店、失败和迟到更正期间 | 映射的场址进水口、清洁点及实际排水/接收关口 | 每参考流 | 进水/排水图；校准；清洁剂供应方组成；实测完整液体平衡；唯一容器份额及接收单据 |
| cp_completion_assets | shelf | 互斥遗漏资本与维护模块采集视图 | completion_asset_event_ledger | 模块/资产/组件/供应方/合同ID; 精确完整资产配置及制造/安装边界; 原含流体/零件; 实际原数量/BOM/称重; 当前/既往/剩余寿命驱动及所有受益对象/闲置; 版本/更正/余量台账; 实际末端载体及接收方; 维护事件日期/支持区间; 同质合同/服务类型/包版本/单位; 已含零件/公用工程/技术员出行/拆件处理; 排除项和重叠ID | 取得实际完整资产/服务定义、原始及末端测量、维护工单和寿命记录，采用completion_assets。选择一个完整包或互斥具名组件前须核实供应方范围。不同性质事件计数不得代替同质合同单位。对所有受益对象采集原批次带符号修订；新报告不得重置。 每参考流 | actual defined asset/service unit; kg; m2*h; s | 初始购入/配置；每次事件/报告/修订；实际报废 | 资产全寿命及各原批次版本 | 有文件的补全建筑/HVAC/POS/搬运/配套资产，与货架互斥 | 每参考流 | 完整BOM/供应方合同；原始/末端称重；事件范围；全寿命份额及更正/对账记录 |
| cp_completion_transport | shelf | 实际遗漏入库/退回/搬运运输采集视图 | completion_route_handling_ledger | 源/行程/路段/任务/车辆/模块/供应方ID; 各路段所有货物及实际装载kg; 包括空载段的实际公里; 燃料/电力/怠速读数及服务商tkm/vehiclekm边界; 实际静止怠速/待命区间时长与保留运力; 发货关口; 原商品ID/背景责任方; 有载与空载定位/返回搬运秒; 保留闲置区间; 全受益对象; 已含维护/资本/服务 | 采集实际路线/负载和运行日志或已核实服务商活动，不用直线猜测。采用completion_transport，证明服务商活动覆盖哪些实测空载/怠速路段。声明货架路线的人工逐瓶搬运仍不设机器交换；另行补全的搬运设备采用实际有载加空载时间及其独立互斥资产记录。 每参考流 | kg; km; t*km; vehicle*km; s; actual fuel/energy units | 每个行程路段/任务/闲置期间及池边界 | 相同原商品/批次池，包括失败及退货 | 精确供应方至收货或实际退回路段及有文件搬运路线 | 每参考流 | 路线/GPS/里程表与装载证据；校准燃料/能源；全受益负载及空载覆盖；原背景重叠矩阵 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_reference | retail_service | N = 原批次退货/再售闭合后唯一最终合格验收原瓶ID数。H与U为总实物流转瓶数，不是N。同一原瓶退货/再售不产生多次服务。归一时N须正；N=0保留整个原始池并在预设相同配置内执行所需归属/合并，不得虚构1或删池。 | H; U; final_ids; cp_goods | N | ghg-product-2011 |
| calc_goods | failed_goods_background; supplier_return; external_failed | O_original仅含尚未服务的原期初瓶；R_original仅计首次收到且尚未计入的原瓶，不含实物退货/再售循环。原瓶分区：O_original + R_original = B_success + B_service + B_continue + B_open；B_service = F_store + F_external；B_continue包括具名后续责任方的有证据供应商退回；其他实际转移C_other须在完整前有独立具名卡及协议，未决责任保持暂定；B_open为未决门店库存。仅因同一原密封同质瓶经唯一ID和封口核查存续至合格验收，才有B_success=N；不设500mL与kg相等。后续再售的失败瓶从F移出并仅进入成功一次，同时更正原背景。另行核对总实物库存：S_open + R_gross + U = S_close + H + C_supplier + C_other + W_count；外部留存失败已在H中，不得再次扣F_external。老客户退货关联原ID，不作为新收货。B_service/N进入failed_goods_background；B_success/N完整原商品背景仅在下游追加一次。最终责任未知保留B_open/暂定并阻断闭合；仅财务退款不改变两式。 | original_ids; ownership; stock; H; U; cp_goods | B_service; B_success; C_supplier; F_external | ghg-product-2011 |
| calc_material | dry_wipe; replacement_bolt | 原耗用kg = 期初可用kg + 收入kg + 调入kg - 期末可用kg - 可用调出kg。与称量的实际耗用/安装事件对账。直接归属或共享事件a_i份额仅分配一次，得A_wipe或A_bolt，再/N一次。废巾所含灰尘使其质量不必等于采购干巾质量；废物独立实称。 | material_stock; event_share; N; cp_shelf | A_wipe/N; A_bolt/N | ghg-product-2011 |
| calc_waste | cardboard; shrink_film; whole_bottle_waste; used_wipe; removed_bolt | 各互斥载体：生成kg + 期初暂存kg + 实际调入kg = 实际交接出库kg + 期末暂存kg + 其他实际调出kg。清单W_stream为按实际接收方与处理归属的实际出库载体kg；剩余暂存保留其原未来处理责任并披露。使用唯一容器/份额ID；采用去向份额时其和须为1，且仅乘载体一次。完整密封载体直接测量，不用标称500mL*密度。完整瓶W_count须对应门店失败原ID；外部留存失败商品不是W_count。 | waste_stock; handoff; recipient; N; cp_residual | W_carton/N; W_film/N; W_bottle/N; W_wipe/N; W_bolt/N | jrc-retail-2013 |
| calc_asset | shelf_asset; terminal_shelf | 对资产j，x_j,p = sum(归属受益池p的保留货架面积_m2 * 实际区间_h)；L_j为预先记录的全受益对象预期寿命x总和，包括按责任池归属的未占用保留/闲置时间。须有实际寿命规划证据且L_j>0，否则保留未决资产池。f_j,p=x_j,p/L_j；各版本份额总和<=1，并有完整未来余量台账。寿命修订须替换所有旧f版本，向原池记录带符号更正，不得重购资产。报废时L_actual=sum(全部实际x)；f_terminal_j,p=x_j,p/L_actual，最终更正的制造份额也使用同一全寿命分母；最终份额和=1并替换先前估计。制造数量=sum(f_j,p*m_initial_j)/N；实际末端数量=sum(f_terminal_j,p*m_terminal_j)/N，仅一次，不得将制造与末端份额相乘。末端直接净称已不含拆除件，不再扣除。既往制造负担仅按差额更正。 | x_j,p; L_j; m_initial_j; m_terminal_j; N; cp_asset; cp_asset_end | asset_kg/N; terminal_kg/N | ghg-product-2011 |
| calc_complete | all inventory rows | 每个清单数量均先取未归一原始量，再互斥归属，最后仅除相同N一次。体积转质量、水分、浓度、密度或计数转kg均无默认。质量行使用校准实际净称，标签标称容量仅识别瓶装规格。完整零售聚合前，外部kg服务须以相同密封瓶每最终合格瓶实测kg按方法、样本及不确定性换算；不得将不同包装/状态/服务范围视为等价，不得重复使用已归一分子总量。 | raw_quantities; attribution; N; cp_goods | coherent quantities per reference flow | ghg-product-2011 |
| completion_operations | all inventory rows | 对各实际遗漏照明/HVAC/收银/配套公用回路，先归属直接实测受益量。经证明主表包含子表时，R_parent=P_parent-sum(已含且互斥子表)，每个已含子表仅扣一次；独立互斥表不变。照明/HVAC余量按a_i=(受益对象i面积_m2*覆盖保留小时)/sum(所有实际受益面积小时)分配，包括已归属闲置/闭店/保留容量。收银余量按b_i=(实际任务秒_i+声明闲置容量归属秒_i)/sum(全受益任务及闲置容量秒)分配。员工配套余量按实测应归属员工任务/在场秒加归属待命秒，在所有场址受益对象间对账。闲置容量按预设责任池保留容量/时间记录归属，不得抹去或仅分给销售。总驱动未知/为零则保留未决原始池。各回路原单位全量只分配一次，仅剔除已证明包含一侧的服务商重叠，按实测文件基准换单位，最后仅除原更正N一次。实际燃料/热和制冷剂物种须在补全模块有各自具体交换。逐制冷剂先闭合原物理回路：L_internal=期初充注+外购补充+回用回收-期末充注-回路回收-其他含物转移。启用原厂充注只归资产内期初库存/供应方制造一次，不再作为外购补充输入。回收暂存期初+回路回收=回收暂存期末+外送回收+回用回收+其他含物转移，使用唯一源份额。物种外环境排放E=L_internal-空气暂存净变化-捕集暂存净变化-空气捕集外送；实际空气捕集与回路回收互斥。以一致温压/干湿单位独立验证实际外边界进出通量/背景；室内释放不自动等于E，捕集/暂存未知不得置零。原始闭合后才分配；完整转移载体及物种份额不得重复。 | meter_map; direct_readings; area_hours; checkout_seconds; staff_seconds; refrigerant_stocks; N; cp_completion_operations | disjoint completed utility quantities/N | ghg-product-2011; jrc-retail-2013 |
| completion_housekeeping | all inventory rows | 外购水按实测温度M_import=V_in*rho_in；进水外购表已不含内部回用，不得再次扣回用。各实际清洁配方/化学品按净耗用质量和实测组成/浓度分别记录；背景已含其原料时不得再加相同原料。共享清洁先直接任务归属，事件余量按各受益对象实际清洁面积_m2*实际清洁遍数分配，包括实际清洁的闭店/失败/保留区域。废液采用互斥方法：(A)实际外排整液M_eff=V_drain*rho_eff或直接净称，不再扣蒸发/暂存；(B)整液kg平衡M_eff=M_import+M_other_actual_liquid+M_dissolved_actual_material+S_open-S_close-M_actual_evaporated-M_other_disjoint_outgoing_liquid-M_retained_export，各项均按一致整载体边界实测。M_retained_export仅指源于本源液池且在另一实际载体中外送的实测液体或固体份额；排除新引入的外部干巾、容器及其他载体质量。外送源份额与其他液体外送及同次闭合的期末留存库存互斥。期初/期末数量仍为本平衡中分别带时点的库存项，不得再额外扣留存材料。每个外送源份额只扣一次，不得再作第二次固体扣减。内部回用在此边界内抵消。收入的完整清洁溶液含其既有溶质计入M_other_actual_liquid；M_dissolved_actual_material仅计新引入且未包含在任一实测液体/载体项内的干材料。溶质及商品份额仅计一次，不得由仅水体积平衡推断整液或乘无关密度。冷凝物、捕集物、暂存液和共用排水份额采用唯一互斥源/容器ID。原载体分配一次后/N；去向比例和为1且仅乘一次。项或排水覆盖未知阻断完整性。 | inlet_water; actual_chemicals; direct_effluent; liquid_stocks; retained_export_source_portions; cleaned_area_passes; N; cp_completion_housekeeping | completed water/chemical/whole-effluent quantities/N | jrc-retail-2013; ghg-product-2011 |
| completion_assets | all inventory rows | 使用互斥完整资产台账：建筑壳体/固定结构不含货架、HVAC设备、专用灯具、POS和搬运设备；HVAC设备包含有证据的原集成控制器/制冷剂充注，不含建筑/POS/搬运；POS仅含供应方精确组件边界定义的终端/打印机/扫描器/网络包；每台实际推车/托盘车各为完整资产，有证据时含原内装流体。专用照明/配套资产在上述包外时须另具名定义。不得再次纳入shelf_asset、replacement_bolt、dry_wipe或其废物。建筑/HVAC/照明采用全受益保留面积小时；POS采用任务秒加闲置容量归属秒；搬运采用实际有载+空载定位/返回秒加保留闲置归属秒；员工配套资产采用在场/任务秒加待命归属秒。对资产j，L_j=当前确认的既往寿命驱动+全部受益对象有文件的预期剩余驱动，包括闲置，且L_j>0。f_j,p=当前原池驱动/L_j；完整原制造/安装数量乘f_j,p仅归属一次。修订须对各原批次以带符号差额替换旧份额，保留累计和<=1及明确未来余量，不得重置采购。实际报废时采用全实际寿命总和，f_terminal_j,p=原池驱动/全实际驱动；最终份额和=1，替换旧估计，实际完整末端净载体仅乘f_terminal一次，不得再乘制造份额；末端直接净称已不含先前拆除件。原流体/零件在原包内，后续添加及拆件为独立实际事件，末端保留组件仍在完整末端载体内。维护单独记录精确同质实际contract_id/work_scope/service_type/package_version/unit及支持事件区间。先直接事件归属，共同事件按对应资产驱动在有文件支持区间内对全受益对象分份额，再除N。不同工作范围须分层为具名相容卡/服务，不得用通用事件计数Items。核实已含零件、公用工程、技术员出行和拆件处理，仅从一侧已证明包含范围剔重；不得机械拆分有证据完整包。覆盖/驱动/载体/合同基准未知阻断完整性。 | asset_boundary; past_driver; remaining_driver; current_driver; initial_quantity; terminal_quantity; maintenance_contract; support_interval; N; cp_completion_assets | completed asset/maintenance/terminal quantities/N | ghg-product-2011 |
| completion_transport | all inventory rows | 先核实各供应方/商品背景关口及已含入库/退回运输、制造、能源、维护和处理。原商品入库运费按calc_goods随唯一原瓶背景，不得重加。未覆盖实际运输的互斥模式由证据固定：有全有载、空载、怠速段完整实测燃料/电力日志时必须采用，并按已核实服务商全货物责任分配；仅在完整直测日志不可得时采用覆盖精确路段的已核实相容车辆距离/货运服务活动，不重复燃料；两者均无则阻断完整性。原有载段tkm=sum(各实际载运货物kg/1000*实际路段km)；实际空载段即使tkm=0，vehiclekm仍>0。有载货运实际负担按全受益对象货物tkm分配；移动空载/返回路段仅在实际预声明合同分配保留运力时按有文件的保留车辆容量*实际路段距离分配。该保留合同下的静止怠速/待命区间，实际非零燃料/能源按保留车辆容量*实际区间时长分配，不得按零距离分配。各模式保留实际全受益驱动的正总和；时长/容量未知或总驱动为零/未知时，该原始池保持未决。无保留运力证据时，移动空载/返回和静止怠速负担均按实际路线货物去程有载tkm分配，且全受益分母须正；实际怠速燃料/能源仍留在所分配路线总量中。采集前记录合同模式，不得留作下游自由选择。路线无有载货物且无有证据保留驱动时，保留其原燃料/vehiclekm未决，不得抹去或置零。服务商tkm覆盖须明确包括实测空载/怠速段；未含则仅加一次具名相容空车距离服务，排除重叠路段和燃料。搬运设备活动为实际有载+空载定位/返回时间加声明保留闲置时间，按相同完整任务/时间池在所有受益对象间分配；零重量搬运不得消失。资本/维护按completion_assets及供应方已含范围互斥。原失败/退货责任仍随原责任/版本，所有最终数量仅除更正原N一次。路线/服务商/空载覆盖未知阻断完整性。 | route_legs; actual_loads; vehiclekm; tkm; fuel_energy; stationary_idle_duration; reserved_capacity; loaded_empty_idle_seconds; provider_scope; N; cp_completion_transport | completed transport/handling quantities/N | ghg-product-2011; jrc-retail-2013 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_completion | all inventory rows | 各具体流目前均未绑定。数据集完整前，须以官方流原响应与匹配哈希receipt绑定精确材料/服务、方向/类型、完整载体边界、状态及接收方；核实属性/单位/介质和正式双语名。无相容流则保留未决；搜索命中不是绑定证据。计数/质量支持UUID只识别属性，不识别这些具体交换。须采集实际市场/地区/日期/SKU及供应商当前瓶身/盖/标签规格，建模再生含量时须有其证据：美国产品页称除盖/标签外100%再生塑料，而国际FAQ称除盖/标签外系列平均40% rPET。两者为不同市场/时点/系列表述，不证明研究SKU；均不得作为默认或产地/合规/因子主张。 | 原响应；receipt；正式名称及状态/属性/单位审计；逐行映射 |
| data_closure | all inventory rows | 保留源原字段、逐日覆盖、仪器分度/核查/校准、归属版本、库存、收据及接收方。说明不确定性与带符号差额；计量容差须来自实际仪器/抽样依据，不得虚构合规限值。缺失、未知、开封/漏瓶状态或未确认的未发生均不是零；证据解决前阻断受影响完整性。 | 完整台账；校准；事件及不存在记录；量化不确定性和差额对账 |
| projection_translation | all inventory rows | 所有范围/关口/责任、卡数量/协议、计算、条件及补全/去重义务须进入支持的结构化规则，源与guidance回读须一致。比较每个非空中英文业务字段、有序ID、卡身份、数量公式/输入/单位及限定信息；marker不证明方法学、正式绑定或独立批准。 | 新投影/fingerprint/schema；双语语义比较及精确guidance回读 |
| completion_methods | all inventory rows | 具名补全协议和方程为后续完整零售聚合的必需PCR方法；货架边界及其13个具体交换不变。实际数量/供应方在独立补全模块以具名具体流卡及匹配身份采集，不设通用缺失模块流。负责数据生产者须证明各遗漏模块、完整原始量到驱动到数量到更正N的链、全受益闲置/失败/零产出池、原版本带符号更正，以及供应方/源/事件/组件剔重。纳入范围、回路包含、末端责任或换算未知时，不得标完整聚合。 | 实际补全模块清单及协议；表计与包含关系；寿命/事件/路线/载体台账；精确源ID重叠矩阵及相同批次/N/版本回读 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_check | all inventory rows | 要求实际相同密封瓶/SKU/路线和经实测确认的不存在条件；CPC62126比本模块宽，仅在另行接受后采用narrower映射。不得推及其他饮料或整店服务。 | un-cpc62126 |
| quantity_check | all inventory rows | 要求最终N为正，原实物与原背景分区完整，纳入所有失败/零产出/迟到池，仅归一一次，寿命及事件对账，使用实际完整载体，并无所含物、已更正旧份额或供应方已含服务重复。任何未决关系或末端/继续责任缺失阻断完整结果。 | ghg-product-2011 |
| partial_check | all inventory rows | 元数据须明确局部边界和具名缺失模块交接矩阵。只有另行对账的完整模块集可支持完整零售用途；该局部模块单独不得支持完整产品足迹、合规、发布或比较主张。 | jrc-retail-2013; ghg-product-2011 |
| completion_method_check | all inventory rows | 完整零售聚合须执行completion_operations、completion_housekeeping、completion_assets及completion_transport，并具备其原始证据和相同更正原N；下游代理可采集字段值与供应方身份，但不得静默另选分配/分母/资产/余量/空载路线方法。必需具名模块或任一实际具体卡/接收方缺失时，不得宣称完整零售。此要求不将这些交换加入局部货架模块。 | ghg-product-2011; jrc-retail-2013 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | background_dataset |
| allowed_use | 相同密封500mL PET泉水瓶人工常温路线局部货架服务；完整零售仅按partial_completion补全后使用 |
| excluded_use | 完整门店或全生命周期水足迹，其他饮料/规格/路线，合规/发布/比较主张，未知身份或未决数量作为已验证数据 |
| required_metadata | 全部必需限定信息；原关口、SKU、原批次/N/版本、部分边界/补全矩阵、供应方背景、货架全寿命和去向责任 |
| required_quality_disclosure | 计量及抽样不确定性、校准、期间与场址、零失败迟到池、缺失及身份未决、末端预期/实际状态、来源可用性限制 |
| update_trigger | 瓶/标签/泉水分类或路线改变；退货或责任更正；泄漏/湿清洁/电动设备；寿命或末端变化；来源及身份变更 |

## 11. 数据源

保留的厂家及零售商来源说明本产品类别的案例和明确引用的技术区别，不将适用性限定于所列品牌/型号，也不为其他配置提供数值清单默认值。实际产品与供应商证据仍须按b_product_family取得。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc62126 | official_guidance | UNSD CPC3.0 62126, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62126 | 分类含241–244；本范围仅其瓶装泉水服务子集。分类不证明方法成熟度。 |
| evian-faq | literature | evian international FAQ, snapshot 2026-10-27, https://www.evian.com/en_int/faq | PET瓶材料和阴凉干燥清洁储存建议的定性示例；美国500mL页100%再生塑料与国际系列平均40%rPET（均排除盖/标签）属于不同市场/时点/系列；两者及旧2025目标均不支持默认再生含量、实际SKU组成或法律分类。 |
| evian-500ml | literature | evian 500 mL natural spring water, snapshot 2026-10-27, https://www.evian.com/en_us/natural-spring-water/bottled-water/500ml | 500mL瓶装泉水规格可行性；美国页面命名不能替代当地法规或现场SKU核查。不采用网页矿物组成或再生比例。 |
| jrc-retail-2013 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector, EUR25998EN (2013), https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 零售能源、供应链、物流、包装、废物的范围核查及显式局部边界披露依据；不采用标杆数值，具体数量/范围责任由本规则确定。 |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapters6–7,9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 服务单位、透明边界、先细分再物理分配的一般方法；本PCR原瓶、责任/退货池、货架面积小时等为声明的PCR设计，非标准原公式或完整符合性认证。 |
