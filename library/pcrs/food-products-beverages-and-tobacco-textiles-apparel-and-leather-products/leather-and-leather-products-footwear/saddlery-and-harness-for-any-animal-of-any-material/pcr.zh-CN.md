---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.saddlery-and-harness-for-any-animal-of-any-material
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 任何材料制的动物用鞍具和挽具

## 1. 范围与适用性

本 PCR 适用于马鞍、笼头、缰绳、头套、项圈、牵引带、挽具以及类似动物用具的工厂门生产，其主要功能为骑乘支承、动物控制、约束或载荷传递。覆盖皮革、涂层纺织品、合成片材、织带及混合材料结构。

前景边界从成品皮革、合成材料、织带、衬垫、五金件、线、胶黏剂、涂层和包装材料进入工厂开始，包括材料准备、裁切、缝制、五金装配、实际实施的场内边缘或表面整理、干燥、检验和包装。皮革、聚合物、纺织品、金属和化学品的上游制造应通过供应商特定或二手数据集链接，不在装配工厂内重建。

不包括箱包、手提包、人用腰带或防护用品、兽医医疗器械、与骑乘/控制/载荷传递无关的动物服装，以及不属于动物用具的体育用品。配送、零售、使用、动物照护、维修和寿命终止均不在本工厂门规则范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.saddlery-and-harness-for-any-animal-of-any-material` |
| classification_refs | CPC 3.0：29210，精确映射 |
| covered_products | 皮革、合成材料、纺织织带或混合结构的马鞍、笼头、缰绳、头套、项圈、牵引带、挽具及类似动物用具 |
| excluded_products | 箱包；手提包；人用服装、腰带或个体防护用品；兽医器械；无关的动物服装；非动物用具体育用品 |
| representative_product | 工厂门处已完成并检验合格的一件鞍具或挽具产品 |
| production_route | 皮革路线、合成片材路线、织带路线或有记录的组合路线，随后进行裁切、装配和包装；表面整理为条件过程 |
| market_state | 可离开生产设施的成品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 实现所声明骑乘支承、动物控制、约束或载荷传递功能的成品鞍具或挽具 |
| How much | 1 kg 合格成品净质量，不含任何包装质量 |
| How well | 符合所声明的动物/用途类别、材料、尺寸、载荷或约束等级、缝制、五金、饰面和检验准则 |
| How long or cycle | 一个生产报告期；可披露预期使用寿命，但本工厂门质量参考不规定使用寿命 |
| reference_flow_link | `final_inspection_packaging` 中的 `reference_product_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 任何材料制成的牲畜用鞍具和挽具 `850d448a-711c-4151-8745-7aece3fc2acb` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子型；动物和预期用途；材料清单；产品尺寸或尺码；适用时的载荷/约束等级；结构与缝制；五金合金与表面处理；涂层/胶黏剂体系；包装配置；生产地域与期间 |

构建前景数据包时，每项必需限定信息均应在元数据、过程说明、参考流备注或等效字段中声明。缺少任何一项限定信息即视为数据包不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 最终检验后、包装前确定净质量；所有交换均归一化到正好 1 kg。 |
| `material_mass` | 材料、五金、化学品、包装及固体/液体废物 | Mass | kg | 使用校准称量、按库存变化修正的发票或有记录的批次核对；每种材料和废物保持分开。 |
| `electricity_energy` | 各过程电力投入 | Energy | kWh | 优先使用分表计量；否则按有记录的设备时间和额定负载分配已核对的设施总表。 |
| `fuel_energy` | 场内干燥所用天然气 | Energy | MJ | 使用报告期供应商低位热值把计量气量换算为能量并保留来源记录。 |
| `compressed_air_volume` | 压缩空气投入 | Volume | m3 | 声明压力和计量条件；若把压缩空气作为购入产品投入建模，不得再次报告对应压缩机电力。 |
| `solvent_balance` | 异丙醇投入、废液和空气排放 | Mass | kg | 将溶剂投入与产品留存、回收溶剂、液体废物以及单独计算或测量的空气排放核对。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 成品构成材料、部件和包装材料已进入报告设施 |
| starting_condition_role | 每项购入投入的从摇篮到大门上游数据集在此终止；本 PCR 前景对转换和装配建模 |
| product_classification_scope | CPC 3.0 subclass 29210 |
| recursive_input_rule | 购入或转移且已归入 CPC 29210 的项目继续作为可见产品投入并链接其自身上游数据集；不得在本前景内递归重建 |
| upstream_dataset_requirement | 匹配材料、技术、地域和期间；皮革投入应披露动物种类、鞣制体系、厚度和饰面，除非场内实际鞣制，否则鞣制背景数据只用于上游 |
| disclosure | 声明纳入路线、排除的条件操作、设施边界、报告期、分配以及所有未解决的上游代理 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start_finished_inputs` | 所有路线 | 前景从成品皮革、合成片材/织物、织带、衬垫、五金、线、化学品和包装进入工厂开始；其制造链接到上游数据集。 | `eu-pef-2021-2279`; `apparel-footwear-pefcr-v3.1` |
| `boundary_include_factory_operations` | 报告设施 | 纳入所有场内准备、裁切、缝制、五金装配、适用的整理/干燥、检验、公用工程、包装、废物和排放。 | `eu-pef-2021-2279`; `apparel-footwear-pefcr-v3.1` |
| `boundary_conditional_finishing` | 表面整理 | 仅在设施内实际实施时纳入边缘涂层、面涂、清洁、废水、干燥燃料和排放；否则记录其缺失。 | `eu-tanning-bref`; `eu-pef-2021-2279` |
| `boundary_upstream_leather` | 皮革路线 | 除非报告设施实际实施，否则生皮准备和鞣制保留在上游；披露链接的皮革数据集及其鞣制化学体系。 | `eu-tanning-bref` |
| `boundary_no_cutoff` | 前景交换 | 不得因数量小而省略已知的前景材料、公用工程、包装组件、废物或排放；应记录或提供有依据的不适用判定。 | `eu-pef-2021-2279` |
| `boundary_exclude_downstream` | 工厂门结果 | 排除配送、零售、使用、动物照护、维护、维修和寿命终止。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_cutting` | 材料准备与裁切 | `required` | 所有生产路线 | `foreground_process` | `cut_component_kit_output` |
| `assembly_hardware` | 缝制与五金装配 | `required` | 所有生产路线；仅记录实际使用的五金件 | `foreground_process` | `assembled_unfinished_saddlery_output` |
| `surface_finishing` | 边缘处理、表面整理与干燥 | `conditional` | 仅在报告设施内实施涂层、边缘处理、溶剂清洁或热干燥时纳入 | `foreground_process` | `finished_unpacked_saddlery_output` |
| `final_inspection_packaging` | 最终检验与包装 | `required` | 所有生产路线 | `foreground_process` | `reference_product_output` |

