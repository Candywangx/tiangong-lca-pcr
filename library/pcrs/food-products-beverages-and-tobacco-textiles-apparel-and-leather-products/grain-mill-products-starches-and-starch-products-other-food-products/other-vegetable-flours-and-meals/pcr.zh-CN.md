---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-vegetable-flours-and-meals
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他植物粉和粗粉

## 1. 范围与适用性

本 PCR 适用于以已声明的非谷物植物材料为原料，经清理、制备、干燥或调质、研磨、筛分和包装制成可食用粉或粗粉的从门到门前景数据包。范围包括保持 CPC 3.0 子类 23170 市场身份的单一植物来源产品和已声明混合物，包括木薯、甘薯、芋头、山药等根茎粉以及其他已声明蔬菜制成的同类粉末。

本 PCR 不包括小麦或混合麦粉、其他谷物粉、谷物去壳粒和粗粉、淀粉或分离淀粉级分、油饼或油料种子及含油果实的粉和粗粉、芥末粉、归入其他加工蔬菜子类的马铃薯制品、混合料或面团，以及复配食品或膳食补充剂粉。还明确排除 CPC 01961 活的种植材料，以及 CPC 01962 鲜切花和花蕾。农业种植、接收前运输、包装产品出厂后的分销、使用和寿命终止均不在前景边界内；研究纳入这些阶段时应连接独立的上游或下游数据集。

代表性路线为鲜木薯根制成未发酵、干燥、研磨、筛分并包装的食用木薯粉。其他植物来源、湿或干起始状态、脱毒、漂烫、发酵、脱水、日晒、热风干燥和冷藏属于须声明的路线变体。不得在未声明实际植物来源和路线时，用代表性木薯路线替代真实产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-vegetable-flours-and-meals |
| classification_refs | CPC 3.0：23170，其他植物粉和粗粉 |
| covered_products | 由干燥或调质后的非谷物植物材料经粒径减小制成，并以 CPC 23170 下的粉、粗粉或蔬菜粉销售的单一植物来源或已声明混合可食用产品。 |
| excluded_products | CPC 23110/23120 谷物粉；谷物去壳粒和粗粉；CPC 21920 油料种子或含油果实的粉和粗粉；芥末粉；分离淀粉；另行分类的马铃薯制品；混合料、面团、复配补充剂及主要功能并非植物粉或粗粉的产品；CPC 01961 活的种植材料；CPC 01962 鲜切花和花蕾。 |
| representative_product | 由鲜木薯根制成的未发酵食用木薯粉。 |
| production_route | 接收和制备；可选脱毒、漂烫、压榨或调质；干燥；研磨和筛分；卫生清洁；包装和放行。 |
| market_state | 制造厂门口密封销售包装内的干燥、可自由流动粉或粗粉；声明植物来源、混合比例、水分、粒径规范、食品/饲料等级和路线。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供满足预定等级和产品规范的已声明其他植物粉或粗粉。 |
| How much | 制造厂门口 1 kg 包装合格产品净质量，不含包装质量。 |
| How well | 声明植物身份或混合组成、路线、水分、粒径规范、等级和包装配置；供直接食用的木薯粉应符合适用安全规范，水分不超过 13% m/m，除非目的地要求更严格。 |
| How long or cycle | 制造厂门口放行的一个生产批次；不包含贮存期或使用周期。 |
| reference_flow_link | 参考产品交换 `packaged_vegetable_flour` 等于 1 kg 净合格产品。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净其他植物粉或粗粉 |
| 参考产品流 | 蔬菜粉 `ec00d815-ccbe-4e9d-845a-efc929f58f56` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 植物种和植物部位；单一材料或按干物质计的混合组成；鲜料、干片、糊状或其他起始状态；制备和脱毒路线；干燥技术和燃料；目标与实测水分；粒径规范；食品或饲料等级；包装配置；地理；生产期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按放行时实测水分报告 1 kg 净合格粉或粗粉；排除纸、聚合物、托盘和其他包装质量。 |
| `moisture_basis` | 原料、中间料、共产品和废物 | 质量和水分 | kg 和湿基 % m/m | 对每种物性不同的物流记录湿质量与实测水分；仅按 `calc_dry_matter` 转为干物质。 |
| `energy_carriers` | 电力、蒸汽、燃料和外购热 | 能量或载能体质量 | kWh、MJ 或 kg | 保留计量单位和低/高位热值基准；不得合并电力、蒸汽、热水或不同燃料。 |
| `packaging_mass` | 一次销售包装 | 质量 | kg | 每个包装部件单独记录，并归一化至 1 kg 净产品。 |
| `refrigerant_mass` | 制冷剂充注和补加 | 质量 | kg | 每种制冷剂化学品单独记录；根据充注量核对和产品产量计算泄漏。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收秤处的植物原料：声明植物身份、植物部位、供应商、来源、湿质量、水分及鲜、干、糊状或其他状态。 |
| starting_condition_role | 从门到门前景起点；上游种植和门前加工仍为相连接的背景系统。 |
| product_classification_scope | 成品参考产品必须归入 CPC 3.0 子类 23170；农业原料保留各自上游身份，CPC 01961/01962 产品不得作为参考产品。 |
| recursive_input_rule | 已购入且同属 CPC 23170 的粉或粗粉作为具有自身数据集的上游产品投入，不在同一前景过程中再次递归展开；披露其质量和最终混合比例。 |
| upstream_dataset_requirement | 植物原料、电力、燃料、蒸汽、热水、制冷剂、清洗化学品、包装和处理服务均需供应商特定或代表性数据集。 |
| disclosure | 声明纳入的单元操作、未纳入的条件操作、植物身份、路线、得率、水分基准、能源、共产品和废物状态、分配、废水去向、直接排放、包装、地理、时期和数据缺口。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景边界 | 包括从接收到包装产品放行的制备、调质、干燥、研磨、筛分、卫生清洁、内部返工、包装、废物、废水和直接排放。 | `fao-save-and-grow-cassava-2013`; `olaniran-et-al-2017` |
| `boundary_complete_exchanges` | 每个纳入过程 | 采集所有已知材料、能源、产品、共产品、废物和基本流交换；共用仪表只能按有文件依据的计算规则分配。 | `eu-pef-2021-2279` |
| `boundary_upstream_links` | 接收门前投入 | 种植、门前加工和运输不纳入前景过程，但通过已披露的上游数据集连接；不得赋予零负荷。 | `eu-pef-2021-2279` |
| `boundary_product_route` | 产品身份 | 排除淀粉提取、油脂提取残余物、谷物制粉、芥末粉、混合料和面团，以及 CPC 01961 或 01962 的活体或花卉产品。 | `un-cpc-3-23170` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt_preparation` | 接收和原料制备 | required | 始终纳入；清洗、去皮、切分、磨碎、漂烫、浸泡、压榨或脱毒仅在实际采用时适用。 | 前景制备 | 转入干燥的制备料 kg |
| `drying_conditioning` | 干燥和热调质 | required | 日晒或环境干燥仍需记录材料、电力和拒收输出；热力和制冷交换仅在实际使用时适用。 | 前景脱水 | 转入研磨的干料 kg |
| `milling_sieving` | 研磨、筛分和混合 | required | 始终纳入；混合仅适用于已声明多材料产品。 | 前景粒径减小 | 转入包装的合格散装粉 kg |
| `facility_sanitation` | 食品接触面清洁和卫生处理 | required | 记录干式清洁以及实际使用的每项湿式清洁或消毒交换。 | 前景辅助过程 | 所支持参考产品 kg |
| `packaging_release` | 包装和产品放行 | required | 始终纳入；每个一次包装部件分别记录。 | 前景成品处理 | 1 kg 净包装合格产品 |

### 过程：接收和原料制备（`receipt_preparation`）

#### 输入

##### 产品流

###### 接收的植物来源批次（`received_vegetable_material`）

一个已声明可食用植物来源批次跨越接收边界。记录其植物种、植物部位、状态、供应商、质量和水分，不得以谷物、油脂提取残余物、种植材料或花卉代理。

- 选定流：已声明植物学来源的植物原料批次
- 流属性/单位：Mass / kg
- 数量规则：接收秤分配给该批次的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_preparation`
- 来源：`fao-utilising-root-crops`
- 数量范围：暂定原料筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：10
  - 单位：kg/kg 包装产品
  - 基准：每 kg 产品的宽泛湿料或干料估计；应以批次质量平衡替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备水（`preparation_water`）

