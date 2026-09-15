---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.other-tubes-and-pipes-of-circular-cross-section-welded-of-steel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他圆形截面钢制焊接管

## 1. 范围与适用性

本 PCR 适用于成品横截面为圆形、纵向或螺旋接缝采用焊接方式闭合的钢制管材，但不包括以石油或天然气输送为定义用途的管线管，也不包括油气井套管和油管。范围涵盖非合金钢、合金钢和不锈钢制品，其出厂状态可为未涂覆或已声明涂层状态。无缝管、非圆形截面、开口接缝或铆接制品、管件以及上游钢卷制造不属于本产品边界。

前景门到门系统从有记录的钢卷进入制管厂开始，到合格钢管准备离厂结束。成形和焊缝焊接为必需过程。酸洗、热处理、药芯焊丝电弧焊及金属镀层仅在申报产品实际采用时纳入。数据包必须说明钢种、尺寸、焊接技术、表面状态、热处理状态、涂层和生产地理范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.other-tubes-and-pipes-of-circular-cross-section-welded-of-steel |
| classification_refs | CPC 3.0: 41287（分类语境；映射接受由独立治理流程管理） |
| covered_products | 除油气管线管及油气井套管和油管外，非合金钢、合金钢或不锈钢制圆形截面纵缝或螺旋缝焊接管 |
| excluded_products | 无缝管；非圆形钢管或空心型材；开口接缝、铆接或类似闭合管；油气管线管；油气井套管和油管；管件；上游炼钢和钢卷生产 |
| representative_product | 按质量供应的制管厂成品圆形焊接钢管 |
| production_route | 钢卷准备、边缘成形、圆形成形、焊缝焊接、定径、切割、检验及已声明的条件性精整 |
| market_state | 制管厂门口的合格钢管，声明涂层、热处理状态、端部加工、尺寸和钢种 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 满足已声明尺寸、钢种、焊接、表面和检验要求的圆形截面焊接钢管 |
| How much | 1 kg 合格钢管净质量 |
| How well | 符合生产者声明的产品规范和验收试验，不合格材料不计入合格产出 |
| How long or cycle | 一个生产批次；制管厂门到门边界不规定使用寿命 |
| reference_flow_link | 由跨越制管厂边界的合格钢管质量实现功能单位 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 钢管和空心型材 `370d14a6-55f3-4fdd-90b2-84751125ff00` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 钢种和合金类别；外径；壁厚；长度；纵向或螺旋接缝；焊接技术；热处理状态；表面和涂层状态；端部加工；适用产品规范；检验验收依据；生产地理范围和时期 |

构建前景数据包时，所有必需限定信息必须在元数据、参考流备注或等效产品说明字段中声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 完成规定精整后使用经校准秤具测定产品净质量；托盘、包装、垫料、试样和不合格管不得计入。 |
| `length_to_mass` | 以长度记录的生产数据 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅可使用有记录的实测单位长度质量，或采用已声明外径、壁厚和钢种密度的几何计算将长度换算为质量；保留换算依据。 |
| `energy_preservation` | 外购电力和燃料 | Net calorific value | MJ | 保留供应商或仪表原始单位及换算系数；不得合并电力和燃料。气态天然气体积必须同时记录参考温度和压力。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 钢卷进入制管厂时已声明钢种、质量、尺寸、涂层状态、供应商数据集和运输交接点 |
| starting_condition_role | 上游钢生产由供应商特定或其他合理的钢卷数据集表示；前景从制管厂接收开始 |
| product_classification_scope | 第 1、2 节所述语义边界内的圆形截面焊接钢管 |
| recursive_input_rule | 已符合本成品钢管类别的外购投入不再按钢卷重新建模；应作为同类别上游产品及其数据集记录，并披露外购原因 |
| upstream_dataset_requirement | 上游数据集应尽可能匹配钢种类别、钢卷产品状态、涂层状态、生产地理范围和时间时期 |
| disclosure | 声明已纳入工序、外包步骤、焊接路线、热处理、酸洗、镀锌或其他涂层、再生含量核算以及每项废物的处理去向 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景制管厂系统 | 纳入钢卷准备、成形、焊缝焊接、定径、切割、检验、内部物料搬运，以及这些工序直接废物和排放的场内处理；实际进行时纳入条件性精整。 | `eu-fmp-bref-2022` |
| `boundary_upstream` | 外购产品和能源 | 每项外购物料和能源投入均应链接前景门到门清单之外的上游数据集；不得把上游排放计作制管厂直接排放。 |  |
| `boundary_conditional_routes` | 酸洗、热处理、电弧焊耗材和镀锌 | 仅在生产记录表明申报参考产品实际采用时纳入各路线，并保持其交换项相互独立。 | `eu-fmp-bref-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `forming_welding` | 钢卷准备、成形、焊接、定径、切割和检验 | `required` | 始终纳入 | 前景钢管制造 | 合格钢管产出 kg |
| `acid_pickling` | 盐酸酸洗、漂洗和中和 | `conditional` | 采用盐酸酸洗去除氧化皮或进行表面准备时纳入 | 条件性表面准备 | 离开酸洗工序的钢管 kg |
| `hot_dip_galvanizing` | 热浸镀锌 | `conditional` | 申报市场状态包含场内热浸锌涂层时纳入 | 条件性防护涂层 | 镀层合格钢管 kg |

### 过程：钢卷准备、成形、焊接、定径、切割和检验（`forming_welding`）

#### 输入

##### 产品流

###### 热轧钢卷原料（`fw_hot_rolled_steel_coil`）

记录进入申报产品生产批次的称量热轧钢卷。

- 选定流：热轧钢卷 `4f1a1835-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：分配至申报产品批次的实测钢卷净投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格钢管产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_welding`
- 来源：

###### 外购交流电（`fw_electricity`）

记录纳入的成形焊接生产线所消耗的计量交流电。

- 选定流：交流电 `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- 流属性/单位：Net calorific value / MJ
- 数量规则：申报批次的计量电力，并保留仪表单位换算记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格钢管产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_welding`
- 来源：

###### 工艺用水（`fw_process_water`）

记录跨越设施边界并直接用于本生产线冷却、漂洗或试验的补充工艺用水；内部循环水不得重复计算。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：归属于申报批次的计量补充工艺用水或质量换算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格钢管产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_welding`
- 来源：