### 过程：材料准备与裁切（`material_cutting`）

#### 输入

##### 产品流

###### Finished bovine leather（`finished_bovine_leather_input`）

Finished bovine leather 作为一项单独记录的投入跨越材料准备与裁切边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：Finished bovine leather
- 流属性/单位：Mass / kg
- 数量规则：记录跨越本过程边界的称量量、发票量或库存核对量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`, `eu-tanning-bref`

###### Polyurethane-coated polyester fabric（`polyurethane_coated_polyester_fabric_input`）

Polyurethane-coated polyester fabric 作为一项单独记录的投入跨越材料准备与裁切边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：Polyurethane-coated polyester fabric
- 流属性/单位：Mass / kg
- 数量规则：记录跨越本过程边界的称量量、发票量或库存核对量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Woven polyester webbing（`woven_polyester_webbing_input`）

Woven polyester webbing 作为一项单独记录的投入跨越材料准备与裁切边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：Woven polyester webbing
- 流属性/单位：Mass / kg
- 数量规则：记录跨越本过程边界的称量量、发票量或库存核对量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Ethylene-vinyl acetate foam padding（`eva_foam_padding_input`）

Ethylene-vinyl acetate foam padding 作为一项单独记录的投入跨越材料准备与裁切边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：Ethylene-vinyl acetate foam padding
- 流属性/单位：Mass / kg
- 数量规则：记录跨越本过程边界的称量量、发票量或库存核对量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Marker paper（`marker_paper_input`）

Marker paper 作为一项单独记录的投入跨越材料准备与裁切边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：Marker paper
- 流属性/单位：Mass / kg
- 数量规则：记录跨越本过程边界的称量量、发票量或库存核对量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Electricity, facility supply（`cutting_electricity_input`）

Electricity, facility supply 作为一项单独记录的投入跨越材料准备与裁切边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：记录专用电表/能源表读数，或记录经核对的设施总表按有文件支持的因果驱动分配所得份额。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`
- 来源：`eu-pef-2021-2279`


##### 废物流

通常不预期该流类型的直接交换；任何例外均应作为单独原子行记录。


##### 基本流

通常不预期该流类型的直接交换；任何例外均应作为单独原子行记录。


#### 输出

##### 产品流

###### Cut saddlery component kit（`cut_component_kit_output`）

Cut saddlery component kit 是单独记录并转移至下一前景过程的中间产出，其数量应与过程物料平衡核对。

- 选定流：Cut saddlery component kit
- 流属性/单位：Mass / kg
- 数量规则：记录转移至下一过程的称量质量或批次核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`


##### 废物流

###### Finished bovine leather offcut（`finished_leather_offcut_output`）

Finished bovine leather offcut 作为一股单独识别的废物流离开材料准备与裁切过程。前景记录应保留其组成、污染状态和实际处理去向。

- 选定流：Finished bovine leather offcut
- 流属性/单位：Mass / kg
- 数量规则：记录离开过程的称量量或容器核对量，并记录实际处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`, `eu-tanning-bref`

