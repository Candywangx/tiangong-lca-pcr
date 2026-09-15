---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-of-goods-of-subclass-48313
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 子类48313所列货物的零件

## 1. 范围与适用性

本 PCR 适用于作为独立货物供应的眼镜、护目镜或类似眼用制品框架及装配件的零件。零件必须能够按其在框架或装配件中的功能加以识别，例如镜腿、鼻梁、镜圈组件、桩头、鼻托臂、铰链组件，或其他未完成或已完成的框架/装配件组件。CPC 3.0 正式结构确定了其上位货物及零件关系（`un-cpc-3-0-structure-2025`）。

本 PCR 的前景边界为从采购的、规格受控的材料坯料和消耗品开始，涵盖制造场址内的成形、机械加工、适用时的连接、清洗、适用时的表面精饰、检验和包装，直至工厂门。材料生产、采购组件生产、发电、供水及场外处理分别保留为上游或下游关联数据集。

完整框架或装配件、完整眼镜或护目镜、眼科镜片、未声明框架零件功能而仅作为普通橡胶或塑料制品供应的鼻托、零售镜盒、修理服务及生产设备不在本 PCR 范围内。若某一材料或技术没有对应的清单卡片，前景数据包必须为实际交换新增一个具体原子行，不得以笼统的材料或公用工程行代替。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-of-goods-of-subclass-48313 |
| classification_refs | CPC 3.0：48352，子类48313所列货物的零件 |
| covered_products | 作为独立货物供应、且声明用于眼镜、护目镜或类似眼用制品框架或装配件的组件 |
| excluded_products | 完整框架或装配件；完整眼镜或护目镜；光学镜片；镜盒；修理服务；未分化材料坯料 |
| representative_product | 合格的成品镜腿、鼻梁、镜圈组件、桩头、鼻托臂、铰链组件或其他已声明的框架/装配件零件 |
| production_route | 规格受控的聚合物或金属坯料成形或机械加工，并按路线实施清洗、连接、抛光、涂装、检验和包装 |
| market_state | 工厂门处作为独立货物供应的已完成或半成品框架/装配件零件；产品净质量不含包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供在眼镜、护目镜或类似眼用制品框架或装配件中履行所声明结构、连接、定位或佩戴功能的合格零件 |
| How much | 工厂门处 1 kg 合格成品零件净质量 |
| How well | 满足所声明图纸、尺寸与公差、材料与牌号、表面精饰、适用时的涂层规格及检验接收准则 |
| How long or cycle | 一个已完成制造批次；本 PCR 不主张使用寿命，使用寿命只能在下游装配产品研究中另行声明 |
| reference_flow_link | 输出行 `finished_frame_part` 为定量参考并等于 1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净质量 |
| 参考产品流 | 眼镜或护目镜框架及装配件的零件 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件类型及框架功能；材料族、成分及牌号；已完成或半成品状态；图纸或规格标识；尺寸与公差；表面精饰及涂层；连接路线；净质量及质量测定方法；制造地域及技术；批次及时间范围；包装纳入状态 |