清洗、复洗、浸泡、脱毒、漂烫或湿式分离所加水作为一项计量产品投入。植物自带水分不计入本卡，而保留在水分平衡中。

- 选定流：工艺用水
- 流属性/单位：Mass / kg
- 数量规则：进入制备过程的计量水量或罐体平衡水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_preparation`
- 来源：`fao-utilising-root-crops`; `fao-who-cxs-176-1989`
- 数量范围：暂定制备用水筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 包装产品
  - 基准：宽泛路线估计；仅有干式制备证据时可为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备电力（`preparation_electricity`）

接收、清洗、去皮、切分、磨碎、压榨、泵送和输送的电力与研磨、干燥电力分开记录。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量或有文件依据的设备负荷计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_preparation`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定制备电力筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kWh/kg 包装产品
  - 基准：宽泛机械化制备估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 原料接触用次氯酸钠（`sodium_hypochlorite_preparation`）

只有食品安全程序实际用于来料时才记录接触原料的次氯酸钠；不得与设施消毒剂用量合并。

- 选定流：次氯酸钠
- 流属性/单位：Mass / kg
- 数量规则：由溶液浓度和投加溶液质量计算有效化学品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_receipt_preparation`
- 来源：`fao-who-cxc-1-1969`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 制备后的植物材料（`prepared_vegetable_material`）

清洗、去皮、切分、磨碎、压榨、浸泡或脱毒后的材料在干燥前称量并测定水分。

- 选定流：经制备的已声明植物学来源植物原料批次
- 流属性/单位：Mass / kg
- 数量规则：转移批次质量及实测水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入干燥的制备料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_preparation`
- 来源：`fao-save-and-grow-cassava-2013`

##### 废物流

###### 拒收的来料植物材料（`rejected_vegetable_material`）

腐败、污染、夹杂或其他不合格原料在制备前作为一项废物流记录。