###### Polyurethane-coated polyester fabric offcut（`coated_fabric_offcut_output`）

Polyurethane-coated polyester fabric offcut 作为一股单独识别的废物流离开材料准备与裁切过程。前景记录应保留其组成、污染状态和实际处理去向。

- 选定流：Polyurethane-coated polyester fabric offcut
- 流属性/单位：Mass / kg
- 数量规则：记录离开过程的称量量或容器核对量，并记录实际处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Woven polyester webbing offcut（`polyester_webbing_offcut_output`）

Woven polyester webbing offcut 作为一股单独识别的废物流离开材料准备与裁切过程。前景记录应保留其组成、污染状态和实际处理去向。

- 选定流：Woven polyester webbing offcut
- 流属性/单位：Mass / kg
- 数量规则：记录离开过程的称量量或容器核对量，并记录实际处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Ethylene-vinyl acetate foam offcut（`eva_foam_offcut_output`）

Ethylene-vinyl acetate foam offcut 作为一股单独识别的废物流离开材料准备与裁切过程。前景记录应保留其组成、污染状态和实际处理去向。

- 选定流：Ethylene-vinyl acetate foam offcut
- 流属性/单位：Mass / kg
- 数量规则：记录离开过程的称量量或容器核对量，并记录实际处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Waste marker paper（`waste_marker_paper_output`）

Waste marker paper 作为一股单独识别的废物流离开材料准备与裁切过程。前景记录应保留其组成、污染状态和实际处理去向。

- 选定流：Waste marker paper
- 流属性/单位：Mass / kg
- 数量规则：记录离开过程的称量量或容器核对量，并记录实际处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`


##### 基本流

通常不预期该流类型的直接交换；任何例外均应作为单独原子行记录。


### 过程：缝制与五金装配（`assembly_hardware`）

#### 输入

##### 产品流

###### Cut saddlery component kit（`cut_component_kit_assembly_input`）

Cut saddlery component kit 作为一项单独记录的投入跨越缝制与五金装配边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：Cut saddlery component kit
- 流属性/单位：Mass / kg
- 数量规则：记录跨越本过程边界的称量量、发票量或库存核对量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_hardware_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Polyester sewing thread（`polyester_sewing_thread_input`）

Polyester sewing thread 作为一项单独记录的投入跨越缝制与五金装配边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：聚酯缝纫线
- 流属性/单位：Mass / kg
- 数量规则：记录跨越本过程边界的称量量、发票量或库存核对量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_hardware_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Stainless steel saddlery buckle（`stainless_steel_buckle_input`）

Stainless steel saddlery buckle 作为一项单独记录的投入跨越缝制与五金装配边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：Stainless steel saddlery buckle
- 流属性/单位：Mass / kg
- 数量规则：记录跨越本过程边界的称量量、发票量或库存核对量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_hardware_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Stainless steel D-ring（`stainless_steel_d_ring_input`）

Stainless steel D-ring 作为一项单独记录的投入跨越缝制与五金装配边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：Stainless steel D-ring
- 流属性/单位：Mass / kg
- 数量规则：记录跨越本过程边界的称量量、发票量或库存核对量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_hardware_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Stainless steel saddlery rivet（`stainless_steel_rivet_input`）

Stainless steel saddlery rivet 作为一项单独记录的投入跨越缝制与五金装配边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：Stainless steel saddlery rivet
- 流属性/单位：Mass / kg
- 数量规则：记录跨越本过程边界的称量量、发票量或库存核对量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_hardware_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Brass saddlery eyelet（`brass_eyelet_input`）

Brass saddlery eyelet 作为一项单独记录的投入跨越缝制与五金装配边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：Brass saddlery eyelet
- 流属性/单位：Mass / kg
- 数量规则：记录跨越本过程边界的称量量、发票量或库存核对量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_hardware_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Waterborne polyurethane adhesive（`waterborne_polyurethane_adhesive_input`）

Waterborne polyurethane adhesive 作为一项单独记录的投入跨越缝制与五金装配边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：Waterborne polyurethane adhesive
- 流属性/单位：Mass / kg
- 数量规则：记录跨越本过程边界的称量量、发票量或库存核对量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_hardware_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Electricity, facility supply（`assembly_electricity_input`）

Electricity, facility supply 作为一项单独记录的投入跨越缝制与五金装配边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：记录专用电表/能源表读数，或记录经核对的设施总表按有文件支持的因果驱动分配所得份额。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_hardware_records`
- 来源：`eu-pef-2021-2279`

###### Compressed air, facility supply（`compressed_air_input`）

