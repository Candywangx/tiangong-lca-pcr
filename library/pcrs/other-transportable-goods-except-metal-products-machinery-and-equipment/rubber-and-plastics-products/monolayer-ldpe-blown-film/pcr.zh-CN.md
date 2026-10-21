---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.monolayer-ldpe-blown-film
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 外购粒料风冷吹塑的单层低密度聚乙烯平膜

## 1. 范围与适用性

本方法覆盖外购原生未添加助剂粒料制造的无添加剂、非自粘、非泡沫、未增强无衬托、未印刷未处理单层LDPE平膜卷：接收输送、有真实结露时按条件干燥、电热熔融均化、单环形模头、风冷膜泡、折叠、冷刀剖平、收卷、检验、放行包装及首次质量放行。同配方洁净内部回料须有完整历史才纳入。排除HDPE/LLDPE混配、另加母料填料、外购再生料、共挤复合、涂层电晕、刻意后拉伸取向、流延、制袋封口、原生树脂合成及仅对外购成品膜重包。实际偏离须重新判断适用性并新增明确原子交换，不能隐藏在零或其他材料总数。

透明综合不同工业来源及独立分配指南，不声称同一订单或通用工厂数值。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.monolayer-ldpe-blown-film |
| classification_refs | CPC3.0 36330；仅建议较窄关联 |
| covered_products | 一个声明牌号配置的风冷膜泡冷刀剖切无添加剂单层LDPE平膜卷 |
| excluded_products | 其他聚合物混配; 泡沫自粘增强复合涂层膜; 流延膜; 袋; 仅外购成品膜包装 |
| representative_product | 声明的平膜卷；Lupolen2420K仅示例无添加剂粒料供货，不是强制SKU |
| production_route | 电驱单层螺杆挤出; 环形模头; 风冷; 折叠; 冷刀切开边缘; 双平幅收卷 |
| market_state | 工厂首次质量放行的包装膜卷，净质量排除可拆纸芯及全部包装；电力绑定限中国低于1kV电网平均消费供电 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 为声明的后续加工用途提供无添加剂LDPE平膜 |
| How much | 首次质量放行膜净质量1 kg |
| How well | 声明牌号、幅宽厚度公差及光学力学验收；等千克不证明等功能 |
| How long or cycle | 一个制造首次放行批次，不编使用寿命 |
| reference_flow_link | product |

| Field | Value |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | LDPE牌号及整份供货配方; 原生未添加助剂粒料状态; 允许的同配方内部回料及历史; 单层非泡沫未增强无衬托结构; 非自粘未印刷未处理表面; 环形模头风冷吹膜及冷刀平幅剖切; 幅宽及净厚度公差; 卷净质量及纸芯包膜皮重; 真实光学力学验收及用途限制; 唯一首次放行及冲销关联; 报告期及地域; 供电电压供方边界; 真实干燥冷却配置; 原料/WIP/FG批次质量及继承每流向量; 真实物种废物去向; 每种包装组件及复用历史; 独立FG服务截止点 |