###### 气态天然气（`fw_natural_gas`）

仅在纳入的热处理、干燥或其他有记录热工操作直接消耗天然气时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：有记录参考条件下的计量气体体积；仅当没有为该批次服务的纳入燃气工序时可记为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格钢管产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_welding`
- 来源：

###### 药芯焊丝（`fw_flux_cored_wire`）

仅在有记录的药芯焊丝电弧焊焊缝或修补工序中记录；无填充材料的电阻焊或感应焊不适用。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：申报批次领用称量值减去有记录退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格钢管产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_welding`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格焊接钢管（`fw_steel_pipe`）

仅记录通过已声明检验和规范验收条件的钢管。

- 选定流：钢管和空心型材 `370d14a6-55f3-4fdd-90b2-84751125ff00`
- 流属性/单位：Mass / kg
- 数量规则：制管厂门口合格钢管实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_welding`
- 来源：

##### 废物流

###### 生产后钢废料（`fw_post_industrial_steel_scrap`）

记录以前景系统废钢身份离开的切头、切边和不合格钢材；场内回用或直接再利用未跨越本边界。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：转移出前景系统的称量废钢
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格钢管产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_welding`
- 来源：

##### 基本流

###### 直接化石源二氧化碳（`fw_carbon_dioxide_fossil`）

仅记录纳入的场内天然气燃烧产生的直接化石源二氧化碳；不包括电力和燃料供应上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟气测量值，或使用已披露燃烧因子和氧化依据根据燃料记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格钢管产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_forming_welding`
- 来源：

### 过程：盐酸酸洗、漂洗和中和（`acid_pickling`）

#### 输入

##### 产品流

###### 30% 盐酸溶液（`pk_hydrochloric_acid_30`）

记录补充到酸洗线的新鲜 30% 盐酸溶液；不同供应浓度必须使用不同流身份，或明确记录浓度换算。

- 选定流：盐酸 `56414d25-a353-4d67-b362-87212ce6011d`
- 流属性/单位：Mass / kg
- 数量规则：归属于申报批次的实测交付溶液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 离开酸洗工序的钢管
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling`
- 来源：`eu-fmp-bref-2022`

###### 酸洗漂洗用水（`pk_process_water`）

记录进入酸洗漂洗阶段的补充工艺用水，不包括内部循环水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：归属于申报批次的计量补充水或质量换算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开酸洗工序的钢管
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling`
- 来源：`eu-fmp-bref-2022`

###### 氢氧化钠（`pk_sodium_hydroxide`）

仅在场内向酸洗废液或漂洗水加入氢氧化钠并在前景边界内中和时记录。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：实测产品质量，并披露溶液浓度和干基换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开酸洗工序的钢管
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废盐酸酸洗液（`pk_spent_hydrochloric_pickling_liquor`）

当含溶解铁和夹带氧化皮的废盐酸酸洗液离开前景系统进行回收或处理时记录。由于未找到精确化学状态候选项，Tiangong UUID 仍未解决。

- 选定流：废盐酸酸洗液
- 流属性/单位：Mass / kg
- 数量规则：送往场外的称量废液，或使用体积和密度换算的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开酸洗工序的钢管
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling`
- 来源：`eu-fmp-bref-2022`