Compressed air, facility supply 作为一项单独记录的投入跨越缝制与五金装配边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：Compressed air, facility supply
- 流属性/单位：Volume / m3
- 数量规则：按声明的压力和计量条件记录交付量或计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_hardware_records`
- 来源：`eu-pef-2021-2279`


##### 废物流

通常不预期该流类型的直接交换；任何例外均应作为单独原子行记录。


##### 基本流

通常不预期该流类型的直接交换；任何例外均应作为单独原子行记录。


#### 输出

##### 产品流

###### Assembled unfinished saddlery or harness（`assembled_unfinished_saddlery_output`）

Assembled unfinished saddlery or harness 是单独记录并转移至下一前景过程的中间产出，其数量应与过程物料平衡核对。

- 选定流：Assembled unfinished saddlery or harness
- 流属性/单位：Mass / kg
- 数量规则：记录转移至下一过程的称量质量或批次核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_hardware_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`


##### 废物流

###### Waste polyester sewing thread（`waste_polyester_thread_output`）

Waste polyester sewing thread 作为一股单独识别的废物流离开缝制与五金装配过程。前景记录应保留其组成、污染状态和实际处理去向。

- 选定流：Waste polyester sewing thread
- 流属性/单位：Mass / kg
- 数量规则：记录离开过程的称量量或容器核对量，并记录实际处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_hardware_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Rejected stainless steel saddlery hardware（`rejected_stainless_steel_hardware_output`）

Rejected stainless steel saddlery hardware 作为一股单独识别的废物流离开缝制与五金装配过程。前景记录应保留其组成、污染状态和实际处理去向。

- 选定流：Rejected stainless steel saddlery hardware
- 流属性/单位：Mass / kg
- 数量规则：记录离开过程的称量量或容器核对量，并记录实际处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_hardware_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Waste waterborne polyurethane adhesive（`waste_waterborne_polyurethane_adhesive_output`）

Waste waterborne polyurethane adhesive 作为一股单独识别的废物流离开缝制与五金装配过程。前景记录应保留其组成、污染状态和实际处理去向。

- 选定流：Waste waterborne polyurethane adhesive
- 流属性/单位：Mass / kg
- 数量规则：记录离开过程的称量量或容器核对量，并记录实际处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_hardware_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`


##### 基本流

通常不预期该流类型的直接交换；任何例外均应作为单独原子行记录。


### 过程：边缘处理、表面整理与干燥（`surface_finishing`）

#### 输入

##### 产品流

###### Assembled unfinished saddlery or harness（`assembled_unfinished_surface_input`）

Assembled unfinished saddlery or harness 作为一项单独记录的投入跨越边缘处理、表面整理与干燥边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：Assembled unfinished saddlery or harness
- 流属性/单位：Mass / kg
- 数量规则：记录跨越本过程边界的称量量、发票量或库存核对量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing_material_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Waterborne acrylic leather edge coating（`waterborne_acrylic_edge_coating_input`）

Waterborne acrylic leather edge coating 作为一项单独记录的投入跨越边缘处理、表面整理与干燥边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：Waterborne acrylic leather edge coating
- 流属性/单位：Mass / kg
- 数量规则：记录跨越本过程边界的称量量、发票量或库存核对量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing_material_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`, `eu-tanning-bref`

###### Waterborne polyurethane leather topcoat（`waterborne_polyurethane_topcoat_input`）

Waterborne polyurethane leather topcoat 作为一项单独记录的投入跨越边缘处理、表面整理与干燥边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：Waterborne polyurethane leather topcoat
- 流属性/单位：Mass / kg
- 数量规则：记录跨越本过程边界的称量量、发票量或库存核对量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing_material_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`, `eu-tanning-bref`

###### Isopropanol（`isopropanol_cleaning_solvent_input`）

Isopropanol 作为一项单独记录的投入跨越边缘处理、表面整理与干燥边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：Isopropanol
- 流属性/单位：Mass / kg
- 数量规则：记录跨越本过程边界的称量量、发票量或库存核对量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing_material_records`
- 来源：`eu-pef-2021-2279`, `eu-tanning-bref`

###### Process water（`process_water_input`）

Process water 作为一项单独记录的投入跨越边缘处理、表面整理与干燥边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：记录跨越本过程边界的称量量、发票量或库存核对量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing_material_records`
- 来源：`eu-pef-2021-2279`, `eu-tanning-bref`

###### Electricity, facility supply（`surface_finishing_electricity_input`）

Electricity, facility supply 作为一项单独记录的投入跨越边缘处理、表面整理与干燥边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：记录专用电表/能源表读数，或记录经核对的设施总表按有文件支持的因果驱动分配所得份额。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing_utility_records`
- 来源：`eu-pef-2021-2279`

###### Natural gas（`natural_gas_drying_input`）