每项限定须进入可消费元数据、产品参考备注或等效字段。原生牌号CAS路线地点性能缺失不能证明特定供方，须完整保留产品卡限定。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | cp_release校准膜净质量，排除纸芯包装；report_once为唯一A_i/Q操作。 |
| energy_units | electricity; fg_power | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 相同边界真实kWh乘3.6得MJ，积分电量不再乘时间。 |
| state_units | fluid and species | Mass | kg | 用同物质实测密度状态及物种与碳基区别。面积卷数仅补充，不能猜每卷千克或套TDS密度。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 工厂接收外购原生无添加剂LDPE粒料及实际逐项识别供货，不是外购成品膜 |
| starting_condition_role | 前景接收门关联上游供货；兼容供方清单保留聚合物制造 |
| product_classification_scope | 原始CPC36330结构的有限子集；36390其他塑料板片膜、36410袋、36920自粘形状另列；不声称未见解释注释 |
| recursive_input_rule | 同配方洁净内部边料转移质量及完整继承负荷，不是新上游采购。外购LDPE包膜是独立真实包装供货，不能代替参考产品制造 |
| upstream_dataset_requirement | 匹配实际整份供货配方、状态、技术、地域、年份及属性单位。识别供方已含包装运输只计一次，通用UUID不是供方足迹 |
| disclosure | 完整粒料至包装膜卷首次放行门，另列原批次放行后仓储搬运装载发运服务账。声明服务截止、留库FG及后续补充，保留原始生产/FG/合并实物及向量账 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | film_line | 纳入每项真实接收搬运、有证据干燥、螺杆过滤模头加热、鼓风压缩、冷却回路、牵引冷切收卷、试验包装，以及失败试制、开停机、热待机、清机返工，不能缩为外购成品膜重包。 | `lyb-film-extrusion`; `lyb-lupolen-2420k`; `polystar-monolayer-flat-film` |
| boundary_evidence | all stages | 透明综合不同LYB指南、示例TDS及独立POLYSTAR冷切能力，不是同一SKU工厂订单。多挤出机、流延水冷及电晕图为相邻分支，不是本路线。典型试样性能设置不是通用限值或密度换算，遵守示例树脂医疗药品用途排除。 | `lyb-film-extrusion`; `lyb-lupolen-2420k`; `polystar-monolayer-flat-film` |
| boundary_atomic | every exchange | 每份真实整份制剂只采购一次，分析组成载水活性比例仅子账。真实厂内配制须分列外购组分及真实混合能耗损失。未列真实成分、清洗剂、润滑剂、制冷剂、冷却添加剂、燃料、包装、废物及物种均须独立具体交换及适用状态供方介质。不得其他材料、总VOC化学质量或公用工程集合，不得假定零或锅炉蒸汽。燃烧路线偏离须重判路线并分列真实燃料物种。 | `lyb-film-extrusion`; `lyb-lupolen-2420k` |
| boundary_cooling | water/heat | 膜泡为风冷，不是相邻流延水冷。实际有机筒夹辊冷风用水回路时纳入，内部循环不是外部需求。外部Product供水及真实Product回水须测量质量组分、真实T/P和焓，明确供方水能及净服务约定，避免重复水生产或热服务负荷。不推定冷凝水锅炉。 | `lyb-film-extrusion` |
| boundary_q | product; fg_service | Q为冷切收卷试验和放行包装后新增首次质量放行膜净千克。同批期末FG已在Q内，不得再加作生产输出。复验发运库转及既往放行退货返工不产生新Q。真实放行后仓储包装搬运装载发运另列原批次服务账，含留库FG及后续服务补充。旧FG生产负荷不入当期Q。 | `lyb-film-extrusion`; `ilcd-handbook-2010` |
| boundary_species | mass/element/water | 熔融结晶是物理转变，不假定反应产水。按独立证据区分游离、相变、反应和结构水。用实测比例独立闭合总质量和相关C/H/O或添加元素；实质氧化确需时测量耗氧。不能一残差拟合两未知或从COD/VOC推物种。聚合物颗粒、真实气体物种、送处理及直接环境排放分开。 | `lyb-film-extrusion`; `lyb-lupolen-2420k` |
| boundary_history | WIP; FG; returns | 期初期末原料、各WIP阶段及回料池按批次保留完整每流继承向量；消耗期初批次转入负荷、未完成批次向后结转，含失败零产出运行。FG期初期末退货保留原放行交付冲销及完整继承向量。适用时冲销原交付，只增加真实增量返工服务；重复放行不造产量。合并实物账抵消内部Q和返工。 | `ilcd-handbook-2010`; `lyb-film-extrusion` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| film_line | 完整粒料至包装膜首次放行 | required | 全部阶段，保留真实干燥冷却回料清机条件 | foreground_manufacturing | product |
| fg_service | 原批次放行后服务 | required | 真实仓储包装搬运装载发运，含期末留库FG | foreground_service | fg_receipt |

### 过程：制造及首次放行 (`film_line`)

#### 输入

##### 产品流

###### 低密度聚乙烯粒料（PE-LD） (`resin`)