构建前景数据包时，必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明全部必需限定信息。缺失任一限定信息即视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | `finished_frame_part` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在所有已纳入精饰步骤完成后、包装前测定已接收成品零件的净质量；不含纸箱、隔片、托盘、工装及不合格零件。 |
| `count_to_mass` | 以件数报告的产品和包装记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用同期、同一零件或包装规格的代表性称重样本平均质量换算件数；保留件数、样本量、称重结果和换算过程。 |
| `electricity_energy` | `electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表 kWh 原始值，并按每 kWh 恰好 3.6 MJ 换算；披露电表边界及共用电表的任何分配。 |
| `water_mass` | `process_water` 和 `finishing_wastewater` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先使用直接质量记录；若计量体积，则使用记录条件下的实测密度或有文件依据的水密度假设换算，并保留原始体积。 |
| `mass_normalization` | 每个质量型清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg 参考流 | 将批次数量归一化到 1 kg 合格 `finished_frame_part`；分母不含不合格品或包装质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址接收边界处的采购材料坯料、采购组件、化学品、水、电力和包装；每项均按成分或规格及供应状态识别 |
| starting_condition_role | 前景进入条件；上游生产和交付使用关联数据集表示，不在前景过程中重复建模 |
| product_classification_scope | CPC 48313 所列框架及装配件的零件；完整框架、完整眼用制品、镜片和无关通用制品不属于产品输出范围 |
| recursive_input_rule | 若采购的同类别零件被装入输出产品，必须将其作为独立具体产品输入记录，并提供供应商身份和上游数据集；不得将其并入参考产品，也不得在本前景模型中递归重复制造 |
| upstream_dataset_requirement | 每个采购产品投入和能源投入均应关联在地域、技术、成分和供应状态方面具有代表性的上游数据集；披露代理数据及未匹配的材料牌号 |
| disclosure | 声明零件类型、物料清单、材料牌号、采购组件含量、已纳入工序、表面处理和涂装路线、场址公用工程、废气和废水控制、废料去向、包装、地域、技术、批次时段以及任何共用设施分配 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_product_scope` | 产品输出身份 | 参考输出必须是作为独立货物供应的框架或装配件零件，不得是完整框架、完整眼镜或护目镜，也不得是光学镜片。 | `un-cpc-3-0-structure-2025` |
| `sb_gate_to_gate` | 前景制造边界 | 纳入针对所声明生产批次在场址内实施的全部成形、机械加工、连接、清洗、抛光、表面精饰、检验、返工、内部物料搬运、公用工程使用、直接排放、废物产生和包装。 |  |
| `sb_upstream_links` | 采购投入 | 不在前景过程中纳入采购材料、组件、化学品、电力、水和包装的生产，而通过具有代表性的上游数据集连接。 |  |
| `sb_direct_releases` | 直接排放和废物 | 在场外处理前记录直接废气排放、含水废物、分类收集的边角料、金属废料和不合格零件；不得以购电上游排放剖面替代直接交换。 |  |
| `sb_capital_goods` | 基础设施和工装 | 默认排除建筑物、耐用机械、模具和可重复使用夹具；若研究目标明确纳入，则必须单独报告该项纳入。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `frame_part_manufacturing` | 框架或装配件零件制造 | `required` | 始终纳入从接收坯料到未包装合格零件的所有已实施工序；路线特定流卡仅在使用其所指材料或工序时适用 | 前景成形、机械加工、清洗、连接、抛光和精饰 | 转入检验包装过程的未包装合格零件 kg |
| `inspection_packaging` | 最终检验和包装 | `required` | 始终纳入报告场址的最终接收、返工处置记录和包装 | 前景产品放行及工厂门包装 | 1 kg 合格成品零件输出 |

### 过程：框架或装配件零件制造（`frame_part_manufacturing`）

#### 输入

##### 产品流

###### 醋酸纤维素板材坯料（`cellulose_acetate_sheet`）

仅当路线将醋酸纤维素板材切割或加工成所声明框架或装配件零件时记录本交换。保留材料成分、增塑剂体系、颜色、厚度、供应商和再生含量。

- 选定流：醋酸纤维素板材
- 流属性/单位：Mass / kg
- 数量规则：净领用质量减去经核实未改变板材坯料退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格 `finished_frame_part`
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_stock`

###### 不锈钢丝坯料（`stainless_steel_wire`）

仅当所声明零件由不锈钢丝成形或加工时记录本交换。保留合金牌号、直径、状态、供应商及再生含量声明；不得以非合金或低合金钢丝代替。

- 选定流：不锈钢丝
- 流属性/单位：Mass / kg
- 数量规则：净领用质量减去经核实未改变钢丝坯料退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格 `finished_frame_part`
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_stock`

###### 采购电力（`electricity`）

记录为成形、机械加工、连接、清洗、抛光、精饰、通风及可归属辅助设备跨越制造电表边界交付的电力。上游发电排放不是本过程的直接基本流输出。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于生产批次并按 `electricity_energy` 换算的计量电力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格 `finished_frame_part`
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_electricity`

###### 工艺用水（`process_water`）

仅当工艺用水为清洗、漂洗、冷却、抛光或配槽而跨越制造边界时记录。闭路循环水不得重复计数，只有补充水跨越边界。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：归属于生产批次的实测补充水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格 `finished_frame_part`
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`