Natural gas 作为一项单独记录的投入跨越边缘处理、表面整理与干燥边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：记录专用电表/能源表读数，或记录经核对的设施总表按有文件支持的因果驱动分配所得份额。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing_utility_records`
- 来源：`eu-pef-2021-2279`


##### 废物流

通常不预期该流类型的直接交换；任何例外均应作为单独原子行记录。


##### 基本流

通常不预期该流类型的直接交换；任何例外均应作为单独原子行记录。


#### 输出

##### 产品流

###### Finished unpacked saddlery or harness（`finished_unpacked_saddlery_output`）

Finished unpacked saddlery or harness 是单独记录并转移至下一前景过程的中间产出，其数量应与过程物料平衡核对。

- 选定流：Finished unpacked saddlery or harness
- 流属性/单位：Mass / kg
- 数量规则：记录转移至下一过程的称量质量或批次核对质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing_material_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`


##### 废物流

###### Waste waterborne acrylic leather edge coating（`waste_acrylic_edge_coating_output`）

Waste waterborne acrylic leather edge coating 作为一股单独识别的废物流离开边缘处理、表面整理与干燥过程。前景记录应保留其组成、污染状态和实际处理去向。

- 选定流：Waste waterborne acrylic leather edge coating
- 流属性/单位：Mass / kg
- 数量规则：记录离开过程的称量量或容器核对量，并记录实际处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing_material_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`, `eu-tanning-bref`

###### Waste waterborne polyurethane leather topcoat（`waste_polyurethane_topcoat_output`）

Waste waterborne polyurethane leather topcoat 作为一股单独识别的废物流离开边缘处理、表面整理与干燥过程。前景记录应保留其组成、污染状态和实际处理去向。

- 选定流：Waste waterborne polyurethane leather topcoat
- 流属性/单位：Mass / kg
- 数量规则：记录离开过程的称量量或容器核对量，并记录实际处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing_material_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`, `eu-tanning-bref`

###### Waste isopropanol cleaning solvent（`waste_isopropanol_output`）

Waste isopropanol cleaning solvent 作为一股单独识别的废物流离开边缘处理、表面整理与干燥过程。前景记录应保留其组成、污染状态和实际处理去向。

- 选定流：Waste isopropanol cleaning solvent
- 流属性/单位：Mass / kg
- 数量规则：记录离开过程的称量量或容器核对量，并记录实际处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing_material_records`
- 来源：`eu-pef-2021-2279`, `eu-tanning-bref`

###### Aqueous leather surface-finishing wastewater（`surface_finishing_wastewater_output`）

Aqueous leather surface-finishing wastewater 作为一股单独识别的废物流离开边缘处理、表面整理与干燥过程。前景记录应保留其组成、污染状态和实际处理去向。

- 选定流：Aqueous leather surface-finishing wastewater
- 流属性/单位：Mass / kg
- 数量规则：记录离开过程的称量量或容器核对量，并记录实际处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing_material_records`
- 来源：`eu-pef-2021-2279`, `eu-tanning-bref`


##### 基本流

###### Isopropanol, to air（`isopropanol_air_output`）

Isopropanol, to air 作为一种单独定量的基本排放离开边缘处理、表面整理与干燥过程；不得与其他挥发性化合物或燃烧物种合并。

- 选定流：Isopropanol, to air
- 流属性/单位：Mass / kg
- 数量规则：根据实测异丙醇投入、分别计量的回收量和废液量以及任何直接排放测量值计算，并记录溶剂平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_finishing_emission_records`
- 来源：`eu-pef-2021-2279`, `eu-tanning-bref`

###### Carbon dioxide, fossil, to air（`fossil_co2_air_output`）

Carbon dioxide, fossil, to air 作为一种单独定量的基本排放离开边缘处理、表面整理与干燥过程；不得与其他挥发性化合物或燃烧物种合并。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据实测天然气能量和适用且已引用的排放因子计算，或采用烟道直接测量；保留计算记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_finishing_emission_records`
- 来源：`eu-pef-2021-2279`

###### Nitrogen dioxide, to air（`nitrogen_dioxide_air_output`）

Nitrogen dioxide, to air 作为一种单独定量的基本排放离开边缘处理、表面整理与干燥过程；不得与其他挥发性化合物或燃烧物种合并。

- 选定流：Nitrogen dioxide, to air
- 流属性/单位：Mass / kg
- 数量规则：根据实测天然气能量和适用且已引用的排放因子计算，或采用烟道直接测量；保留计算记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_finishing_emission_records`
- 来源：`eu-pef-2021-2279`


### 过程：最终检验与包装（`final_inspection_packaging`）

#### 输入

##### 产品流

###### Finished unpacked saddlery or harness（`finished_unpacked_packaging_input`）

Finished unpacked saddlery or harness 作为一项单独记录的投入跨越最终检验与包装边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：Finished unpacked saddlery or harness
- 流属性/单位：Mass / kg
- 数量规则：记录跨越本过程边界的称量量、发票量或库存核对量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Electricity, facility supply（`final_inspection_electricity_input`）

Electricity, facility supply 作为一项单独记录的投入跨越最终检验与包装边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：记录专用电表/能源表读数，或记录经核对的设施总表按有文件支持的因果驱动分配所得份额。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`
- 来源：`eu-pef-2021-2279`

