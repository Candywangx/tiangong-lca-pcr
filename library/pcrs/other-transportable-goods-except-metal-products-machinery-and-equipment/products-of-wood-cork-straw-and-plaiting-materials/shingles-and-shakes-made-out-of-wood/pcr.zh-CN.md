---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.shingles-and-shakes-made-out-of-wood
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 未处理西部红柏锯制木瓦（出厂）

## 1. 范围与适用性

本 PCR 适用于西部红柏（Thuja plicata）木瓦圆木或已制备短原木双面锯切、分级并包装出厂的未处理木瓦，未经专门干燥。覆盖使用电动搬运的电力驱动干式机械路线，不含厂内燃烧、原木浸池、湿法加工、胶合、涂装或防腐处理。实际出厂含水率为实测限定信息，不是固定生材定义。专门空气干燥/窑干及处理产品须采用另有证据支持的方法。来源：usda-shingle-roofs-2011；usda-wood-handbook-2021。

锯制木瓦、直劈/楔劈木瓦及手劈后再锯木瓦可以共用含水率计量和平衡原则，但不能合并生产清单。锯制产生锯缝锯屑与裁边料；劈裂产生劈裂废品，收率受纹理影响；再锯增加另一道锯缝。全锯制厚木瓦还存在几何与等级差异。须实测这些流，不能假定某路线具有固定较低损失或能耗。本范围排除劈裂、劈后再锯及全锯制厚木瓦，不得用普通锯材 UUID 标识成品木瓦。来源：usda-shingle-roofs-2011。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.shingles-and-shakes-made-out-of-wood |
| classification_refs | CPC 3.0 31624; narrower |
| covered_products | 声明等级的未处理西部红柏锯制木瓦，锯后出厂状态 |
| excluded_products | 劈裂/劈后再锯/全锯制厚木瓦；其他树种；专门干燥、浸渍、阻燃、涂层、胶合及复合产品；锯材；已安装屋面或墙面 |
| representative_product | 一个实测西部红柏锯制木瓦批次，声明等级及楔形尺寸 |
| production_route | 接收圆木或制备短原木；按需截切/剥皮；锯切/成楔/裁边；分级；短暂存放；包装；分离残料 |
| market_state | 未处理成品木瓦出厂，未安装，包装单独核算 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应制造完成的木瓦，供后续屋面/墙面覆面选用 |
| How much | 实测出厂含水率下 1 kg 验收成品木瓦净质量 |
| How well | 声明树种、等级、纹理/心材类别、楔形尺寸及未处理状态；不作通用规范适用性保证 |
| How long or cycle | 一次制造交付；服役寿命须另设安装、暴露和维护情景 |
| reference_flow_link | shingle_out |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 木条和木条 `10eb6989-64ab-406a-9ce6-8d9e97da896e` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | Thuja plicata；锯制木瓦路线；尺寸/楔形；等级及纹理/心材；未处理/无专门干燥；出厂干基含水率；净质量不含包装；来源地区/年份；圆木或外购短原木起点；木片总几何面积与声明覆盖/重叠布局区分；实测 kg/m2 换算；残料去向 |

必需限定信息须在数据集元数据或等效字段声明。已核实广义成品流包含此较窄木瓦子集，但不提供实测数量或可用背景数据集。中文数据库显示名称逐字保留，实物定义仍为锯制木瓦。缺少限定信息使数据集参考定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| net_basis | shingle_out | 质量 | kg | 用 cp_output 称量出厂验收木材净质量；干基含水率、发运毛质量及包装质量分开。每项清单行均为每 1 kg 参考流。 |
| moisture_basis | roundwood_in; bolt_in; shingle_out; chip_out; sawdust_out; bark_out | 质量 | kg | 用 cp_wood 和 cp_output 匹配样本；干基 u = 水质量 / 绝干木材质量。禁止在同一公式中用湿基百分数。来源：usda-wood-handbook-2021。 |
| area_basis | shingle_out | 质量和面积 | kg; m2 | 用 cp_area 实测同一等级、含水率及布局的 kg/m2；各木瓦完整面面积之和、重叠材料面积及安装唯一覆盖面积分开。制造质量不能冒充已安装服务功能单位。 |
| chip_volume | chip_out | 体积 | m3 | 使用 cp_residue，明确匹配实测实材或堆积体积、含水率、堆积状态及接收数据集参考量；约定未知时不得链接。 |
| pm_bins | pm_fine; pm_middle; pm_coarse | 质量 | kg | 方法、时间及控制边界相同，仅用互斥粒径组；总 PM 及 PM10 是核对总量，不再作为可累加清单行。来源：epa-sawmill-pte-2014。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 工厂接收未处理西部红柏圆木，或替代圆木的制备去皮短原木 |
| starting_condition_role | 采购前体，不是成品木瓦递归投入 |
| product_classification_scope | CPC 3.0 31624; narrower |
| recursive_input_rule | 厂内退料/返工木瓦在工厂内循环，外部净交换只计一次；外购成品木瓦不属于本制造路线 |
| upstream_dataset_requirement | 须有相容木材采购/林业、制坯、运输以及电力/材料数据集，披露树种、地区、含水率和分配；UUID 不是数据集证据 |
| disclosure | 前景为门到门，链接上游扩展至摇篮到大门；跟踪外部处理，不把燃烧移入前景；排除安装、使用、维护及寿命终结 |