###### 碱性清洗用氢氧化钠（`sodium_hydroxide`）

仅当氢氧化钠投入用于所声明零件的碱性清洗或表面处理槽时记录。保留产品浓度，并以溶液质量和浓度计算无水氢氧化钠质量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：归属于该批次的配槽和补加物中无水氢氧化钠质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格 `finished_frame_part`
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_bath_chemicals`

###### 丙烯酸清漆涂层（`acrylic_varnish`）

仅对使用该特定产品族涂装的零件记录丙烯酸清漆。保留配方、不挥发分、施涂和固化路线、相关时的颜色、供应商及退回或回收清漆。

- 选定流：丙烯酸清漆 `56a0ef1c-80ef-4e0c-b690-c8aefb4c7e8e`
- 流属性/单位：Mass / kg
- 数量规则：扣除经核实退回量后的涂装工序清漆净领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格 `finished_frame_part`
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_material`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未包装合格框架或装配件零件（`unpacked_frame_part_output`）

记录从制造转入最终检验和包装的合格零件净质量。本行是前景内部转移，在计入任何有记录的转移损失后必须与 `inspection_packaging` 的对应输入相等。

- 选定流：未包装合格框架或装配件零件
- 流属性/单位：Mass / kg
- 数量规则：转入最终检验和包装的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格 `finished_frame_part`
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_transfer`

##### 废物流

###### 醋酸纤维素边角料（`cellulose_acetate_offcuts`）

使用醋酸纤维素路线时，分别记录清洁或受污染的醋酸纤维素边角料。不得与金属废料、不合格品、废水或包装废物合并。

- 选定流：醋酸纤维素边角料
- 流属性/单位：Mass / kg
- 数量规则：离开前景制造过程的实测边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格 `finished_frame_part`
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_measurements`

###### 不锈钢制造废料（`stainless_steel_scrap`）

使用不锈钢路线时，记录按牌号分类的不锈钢废料。保留合金牌号、污染状态、内部回用量和去向；不得将本行与其他金属废料混合。

- 选定流：不锈钢制造废料
- 流属性/单位：Mass / kg
- 数量规则：扣除经核实内部回用量后离开前景过程的不锈钢废料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格 `finished_frame_part`
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_measurements`

###### 含悬浮物的金属精饰废水（`finishing_wastewater`）

仅当清洗、漂洗、抛光或金属精饰产生跨越场址边界或进入场内处理的废水流时记录本含水废物。保留水质量、悬浮物浓度、适用时的溶解金属数据、处理路线及排放或转移点。

- 选定流：含悬浮物的金属精饰废水
- 流属性/单位：Mass / kg
- 数量规则：转入场内或场外处理的废水实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格 `finished_frame_part`
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`

##### 基本流

###### 排放到空气的非甲烷挥发性有机化合物（`nmvoc_to_air`）

仅在使用丙烯酸清漆路线时记录施涂和固化直接释放的 NMVOC。使用场址测量值或有完整记录的溶剂质量平衡计算；排除上游发电和涂料生产排放。

- 选定流：非甲烷挥发性有机化合物 `08a91e70-3ddc-11dd-a302-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：根据采集的场址测量或涂装记录计算直接排放到空气的 NMVOC 质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格 `finished_frame_part`
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`

###### 排放到空气的 PM2.5（`pm25_to_air`）

仅当切割、机械加工或抛光在末端控制后产生经测量或计算的直接排放时记录 PM2.5。保留材料成分、排放点、控制设备和测量基准。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：根据采集的测量值计算末端控制后直接排放到空气的 PM2.5 质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格 `finished_frame_part`
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`

### 过程：最终检验和包装（`inspection_packaging`）

#### 输入

##### 产品流

###### 未包装合格框架或装配件零件（`unpacked_frame_part_input`）

记录从 `frame_part_manufacturing` 接收的净质量。本内部转移在计入任何单独记录的转移损失后必须与 `unpacked_frame_part_output` 相符。

- 选定流：未包装合格框架或装配件零件
- 流属性/单位：Mass / kg
- 数量规则：进入最终检验和包装的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格 `finished_frame_part`
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_transfer`