###### Paper hangtag（`paper_hangtag_input`）

Paper hangtag 作为一项单独记录的投入跨越最终检验与包装边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：Paper hangtag
- 流属性/单位：Mass / kg
- 数量规则：记录跨越本过程边界的称量量、发票量或库存核对量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Low-density polyethylene protective bag（`ldpe_protective_bag_input`）

Low-density polyethylene protective bag 作为一项单独记录的投入跨越最终检验与包装边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：Low-density polyethylene protective bag
- 流属性/单位：Mass / kg
- 数量规则：记录跨越本过程边界的称量量、发票量或库存核对量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Corrugated paperboard shipping carton（`corrugated_shipping_carton_input`）

Corrugated paperboard shipping carton 作为一项单独记录的投入跨越最终检验与包装边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：瓦楞纸板运输箱
- 流属性/单位：Mass / kg
- 数量规则：记录跨越本过程边界的称量量、发票量或库存核对量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Polypropylene packing tape（`polypropylene_packing_tape_input`）

Polypropylene packing tape 作为一项单独记录的投入跨越最终检验与包装边界。仅在实际使用这一具体材料或公用工程时采用本卡，不得把替代品或备选项聚合到本卡。

- 选定流：Polypropylene packing tape
- 流属性/单位：Mass / kg
- 数量规则：记录跨越本过程边界的称量量、发票量或库存核对量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`


##### 废物流

通常不预期该流类型的直接交换；任何例外均应作为单独原子行记录。


##### 基本流

通常不预期该流类型的直接交换；任何例外均应作为单独原子行记录。


#### 输出

##### 产品流

###### Saddlery and harness, for any animal, of any material（`reference_product_output`）

经检验合格的成品作为参考产品离开报告设施。净产品质量不含吊牌、保护袋、纸箱和胶带的质量。

- 选定流：任何材料制成的牲畜用鞍具和挽具 `850d448a-711c-4151-8745-7aece3fc2acb`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：固定为 1 kg 合格成品净质量；不计任何包装质量。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 采集协议：`cp_reference_output_records`
- 来源：`un-cpc-official`, `eu-pef-2021-2279`


##### 废物流

###### Waste corrugated paperboard（`waste_corrugated_paperboard_output`）

Waste corrugated paperboard 作为一股单独识别的废物流离开最终检验与包装过程。前景记录应保留其组成、污染状态和实际处理去向。

- 选定流：废瓦楞纸板
- 流属性/单位：Mass / kg
- 数量规则：记录离开过程的称量量或容器核对量，并记录实际处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Waste low-density polyethylene film（`waste_ldpe_film_output`）

Waste low-density polyethylene film 作为一股单独识别的废物流离开最终检验与包装过程。前景记录应保留其组成、污染状态和实际处理去向。

- 选定流：废低密度聚乙烯薄膜
- 流属性/单位：Mass / kg
- 数量规则：记录离开过程的称量量或容器核对量，并记录实际处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`

###### Waste polypropylene packing tape（`waste_polypropylene_tape_output`）

Waste polypropylene packing tape 作为一股单独识别的废物流离开最终检验与包装过程。前景记录应保留其组成、污染状态和实际处理去向。