一个聚合工厂过程包含制坯、锯切、分级、搬运及包装。保留各阶段独立计量和实物交接记录，内部链接两端数量及状态相同，并从外部清单抵消。包装交接不创建第二个成品木瓦输出。实际削片时计入削片工序，包含辅助电力、维护耗材、包装损失及实际排放。缺少适用化学品/废物/排放物种时，数据集完成前须增加原子卡片及相容身份。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| mill | 锯制木瓦工厂 | required | 声明未处理电力干式机械路线 | 聚合前景过程，阶段独立计量 | shingle_out: 1 kg |

### 过程：锯制木瓦工厂（`mill`）

#### 输入

##### 产品流

###### 针叶圆木、其他 （`roundwood_in`）

接收用于木瓦的未处理西部红柏 Thuja plicata 带皮圆木。上游链接包含林道至工厂运输；不能替代本流定义排除的普通锯材原木。外购短原木替代对应入厂木材，同一木材不得计两次。

- 选定流: 针叶圆木、其他 `3dbbedd2-fb9d-478e-a4b4-4a76a4d97804`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_wood`
- 来源: `usda-wood-handbook-2021`

###### 木瓦短原木 （`bolt_in`）

外购已去皮并截切木瓦短原木时纳入，核对已制坯状态，上游包含制坯及运输。厂内短原木是本聚合工厂过程的内部阶段交接，不是第二项外部投入。

- 选定流: 木瓦短原木 `35615328-322c-4a39-98c9-254d980275ef`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_wood`
- 来源: `usda-wood-handbook-2021`; `usda-shingle-roofs-2011`

###### 交流电 （`electricity_in`）

计量低于 1 千伏的电网平均低压交流电，包含截切、锯切、吸尘风机、电动搬运及包装；匹配供电电压、地区、年份和损耗。保留 MJ 净热值参考属性；实测千瓦时乘 3.6，不用燃烧效率换算。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy`
- 来源: `corrim-northern-lumber-2025`

###### 润滑油 （`oil_in`）

使用与记录相容的石油馏分机械润滑油时纳入，包括记录限定的 40.5 MJ/kg 发热量。供方相容性是数据集前提，该元数据不是 PCR 数量或换算默认值；合成油须另选相容身份。

- 选定流: 润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源: `corrim-northern-lumber-2025`

###### 聚乙烯薄膜 （`film_in`）

使用聚乙烯包装薄膜时纳入；库存核对计量净耗用，声明牌号，排除 PET 及其他聚合物。

- 选定流: 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack`
- 来源: `corrim-northern-lumber-2025`

###### 牛皮包装纸 （`paper_in`）

使用牛皮包装纸或纸标签原纸时纳入；有涂层、胶黏剂时分别记录。成品纸袋不能替代此原纸投入。

- 选定流: 牛皮包装纸
- 流属性/单位: 质量 / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack`
- 来源: `corrim-northern-lumber-2025`

###### 聚丙烯包装捆扎带 （`strap_in`）

使用成品聚丙烯包装捆扎带时纳入，实测成分和质量；聚合物树脂、纺织线及钢带均不能替代。

- 选定流: 聚丙烯包装捆扎带
- 流属性/单位: 质量 / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack`
- 来源: `corrim-northern-lumber-2025`

#### 输出

##### 产品流