##### 基本流

### 过程：热浸镀锌（`hot_dip_galvanizing`）

#### 输入

##### 产品流

###### 特高纯锌金属（`gv_zinc_metal`）

记录加入镀锌浴并通过锌浴库存平衡归属于申报镀锌管批次的锌金属。

- 选定流：特高纯锌金属 `2d8ff1bd-e128-4c74-a99d-b8734c99bbd2`
- 流属性/单位：Mass / kg
- 数量规则：锌入库加期初库存，减期末库存和单独计量残渣，并分配至申报批次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 镀层合格钢管产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_galvanizing`
- 来源：`eu-fmp-bref-2022`

###### 镀锌工艺用水（`gv_process_water`）

记录为镀锌管服务的场内清洗、漂洗或冷却阶段使用的补充工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：归属于申报批次的计量补充水或质量换算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 镀层合格钢管产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_galvanizing`
- 来源：`eu-fmp-bref-2022`

###### 镀锌天然气（`gv_natural_gas`）

记录镀锌锅或相关纳入干燥阶段直接消耗的气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：归属于申报批次、在有记录参考条件下的计量气体体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 镀层合格钢管产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_galvanizing`
- 来源：`eu-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 镀锌直接化石源二氧化碳（`gv_carbon_dioxide_fossil`）