- 选定流：Waste polypropylene packing tape
- 流属性/单位：Mass / kg
- 数量规则：记录离开过程的称量量或容器核对量，并记录实际处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging_records`
- 来源：`eu-pef-2021-2279`, `apparel-footwear-pefcr-v3.1`


##### 基本流

通常不预期该流类型的直接交换；任何例外均应作为单独原子行记录。


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 不同产品、路线和批次 | 优先使用单独计量、批次记录和过程细分，在分配前直接归属负荷。 | `eu-pef-2021-2279` |
| `allocation_physical_driver` | 不可避免的共用公用工程和废物 | 使用有记录的因果物理驱动分配，例如设备时间、计量能量、处理面积或处理质量。 | `eu-pef-2021-2279` |
| `allocation_economic_last_resort` | 缺少可辩护物理驱动的共用负荷 | 仅把经济分配作为最后手段，并披露价格、期间、敏感性和受影响交换。 | `eu-pef-2021-2279` |
| `allocation_no_avoided_burden_scrap` | 边角料和不合格五金 | 在边界处记录实际废物处理或销售；不得在前景结果内应用回避负荷回收抵扣。 | `eu-pef-2021-2279`; `apparel-footwear-pefcr-v3.1` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_cutting_records` | `material_cutting` | 材料、电力、中间产品和边角料行 | 采购/库存、裁切批次、分表和废物记录 | 流名称；材料规格；期初/期末库存；采购；批次发料；产出；废物；kWh；时间戳 | 核对库存和批次发料；称量产出/边角料；读取分表或分配已核对总表 | kg; kWh | 每批，按月汇总 | 与参考产出相同报告期 | 报告设施 | 按原子流求和后除以合格参考产品质量 | 校准、发票、库存台账、批次单、计量记录和废物联单 |
| `cp_assembly_hardware_records` | `assembly_hardware` | 线、各五金件、胶黏剂、电力、压缩空气、中间产品和废物行 | BOM、领退料、设备、计量和废物记录 | 原子项目；合金/配方；数量；质量；批次；设备时间；kWh；m3；废物；去向 | 核对 BOM 与领退料及批次产出；分别计量或分配公用工程 | kg; kWh; m3 | 每批，按月汇总 | 同一报告期 | 报告设施 | 按原子流求和并归一化到参考质量 | 批准的 BOM、供应商规格、批次记录、计量记录和废物联单 |
| `cp_surface_finishing_material_records` | `surface_finishing` | 涂层、溶剂、水、中间产品及废物/废水行 | 配方、领退料、批次、水表和废物记录 | 配方；固含量；投入质量；退回质量；水；产出；废物；废水；去向 | 核对化学品领退；称量废物；计量用水；记录路线适用性 | kg | 每个整理批次 | 同一报告期 | 报告设施整理区域 | 各原子流分别求和并归一化到参考质量 | 供应商 SDS/规格、批次单、用水记录、废物联单和废水记录 |
| `cp_surface_finishing_utility_records` | `surface_finishing` | 电力和天然气行 | 分表、燃气发票和设备日志 | kWh；燃气体积；热值；MJ；设备时间；批次；时间戳 | 读取电表和燃气表；使用当期供应商热值换算天然气 | kWh; MJ | 每批或每个计量间隔，按月汇总 | 同一报告期 | 整理/干燥设备 | 直接求和或按设备时间有因果地分配 | 仪表校准、发票和设备日志 |
| `cp_surface_finishing_emission_records` | `surface_finishing` | 异丙醇、化石 CO2 和二氧化氮空气排放行 | 溶剂平衡、烟道测量或排放因子计算 | 实测投入；回收；废物；留存质量；燃气 MJ；因子；实测浓度；流量；持续时间 | 计算溶剂余量和燃烧排放或直接测量；引用每个因子 | kg | 每个生产活动或报告期 | 同一报告期 | 整理/干燥排放点 | 每种化学物种单独汇总 | 计算表、因子引用、采样报告和质量平衡闭合 |
| `cp_final_packaging_records` | `final_inspection_packaging` | 未包装产品、电力、各包装组件和包装废物 | 检验、包装 BOM、领退料、计量和废物记录 | 合格/不合格质量；包装项目；领用/退回质量；kWh；废物；去向 | 核对合格产出和各包装组件；称量包装废物；读取或分配电表 | kg; kWh | 每批，按月汇总 | 同一报告期 | 检验和包装区域 | 各原子流求和并归一化到合格产品净质量 | 检验放行、包装规格、库存记录、计量记录和废物联单 |
| `cp_reference_output_records` | `final_inspection_packaging` | 参考产品 | 最终放行和净质量记录 | 产品子型；限定信息；合格件数；净质量；包装皮重；批次；日期 | 包装前称量合格产品，并与最终放行记录核对 | kg | 每个放行批次 | 同一报告期 | 报告设施 | 合计合格净质量并归一化到正好 1 kg | 校准秤记录、批次放行和已声明限定信息 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 报告期原子流数量 / 报告期合格参考产品净质量 | 采集的交换数量；合格产品净质量 | 每 1 kg 参考产品的数量 | `eu-pef-2021-2279` |
| `calc_material_balance` | 每种材料路线和过程 | 投入质量 = 转移产品 + 留存质量 + 单独识别的废物 + 单独识别的排放 + 有记录的库存变化，并考虑已声明测量不确定性 | 材料投入；中间产品；废物；排放；库存变化 | 核对后的质量平衡声明 | `eu-pef-2021-2279`; `apparel-footwear-pefcr-v3.1` |
| `calc_shared_utility_allocation` | 未分表的电力和压缩空气 | 分配量 = 已核对设施总量 × 有记录的因果驱动份额 | 设施计量值；设备时间或其他因果驱动 | 过程特定公用工程数量 | `eu-pef-2021-2279` |
| `calc_solvent_air_emission` | 异丙醇空气排放 | 异丙醇投入 − 产品留存 − 回收异丙醇 − 液体废物中的异丙醇 − 有记录的库存变化 | 实测溶剂投入、回收、废物、留存和库存 | 排放至空气的异丙醇 | `eu-pef-2021-2279`; `eu-tanning-bref` |
| `calc_combustion_emissions` | 化石 CO2 和二氧化氮 | 实测天然气能量 × 有记录且来源适用的因子，除非使用烟道直接测量 | 燃气能量；已引用因子或测量 | 各燃烧物种的单独质量流 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_primary_foreground` | 制造过程 | 使用报告设施和期间的公司特定记录；披露所有缺口、代理和分配。 | 仪表、发票、库存台账、BOM、批次单和废物记录 |
| `dq_bom_specificity` | 产品材料与部件 | 保留产品特定材料身份、供应商等级、数量、五金合金/饰面和包装规格。 | 批准的 BOM 和供应商技术规格 |
| `dq_upstream_match` | 链接的背景数据集 | 匹配技术、材料、地域和时间；皮革数据应披露动物种类、鞣制体系和饰面。 | 数据集元数据和有记录的选择理由 |
| `dq_completeness` | 所有前景交换 | 核对材料、溶剂和包装平衡，并解释每个缺失或不适用的原子行。 | 平衡工作表和适用性日志 |
| `dq_temporal_representativeness` | 报告期 | 使用代表性的连续期间；可用时通常为十二个月，并解释更短期间或异常运行。 | 带日期的原始记录和生产日志 |
| `dq_traceability` | 计算与因子 | 保留原始字段、单位换算、因子引用、分配驱动和版本化计算表。 | 可审计计算包 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 数据集身份 | CPC 代码、产品标题、已声明限定信息和 canonical PCR id 应存在且相互一致。 | `un-cpc-official` |
| `validate_reference_flow` | 定量参考 | 参考产品应使用流 `850d448a-711c-4151-8745-7aece3fc2acb`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`、kg，以及不含包装的正好 1 kg 产品净质量。 | `un-cpc-official` |
| `validate_atomic_inventory` | 清单 | 每项交换均应为一个具体流；材料、公用工程、包装、废物和每种空气排放应保持分开。 | `eu-pef-2021-2279` |
| `validate_route_completeness` | 路线声明 | 数据包应声明皮革、合成、织带或混合路线，并解释每个条件卡或不适用卡。 | `apparel-footwear-pefcr-v3.1` |
| `validate_mass_balance` | 材料与溶剂平衡 | 裁切、装配、整理和包装平衡应在有记录的测量不确定性内闭合，不得存在未解释余量。 | `eu-pef-2021-2279`; `apparel-footwear-pefcr-v3.1` |
| `validate_finishing_boundary` | 表面整理 | 若场内实施整理，则应存在涂层、溶剂、水、电力、干燥燃料、废物、废水和分别定量的排放；否则应记录排除。 | `eu-tanning-bref`; `eu-pef-2021-2279` |
| `validate_allocation` | 共用负荷 | 每项分配交换应识别共用总量、因果驱动、分配份额以及重要时的敏感性。 | `eu-pef-2021-2279` |
| `validate_data_quality` | 证据包 | 每个前景行应链接其协议和原始证据；每个背景数据集和计算因子均应有选择理由和引用。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已声明鞍具或挽具产品的工厂门前景生产数据集 |
| downstream_use | LCA 过程数据集、产品系统、足迹研究和供应商数据交换 |
| allowed_use | 路线和必需限定信息与数据集一致的 CPC 29210 产品 |
| excluded_use | 未记录代表性的不同动物用具结构；仅鞣制数据集；配送、使用或寿命终止声明 |
| required_metadata | canonical PCR id；CPC 代码；产品子型；动物/用途；净参考质量；BOM；路线；设施地域；报告期；纳入操作；包装；分配；背景数据集版本 |
| required_quality_disclosure | 一手数据覆盖；计量与平衡质量；代理；未解决 UUID；分配；时间/地域/技术代表性；排除项和不适用行 |
| update_trigger | 材料或供应商变化；五金/涂层/胶黏剂变化；过程或能源来源变化；设施/地域变化；包装重新设计；分配变化；数据超过所声明代表性期间 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-official` | official_guidance | 联合国统计司，Central Product Classification (CPC) 官方入口：https://unstats.un.org/unsd/classifications/Econ/CPC；仓库内官方 raw CSV 提供 CPC 3.0 subclass 的精确标题 | 产品类别身份和 CPC 29210 精确范围 |
| `eu-pef-2021-2279` | method_factor | 欧盟委员会 Recommendation (EU) 2021/2279，整合版 Product Environmental Footprint 方法：https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定 BOM、公司特定制造数据、LCI 完整性、分配、透明度和数据质量 |
| `eu-tanning-bref` | official_guidance | 欧盟委员会 JRC，BAT Reference Document for the Tanning of Hides and Skins：https://eippcb.jrc.ec.europa.eu/reference/tanning-hides-and-skins-0 | 上游皮革数据集披露及有条件的皮革整理化学品、废水和排放背景；不用于把鞣制强制并入装配工厂 |
| `apparel-footwear-pefcr-v3.1` | method_factor | Apparel & Footwear Product Environmental Footprint Category Rules，Version 3.1；总调度已核验官方正文 | 产品 BOM、制造损耗、包装和过程特定前景记录的组织；不引入任何默认数量 |