###### 木条和木条 （`shingle_out`）

出厂验收合格西部红柏锯制木瓦，未处理且未经专门干燥；净木材质量包含实测出厂含水量，不含包装。这是唯一的定量参考输出。

- 选定流: 木条和木条 `10eb6989-64ab-406a-9ce6-8d9e97da896e`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_output`
- 来源: `usda-shingle-roofs-2011`; `usda-wood-handbook-2021`

###### 木片 （`chip_out`）

未处理西部红柏边角料单独削片并作为共产品出售时纳入；保留实际木片质量和含水率用于平衡。本流参考为体积/m3，按接收背景参考量实测体积状态、堆积和密度；solid/bulk 约定不明时链接为待定。禁止用树种表密度换算。

- 选定流: 木片 `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- 流属性/单位: 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_residue`
- 来源: `usda-wood-handbook-2021`; `corrim-northern-lumber-2025`; `cssb-cedar-lca-2007`

###### 未处理西部红柏锯屑共产品 （`sawdust_out`）

分离的未处理西部红柏锯屑（含捕集锯尘）作为共产品出售时纳入；排除木片、刨花、混合木质燃料及弃置锯屑。

- 选定流: 未处理西部红柏锯屑共产品
- 流属性/单位: 质量 / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_residue`
- 来源: `corrim-northern-lumber-2025`; `cssb-cedar-lca-2007`

###### 西部红柏树皮共产品 （`bark_out`）

分离的西部红柏树皮作为共产品出售时纳入；不能使用仅为废物的树皮流标识。

- 选定流: 西部红柏树皮共产品
- 流属性/单位: 质量 / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_residue`
- 来源: `corrim-northern-lumber-2025`

##### 废物流

###### 木材边角料 （`offcut_waste`）

未处理西部红柏实体裁边料及不合格木瓦离厂作为废物时纳入，排除已单列树皮、锯屑及可出售木片；链接实际废物处理并披露污染情况。

本行仅计真实未团聚、未处理且未胶合的粗木料边角料；保留含水率与接收方记录，在链接处理数据前核实实物状态和接收方/供应数据兼容性。不得替代为团聚燃料或捕集粉尘。

- 选定流: 木材边角料 `acc22294-8e77-4784-988f-2499be3c60eb`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_residue`
- 来源: `corrim-northern-lumber-2025`

###### 树皮 （`bark_waste`）

剥皮残渣作为废物而非出售时纳入，同一实物质量与 bark_out 互斥；外购去皮短原木不能产生虚构厂内树皮。

- 选定流: 树皮 `a2536c07-fbe1-4a12-90fb-21bd2e99b74e`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_residue`
- 来源: `corrim-northern-lumber-2025`

###### 木屑废物 （`sawdust_waste`）

弃置未处理锯屑送至本身份限定的焚烧/回收路线时纳入，核对实际接收方；填埋或其他不相容处理须另选准确身份。同一质量不能同时计入 sawdust_out 或排放颗粒物。

- 选定流: 木屑废物 `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_residue`
- 来源: `corrim-northern-lumber-2025`; `epa-sawmill-pte-2014`

###### 废润滑油 （`oil_waste`）

废润滑油离厂时纳入；核对补加、机械存量、回收油及有记录损失，声明实际下游处理，不预设再生。

- 选定流: 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_material`
- 来源: `corrim-northern-lumber-2025`

###### 未清洗废聚乙烯包装薄膜 （`film_waste`）

工厂产生聚乙烯包装膜边料时纳入，这是产生点未经清洗的废物，不能用回收厂已清洗材料替代；销售后的下游包装废物在本出厂边界外。

- 选定流: 未清洗废聚乙烯包装薄膜
- 流属性/单位: 质量 / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack`
- 来源: `corrim-northern-lumber-2025`

###### 废纸（未指定） （`paper_waste`）

产生牛皮纸包装边料时纳入；仅在无不相容涂层和污染时可用广义废纸身份的此子集，须链接接收方实际处理。

- 选定流: 废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack`
- 来源: `corrim-northern-lumber-2025`

###### 聚丙烯包装捆扎带截余料 （`strap_waste`）

产生点聚丙烯捆扎带截余料存在时纳入；未证明对应路线前不能使用机械回收路线身份。