- 选定流：拒收植物原料
- 流属性/单位：Mass / kg
- 数量规则：实测拒收批次质量和有文件依据的去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_preparation`
- 来源：`eu-pef-2021-2279`

###### 皮残余物（`peel_residue`）

从已声明原料去除的皮与来料拒收物、修整残余物和筛余物分别称量。

- 选定流：植物皮渣
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量、水分和处置路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_preparation`
- 来源：`fao-save-and-grow-cassava-2013`

###### 修整残余物（`trimming_residue`）

从已声明原料去除的受损组织和其他修整固体与皮、来料拒收物分别称量。

- 选定流：植物修整残余物
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量、水分和处置路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_preparation`
- 来源：`fao-save-and-grow-cassava-2013`

###### 制备废水（`preparation_wastewater`）

清洗、浸泡、脱毒、漂烫、压榨或湿式分离产生的废水与卫生清洁废水分开记录。

- 选定流：植物制备食品加工废水
- 流属性/单位：Mass / kg
- 数量规则：实测排放或水平衡，并记录处理去向和相关负荷
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_preparation`
- 来源：`olaniran-et-al-2017`
- 数量范围：暂定制备废水筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 包装产品
  - 基准：宽泛路线估计；零值需干式路线或闭合水平衡
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：干燥和热调质（`drying_conditioning`）

#### 输入

##### 产品流

###### 制备后的干燥进料（`drying_feed`）

从制备过程转入的一项已声明植物中间料进入干燥。

- 选定流：经制备的已声明植物学来源植物原料批次
- 流属性/单位：Mass / kg
- 数量规则：转移批次质量和水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 干料输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_conditioning`
- 来源：`fao-save-and-grow-cassava-2013`

###### 干燥电力（`drying_electricity`）

风机、热泵、除湿机、输送机、控制和干燥范围内机械脱水用电单独记录。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：干燥系统分表或设备负荷计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_conditioning`
- 来源：`olaniran-et-al-2017`; `eu-pef-2021-2279`
- 数量范围：暂定干燥电力筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 包装产品
  - 基准：覆盖被动干燥至强化电干燥的宽泛估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购干燥蒸汽（`drying_steam`）

供干燥器或调质设备的外购蒸汽作为独立公用工程交换，不与热水或现场燃料合并。

- 选定流：蒸汽
- 流属性/单位：Mass / kg
- 数量规则：冷凝水表、蒸汽表或有文件依据的焓平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_conditioning`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定蒸汽筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 包装产品
  - 基准：宽泛路线估计；仅未使用外购蒸汽时可为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥用天然气（`drying_natural_gas`）

现场燃烧供干燥热的天然气与其他每种燃料分别记录。

- 选定流：天然气
- 流属性/单位：Net calorific energy / MJ
- 数量规则：计量或发票数量按已声明热值基准换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_conditioning`
- 来源：`eu-pef-2021-2279`

###### 干燥用液化石油气（`drying_lpg`）

现场燃烧供干燥热的液化石油气作为独立燃料交换记录。

- 选定流：液化石油气
- 流属性/单位：Mass / kg
- 数量规则：储罐或发票质量，并声明热值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_conditioning`
- 来源：`eu-pef-2021-2279`

###### 干燥或自备电源用柴油（`drying_diesel`）

分配给生产的干燥器、锅炉或发电机所燃烧柴油单独记录并声明设备角色。

- 选定流：柴油
- 流属性/单位：Mass / kg
- 数量规则：油罐领用或发票质量，按运行时间或分表发电量分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_conditioning`
- 来源：`olaniran-et-al-2017`

###### 干燥用煤（`drying_coal`）

干燥器或锅炉燃煤单独记录，不以通用热能卡替代。

- 选定流：烟煤
- 流属性/单位：Mass / kg
- 数量规则：实测燃料领用量，并在可得时记录水分、灰分和热值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_conditioning`
- 来源：`olaniran-et-al-2017`

###### 干燥用木颗粒（`drying_wood_pellets`）

干燥供热燃烧的木颗粒单独记录，生物碳核算与化石燃料分开。

- 选定流：木颗粒燃料
- 流属性/单位：Mass / kg
- 数量规则：实测燃料领用量、水分和热值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_conditioning`
- 来源：`eu-pef-2021-2279`

###### R-134a 制冷剂补加（`drying_r134a`）

仅在热泵干燥器或冷调质系统含该化学品时记录 R-134a 补加量。

- 选定流：1,1,1,2-四氟乙烷（HFC-134a）
- 流属性/单位：Mass / kg
- 数量规则：年度充注核对后按运行时间和归一化产量分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_drying_conditioning`
- 来源：`ipcc-2019-refrigeration`

###### R-404A 制冷剂补加（`drying_r404a`）

制冷或除湿系统补加的 R-404A 与 R-134a 分开记录。

- 选定流：制冷剂 R-404A
- 流属性/单位：Mass / kg
- 数量规则：年度充注核对后按运行时间和归一化产量分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_drying_conditioning`
- 来源：`ipcc-2019-refrigeration`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 干燥植物材料（`dried_vegetable_material`）

转入研磨的干片、颗粒、饼或粉在平衡后称量并取样测定水分。