仅记录纳入镀锌过程天然气燃烧产生的直接化石源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟气测量值，或使用已披露燃烧因子和氧化依据根据燃料记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 镀层合格钢管产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_galvanizing`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 共用生产线和公用工程 | 优先按批次、生产线或仪表细分。仅在记录无法细分的原因后分配剩余共用数量。 |  |
| `allocation_residual` | 剩余共用投入和排放 | 按实测运行时间、加工质量或计量需求等因果物理驱动因素分配；除非不存在合理物理关系并披露例外，否则不得使用收入分配。 |  |
| `allocation_scrap` | 生产后钢废料 | 分别报告废钢数量和去向。一致采用研究所声明的回收方法，不得同时对同一废钢计入避免原生钢的收益和再生含量收益。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_forming_welding` | `forming_welding` | 物料、公用工程、产出、废钢和直接 CO2 | 生产、秤量、仪表、发票和检验记录 | 钢卷质量；电力；用水；气体体积及参考条件；焊丝领用和退料；合格管质量；废钢质量；燃料因子；直接 CO2 | 将批次记录与生产线仪表、经校准秤具和合格产出记录核对 | kg, MJ, m3 | 每批次，按月汇总 | 具有代表性的连续 12 个月，或覆盖较短申报生产期的全部批次 | 服务于申报生产线的全部设备，共用服务须明确分配 | 汇总各原子交换并除以合格钢管净质量 | 校准记录、仪表核对、库存平衡、不合格品日志和主管批准 |
| `cp_pickling` | `acid_pickling` | 酸、水、中和剂和废酸洗液 | 交付、槽体、仪表、批次和废物转移记录 | 溶液质量和浓度；水质量或体积；氢氧化钠质量和浓度；废液质量或体积和密度 | 按批次核对槽体库存、收货、实测添加量和场外转移 | kg | 每次换槽和每批次，按月汇总 | 与钢管批次相同的时期 | 服务于申报产品的全部酸洗和漂洗阶段 | 计算新鲜投入净量和外送废液量，再除以离开酸洗的钢管质量 | 浓度证书、经校准槽体或秤量记录、密度方法和转移联单 |
| `cp_galvanizing` | `hot_dip_galvanizing` | 锌、水、气体和直接 CO2 | 库存、采购、仪表、生产和排放因子记录 | 锌收货和库存；锌残渣；用水；气体体积及参考条件；镀层产出；燃料因子；直接 CO2 | 将锌浴金属和公用工程仪表与镀层钢管批次核对 | kg, m3 | 每批次，按月汇总 | 与镀层钢管批次相同的时期 | 服务于申报产品的镀锌阶段 | 计算每单位镀层产出质量的净锌及各项公用工程或排放 | 锌浴盘点、认证秤具、仪表校准、残渣记录和因子来源 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | 每项清单行 | 归一化数量 = 批次交换量 / 适用过程合格产出的净质量 | 原子交换量；合格产出质量 | 每 kg 适用产出的数量 |  |
| `calc_water_mass` | 按体积记录的水 | 水质量 = 计量体积 × 记录条件下的实测或合理密度；保留体积和密度 | 水体积；密度 | kg 工艺用水 |  |
| `calc_direct_co2` | 天然气直接燃烧 | 直接化石源 CO2 = 记录的气体活动量 × 已披露燃料特定因子 × 氧化比例；不得加入上游供应链 CO2 | 气体活动量；因子；氧化比例 | kg 直接化石源 CO2 |  |
| `calc_zinc_balance` | 镀锌锌投入 | 归属净锌量 = 收货 + 期初锌浴库存 - 期末锌浴库存 - 单独计量残渣，并披露批次分配方法 | 锌收货；库存；残渣；批次分配驱动因素 | kg 锌金属 | `eu-fmp-bref-2022` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 必须记录钢种、尺寸、接缝方向、焊接技术、热处理、涂层、端部加工、验收规范、地理范围和时期。 | 产品规范、生产工单和检验放行记录 |
| `dq_mass_balance` | 含钢流 | 核对钢卷投入与合格管、废钢、试样、在制品变化及其他单独识别钢产出；调查物料不平衡。 | 签署的批次质量平衡和秤具校准 |
| `dq_completeness` | 所有纳入过程 | 纳入记录至少覆盖实测投入质量和实测能源的 95%；逐项列出被排除流并说明理由。 | 完整性计算和排除登记表 |
| `dq_temporal` | 前景数据 | 优先采用连续 12 个月；如时期更短，应覆盖所有批次并披露季节性、停机和异常生产。 | 带日期记录和代表性说明 |
| `dq_conditional_routes` | 条件性过程和流 | 对酸洗、热处理、药芯焊丝和镀锌明确记录存在或不存在；不得隐含路线适用性。 | 工艺路线单和物料清单 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考流 | 缺少任何必需产品限定信息，或产品属于无缝、非圆形、开口接缝/铆接、油气管线管或油气井套管/油管时，校验失败。 | `unsd-cpc-3-0-2025` |
| `validate_reference_amount` | 参考产品 | 确认归一化合格“钢管和空心型材”产出等于 1 kg，并使用规定 Mass 属性和质量单位组。 |  |
| `validate_inventory_balance` | 含钢流 | 要求有记录的钢卷到产出质量平衡，并解释在制品变化和每项物料差异。 |  |
| `validate_direct_emissions` | 化石源二氧化碳 | 确认直接 CO2 仅含场内燃烧，排除电力和燃料供应上游排放。 |  |
| `validate_conditional_processes` | 酸洗和镀锌 | 路线存在时纳入详细过程及其原子交换；否则记录不适用，且不得插入零值代理交换。 | `eu-fmp-bref-2022` |
| `validate_unresolved_uuid` | 废酸洗液 | 在审计到精确的公开 state-100 化学状态身份前保持 UUID 为空；不得用普通废酸替代。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 圆形焊接钢管制造前景生产数据集 |
| downstream_use | `secondary_dataset`；经独立审查并通过发布就绪检查后可作为 `background_dataset` |
| allowed_use | 当钢种、尺寸、焊接路线、涂层状态、地理范围、时期和分配方法相容时，用于产品碳足迹、生命周期评价、采购比较和下游产品建模 |
| excluded_use | 无缝管、非圆形空心型材、油气管线管、油气井套管或油管、管件，或未链接上游钢和能源数据集的炼钢摇篮到大门数据集 |
| required_metadata | 所有参考流限定信息；场址和时期；纳入及外包过程；供应商数据集选择；路线决定；再生含量及回收方法；分配；截断；数据质量；未解决 UUID 披露 |
| required_quality_disclosure | 仪表和秤量覆盖率、质量平衡结果、完整性结果、时间代表性、技术代表性、来源和因子出处以及物料排除项 |
| update_trigger | 钢种组合、钢卷供应商、焊接技术、产品尺寸、热处理、涂层路线、能源供应、过程效率、废物去向、分配方法或代表性时期发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | 联合国统计司，《CPC 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-04） | 原文核验 CPC 41287 产品身份，并与相邻无缝管、管线管、套管/油管、非圆形管和其他闭合方式类别区分 |
| `eu-fmp-bref-2022` | `official_guidance` | 欧盟委员会联合研究中心，《黑色金属加工业最佳可行技术参考文件》页面及 2022 年 12 月采纳的 BREF，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/ferrous-metals-processing-industry（检索日期：2026-09-04） | 原文核验下游黑色金属加工、表面准备、酸洗、漂洗、精整及条件性热浸镀锌过程分解；未据此推断经验数量范围 |