- 选定流: 聚丙烯包装捆扎带截余料
- 流属性/单位: 质量 / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack`
- 来源: `corrim-northern-lumber-2025`

##### 基本流

###### 颗粒物 (PM2.5) （`pm_fine`）

机械工序及残料搬运实际排向室外空气、未特指子介质的不大于 PM2.5 的颗粒物。计量控制设施后的排放，包含逸散；粒径分组互斥，捕集粉尘为残料而非排放。

- 选定流: 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_air`
- 来源: `epa-sawmill-pte-2014`

###### 颗粒物 (PM2.5 - PM10) （`pm_middle`）

机械工序及残料搬运实际排向室外空气、未特指子介质的大于 PM2.5 且不大于 PM10 的颗粒物。计量控制设施后的排放，包含逸散；粒径分组互斥，捕集粉尘为残料而非排放。

- 选定流: 颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_air`
- 来源: `epa-sawmill-pte-2014`

###### 颗粒物（> PM10） （`pm_coarse`）

机械工序及残料搬运实际排向室外空气、未特指子介质的大于 PM10 的颗粒物。计量控制设施后的排放，包含逸散；粒径分组互斥，捕集粉尘为残料而非排放。

- 选定流: 颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_air`
- 来源: `epa-sawmill-pte-2014`

###### 水蒸气 （`water_vapour`）

厂内短暂停留时实际蒸发并排向室外空气、未特指子介质的水分；核对木材水分存量，不预设专门干燥能耗或通用目标含水率。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_balance`
- 来源: `usda-wood-handbook-2021`

###### 二氧化碳（生物源） （`biogenic_co2`）

有实测生物性储存损失时纳入排向室外空气、未特指子介质的生物源二氧化碳。本范围不含厂内燃烧。无论 GWP 口径如何均保留实际 LCI 生物源排放，不自动给储碳信用或正排放量。

- 选定流: 二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_carbon`
- 来源: `corrim-northern-lumber-2025`

###### 甲烷 (生物源) （`biogenic_ch4`）

有证据证明厌氧储存降解产生并排向室外空气、未特指子介质的生物源甲烷时纳入；记录不存在的证据或定量，不能从普通生材推断甲烷或套用燃烧因子。

- 选定流: 甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_carbon`
- 来源: `corrim-northern-lumber-2025`

###### 甲醇 （`methanol_air`）

机械加工或短暂储存采样及物种分析明确识别甲醇并排向室外空气、未特指子介质时纳入。须筛查，锯材调查不提供红柏默认值。未测为未知而非零；其他识别物种须逐种增加准确原子行。

- 选定流: 甲醇 `fe0acd60-3ddc-11dd-a935-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_air`
- 来源: `corrim-northern-lumber-2025`

###### 甲醛 （`formaldehyde_air`）

机械加工或短暂储存采样及物种分析明确识别甲醛并排向室外空气、未特指子介质时纳入。须筛查，锯材调查不提供红柏默认值。未测为未知而非零；其他识别物种须逐种增加准确原子行。

- 选定流: 甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_air`
- 来源: `corrim-northern-lumber-2025`

###### 蒎烯 （`pinene_air`）

机械加工或短暂储存采样及物种分析明确识别pin-2(3)-ene（α-蒎烯）并排向室外空气、未特指子介质时纳入。须筛查，锯材调查不提供红柏默认值。未测为未知而非零；其他识别物种须逐种增加准确原子行。