- 选定流：干燥后的已声明植物学来源植物原料批次
- 流属性/单位：Mass / kg
- 数量规则：转移质量及实测水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入研磨的干料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_conditioning`
- 来源：`fao-utilising-root-crops`; `fao-who-cxs-176-1989`

##### 废物流

###### 脱水废水（`dewatering_wastewater`）

热干燥前机械压出的水与制备废水、卫生清洁废水分开。

- 选定流：植物原料脱水压榨液
- 流属性/单位：Mass / kg
- 数量规则：实测压榨水质量或闭合水平衡，并记录去向和负荷
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_conditioning`
- 来源：`fao-save-and-grow-cassava-2013`; `olaniran-et-al-2017`

##### 基本流

###### 化石二氧化碳排放至空气（`carbon_dioxide_fossil`）

现场燃烧直接产生的化石二氧化碳按每种化石燃料分别计算后再汇总。

- 选定流：排放至空气的化石二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：燃料特定活动数据乘以经批准的化石 CO2 因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_drying_conditioning`
- 来源：`olaniran-et-al-2017`; `eu-pef-2021-2279`

###### 生物源二氧化碳排放至空气（`carbon_dioxide_biogenic`）

木颗粒燃烧的生物源二氧化碳与化石二氧化碳分开记录。

- 选定流：排放至空气的生物源二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：采用已声明水分和碳含量进行生物质燃料碳平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_drying_conditioning`
- 来源：`eu-pef-2021-2279`

###### 甲烷排放至空气（`methane_to_air`）

现场燃料燃烧甲烷作为独立基本流计算。

- 选定流：排放至空气的甲烷
- 流属性/单位：Mass / kg
- 数量规则：燃料和设备特定活动数据乘以经批准排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_drying_conditioning`
- 来源：`olaniran-et-al-2017`

###### 氧化亚氮排放至空气（`nitrous_oxide_to_air`）

现场燃料燃烧氧化亚氮与甲烷、二氧化碳分开计算。

- 选定流：排放至空气的一氧化二氮
- 流属性/单位：Mass / kg
- 数量规则：燃料和设备特定活动数据乘以经批准排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_drying_conditioning`
- 来源：`olaniran-et-al-2017`

###### 氮氧化物排放至空气（`nitrogen_oxides_to_air`）

燃烧产生的氮氧化物作为独立空气排放记录。

- 选定流：排放至空气的氮氧化物
- 流属性/单位：Mass / kg
- 数量规则：实测烟气负荷或燃料和设备特定因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_drying_conditioning`
- 来源：`olaniran-et-al-2017`

###### 二氧化硫排放至空气（`sulfur_dioxide_to_air`）

含硫燃料产生的二氧化硫单独记录；只有燃料硫和控制数据支持时才可为零。

- 选定流：排放至空气的二氧化硫
- 流属性/单位：Mass / kg
- 数量规则：实测烟气负荷或经灰分留存和控制修正的硫平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_drying_conditioning`
- 来源：`olaniran-et-al-2017`

###### 细颗粒物排放至空气（`particulate_matter_to_air`）

空气动力学直径不大于 2.5 微米的燃烧颗粒物与面粉粉尘分开记录。

- 选定流：排放至空气的细颗粒物（粒径不大于 2.5 微米）
- 流属性/单位：Mass / kg
- 数量规则：实测烟气负荷或燃料和控制特定因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_drying_conditioning`
- 来源：`eu-pef-2021-2279`

### 过程：研磨、筛分和混合（`milling_sieving`）

#### 输入

##### 产品流

###### 干燥研磨进料（`milling_feed`）

进入磨机的干燥植物中间料称量，且水分与干燥输出匹配。

- 选定流：干燥后的已声明植物学来源植物原料批次
- 流属性/单位：Mass / kg
- 数量规则：转移批次质量和实测水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格散装粉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`fao-utilising-root-crops`

###### 研磨和筛分电力（`milling_electricity`）

磨机、筛机、吸风、输送机和混合机的电力与前序操作分开记录。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量或设备负荷计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`olaniran-et-al-2017`; `eu-pef-2021-2279`
- 数量范围：暂定研磨电力筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：kWh/kg 包装产品
  - 基准：研磨、筛分、吸风和混合的宽泛初始估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格散装植物粉（`milled_vegetable_flour`）

满足已声明水分和粒径规范的散装粉在包装前称量。

- 选定流：已声明植物学来源的散装植物粉
- 流属性/单位：Mass / kg
- 数量规则：按实测水分记录验收散装产品批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格散装粉输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`fao-who-cxs-176-1989`

##### 废物流

###### 不合格粉（`off_spec_flour`）

因水分、污染或粒径检验而拒收的粉与可返工粗筛余物分开记录。

- 选定流：不合格植物粉
- 流属性/单位：Mass / kg
- 数量规则：拒收批次质量、原因和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`fao-who-cxs-176-1989`

###### 粗筛余物（`coarse_sieve_residue`）

筛出的粗纤维或颗粒称量，并按实际管理归类为内部返工、可售共产品或废物。

- 选定流：植物粉筛分粗纤维
- 流属性/单位：Mass / kg
- 数量规则：实测筛余质量、水分和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_sieving`
- 来源：`fao-who-cxs-176-1989`; `fao-utilising-root-crops`

##### 基本流

###### 面粉粉尘排放至空气（`flour_dust_to_air`）

研磨、筛分、转移或装袋未捕集的植物粉尘作为基本流记录，与捕集固体残余物分开。