###### 瓦楞纸箱（`corrugated_board_boxes`）

记录与参考产品一同离开工厂的瓦楞纸箱。保留纸箱等级、再生含量、尺寸、供应商、适用时的重复使用次数以及实测或抽样质量。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：随该批次发运的瓦楞纸箱实测质量或由件数换算的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格 `finished_frame_part`
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成品框架或装配件零件（`finished_frame_part`）

这是最终接收后离开工厂门的参考产品。产品流 UUID 仍未解决，因为已审计的公开候选流表示完整框架或完整眼镜，而不是组件零件。

- 选定流：眼镜或护目镜框架及装配件的零件
- 流属性/单位：Mass / kg
- 数量规则：归一化数据集中恰好 1 kg 合格成品零件净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 合格成品框架或装配件零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_finished_product`

##### 废物流

###### 不合格框架或装配件零件（`rejected_frame_part`）

记录最终检验不合格并离开前景过程进入回收、处理或处置的零件。返回制造过程的返工零件属于内部转移，除非最终报废，否则不得再次计为废物。

- 选定流：不合格框架或装配件零件
- 流属性/单位：Mass / kg
- 数量规则：离开前景过程的最终不合格零件实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格 `finished_frame_part`
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rejects`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共用和多输出工序 | 在可行时通过分别计量产品特定的成形、精饰、检验、返工、废物和包装工序来避免分配。 |  |
| `allocation_causal` | 无法避免的共用公用工程或过程记录 | 使用反映因果关系且有文件记录的物理驱动量；适用时依次优先采用机器时间及额定或实测功率、处理表面积、槽液处理量、结合已核实零件质量的检验件数，最后采用合格产品净质量。 |  |
| `allocation_scrap` | 边角料和金属废料 | 废料离开前景边界时作为废物输出报告。不得在本门到门数据集中扣除废料收入或原生材料避免负担；任何回收替代均属于口径一致的下游系统模型。 |  |
| `allocation_rework` | 返工回路 | 将实测返工投入和废物归入产生不符合项的批次；不得将内部返工质量计为第二次产品输出。 |  |
| `allocation_documentation` | 每个已分配行 | 保留共用总量、分配总体、驱动量数值、公式、所得系数以及与原始记录的核对。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_stock` | `frame_part_manufacturing` | `cellulose_acetate_sheet`; `stainless_steel_wire` | 采购、领用、退回和库存记录 | 材料身份；成分或牌号；供应商；批次；期初库存；收货；领用；未改变材料退回；期末库存；质量 | 将批次领用和退回与库存变动及生产订单核对 | kg | 每次领用及批次结束 | 完整报告批次及核对周期 | 制造所声明零件的全部生产线 | 净消耗质量等于领用减去未改变材料退回，并与库存核对；按合格产品质量归一化 | 发票；材料证书；校准秤记录；签署的库存核对 |
| `cp_electricity` | `frame_part_manufacturing` | `electricity` | 电表及生产工时记录 | 电表标识；起止读数；kWh；时间；生产订单；共用负荷；分配驱动量 | 读取专用电表，或用所声明因果驱动量分配已核对的共用电表 | kWh 和 MJ | 至少每班及批次结束 | 完整批次及共用电表核对周期 | 已纳入制造工序和可归属辅助设备 | 扣除有记录的非生产负荷，分配共用电量，将 kWh 换算为 MJ，并按合格质量归一化 | 电表校准；账单；抄表日志；分配工作表 |
| `cp_water` | `frame_part_manufacturing` | `process_water` | 水表、储罐或批次配槽记录 | 仪表或容器标识；体积或质量；密度依据；工序；批次；循环；补充量 | 仅计量跨越边界的补充水，并与槽液和漂洗记录核对 | kg 或 m3 | 每批或每日，并在批次结束核对 | 完整报告批次 | 已纳入的清洗、漂洗、冷却、抛光和配槽 | 必要时将体积换算为质量，分配共用水量，并按合格质量归一化 | 仪表或容器校准；批次表；密度记录；核对记录 |
| `cp_bath_chemicals` | `frame_part_manufacturing` | `sodium_hydroxide` | 配槽、分析、补加、领用和退回记录 | 产品身份；溶液质量；浓度；槽体标识；配槽；补加；退回；批次 | 将领用溶液与槽液记录核对并计算无水化学品质量 | kg 溶液及质量分数 | 每次配槽和补加 | 与报告批次重叠的完整槽液周期 | 用于所声明零件的槽体 | 无水 NaOH 质量等于净溶液质量乘以实测或供应商浓度；共槽时按槽液处理量分配 | 供应商证书；浓度试验；校准秤；槽液日志 |
| `cp_coating_material` | `frame_part_manufacturing` | `acrylic_varnish` | 涂料领用、退回、配方和施涂记录 | 产品身份；批次；领用质量；退回质量；不挥发分；施涂路线；被涂零件批次 | 称量领用和退回清漆并与涂装工序核对 | kg | 每个涂装批次 | 报告批次对应的完整涂装批次 | 用于所声明零件的涂装线 | 清漆净投入等于领用减去经核实未改变退回量；按合格质量归一化 | 供应商规格；秤校准；批次表；领退核对 |
| `cp_production_transfer` | `frame_part_manufacturing`; `inspection_packaging` | `unpacked_frame_part_output`; `unpacked_frame_part_input` | 生产订单转移记录 | 零件标识；批次；转移时合格状态；件数；抽样平均质量或直接质量；发送和接收时间 | 直接称量转移量，或按 `count_to_mass` 由件数换算，并核对两个过程 | kg | 每次转移 | 完整报告批次 | 制造与检验包装过程边界 | 汇总转移净质量并核对发送和接收记录 | 校准秤；抽样记录；签署的转移记录；差异调查 |
| `cp_waste_measurements` | `frame_part_manufacturing` | `cellulose_acetate_offcuts`; `stainless_steel_scrap` | 分类废物容器和转移记录 | 废物身份；材料或牌号；污染；容器皮重和毛重；内部回用；去向；批次 | 每项分类流离开前景过程前称重 | kg | 每次容器转移 | 完整报告批次 | 全部已纳入制造工序 | 扣除经核实内部回用量后按原子流汇总废物净质量，并按合格质量归一化 | 秤校准；照片或标签；转移单；回收商收据 |
| `cp_wastewater` | `frame_part_manufacturing` | `finishing_wastewater` | 储罐、排放和转移记录 | 来源工序；体积或质量；密度；悬浮物；适用时的溶解金属；处理路线；去向；日期；批次 | 计量进入场内处理、下水道或场外转移的废水，不重复计算循环量 | kg 及浓度单位 | 每次排放或转移 | 完整报告批次及重叠槽液周期 | 已纳入湿法工序 | 换算为质量，以有文件依据的处理量分配共用储罐，并按合格质量归一化 | 仪表或储罐校准；实验室结果；转移联单或排放记录；质量平衡核对 |
| `cp_air_emissions` | `frame_part_manufacturing` | `nmvoc_to_air`; `pm25_to_air` | 烟道或工作场所排气测试及运行记录，或有文件记录的物料平衡 | 污染物；浓度；气体流量；时长；涂料投入及溶剂分数；捕集和去除效率；运行小时；批次 | 优先使用代表性实测浓度和气体流量；无测量时方可使用有完整记录的涂料或颗粒物质量平衡 | kg 污染物 | 每次代表性测试及每批计算 | 测试代表报告技术，运行时间覆盖完整批次 | 归属于所声明零件的全部排放点 | 按 `calc_air_emissions` 计算污染物质量，核对控制设备及旁路，并按合格质量归一化 | 实验室报告；仪器校准；运行日志；控制设备记录；计算工作表 |
| `cp_packaging` | `inspection_packaging` | `corrugated_board_boxes` | 包装领用和发运记录 | 纸箱规格；供应商；件数；抽样或直接质量；重复使用次数；批次 | 称量纸箱，或对同一纸箱规格应用 `count_to_mass` | kg | 每个包装批次 | 完整报告批次 | 最终包装工序 | 汇总随产品发运的纸箱，调整有记录的重复使用分配，并按合格质量归一化 | 采购记录；纸箱规格；校准秤；抽样工作表 |
| `cp_finished_product` | `inspection_packaging` | `finished_frame_part` | 最终检验和发运放行记录 | 零件标识；批次；合格件数；净质量；规格；包装皮重；放行状态 | 包装前称量合格零件，或采用经验证的件数转质量换算 | kg | 每个放行批次 | 完整报告批次 | 最终接收边界 | 汇总合格产品净质量；将归一化参考输出设为恰好 1 kg | 校准秤；接收记录；抽样工作表；发运放行 |
| `cp_rejects` | `inspection_packaging` | `rejected_frame_part` | 检验处置和废物转移记录 | 零件标识；批次；不合格原因；件数；净质量；返工状态；去向 | 称量最终不合格零件，并将返工量与生产记录核对 | kg | 每次处置及批次结束 | 完整报告批次 | 最终检验及关联返工区域 | 仅汇总最终报废质量；排除成功返工；按合格质量归一化 | 检验记录；秤校准；返工核对；转移单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | 每个批次级清单数量 | 归一化数量 = 可归属批次数量 / `finished_frame_part` 合格净质量 | 可归属批次数量；合格产品净质量 | 每 1 kg 参考流的 kg、MJ 或污染物 kg |  |
| `calc_electricity_mj` | `electricity` | 电力 MJ = 电表 kWh × 3.6；归一化前应用有文件记录的共用电表分配 | kWh；分配驱动量和系数；合格产品净质量 | 每 1 kg 参考流的 MJ |  |
| `calc_water_mass` | `process_water`; `finishing_wastewater` | 无直接质量时，水流质量 = 实测体积 × 有文件记录的密度 | 实测体积；密度和状态 | 每 1 kg 参考流的 kg |  |
| `calc_dry_naoh` | `sodium_hydroxide` | 无水 NaOH 质量 = 净溶液质量 × NaOH 实测或供应商质量分数 | 领用溶液质量；未改变退回量；NaOH 质量分数 | 每 1 kg 参考流的无水 NaOH kg |  |
| `calc_air_emissions` | `nmvoc_to_air`; `pm25_to_air` | 采用测量时，释放质量 = 浓度 × 运行期间实际排气体积。采用获准的物料平衡时，释放质量 = 相关材料投入减去保留在产品中、作为废物收集、回收或销毁的质量，且每一项均须测量或有记录。 | 浓度；气体流量；时长；材料投入；保留、回收、废物和销毁分数；合格产品净质量 | 每 1 kg 参考流的污染物 kg |  |
| `calc_mass_reconciliation` | 制造批次 | 材料投入 = 合格和不合格产品质量 + 分别测量的废物和直接质量排放 + 有记录的库存变化，并在所声明测量不确定度范围内核对 | 原子材料投入；产品；废物；质量型排放；库存变化；不确定度 | 质量平衡核对说明及未解释差异 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 识别零件的框架/装配件功能，并证明其不是完整框架、完整眼用制品或镜片。 | 图纸或规格；物料清单；产品照片或目录；最终检验记录 |
| `dq_route_materials` | 物料清单 | 将每项跨越边界的材料和采购组件表示为独立原子交换。对上述未表示的路线材料新增具体行，绝不得映射到笼统材料行。 | 经核对的物料清单；采购和领用记录；供应商证书 |
| `dq_temporal` | 全部前景行 | 使用覆盖同一报告批次或有文件说明的代表性时段的记录；披露材料替代、停机、启动损失、返工批次和共用设施时段。 | 批次谱系；带日期记录；代表性说明 |
| `dq_completeness` | 质量和能源清单 | 将材料质量、合格输出、不合格品、废物、直接质量排放、电力和水与源记录核对；调查超出所声明仪器和抽样不确定度的未解释差异。 | 核对工作表；不确定度说明；纠正措施记录 |
| `dq_emission_identity` | 直接废气排放 | 保留污染物身份、接收环境、PM2.5 粒径、排放点、测量方法、控制状态和测试代表性。 | 测试报告；校准；烟道或排气点图；运行日志 |
| `dq_allocation` | 共用记录 | 使用第 7 节的分配层级，并保留原始总量和驱动量总体，使审查者能够复算每个系数。 | 电表总量；驱动量记录；公式；核对 |
| `dq_uuid_status` | 含 UUID 及未解决行 | 仅使用经审计且语义、流类型、属性和单位相符的 Tiangong state-100 UUID。参考产品及其他未解决身份保持 UUID 为空，直至核实完全匹配的公开记录。 | UUID 审计记录；未解决事项清单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | 参考流 | 确认 `finished_frame_part` 恰好为 1 kg 合格零件净质量，且不含包装、不合格品、完整框架或完整眼用制品。 |  |
| `validation_qualifiers` | 数据集元数据 | 若数据包缺少第 3 节列出的任何必需限定信息，则判定不通过。 |  |
| `validation_atomicity` | 过程清单 | 确认每项交换均为一个具体产品流、废物流或基本流；拒绝笼统材料、合并公用工程、合并废物和未指定排放。 |  |
| `validation_conditions` | 条件路线 | 确认发生所指路线时纳入各条件材料、化学品、废物和排放行；仅当路线确实不发生时方可缺省或明确标为不适用。 |  |
| `validation_internal_transfer` | `unpacked_frame_part_output`; `unpacked_frame_part_input` | 核对两个内部转移数量并解释任何实测损失，不得将该转移计为外部产品投入或输出。 |  |
| `validation_mass_balance` | 制造批次 | 重新计算 `calc_mass_reconciliation`；报告未解释差异和所声明测量不确定度，不得强行平衡。 |  |
| `validation_emissions` | `nmvoc_to_air`; `pm25_to_air` | 确认直接排放来自代表性前景测量或完整且有记录的物料平衡，且并非复制自上游能源数据集。 |  |
| `validation_allocation` | 共用过程记录 | 使用原始总量、驱动量总体、公式和系数复算每项分配，并确认分配量之和等于原始总量。 |  |
| `validation_sources` | 分类和外部证据 | 确认所引正式分类链接能够解析为所声明 CPC 身份；在满足两个独立来源规则前，将全部定量范围视为未解决。 | `un-cpc-3-0-structure-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查后可作为 `secondary_dataset` 或 `background_dataset` 发布的门到门前景生产数据集 |
| downstream_use | 眼镜、护目镜和类似眼用制品装配模型；框架或装配件生产模型；需要独立供应组件制造数据的供应链和产品足迹研究 |
| allowed_use | 用于所声明零件类型、材料牌号、几何、精饰、技术、地域和工厂门边界，或用于有明确理由的代表性匹配 |
| excluded_use | 完整框架、完整眼镜或护目镜、镜片、零售镜盒、修理服务、未新增原子交换的不同材料路线，以及本 PCR 未建模的使用阶段和寿命终止声明 |
| required_metadata | 规范 PCR id；产品和零件标识；框架功能；材料成分及牌号；图纸/规格；尺寸与公差；精饰/涂层；连接路线；净质量方法；物料清单；场址和地域；技术；时间和批次；上游数据集匹配；分配；废物去向；废气和废水控制；包装状态；未解决 UUID |
| required_quality_disclosure | 一手记录覆盖率；电表和秤校准；件数转质量抽样；质量核对及不确定度；共用资源分配；排放测量或质量平衡方法；数据缺口；代理；路线条件；代表性；审查状态 |
| update_trigger | 零件功能、材料族或牌号、几何、成形或连接技术、表面处理或涂层、末端控制、场址或电网地域、包装、分配驱动量、上游数据集匹配、精确 Tiangong 流身份发生变化，或获得足以建立经审查范围的新证据 |

## 11. 数据源

| 来源 id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC 第 3.0 版结构》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-07） | CPC 48313 与 CPC 48352 的正式英文身份及上位产品/零件关系 |