- 选定流: 蒎烯 `0a701083-c7e6-43d1-8ae5-e62050edc5dc`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 计量匹配批次的本项外部交换，用其记录总量除以 P（验收出厂木瓦净质量，千克）。分配规则仅应用于环境负荷账。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_air`
- 来源: `corrim-northern-lumber-2025`

## 7. 分配与共产品处理

CSSB 初步摘要对所列红柏木瓦产品报告木片、锯屑及混合木质燃料共产品去向。该资料支持调查单独可出售残料，不提供通用废物百分比，也不能让劈裂/锯制收率互换。实际存在混合木质燃料时，须与纯树皮/木片/锯屑行分开。来源：cssb-cedar-lca-2007。

首先直接归属可分离工序：专属包装归木瓦，专属削片归木片。真正共享负荷按该阶段可出售输出的实测绝干质量分配；披露决定，价格或功能提示显著不同结果时进行经济分配敏感性分析。这借鉴已记录锯材研究的质量分配方法，不移植调查份额。不能为降低木瓦负荷而将废物改称共产品。来源：corrim-northern-lumber-2025。

保留两本账：实物过程图及质量/水/碳平衡保留完整实际投入、产品、共产品、废物和排放；分配后的环境负荷账划分可分配的共享上游负荷、能源及排放。共产品实物输出和内部交接不得乘分配份额。分配后的单产品数据集须绑定未分配平衡及分配核对账；清单卡描述分配投影前的完整交换。不自动给予替代信用。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | mill | shingle_out | 匹配记录与实测 | 批次；树种；等级；纹理；长度；宽度；楔形；不合格质量；验收净质量 P；出厂含水率；包装皮重 | 经校准秤扣皮称重；立即对代表性木材取样并烘至质量稳定，保留挥发性抽提物偏差及树种校准电测限度。 | kg | 每批次；排放测试覆盖各运行模式 | 声明生产期，包含各等级批次、库存及停机 | 同一工厂、树种及路线，不混入劈裂路线 | 每 1 kg 参考流 | 校准；可追溯性；取样计划；平衡及不确定性 |
| cp_wood | mill | roundwood_in; bolt_in | 匹配记录与实测 | 木材来源；树种；起始状态；交付质量；树皮；含水率样本；库存变化；运输；制坯 | 称量接收量，核对期初期末库存至同一验收批次；厂内制坯不重复计入；木材和树皮分开取样。 | kg | 每批次；排放测试覆盖各运行模式 | 声明生产期，包含各等级批次、库存及停机 | 同一工厂、树种及路线，不混入劈裂路线 | 每 1 kg 参考流 | 校准；可追溯性；取样计划；平衡及不确定性 |
| cp_energy | mill | electricity_in | 匹配记录与实测 | 电表读数；阶段时长；电压；地区/年份；吸尘及搬运；供电参考 | 阶段分表计量，核对总表和共享服务归属；实测千瓦时转 MJ；保留仪表及供方定义。 | kWh; MJ | 每批次；排放测试覆盖各运行模式 | 声明生产期，包含各等级批次、库存及停机 | 同一工厂、树种及路线，不混入劈裂路线 | 每 1 kg 参考流 | 校准；可追溯性；取样计划；平衡及不确定性 |
| cp_material | mill | oil_in; oil_waste | 匹配记录与实测 | 产品证明；石油路线；发热量限定；接收量；机械存量；废油；损失；接收方 | 核对称量补加和库存，各废物分别称量；核实供方/背景相容性，不将发热量元数据作为默认值。 | kg | 每批次；排放测试覆盖各运行模式 | 声明生产期，包含各等级批次、库存及停机 | 同一工厂、树种及路线，不混入劈裂路线 | 每 1 kg 参考流 | 校准；可追溯性；取样计划；平衡及不确定性 |
| cp_pack | mill | film_in; paper_in; strap_in; film_waste; paper_waste; strap_waste | 匹配记录与实测 | 组件聚合物/纸牌号；涂层/胶；接收量；库存；随货包装；每项边料质量 | 各组件和各边料分别称量；核对耗用材料 = 随货包装 + 厂内边料 + 库存修正。 | kg | 每批次；排放测试覆盖各运行模式 | 声明生产期，包含各等级批次、库存及停机 | 同一工厂、树种及路线，不混入劈裂路线 | 每 1 kg 参考流 | 校准；可追溯性；取样计划；平衡及不确定性 |
| cp_residue | mill | chip_out; sawdust_out; bark_out; offcut_waste; bark_waste; sawdust_waste | 匹配记录与实测 | 流；源阶段；出售/废物去向；湿/干质量；含水率；木片体积；堆积；实测密度；接收参考量 | 分离并称量各去向，捕集粉尘只计一次；同状态实测木片体积和质量，与供方确认实材/堆积约定，称量绝干样本用于分配。 | kg; m3 | 每批次；排放测试覆盖各运行模式 | 声明生产期，包含各等级批次、库存及停机 | 同一工厂、树种及路线，不混入劈裂路线 | 每 1 kg 参考流 | 校准；可追溯性；取样计划；平衡及不确定性 |
| cp_air | mill | pm_fine; pm_middle; pm_coarse; methanol_air; formaldehyde_air; pinene_air | 匹配记录与实测 | 物种/CAS；排口及逸散；控制状态；测试方法；粒径切分；气流；浓度；运行时长；检出限；不确定性 | 采用匹配排口采样及经验证实际工况逸散估算，区分 VOC 物种；逐种积分；不存在或低于检出限的结果保留方法和限值；未测为未知。 | kg | 每批次；排放测试覆盖各运行模式 | 声明生产期，包含各等级批次、库存及停机 | 同一工厂、树种及路线，不混入劈裂路线 | 每 1 kg 参考流 | 校准；可追溯性；取样计划；平衡及不确定性 |
| cp_balance | mill | water_vapour | 匹配记录与实测 | 入/出木材及树皮水分；残料；含水率；库存；停留时间；挥发损失 | 匹配批次实测含水率和库存，归因不明质量损失为水分之前先调查平衡闭合。 | kg | 每批次；排放测试覆盖各运行模式 | 声明生产期，包含各等级批次、库存及停机 | 同一工厂、树种及路线，不混入劈裂路线 | 每 1 kg 参考流 | 校准；可追溯性；取样计划；平衡及不确定性 |
| cp_carbon | mill | biogenic_co2; biogenic_ch4 | 匹配记录与实测 | 各流绝干质量；实测碳分数；生物损失证据；停留时间；CO2 和 CH4 物种；库存 | 维护绝干木材碳平衡，计量/记录实际生物释放或经证明不存在，不假定燃烧或碳中和。 | kg | 每批次；排放测试覆盖各运行模式 | 声明生产期，包含各等级批次、库存及停机 | 同一工厂、树种及路线，不混入劈裂路线 | 每 1 kg 参考流 | 校准；可追溯性；取样计划；平衡及不确定性 |
| cp_area | mill | shingle_out | 匹配记录与实测 | 匹配批次质量；含水率；等级；各木瓦面尺寸；外露长度；缝隙；层数；起始/屋脊裁切；安装覆盖面积；重叠；布局 | 称量、测量匹配木瓦及有记录试铺/规范布局；屋面/墙面平面唯一覆盖面积与完整面面积之和分开实测；保留原始记录和不确定性。 | kg; m2 | 每批次；排放测试覆盖各运行模式 | 声明生产期，包含各等级批次、库存及停机 | 同一工厂、树种及路线，不混入劈裂路线 | 每 1 kg 参考流 | 校准；可追溯性；取样计划；平衡及不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_lot | all inventory rows | x = X / P；X 为匹配批次实测外部交换，P 为该批验收出厂木瓦净质量（千克）；shingle_out = 1 千克。实物输出保持未分配。 | X; P; matched protocol; cp_output | x | usda-wood-handbook-2021 |
| dry_wood | all wood streams | m_dry = m_wet / (1 + u)；u = (m_wet - m_dry) / m_dry。同状态配对，u 为分数而非百分数。 | m_wet; u; cp_wood; cp_output; cp_residue | m_dry | usda-wood-handbook-2021 |
| meter_mj | electricity_in | 实测交付电量 MJ = kWh * 3.6；不使用燃料发热量因子或锅炉效率。 | kWh; cp_energy | MJ | corrim-northern-lumber-2025 |
| coverage_conversion | shingle_out | r_cover = m_layout / A_cover；r_face = m_layout / A_face；A_face 为完整木瓦面面积之和，A_cover 为重叠后唯一平面覆盖面积。A_overlap 单独报告，缝隙及起始/屋脊/裁切余量留在布局账。下游声明覆盖面积 A 所需木瓦质量 = r_cover * A，含水率和等级相同。须实测，不能仅由密度或名义外露量假定 r_cover。 | m_layout; A_cover; A_face; A_overlap; cp_area | r_cover; r_face | usda-shingle-roofs-2011 |
| pm_partition | pm_fine; pm_middle; pm_coarse | 仅对匹配嵌套测量：fine = PM2.5；middle = PM10 - PM2.5；coarse = PM_total - PM10。各结果非负，不再叠加 PM_total 或 PM10。 | PM_total; PM10; PM2.5; cp_air | fine; middle; coarse | epa-sawmill-pte-2014 |
| shared_burdens | shared environmental burdens only | a_j = D_j / sum(D_j)；D_j 为共享阶段合格可出售输出 j 的实测绝干质量。B_j = a_j * B_shared + B_direct,j。仅用于负荷，不用于共产品实物流。 | D_j; stage ledger; cp_residue; cp_output | a_j; B_j | corrim-northern-lumber-2025 |
| balance_closure | mill | 绝干木材投入 + 期初库存 = 绝干产品 + 绝干共产品 + 绝干废物 + 木源空气释放物 + 期末库存 + 有记录降解；水和实测碳分数分别核对。捕集粉尘保留在残料去向。CO2/CH4 中的碳按物种化学计量换算，气体质量不能当碳质量。报告残差和不确定性，不得添加默认排放强行平衡。 | cp_wood; cp_output; cp_residue; cp_balance; cp_air; cp_carbon | dry mass; water; carbon closure | corrim-northern-lumber-2025; usda-wood-handbook-2021 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| identity | all rows | 核对完整材质/路线、流类型、介质、参考属性和单位；空身份保持待定。单凭 UUID 不能证明背景数据集相容。 | 供方/测试定义及身份记录 |
| representativity | mill | 声明地区/年份及时间覆盖、树种和等级组成，按验收净质量加权；禁止向红柏木瓦移植北部锯材调查收率/排放。 | corrim-northern-lumber-2025 |
| missing_data | all rows | 区分不存在、实测零、低于检出限、估计及缺失，不隐含零；实际新增交换须有原子卡片及匹配身份。 | 采集包和限值 |
| balance | mill | 实物与分配账分开，超出声明测量不确定性的未闭合须调查；展示残料出售/废物划分且不重复。 | 质量/水/碳账 |

## 9. 校验规则

须恰有一个成品参考输出，净质量基准为 1 kg；全部外部数量及采集聚合使用相同 P 和批次范围。核对树种、路线、等级、含水率、面积布局及处理限定。拒绝用锯材替代木瓦、内部交接重复作为外部交换、残料出售/废物重复、嵌套 PM 累加、假定通用密度及未核实木片体积/背景约定。验证未分配实物平衡和单独分配负荷之和。适用空身份、缺失数量、不支持背景基准或未分物种释放均为数据包不完整，不能称科学批准。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景锯制木瓦生产过程；相容上游扩展数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 限定匹配未处理西部红柏制造及明确实测质量至覆盖面积换算 |
| excluded_use | 完整 CPC 等价；处理/干燥或劈裂木瓦替代；已安装防风雨服务声称；自动碳信用 |
| required_metadata | 全部参考限定；上游边界；阶段/批次平衡；共产品/废物决定；分配与面积基准；实测数量；相容数据集 |
| required_quality_disclosure | 实际数据期、取样/不确定性、空身份、条件不存在、体积/属性相容性及缺失排放 |
| update_trigger | 树种/等级、含水率或交付状态、路线、处理、电力、残料去向、分配或安装布局改变 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| cssb-cedar-lca-2007 | literature | [CSSB preliminary cedar-shake/shingle LCA summary (03/07)](https://www.cedarbureau.org/cms-assets/documents/41211-337868.life-cycle.pdf) | 第 1 页：仅用 2007 年所列调查产品及红柏共产品类别；初步宣传摘要，不采用案例数值或优越性声称 |
| usda-shingle-roofs-2011 | official_guidance | [USDA FPL-GTR-201 (2011)](https://research.fs.usda.gov/download/treesearch/39747.pdf) | 印刷页 1-5、表 1：锯制/劈裂区别、等级/树种及覆盖/外露语境；不采用通用尺寸、安装或寿命值 |
| usda-wood-handbook-2021 | handbook | [USDA Wood Handbook, FPL-GTR-282 (2021)](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf) | 第 4 章 4-1、4-11 页，第 13 章 13-2 页：干基含水率、密度状态及烘干测法；不采用树种密度或含水率默认值 |
| epa-sawmill-pte-2014 | official_guidance | [EPA Region 10 sawmill particulate PTE memorandum (2014)](https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf) | 备忘录第 1 页、附件第 1 页：非锅炉机械活动及嵌套可过滤 PM 定义；PNW Indian Country 潜在排放因子不是实际木瓦排放 |
| corrim-northern-lumber-2025 | literature | [CORRIM Northern softwood lumber LCA, July 22 2025](https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Northern-Lumber-Report-07222025.pdf) | 第 3.2.4、3.2.6、3.3、4.6-4.7 节：仅作平衡、直接/共享分配及排放筛查方法借鉴；美国北部锯材调查参数不是红柏木瓦默认值 |