- 选定流：排放至空气的植物粉尘
- 流属性/单位：Mass / kg
- 数量规则：实测浓度和排气量，或经捕集物修正的粉尘质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_milling_sieving`
- 来源：`eu-pef-2021-2279`

### 过程：食品接触面清洁和卫生处理（`facility_sanitation`）

#### 输入

##### 产品流

###### 卫生清洁冲洗水（`sanitation_water`）

清洁或冲洗食品接触设备和房间的常温水与原料制备用水、热水分开记录。

- 选定流：工艺用水
- 流属性/单位：Mass / kg
- 数量规则：卫生清洁水表或按事件罐体平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_facility_sanitation`
- 来源：`fao-who-cxc-1-1969`

###### 卫生清洁热水（`sanitation_hot_water`）

外购或单独产生的卫生清洁热水作为一项公用工程交换，不与蒸汽或常温水合并。

- 选定流：热水
- 流属性/单位：Mass / kg
- 数量规则：热水表或事件水量，并记录供水温度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_facility_sanitation`
- 来源：`fao-who-cxc-1-1969`
- 数量范围：暂定卫生清洁热水筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 包装产品
  - 基准：宽泛初始估计；零值需有干式清洁路线依据
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 卫生清洁电力（`sanitation_electricity`）

泵、高压清洗机、真空系统和清洁辅助设备用电单独记录。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表或按卫生清洁事件分配的设备负荷计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_facility_sanitation`
- 来源：`eu-pef-2021-2279`

###### 氢氧化钠清洗剂（`sodium_hydroxide_cleaner`）

碱性清洗用氢氧化钠按有效化学品质量记录，不与消毒剂合并。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：投加溶液质量乘以有效质量浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_facility_sanitation`
- 来源：`fao-who-cxc-1-1969`

###### 次氯酸钠消毒剂（`sodium_hypochlorite_disinfectant`）

清洁后使用的次氯酸钠按有效质量记录，与氢氧化钠和原料接触处理分开。

- 选定流：次氯酸钠
- 流属性/单位：Mass / kg
- 数量规则：投加溶液质量乘以有效质量浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_facility_sanitation`
- 来源：`fao-who-cxc-1-1969`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 卫生清洁废水（`sanitation_wastewater`）

废清洗水和冲洗水与植物制备废水、脱水废水分开记录，并披露处理去向和清洗化学品负荷。