实际原生未添加助剂 LDPE 粒料，整份供货配方只采购一次。原生 Product/Mass 身份未限定 CAS、牌号、路线、形态细节或地域；须核对真实粒料规格和兼容上游供方。分析组成、游离水和活性比例仅为子账，不再采购。内部回料保留继承负荷，不是外购树脂。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：低密度聚乙烯粒料（PE-LD） `4f19f116-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`lyb-film-extrusion`; `lyb-lupolen-2420k`

###### 交流电 (`electricity`)

原生 Product 限中国低于 1 kV 到用户的电网平均消费供电；不能替代其他电压、发电端输出或输配服务。参考属性 Net calorific value，单位 MJ。真实 kWh 先乘 3.6 一次再报告。纳入全部实际电机、电热、鼓风压缩、水泵冷机、干燥、分切收卷、检验包装、开机待机清机及失败试制，计量不能重叠。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`lyb-film-extrusion`; `lyb-lupolen-2420k`

###### 聚乙烯基配方挤出清机料 (`purge`)

仅在切换开停机实际使用外购聚乙烯基清机制剂时纳入。记录整份牌号、稳定剂及热限制；不能以纯树脂身份加再次采购所含树脂。其他实际化学清机料须独立具体卡及残渣。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：聚乙烯基配方挤出清机料
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`lyb-film-extrusion`

###### 配方硅基润滑脂 (`grease`)

仅按实际停机清机模头工具硅脂纳入。整份供货基础油、稠化剂及添加剂只计一次，记录留存及实际移出残渣；不能假定纯 PDMS 或通用用量。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：配方硅基润滑脂
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`lyb-film-extrusion`

###### 冷却回路补给自来水 (`water`)

仅按实际外部自来水补水或清洗水纳入。其他水源须独立身份。内循环不是外部需求。测量状态、密度、库存和出口；结露干燥按条件，不假定 LDPE 吸湿。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：冷却回路补给自来水
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`lyb-film-extrusion`; `lyb-lupolen-2420k`

###### 供冷液态换热水 (`cooling_supply`)

仅按实际外部 Product 冷却供水纳入，与 cooling_return 配对。保留入口实测质量、组成、T/P、焓及供方水生产与净热服务核算约定；不能推定冷机、蒸汽、锅炉或冷凝水。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：供冷液态换热水
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`lyb-film-extrusion`

###### 不锈钢挤出过滤网 (`screen`)

按真实更换网、合金和完整质量纳入；永久过滤板不能每批当成新耗材。实际其他过滤材料另卡。废网组成追踪附着聚合物。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：不锈钢挤出过滤网
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`lyb-film-extrusion`

###### 单根可拆卷芯 (`core`)

一个圆柱纸板卷芯，不是包装集合。原生 Product/Mass、工厂生产混合，纸板管芯同义词及备注一致。尺寸、牌号、胶粘剂、再生含量及地域未定：核对实际整根供货。皮重排除于膜 Q；采购只计一次，保留空置附着复用库存及毛外出、返还、废物流动。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lyb-film-extrusion`

###### 低密度聚乙烯薄膜（PE-LD） (`wrap`)

按实际一种外购可拆无复合 LDPE 保护包膜纳入，区分本次制造参考膜和实际自产膜内用。原生 Product/Mass/kg 未限定 CAS、牌号、路线、地域、性能或再生含量；仍须核对实际无复合 LDPE 供方，不能替代自粘多层材料。包膜不入 Q，有独立完整组件账。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lyb-film-extrusion`; `polystar-monolayer-flat-film`

###### 聚丙烯包装打包带 (`strap`)

按实际整份 PP 带及实测供货组成皮重纳入。金属扣或不同复合材料须新增原子卡。保留空置附着复用库存及全部外部流动；内部复用不是再采购。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：聚丙烯包装打包带
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lyb-film-extrusion`

###### 木运输托盘 (`pallet`)

按实际整只木托盘纳入，明确紧固件和处理。采购、维修、外部返入及内复用分开；不假定寿命或周转次数。附着及空置质量均不入膜 Q。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：木运输托盘
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lyb-film-extrusion`

###### LDPE树脂包装袋 (`resin_sack`)

仅按随树脂接收真实整只LDPE袋纳入，不是第二次采购树脂。供货组成质量及供方已含包装负荷识别一次；保留组件接收及废物返还库存账。实际其他内衬八角箱板或散装容器组件须另立具体卡。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：LDPE树脂包装袋
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lyb-lupolen-2420k`; `lyb-film-extrusion`

##### 废物流

##### 基本流

###### 来自大气的氧气 (`oxygen`)

仅在独立氧化证据确需时记录净耗氧。膜泡冷却空气通量不是耗氧。保留进出口本底修正，不能用一个残差拟合耗氧和反应水。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：来自大气的氧气
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`lyb-lupolen-2420k`

#### 输出

##### 产品流

###### 新增首次质量放行平膜净量 (`product`)

唯一参考输出：真实原生无添加剂单层 LDPE，非泡沫未增强无衬托、非自粘未印刷未处理平膜；电热熔融经单环形模头挤出、风冷折叠、冷切成平幅、收卷检验及首次放行包装。原生 Product/Mass/kg 未限定 CAS、牌号、路线、地域或性能；须由前景及供方明确，不能默认。同规格双幅可同批，不同输出须细分。Q 只计一次新增首次放行，含同批期末 FG，排除可拆纸芯包膜。重复放行及发运不产生 Q。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_release`
- 来源：`lyb-film-extrusion`; `lyb-lupolen-2420k`; `polystar-monolayer-flat-film`

###### 返还供方的液态换热水 (`cooling_return`)

仅按与 cooling_supply 配对的真实外部 Product 回水纳入。保留出口质量、组成、实际 T/P 和焓；不能复制入口状态、假定全回或默认能量抵扣。送处理排水是不同废物出口。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：返还供方的液态换热水
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`lyb-film-extrusion`

##### 废物流

###### 送外部处理的洁净 LDPE 膜边料 (`scrap`)

实际未内用膜边料，明确污染及接收方。查询到的回收工厂已清洗废物混合不能识别本未经处理工厂门出口，未采用 UUID。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：送外部处理的洁净 LDPE 膜边料
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`lyb-film-extrusion`

###### 降解聚乙烯挤出清机残渣 (`purge_waste`)

真实残渣组成及接收方；配方清机料、氧化聚合物及硅脂污染不是洁净边料。不同真实残渣须另立具体卡。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：降解聚乙烯挤出清机残渣
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`lyb-film-extrusion`

###### 废不锈钢挤出过滤网 (`screen_waste`)

真实废网附着聚合物为组成子账，整份废物只计一次。另行剥离聚合物须独立真实出口。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：废不锈钢挤出过滤网
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`lyb-film-extrusion`

###### 送外部处理的冷却回路排污水 (`blowdown`)

实际送处理液态废水，明确溶解添加剂、实测状态及接收方；不是清洁 Product 回水或直接水环境排放。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：送外部处理的冷却回路排污水
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`lyb-film-extrusion`

###### 送外部处理的空 LDPE 树脂袋 (`sack_waste`)

真实空 LDPE 树脂袋按随供方接收包装追踪，其已含负荷只计一次。实际八角箱、内衬或其他组件须另卡，不能混作包装废物。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：送外部处理的空 LDPE 树脂袋
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lyb-film-extrusion`

###### 废弃纸板卷芯 (`core_waste`)

真实不能再用整根纸芯，明确组成、复用历史、污染及接收方。随膜外出的纸芯不是厂内废物。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：废弃纸板卷芯
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lyb-film-extrusion`

###### 废弃 LDPE 保护包膜 (`wrap_waste`)

真实移除破损 LDPE 包膜保留组件接收方平衡，不再次采购已计入包膜。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：废弃 LDPE 保护包膜
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lyb-film-extrusion`

###### 废弃聚丙烯包装打包带 (`strap_waste`)