- 选定流：食品加工卫生清洁废水
- 流属性/单位：Mass / kg
- 数量规则：实测排放或事件水平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_facility_sanitation`
- 来源：`fao-who-cxc-1-1969`; `eu-pef-2021-2279`

##### 基本流

### 过程：包装和产品放行（`packaging_release`）

#### 输入

##### 产品流

###### 包装用散装粉（`packaging_feed`）

进入包装机的合格散装粉称量，并与包装产品、留样、返工、粉尘和不合格产品核对。

- 选定流：已声明植物学来源的散装植物粉
- 流属性/单位：Mass / kg
- 数量规则：转移散装产品质量及实测水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`fao-utilising-root-crops`

###### 包装电力（`packaging_electricity`）

输送、灌装、封口、喷码、检重和局部除尘用电单独计量或计算。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：包装线分表或设备负荷计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`olaniran-et-al-2017`; `eu-pef-2021-2279`

###### 牛皮纸袋（`kraft_paper_sack`）

已声明包装所用牛皮纸外袋与聚合物内衬分开记录。

- 选定流：牛皮纸袋
- 流属性/单位：Mass / kg
- 数量规则：采购质量减库存变化和实测废料后分配给合格包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`fao-utilising-root-crops`; `eu-pef-2021-2279`
- 数量范围：暂定纸袋筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg 净产品
  - 基准：从消费包装至大包装的宽泛估计；应以材料清单替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 低密度聚乙烯内衬（`ldpe_liner`）

低密度聚乙烯内衬或密封内袋与纸袋分开记录。

- 选定流：低密度聚乙烯薄膜
- 流属性/单位：Mass / kg
- 数量规则：材料清单质量加实测线损后分配给合格包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`fao-utilising-root-crops`; `eu-pef-2021-2279`
- 数量范围：暂定聚乙烯内衬筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 净产品
  - 基准：宽泛包装估计；仅经验证无内衬包装可为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装其他植物粉或粗粉（`packaged_vegetable_flour`）

放行输出是唯一参考产品，必须匹配 CPC 23170、已声明植物和路线限定信息、实测放行水分、粒径规范、等级和包装配置。

- 选定流：蔬菜粉 `ec00d815-ccbe-4e9d-845a-efc929f58f56`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：放行检验后的 1 kg 净合格产品固定值
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 牛皮纸包装废料（`kraft_paper_scrap`）

牛皮纸裁切料、破损袋和拒收纸包装作为一项包装废物流称量。

- 选定流：废牛皮纸
- 流属性/单位：Mass / kg
- 数量规则：实测废料质量和处理去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

###### 低密度聚乙烯薄膜废料（`ldpe_film_scrap`）

破损内衬、边料和拒收低密度聚乙烯薄膜与纸废料分开称量。

- 选定流：废低密度聚乙烯薄膜
- 流属性/单位：Mass / kg
- 数量规则：实测废料质量和处理去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装植物粉或粗粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共用前景操作 | 在技术可行时通过分表、批次隔离或过程细分避免分配。 | `eu-pef-2021-2279` |
| `allocation_rework` | 返回同批次的内部粗粒级分或合格粉 | 将内部返工作为无共产品抵扣的内部循环；能源和材料损失保留在参考产品系统中。 | `eu-pef-2021-2279` |
| `allocation_co_product` | 可售皮、纤维、粗粉或其他共产品 | 无法细分时采用反映因果关系且有文件依据的物理关系；对物性相近的食品/饲料固体优先采用干物质分配。不存在可辩护物理关系时采用经济分配，并披露价格、时期、地理和敏感性。 | `eu-pef-2021-2279` |
| `allocation_waste` | 送处理的废物 | 在已声明边界内将收集和处理负荷分配给参考产品系统；没有单独论证的回收模型不得产生替代产品抵扣。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_preparation` | `receipt_preparation` | 接收料、水、电力、原料接触化学品、制备输出、拒收物、皮、修整物和废水 | 地磅和批次记录；仪表；化学品领用；实验室水分；废物联单 | lot_id; botanical_species; plant_part; state; supplier; origin; wet_mass_kg; moisture_percent; water_kg; electricity_kWh; chemical_name; solution_mass_kg; concentration; output_mass_kg; reject_mass_kg; peel_mass_kg; trimming_mass_kg; wastewater_kg; destination | 与生产批次关联的校准秤和仪表；实验室水分取样；化学品浓度来自证书或配制记录。 | kg; % m/m; kWh | 每批、每班或每次清洁事件；仪表至少每月与产量核对。 | 至少 12 个代表性月份，或季节性生产的完整生产期。 | 已声明产品系统中的每个设施。 | 汇总合格记录，扣除有文件依据的无关用量，按净放行产品归一化；保留批次水分平衡。 | 校准、仪表核对、批次表、实验室结果、发票、化学品证书和处理凭证。 |
| `cp_drying_conditioning` | `drying_conditioning` | 进料、干燥输出、电力、蒸汽、每种燃料、每种制冷剂、废水和直接排放 | 批次质量和水分；公用工程表；燃料和制冷剂库存；烟气或因子记录 | lot_id; feed_mass_kg; feed_moisture_percent; dried_mass_kg; dried_moisture_percent; electricity_kWh; steam_kg; fuel_name; fuel_mass_or_energy; heating_value_basis; refrigerant_name; opening_charge_kg; additions_kg; recovery_kg; closing_charge_kg; wastewater_kg; emission_factor_id; measured_emission_kg | 校准秤、水分检验、分表、发票和库存核对；烟气测量或经批准因子计算。 | kg; % m/m; kWh; MJ | 每批和每个公用工程周期；制冷剂在维修事件及年度核对时。 | 至少 12 个代表性月份或完整生产期。 | 每台干燥器、锅炉、发电机、热泵和制冷系统。 | 共用公用工程按计量用量或有文件依据的运行时间/负荷规则分配；燃料和制冷剂排放分别计算后再汇总。 | 校准、水分闭合、发票、燃料分析、维护日志、制冷剂服务记录、因子溯源和烟气报告。 |
| `cp_milling_sieving` | `milling_sieving` | 干燥进料、电力、散装粉、不合格粉、粗筛余物和粉尘 | 批次转移；分表；验收检验；废物和粉尘控制记录 | lot_id; feed_mass_kg; feed_moisture_percent; electricity_kWh; loose_flour_kg; flour_moisture_percent; particle_size_result; off_spec_kg; coarse_residue_kg; rework_kg; captured_dust_kg; emitted_dust_kg | 校准秤和分表；实验室放行检验；粉尘质量平衡或实测排气。 | kg; % m/m; kWh | 每批或每班；粉尘按许可频率测量。 | 至少 12 个代表性月份或完整生产期。 | 每台磨机、筛机、混合机和吸风系统。 | 核对投入与产品、返工、残余物、粉尘及水分变化；按合格输出归一化至参考产品。 | 校准、筛具检查、实验室结果、返工日志、滤器更换记录和排放测试。 |
| `cp_facility_sanitation` | `facility_sanitation` | 水、热水、电力、氢氧化钠、次氯酸钠和卫生清洁废水 | 卫生清洁事件日志；仪表；化学品配制和排放记录 | event_id; area_or_equipment; method; start_time; water_kg; hot_water_kg; temperature_C; electricity_kWh; chemical_name; solution_mass_kg; active_concentration; wastewater_kg; treatment_destination; verification_result | 仪表或事件水量测量；化学品稀释计算；书面卫生清洁计划和验证。 | kg; °C; kWh | 每次卫生清洁事件。 | 至少 12 个代表性月份或完整生产期。 | 前景范围内所有食品接触区和生产辅助区。 | 将事件总量分配给自上次同等清洁事件后该生产线的产量；披露多产品分配。 | 书面程序、操作日志、浓度测试、温度记录、验证拭子或审计以及排放记录。 |
| `cp_packaging_release` | `packaging_release` | 散装进料、电力、纸袋、聚乙烯内衬、包装产品和包装废料 | 批次转移；生产线分表；材料清单；库存和废料记录；放行实验室记录 | lot_id; loose_feed_kg; electricity_kWh; paper_sack_kg; ldpe_liner_kg; packed_net_kg; retained_sample_kg; paper_scrap_kg; ldpe_scrap_kg; moisture_percent; particle_size_result; grade; package_configuration | 校准检重秤和台秤；分表；采购和库存核对；放行取样。 | kg; % m/m; kWh | 每批或每次包装运行；至少每月核对库存。 | 至少 12 个代表性月份或完整生产期。 | 已声明系统中的每条包装线。 | 核对散装进料与放行产品、留样、返工、废物和粉尘；包装按净产品归一化。 | 秤校准、材料清单、发票、库存核对、废料票据和签署放行结果。 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项前景交换 | normalized_exchange = 合格交换量 / 净放行产品质量；净放行产品不含包装和不合格产品。 | 交换量；净放行产品 kg | 每 kg 参考产品交换量 | `eu-pef-2021-2279` |
| `calc_dry_matter` | 含水原料、中间料、产品、共产品和废物 | dry_mass = wet_mass × (1 - moisture_percent / 100)。保留原始湿质量和水分结果。 | 湿质量；水分 % m/m | 干质量 kg | `fao-who-cxs-176-1989` |
| `calc_mass_balance` | 每个过程和总前景 | 质量闭合 = 已识别输出和实测质量损失 / 已识别输入；调查超出已声明容差的差异，不得将未解释损失作为基本流。 | 投入、产品、废物、废水、留样和水分数据 | 湿基和干物质闭合 | `eu-pef-2021-2279` |
| `calc_active_cleaner` | 氢氧化钠和次氯酸钠 | 有效化学品质量 = 投加溶液质量 × 有效质量浓度。 | 溶液质量；浓度 | 有效化学品 kg | `fao-who-cxc-1-1969` |
| `calc_combustion_emissions` | 每种现场燃料和污染物 | 污染物质量 = 已声明基准上的燃料活动量 × 经批准的燃料/设备特定排放因子；记录因子身份和控制效率。 | 燃料量；热值；因子；控制效率 | 每 kg 产品污染物 kg | `olaniran-et-al-2017`; `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | 每种制冷剂化学品 | 损失 = 期初充注 + 补加 - 回收 - 期末充注；只分配纳入系统和时期对应份额。 | 期初、补加、回收、期末充注；产量 | 每 kg 产品制冷剂损失 kg | `ipcc-2019-refrigeration` |
| `calc_allocation` | 多产品操作 | 对所有共用输入输出一致采用已声明细分或分配规则；保留未分配总量和分配因子。 | 总交换；产品数量；物理或经济因子 | 已分配交换 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和原料 | 每个放行批次须可追溯植物种、植物部位、CPC 23170 产品状态、路线、等级、混合组成、水分、粒径和包装。 | 批准规范、供应商记录、批次谱系和放行证书。 |
| `dq_temporal` | 前景活动数据 | 使用至少 12 个代表性月份或完整季节性生产期；披露停机、异常批次和外推。 | 带日期的仪表、生产、发票、库存、维护和实验室记录。 |
| `dq_completeness` | 每个过程 | 核对全部已知材料和能源投入与产品、共产品、废物、废水和直接排放；对每张原子卡记录零值和不适用决定。 | 过程级湿基/干物质平衡、能源核对和完整性清单。 |
| `dq_measurement` | 秤、仪表、水分、粒径、排放和化学品浓度 | 使用校准设备，并在重要时保留方法、取样频率、检出限和不确定度。 | 校准证书、方法、质控图和检验报告。 |
| `dq_geography_technology` | 背景连接和共用公用工程 | 地理、电压、燃料、蒸汽来源、干燥技术、废水处理、制冷剂和包装材料应与前景时期和场址匹配。 | 供应商声明、合同、发票、设备记录和数据集元数据。 |
| `dq_provisional_ranges` | 每个 `reasoned_estimate` 范围 | 仅将该范围作为临时筛选先验；不得用中点替代采集值，并应在 `reviewed_methodology` 前替换或明确评审。 | 标明保留、替换或删除范围的评审记录。 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求 UUID `ec00d815-ccbe-4e9d-845a-efc929f58f56`、Product flow、CPC 3.0 代码 23170 及名称、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg。 | `un-cpc-3-23170` |
| `validate_scope_exclusions` | 产品身份 | 拒绝谷物粉、油料种子或含油果实粉/粗粉、芥末粉、分离淀粉、混合料或面团、CPC 01961 种植材料、CPC 01962 花卉，以及功能并非植物粉或粗粉的复配产品。 | `un-cpc-3-23170` |
| `validate_qualifiers` | 产品和数据集元数据 | 植物身份、路线、起始状态、水分、粒径、等级、包装、地理或时期缺失时判定完整性失败。 | `fao-who-cxs-176-1989`; `eu-pef-2021-2279` |
| `validate_cassava_moisture` | 供直接食用的木薯粉 | 要求放行实测水分 <= 13% m/m，除非目的地要求更严格；其他植物产品采用其已声明适用规范，不得静默套用木薯限值。 | `fao-who-cxs-176-1989` |
| `validate_atomic_inventory` | 过程清单 | 电力、蒸汽、热水、每种燃料、每种制冷剂、每种清洗剂、每个包装部件、每项废物、废水和每种污染物须保持独立原子交换。 | `eu-pef-2021-2279` |
| `validate_mass_balance` | 每个过程 | 要求有文件依据的湿基和干物质闭合；调查未解释差异，禁止以虚构排放补平。 | `eu-pef-2021-2279` |
| `validate_route_zeroes` | 条件交换 | 零值或不适用需有该交换确实不存在的证据；未计量或未知是数据缺口，不是零。 | `eu-pef-2021-2279` |
| `validate_sanitation` | 清洁和消毒 | 要求书面方法、频率、化学品身份和浓度、相关时水温、责任以及监测或验证证据。 | `fao-who-cxc-1-1969` |
| `validate_allocation` | 共产品和共用公用工程 | 要求细分证据或已披露的物理/经济分配基准、因子合计为一、一致应用，以及经济分配敏感性。 | `eu-pef-2021-2279` |
| `validate_provisional_ranges` | 推理估算 | 标记每个暂定范围供评审，禁止将其表述为观测、允许或来源支持范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 1 kg 净包装其他植物粉或粗粉的从门到门前景生产数据集。 |
| downstream_use | `secondary_dataset`；经独立评审并连接代表性上游和处理数据集后可作 `background_dataset`。 |
| allowed_use | 与已声明植物来源、路线、水分、等级、地理、时期、分配和包装相匹配的产品特定过程或生命周期模型。 |
| excluded_use | 不得直接替代谷物粉、油料粕、淀粉、芥末粉、混合料、种植材料、鲜切花、无限定蔬菜粉、农业种植，或在未增加其他阶段时用于从摇篮到坟墓声明。 |
| required_metadata | PCR id 和版本；参考 UUID；植物种和植物部位；混合比例；起始状态；路线；设施和地理；时期；技术；水分和粒径；等级；得率；能源和燃料；制冷剂；清洗化学品；废水和废物去向；直接排放；包装；分配；上游数据集身份；数据缺口。 |
| required_quality_disclosure | 覆盖时期和场址；初级数据比例；校准和取样；质量和能源闭合；分配；背景数据代表性；暂定估算；未决 UUID；排除项和局限。 |
| update_trigger | 植物来源或混合、起始状态、脱毒或调质路线、干燥器或燃料、制冷系统、清洗剂、包装、共产品状态、分配、设施、地理、产品规范发生变化，或年度归一化交换发生重大变化。 |

## 11. 数据源

| 来源 ID | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-23170` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, Explanatory Notes, 30 June 2025, subclass 23170. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-20）。 | 官方类别身份，以及与 CPC 01961、01962 和其他产品子类的区分。 |
| `fao-who-cxs-176-1989` | standard | FAO/WHO Codex Alimentarius, CXS 176-1989, Standard for Edible Cassava Flour, adopted 1989, revised 1995, amended 2013. https://www.fao.org/input/download/standards/59/CXS_176e.pdf（检索于 2026-08-20）。 | 代表产品定义、捣碎/研磨和筛分路线、苦木薯浸泡、安全要求和 13% m/m 水分限值。 |
| `fao-save-and-grow-cassava-2013` | official_guidance | FAO, Save and Grow: Cassava—A guide to sustainable production intensification, 2013, Chapter 7. https://www.fao.org/4/i3278e/i3278e.pdf（检索于 2026-08-20）。 | 高品质木薯粉过程分解：去皮、清洗、磨碎、压榨、解碎、筛分、干燥、研磨、筛选、包装和贮存。 |
| `fao-utilising-root-crops` | handbook | FAO, Utilising Root Crops, Section 2: Root crop flour. https://www.fao.org/4/x5049E/x5049E04.htm（检索于 2026-08-20）。 | 木薯、甘薯、芋头和山药粉路线；清洗、去皮、切片、干燥、研磨、筛分、密封袋或麻袋及贮存。 |
| `fao-who-cxc-1-1969` | standard | FAO/WHO Codex Alimentarius, CXC 1-1969, General Principles of Food Hygiene, 2022 revision. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC+1-1969%2FCXC_001e.pdf（检索于 2026-08-20）。 | 原子化清洁投入、热水冲洗、化学品浓度、书面卫生程序、监测和验证。 |
| `olaniran-et-al-2017` | literature | Olaniran, J. A.; Jekayinfa, S. O.; Agbarha, H. A. (2017). Life cycle assessment of cassava flour production: A case study in Southwest Nigeria. Journal of Engineering and Technology Research 9(1), 6-13. DOI: 10.5897/JETR2015.0580. OpenAlex: W2753030442. Full text: https://academicjournals.org/journal/JETR/article-full-text-pdf/F4996CC65461（检索于 2026-08-20）。 | 同行评审原文支持单元操作、前景清单、干燥和研磨能源重要性、煤和柴油、废水以及 CO2、CH4、N2O、NOx 和 SO2 交换。 |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, Annex I, as corrected 23 May 2022. https://eur-lex.europa.eu/eli/reco/2021/2279/corrigendum/2022-05-23/oj/eng（检索于 2026-08-20）。 | 公司特定过程数据、完整材料/能源/产品/废物/排放清单、从活动数据和因子计算、数据质量和分配层级。 |
| `ipcc-2019-refrigeration` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 3, Chapter 7, Emissions of Fluorinated Substitutes for Ozone Depleting Substances. https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol3.html（检索于 2026-08-20）。 | 制冷剂特定充注、维修、回收和泄漏核算。 |