真实 PP 带废物与 LDPE 及金属扣分开。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：废弃聚丙烯包装打包带
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lyb-film-extrusion`

###### 废弃木运输托盘 (`pallet_waste`)

真实整只木托盘废物明确接收方；返还所有者为独立包装返还，不是废物。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：废弃木运输托盘
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`lyb-film-extrusion`

##### 基本流

###### 排入空气的水蒸气 (`vapour`)

按真实蒸发或移除游离结露水及独立来源相态证据纳入，不假定反应水。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：排入空气的水蒸气
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`lyb-film-extrusion`; `lyb-lupolen-2420k`

###### 排入空气的聚乙烯颗粒 (`dust`)

按捕集后实际逸散 LDPE 粉尘纳入，明确粒径组成。捕集废物和气态 VOC 为不同出口。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：排入空气的聚乙烯颗粒
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`lyb-film-extrusion`; `lyb-lupolen-2420k`

###### 排入空气的甲醛 (`formaldehyde`)

仅在真实调查识别甲醛 CAS50-00-0 时纳入；对真实治理后及无组织出口作经验证物种专属采样，不能从指南推定有无。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：排入空气的甲醛
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`lyb-film-extrusion`; `lyb-lupolen-2420k`

###### 排入空气的乙醛 (`acetaldehyde`)

仅在真实调查识别乙醛 CAS75-07-0 时纳入。醛类示例不能证明完整；每种实际新增物种须独立卡及验证方法。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：排入空气的乙醛
- 流属性/单位：Mass / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`lyb-film-extrusion`; `lyb-lupolen-2420k`

### 过程：成品库存服务 (`fg_service`)

#### 输入

##### 产品流

###### 低密度聚乙烯薄膜（PE-LD） (`fg_receipt`)

product 的内部 Q 接收，不是新采购或新产量。同一 Product/Mass/kg 身份及产品卡全部牌号路线质量限定均适用。匹配唯一原批次及完整每流负荷向量；期初 FG 及旧退货各有独立历史。合并实物核算抵消此转移及生产输出。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`ilcd-handbook-2010`

###### 交流电 (`fg_power`)

按原批次记录真实放行后仓储、电动搬运、复验、重包和装载能量。原生限中国低于1kV到用户电网平均消费、Net calorific value/MJ，kWh乘3.6；同 electricity 供方限定。旧批服务不能除当期 Q。目标新批服务与生产分开，至声明截止点使用同一原 Q 并保留后续补充。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`ilcd-handbook-2010`; `lyb-film-extrusion`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 低密度聚乙烯薄膜（PE-LD） (`dispatch`)

按原批次记录真实毛外出膜净质量，与包装退货分开。同一 Product/Mass/kg 身份及产品卡全部物理限定均适用。此为服务实物出口，不是第二次生产输出或归一化分母。期末 FG 是库存，不是额外 Q。厂内装载门外运输须另声明扩展。 本卡报告唯一report_once结果，不再执行除法。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每 1 kg 参考流的已报告原子交换数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`ilcd-handbook-2010`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | attributional inventory | 仅在研究目标决策背景确定需分配而非替代的归因情形下适用，不能任意选择框架或宣称完整ILCD符合性。工业制造证据不支持LCA分配。 | `ilcd-handbook-2010` |
| allocation_subdivide | each shared exchange | 先拆分专属计量操作，再按真实批次阶段虚拟细分专属实含材料服务。保留责任批次开机待机失败清机返工负荷，整线千克比例不能替代此步骤。 | `ilcd-handbook-2010` |
| allocation_causality | individual residual exchange | 识别论证逐交换对实际共功能的决定性物理因果关系。电机功、加热、鼓风、占用及受限库存可需不同实测驱动或时间容量组合。仅质量不是证明。实物平衡和完整实物出口独立于负荷比例。 | `ilcd-handbook-2010` |
| allocation_residual | genuinely inseparable remainder | 仅记录证明无决定性物理因果归属的剩余部分，才用共同过程门真实数量质量状态下同期代表市场价值。推导价格须剔除下游运输调理包装价值，保留证据时期推导敏感性。不得固定比例、任意物理经济选择、零售价或无差别总收入分配。每流分配至共功能总和须等于原清单。 | `ilcd-handbook-2010` |
| allocation_regrind | internal and external scrap | 同配方洁净内回料继承树脂及真实粉碎重熔负荷，不是新采购Q或自动共产品及避免树脂抵扣。对外边料清机料包装废物独立核实真实法律经济状态接收方。送回收不能证明无负荷废物或共产品。对外再生方法须另有处理边界依据，此处不自动引入寿命末规则。 | `ilcd-handbook-2010`; `lyb-film-extrusion` |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | film_line | product | release_records | SKU; 牌号; 批次; 膜卷毛质量; 纸芯包膜皮重; 幅宽厚度; 光学力学试验; 首次放行时间; 验收; 冲销 | 质量人员用校准秤称膜卷并扣除分别实测可拆皮重，剖切收卷包装后核对唯一首次放行和冲销。保留原始千克试验，只汇总唯一新增合格膜净千克为Q，不作除法。 | kg | 每卷每放行 | 一个完整匹配生产期 | 工厂首次放行门 | 每 1 kg 参考流 | 校准; 皮重及放行试验 |
| cp_material | film_line | resin; purge; grease; screen; scrap; purge_waste; screen_waste | material_stock | row_id; 批次; 整份供货配方; 游离水; 实测元素比例; 供方状态; 接收领用退回质量; 期初期末原料WIP回料; 继承每流向量; 阶段; 接收方 | 材料人员实验室分别称供货出口并在兼容基准测组成。保留未归一化原始质量、完整库存向量及阶段转移，含失败开停机待机清机返工。内部转移不是再采购，实际不同配方残渣分行。 | kg | 每材料流动 | 同cp_release报告期批次 | 接收至放行及废物转移 | 每 1 kg 参考流 | 发票; 分析; 校准; 接收记录 |
| cp_energy | film_line | electricity | meter_intervals | 电表; 供方电压地域; 起止kWh; 功率速率时间; 阶段状态; 失败; 共用驱动证据; WIP批次 | 能源人员计量每个真实阶段辅助，含热待机开停机清机零产出。保留原始兼容区间读数及重叠检查，区分功率与积分电量，采集不作除法。 | kWh | 每区间状态 | 同cp_release报告期批次 | 生产及实际辅助 | 每 1 kg 参考流 | 校准; 回路图; 供方边界 |
| cp_water | film_line | water; cooling_supply; cooling_return; blowdown; vapour | water_heat_states | row_id; 来源接收方; 进出口质量体积; 独立密度; T/P; 溶解组分; 水分; 回路库存; 蒸发; 真实焓; 供方水能约定 | 水务人员按实测密度状态组成独立计量外部供回、送处理及环境出口，内循环和水分另账。保留原始量不除法。未测蒸发回水为未解，不能残差拟合。 | kg; m3; kg/m3; degC; kJ/kg | 每区间状态试验 | 同cp_release报告期批次 | 真实外部水边界 | 每 1 kg 参考流 | 分析; 仪表校准; 供方约定 |
| cp_pack | film_line | core; wrap; strap; pallet; sack_waste; core_waste; wrap_waste; strap_waste; pallet_waste; resin_sack | component_stock | row_id; 整份组成; 供方皮重; 期初期末空包装; 附着WIP/FG; 复用库存; 外购; 外部返入; 毛实物发运; 对外返还; 废物; 内复用; 原批次 | 包装人员称每种真实组件，含接收树脂包装，供方已含负荷核对一次。保留完整原始空置附着复用组件账及毛发运返还废物账。纳入真实重包和关联FG服务，内复用抵消、皮重不入Q、不作除法。 | kg | 每组件流动 | 匹配生产及FG服务期 | 接收; WIP; 包装; FG; 外部流动 | 每 1 kg 参考流 | 皮重试验; 组件规格; 库存闭合 |
| cp_air | film_line | oxygen; dust; formaldehyde; acetaldehyde | speciated_survey | row_id; 物种CAS; 粒径; 介质; 阶段状态; 点源无组织路径; 浓度基准; 积分体积或真实流率; 时间; T/P; 干湿; 治理; 空白; 回收率; 检出限; 不确定性 | 环境人员和合格实验室先调查真实树脂清机料硅脂清洗治理，再对每个真实出口状态选验证的物种颗粒专属方法，含开机待机未捕集路径。保留原始校准结果气体状态，不能总VOC当化学质量或默认未检出为零。示例醛类按条件，不假定完整或存在。缺调查即数值不完整。不作除法。 | kg/m3; m3; m3/h; h; kg | 每真实物种及代表状态 | 同cp_release报告期批次 | 真实排气及全部有据无组织 | 每 1 kg 参考流 | 完整试验报告; 校准; 空白; 回收率; 覆盖 |
| cp_fg | fg_service | fg_receipt; fg_power; dispatch | cohort_service_history | 原放行; 完整继承每流向量; 期初期末FG附着包装; 新Q接收; 毛发运; 退货; 原交付冲销; 损失; 返工; 增量能量; 占用时间; 截止 | 仓库质量人员保留原始批次流动、原放行退货冲销历史及继承生产服务向量。真实后服务计量，先专属记录再有据驱动归属；旧批负荷不除当期Q。目标批保留截止点及后续补充服务，期末FG携完整向量。复验不造Q，原始采集不除法。 | kg; kWh; h | 每库存服务发运流动 | 声明服务区间及原批次历史 | 放行后仓储至真实装载; 保留未发FG | 每 1 kg 参考流 | 历史; 向量冲销关联; 服务计量 |

aggregation_rule仅声明报告基准。每个采集方法保留未归一化原始记录，换算批次归属及向量继承在唯一report_once除法前完成。卡片及后续汇总只引用同一结果。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_q | product | Q = 唯一新增首次质量放行膜净千克之和并作真实关联冲销修正；排除纸芯包膜。同批期末FG已在Q内，发运复验及既往放行退货返工不造新Q。 | cp_release | Q | `lyb-film-extrusion`; `lyb-lupolen-2420k`; `polystar-monolayer-flat-film` |
| cohort_raw | production rows | 逐行单位构造原始A_i：已归属当期交换 + 已消耗期初WIP回料的完整继承每流向量 - 期末WIP回料结转完整向量。含失败零产出开停机待机清机及增量返工。继承是向量，不是单一影响分数。实物库存另列；已放行期末FG不能从生产Q或其已完成生产负荷中扣减。 | cp_release; cp_material; cp_energy; cp_water; cp_pack; cp_air | A_i | `ilcd-handbook-2010` |
| physical_gates | raw production; FG; combined | 按实测组成及水基准独立闭合总材料质量及每个相关元素。生产：期初原料WIP空包装回料库存 + 真实外部材料投入 + 真实转入返工 = 期末相同库存 + 新膜净Q + 新FG附着包装 + 既往放行返工返回FG及其附着包装 + 真实对外Product回水 + 全部废物物种出口。内部回料抵消。FG膜子账：期初净膜 + 新Q接收 + 真实外部退货 + 既往放行返工接收 = 毛外发膜净量 + 期末净膜 + FG损失 + 转返工。加上分别完整的附着空置复用包装及实际服务投入出口子账，构成总FG门。合并实物门抵消全部内部Q返工附着包装转移，外部材料投入退回对照外部发运Product冷却回水、全部废物排放及期末减期初库存闭合。已在Q内的期末FG不能再计生产输出。不能用负荷比例缩放实物出口或用残差编物种。 | cp_release; cp_material; cp_water; cp_air; cp_fg | raw physical ledgers | `ilcd-handbook-2010`; `lyb-film-extrusion` |
| pack_balance | each packaging component | 逐组件分别：期初空包装 + 期初附着WIP/FG + 期初复用 + 外购 + 外部返入 = 期末空包装 + 期末附着WIP/FG + 期末复用 + 随毛实物发运外出组件 + 对外返还 + 废物。接收供方包装识别一次，不重复已含上游负荷。内部附着复用抵消，包装不入Q，不自动共产品或抵扣。 | cp_pack; cp_fg | component ledgers | `ilcd-handbook-2010` |
| energy_units | electricity; fg_power | 同供电边界先按A_MJ = 3.6 × A_kWh换算再批次报告。已积分kWh不能再乘时间，只有真实功率速率才时间积分。 | cp_energy; cp_fg | A_MJ |  |
| fluid_species | actual fluid/species | 液体A_kg = V_m3 × 实际组成温度下独立实测兼容rho_kg_per_m3。物种质量与兼容积分体积用sum(c × V)，只有真实体积流率F才用integral(c × F × dt)。匹配T/P干湿状态单位。碳当量浓度须独立物种换算。不能对其他液体套水密度、积分体积再乘时间或VOC/COD指标与化学质量相加。冷却服务按真实供方约定用实测进出口焓。 | cp_water; cp_air | A_kg; A_species; net cooling service |  |
| fg_cohort | fg_service | 每原批次保留完整生产向量及真实增量服务返工向量。实际关联退货确需时冲销原交付，复验仅增加真实增量。服务先专属归属再按层级，旧FG不除当期新增Q。目标新批跨期服务仍用同一原Q，包括期末FG及后续补充。合并不能再次加继承生产。 | cp_fg; cp_pack | cohort A_i and histories | `ilcd-handbook-2010` |
| report_once | all non-reference exchanges | x_i = A_i / Q；A_i为行单位完整已归属原始分子，Q为目标原批次新增首次质量放行膜的原始千克。原始单位换算完整WIP继承及有据分配后恰除一次。生产和后续服务分开报告，服务用同一原Q，不用毛净发运或其他批次当期产量。卡片及汇总只引用此同一计算，原始采集不除法。若Q = 0，保留真实负荷、不出单位结果。 | A_i; Q; cp_release; cp_fg | x_i | `ilcd-handbook-2010` |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_raw | all exchanges | 须真实场址牌号批次记录、校准单位及不确定性、完整阶段状态覆盖与匹配报告期。待测量、辅助UUID及兼容供方为明确数据生产要求，不能编数或默认零。 | 原始记录; 分析; 校准; 时间匹配 |
| dq_species | all outlets | 数值完整性须真实完整物种颗粒水调查、验证方法和实际去向。条件示例不能证明无排放或完整，每个真实新增出口另立原子卡。 | 完整实验室接收记录; 检出限; 不确定性 |
| dq_native | UUID rows | 保留全部原生物理限定、精确引用属性单位链及真实供方兼容性。身份UUID不是数量或科学批准。不从不匹配材料或典型牌号数直接复用数字。 | 原生链; 实际供货规格; 明确缺口 |
| dq_fg | FG and packaging | 保留全部继承向量、退货冲销历史、真实服务增量、组件闭合及截止，含留库FG后续补充。制造完整性与服务完整性区分。 | 批次向量历史; 实物组件账 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | reference | 核对真实粒料配方、无添加剂单层非泡沫LDPE结构、未处理非自粘表面、环形风冷吹塑冷刀剖平路线、尺寸试验、包装膜卷首次放行及唯一product行，不能外购成品膜或其他聚合物替代。 | `lyb-film-extrusion`; `lyb-lupolen-2420k`; `polystar-monolayer-flat-film` |
| validate_native | all exchanges | 数量使用前核对每个原生basename同义词备注、CAS、牌号路线形态地域介质类型及全部属性，精确单位链和兼容供方。未定PE-LD牌号路线地域须真实限定，不能编默认。已清洗回收终端或电压错误为实质不匹配。未解具体辅助不能变集合流。 | `ilcd-handbook-2010` |
| validate_balances | all gates | 独立核查质量、相关元素、游离相变反应水、WIP向量、FG期初期末退货、毛发运、各包装组件及真实物种。生产FG合并门须在明确不确定性及内部抵消下相符。不能残差拟合气体或额外Q。 | `ilcd-handbook-2010`; `lyb-film-extrusion` |
| validate_reporting | data production | report_once前须原始协议、完整状态阶段覆盖、真实换算及逐交换分配。Q零保留负荷无单位结果。真实物种、供回状态、继承历史、供方缺失或未解实物闭合使数值包不完整。工程检查不证明工厂值、科学翻译批准、接受映射或发布。 | `ilcd-handbook-2010`; `lyb-lupolen-2420k` |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 匹配LDPE平膜及经核对供方；关联制造首次放行与独立原批次FG服务，不重复继承生产 |
| allowed_use | 真实有限无添加剂风冷单层LDPE冷刀平幅剖切配置及完整记录 |
| excluded_use | 整个分类叶覆盖; 仅千克功能等价; 示例树脂医疗药品用途; 未知数量物种计零; 自动再生抵扣或方法批准 |
| required_metadata | LDPE牌号及整份供货配方; 原生未添加助剂粒料状态; 允许的同配方内部回料及历史; 单层非泡沫未增强无衬托结构; 非自粘未印刷未处理表面; 环形模头风冷吹膜及冷刀平幅剖切; 幅宽及净厚度公差; 卷净质量及纸芯包膜皮重; 真实光学力学验收及用途限制; 唯一首次放行及冲销关联; 报告期及地域; 供电电压供方边界; 真实干燥冷却配置; 原料/WIP/FG批次质量及继承每流向量; 真实物种废物去向; 每种包装组件及复用历史; 独立FG服务截止点 |
| required_quality_disclosure | 测量不确定性; 数据时效地域; 供方兼容; 未解交换; WIP/FG继承向量; 全部实物组件闭合; 服务截止及留库FG后续负荷; 分配证据敏感性; 方法复核状态 |
| update_trigger | 牌号配方、外购再生投入、层数表面路线冷却、尺寸试验、供方电压年份、物种治理、包装复用、放行服务门或分配证据变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| lyb-film-extrusion | handbook | LyondellBasell, A Guide to Polyolefin Film Extrusion, complete 42-page PDF; printed 6047/1004, PDF metadata 2015. https://www.lyondellbasell.com/globalassets/lyb/our-solutions/products/documents/polymers-technical-literature/A_Guide_to_Polyolefin_Film_Extrusion.pdf | 印刷页9–15及19–30：输送、电热熔融过滤模头、吹塑流延共挤分支、风冷收卷回料开停机清机。通用技术，不是工厂配方能耗收率或LCA分配。 |
| lyb-lupolen-2420k | literature | LyondellBasell, Lupolen2420K Technical Data Sheet, 15 October2026, pp.1–3. https://productsafety.lyondellbasell.com/DirectRequest?ProductGuid=79326e74-b73c-4977-9f56-b9e12367c004&ResponseTypeGuid=f1e32c20-d810-4db0-b25e-8e23a59f3733 | 示例无添加剂粒料供货、吹膜适用、医疗药品排除、试样典型值限制、降解及结露条件干燥仓储，不是通用数字或同厂证据。 |
| polystar-monolayer-flat-film | extension_guidance | POLYSTAR, Advantages of Using Monolayer Blown Film Machines for Plastic Packaging, undated official article; snapshot16 October2026. https://www.polystarco.com/blog-detail/advantages-of-using-monolayer-blown-film-machines-for-plastic-packaging/ | 独立设备能力：冷刀及背靠背收卷形成两平幅卷。热刀重封筒膜及混配助剂再生能力为相邻排除，不是本配方，不声称产能能耗订单。 |
| ilcd-handbook-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, first edition March2010, §§7.9.2–7.9.3, printed pp.255–272 (PDF275–292). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 有限归因层级：细分虚拟细分、逐交换决定性物理因果关系、剩余真实共同门市场价值及逐交换守恒。库存向量、单次归一化及组件公式为明确PCR核算要求，不是ILCD原文公式，不证明完整符合或默认寿命末规则。 |
