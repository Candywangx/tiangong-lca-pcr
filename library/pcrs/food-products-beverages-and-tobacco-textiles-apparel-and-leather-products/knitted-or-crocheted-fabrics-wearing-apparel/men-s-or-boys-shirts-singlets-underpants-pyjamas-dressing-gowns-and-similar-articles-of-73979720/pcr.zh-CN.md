---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.men-s-or-boys-shirts-singlets-underpants-pyjamas-dressing-gowns-and-similar-articles-of-73979720
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非针织或钩编纺织物制男式或男童衬衫、背心、内裤、睡衣、晨衣及类似品

## 1. 范围与适用性

本 PCR 适用于以机织或其他非针织、非钩编纺织物制成的男式或男童衬衫、背心、内裤、睡衣、晨衣及类似服装的工厂门生产。范围涵盖材料准备、裁剪、缝制与组装、适用时的成衣湿处理、熨烫与后整理、检验及包装，并支持以成衣质量归一化的前景数据包。

针织或钩编服装、女式或女童服装、婴儿服装、主要功能为防护健康或安全危害的防护服、皮革或毛皮服装以及主要由塑料制成的服装不在范围内。上游纤维、纱线、织造、染色和面料后整理生产使用关联上游数据集表示，除非这些活动在报告设施内完成。超出成衣工厂门的配送、零售、消费者使用和生命末期不属于本工厂门前景边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.men-s-or-boys-shirts-singlets-underpants-pyjamas-dressing-gowns-and-similar-articles-of-73979720 |
| classification_refs | CPC 3.0: 28232 |
| covered_products | 以机织或其他非针织、非钩编纺织物制成的男式或男童衬衫、背心、内裤、睡衣、晨衣及类似品 |
| excluded_products | 针织或钩编服装；女式或女童服装；婴儿服装；防护服；皮革、毛皮或主要由塑料制成的服装 |
| representative_product | 经质量验收的男式机织长袖衬衫成品 |
| production_route | 接收已整理机织面料与辅料；裁剪；缝制与组装；条件性湿处理；熨烫与后整理；检验；包装 |
| market_state | 成衣工厂门成品；包装单独计入清单，不计入参考产品质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供满足其声明穿着功能的非针织或钩编纺织物制男式或男童成衣 |
| How much | 1 kg 经质量验收的成衣，不含包装质量 |
| How well | 符合声明的产品规范、纤维组成、尺码、结构、后整理和质量验收准则 |
| How long or cycle | 一次工厂门生产输出事件；消费者使用寿命不属于本前景数据集 |
| reference_flow_link | `packaging` 的成品参考服装输出，归一化至 1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 非针织或钩编而成的纺织品男衬衫、男童衬衫、汗衫、衬裤、睡衣裤、晨衣及其类似物品 `66e77e01-9118-4c94-a727-c8bbcf2d4eee` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | garment type; men's or boys' designation; woven or otherwise non-knitted and non-crocheted construction; fibre composition by mass; finished product mass; reference size; BOM coverage; wet-processing route; finish specification; packaging configuration; production geography; reference year |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对不含销售或运输包装的合格成衣称重，并将前景清单精确归一化至 1 kg。 |
| `component_mass` | fabrics, thread, interlining, fasteners, labels, and packaging | Mass | kg | 分别记录领用质量与退回的未使用质量；不得用采购金额推算辅料质量。 |
| `electricity_energy` | electricity inputs | Energy | kWh | 保留以 kWh 计量的电力，仅使用有记录的单位换算；不得将电力与蒸汽或燃料合并。 |
| `steam_energy` | purchased steam inputs | Energy | MJ | 采购蒸汽与电力分开记录；在数据集文件中保留供应商的压力或焓基准。 |
| `water_mass` | process-water and wastewater rows | Mass | kg | 使用实测质量，或使用与测量温度相符且已披露的密度将体积计量值换算为质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已整理机织面料、缝纫线、服装辅料、包装物和公用工程在服装制造场址接收。 |
| starting_condition_role | 采购材料和公用工程接收处的前景门界 |
| product_classification_scope | CPC 3.0 代码 28232 以及第 1 节所述经审查语义范围内的男式或男童服装 |
| recursive_input_rule | 若同一语义产品类别中的成品或半成品服装进入前景系统，应将其记录为明确产品输入并关联其上游数据集；未经披露不得在当前过程中重新构建其上游负荷。 |
| upstream_dataset_requirement | 每项采购面料、辅料、包装物、电力供应、蒸汽供应、供水和废物处理服务均需关联地理和技术具有代表性的上游数据集。 |
| disclosure | 声明设施地理、报告期、产品规范、参考尺码、BOM 覆盖率、分包工序、湿处理适用性、公用工程供应路线、包装配置和所有排除项。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground garment production | 纳入从接收材料准备、裁剪、缝制与组装、适用的成衣湿处理、熨烫与后整理、检验及包装，直至工厂门合格成衣输出。 | `afw-pefcr-v3-1-2025`; `olugbemi-bolson-2026-shirt-carbon` |
| `boundary_subcontracted_operations` | outsourced foreground operations | 对声明产品发生的分包裁剪、缝制、洗涤、后整理或包装应作为关联过程纳入，并披露供应商地理和数据来源。 | `afw-pefcr-v3-1-2025` |
| `boundary_upstream_inputs` | purchased materials and utilities | 通过明确产品输入关联服装设施外表示的上游生产与运输；完整数据包不得静默遗漏这些活动。 | `ec-pef-method-2021`; `afw-pefcr-v3-1-2025` |
| `boundary_downstream_exclusion` | distribution, retail, use, and end of life | 从本工厂门前景数据集中排除下游阶段，并明确其并非服装从摇篮到坟墓的完整足迹。 | `afw-pefcr-v3-1-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `cutting` | 材料准备与裁剪 | `required` | 对裁剪缝制服装始终纳入 | 将已整理机织面料转化为服装裁片的前景过程 | kg 合格裁片 |
| `sewing_assembly` | 缝制与组装 | `required` | 始终纳入 | 裁片与辅料的前景组装 | kg 缝制服装坯体 |
| `wet_processing` | 成衣湿处理 | `conditional` | 产品在缝制后经过洗涤、染色、漂洗、柔软或其他湿处理时纳入 | 前景湿处理 | kg 湿处理后服装 |
| `finishing_inspection` | 熨烫、后整理与检验 | `required` | 始终纳入；仅在使用蒸汽时适用蒸汽行 | 前景后整理与质量验收 | kg 合格成衣 |
| `packaging` | 产品包装 | `required` | 始终纳入；仅在有文件证明无包装时记录为零 | 前景销售与运输准备 | 1 kg 参考服装输出 |

### 过程：材料准备与裁剪（`cutting`）

#### 输入

##### 产品流

###### 已整理机织面料输入（`woven_textile_fabric_input`）

已整理机织面料跨越工厂边界进入铺布、排料与裁剪；其质量来自产品特定 BOM 和材料领用记录，并扣除退回的未使用布卷。

- 选定流：Woven textile fabric, finished
- 流属性/单位：Mass / kg
- 数量规则：实测面料领用质量减去实测退回库存的未使用面料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 裁剪电力输入（`cutting_electricity_input`）

铺布、裁剪、抽风和可直接归属裁剪区域设备所用电力，使用专用电表或对场址总表进行有记录的分配来记录。

- 选定流：低压电力，工厂供电
- 流属性/单位：Energy / kWh
- 数量规则：实测裁剪过程电力消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：`afw-pefcr-v3-1-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 服装裁片输出（`cut_garment_panels_output`）

合格裁片离开裁剪过程进入缝制；其质量由批次称重或经核对的裁剪质量平衡确定。

- 选定流：Cut woven textile garment panels
- 流属性/单位：Mass / kg
- 数量规则：实测合格裁片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格裁片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：

##### 废物流

###### 纺织裁剪边角料输出（`textile_cutting_offcuts_output`）

排料裁剪时分离的机织面料片作为单一成分特定废物流跨越过程边界；记录实测质量和处理去向。

- 选定流：Waste woven textile cutting offcuts
- 流属性/单位：Mass / kg
- 数量规则：实测分离裁剪边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格裁片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：`afw-pefcr-v3-1-2025`

##### 基本流

### 过程：缝制与组装（`sewing_assembly`）

#### 输入

##### 产品流

###### 裁片输入（`cut_panels_input`）

合格裁片作为主要材料输入进入缝制；转移质量必须与前一裁剪输出相核对。

- 选定流：Cut woven textile garment panels
- 流属性/单位：Mass / kg
- 数量规则：实测领用至缝制的裁片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 缝制服装坯体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_records`
- 来源：

###### 缝纫线输入（`sewing_thread_input`）

构成缝线的缝纫线跨越组装边界；记录其纤维组成和扣除退回线筒后的净领用质量。

- 选定流：缝纫线
- 流属性/单位：Mass / kg
- 数量规则：实测缝纫线领用质量减去实测退回库存的未使用缝纫线质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 缝制服装坯体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 粘合衬输入（`fusible_interlining_input`）

仅当粘合纺织衬布用于领、袖口、门襟或其他声明服装部位时记录；使用产品 BOM 和领用记录。

- 选定流：Fusible textile interlining
- 流属性/单位：Mass / kg
- 数量规则：实测并入的衬布质量，或领用质量扣除退回的未使用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 缝制服装坯体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 纽扣输入（`button_input`）

当产品规范包含纽扣时，将服装纽扣记录为单一材料特定辅料流；使用保留的批次平均称重记录将件数换算为质量。

- 选定流：Garment button
- 流属性/单位：Mass / kg
- 数量规则：纽扣数量乘以生产批次实测平均单粒纽扣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 缝制服装坯体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_sewing_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 拉链输入（`slide_fastener_input`）

仅对 BOM 包含该闭合件的产品记录服装拉链；使用实测批次平均辅料质量和安装数量。

- 选定流：Garment slide fastener
- 流属性/单位：Mass / kg
- 数量规则：已安装拉链数量乘以实测平均拉链质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 缝制服装坯体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_sewing_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 缝制电力输入（`sewing_electricity_input`）

缝纫机、粘合设备、锁眼、修剪和可直接归属组装设备所用电力与热能分开记录。

- 选定流：低压电力，工厂供电
- 流属性/单位：Energy / kWh
- 数量规则：实测缝制与组装电力消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 缝制服装坯体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_records`
- 来源：`afw-pefcr-v3-1-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 缝制服装坯体输出（`sewn_garment_shell_output`）

组装后的服装坯体在过程内验收后、成衣湿处理或最终熨烫前离开缝制；记录其合格质量。

- 选定流：Sewn woven textile garment shell
- 流属性/单位：Mass / kg
- 数量规则：实测合格缝制服装坯体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 缝制服装坯体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_records`
- 来源：

##### 废物流

###### 缝纫线头输出（`sewing_thread_offcuts_output`）

缝制时分离的线头和修剪物作为独立废物流记录，并声明其纤维组成和去向。

- 选定流：Waste sewing thread offcuts
- 流属性/单位：Mass / kg
- 数量规则：实测分离缝纫线废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 缝制服装坯体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_records`
- 来源：

###### 不合格纺织部件输出（`rejected_textile_components_output`）

组装时因不可纠正而报废的裁片或缝制纺织部件与线头分开，按实测质量和去向记录。

- 选定流：Waste rejected woven textile garment components
- 流属性/单位：Mass / kg
- 数量规则：实测离开缝制的不合格纺织部件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 缝制服装坯体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_records`
- 来源：`afw-pefcr-v3-1-2025`

##### 基本流

### 过程：成衣湿处理（`wet_processing`）

#### 输入

##### 产品流

###### 缝制坯体湿处理输入（`sewn_shell_wet_input`）

仅当声明生产路线包含成衣洗涤、漂洗、染色或柔软处理时，缝制服装坯体才进入湿处理过程。

- 选定流：Sewn woven textile garment shell
- 流属性/单位：Mass / kg
- 数量规则：实测装入湿处理设备的缝制服装坯体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿处理后服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 湿处理用水输入（`wet_process_water_input`）

用于成衣洗涤、漂洗或染色的工艺水跨越湿处理边界，使用专用水表或批次槽记录采集。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：实测工艺水输入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理后服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 成衣洗涤剂输入（`garment_detergent_input`）

批次投加的具体成衣洗涤剂配方作为一个采购配方流记录；必须披露商品名或配方标识。

- 选定流：Garment-washing detergent formulation
- 流属性/单位：Mass / kg
- 数量规则：实测洗涤剂配方投加质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理后服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 织物柔软剂输入（`fabric_softener_input`）

仅在使用时记录批次投加的具体织物柔软剂配方，并保留其商品名或配方标识。

- 选定流：Fabric-softener formulation
- 流属性/单位：Mass / kg
- 数量规则：实测织物柔软剂配方投加质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理后服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 湿处理电力输入（`wet_processing_electricity_input`）

洗衣机、泵、脱水机、烘干机和可直接归属湿处理设备所用电力与蒸汽分开计量。

- 选定流：低压电力，工厂供电
- 流属性/单位：Energy / kWh
- 数量规则：实测湿处理电力消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理后服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 湿处理蒸汽输入（`wet_processing_steam_input`）

采购蒸汽输送至湿处理设备时作为独立公用工程交换记录；披露压力、凝结水处理和供应商基准。

- 选定流：Steam, at factory gate
- 流属性/单位：Energy / MJ
- 数量规则：实测输送至湿处理的采购蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理后服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_records`
- 来源：`afw-pefcr-v3-1-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 湿处理后服装输出（`wet_processed_garment_output`）

洗涤、漂洗、脱水和适用烘干后的合格服装进入最终后整理；在声明调湿状态下记录干燥产品质量。

- 选定流：Wet-processed woven textile garment
- 流属性/单位：Mass / kg
- 数量规则：湿处理后实测干燥合格服装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿处理后服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_records`
- 来源：

##### 废物流

###### 纺织洗涤废水输出（`textile_washing_wastewater_output`）

成衣洗涤或漂洗排出的废水与固体纺织废物分开记录，并关联实际处理路线。

- 选定流：Wastewater from garment washing
- 流属性/单位：Mass / kg
- 数量规则：实测废水排放质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理后服装输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_records`
- 来源：`afw-pefcr-v3-1-2025`

##### 基本流

### 过程：熨烫、后整理与检验（`finishing_inspection`）

#### 输入

##### 产品流

###### 缝制坯体后整理输入（`sewn_shell_finishing_input`）

对不含成衣湿处理的路线，合格缝制服装坯体直接进入后整理，并作为独立条件性输入记录。

- 选定流：Sewn woven textile garment shell
- 流属性/单位：Mass / kg
- 数量规则：湿处理不适用时，实测进入后整理的缝制服装坯体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 湿处理服装后整理输入（`wet_garment_finishing_input`）

对包含成衣湿处理的路线，干燥且合格的湿处理后服装进入后整理，并与直接缝制坯体路线分开记录。

- 选定流：Wet-processed woven textile garment
- 流属性/单位：Mass / kg
- 数量规则：实测进入后整理的湿处理后服装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 后整理电力输入（`finishing_electricity_input`）

熨烫控制、检验照明、修剪和可直接归属后整理设备所用电力与蒸汽分开记录。

- 选定流：低压电力，工厂供电
- 流属性/单位：Energy / kWh
- 数量规则：实测后整理与检验电力消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 后整理蒸汽输入（`finishing_steam_input`）

采用蒸汽熨烫时，输送至服装熨烫设备的采购蒸汽作为单一公用工程交换记录。

- 选定流：Steam, at factory gate
- 流属性/单位：Energy / MJ
- 数量规则：实测输送至熨烫设备的采购蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`afw-pefcr-v3-1-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成衣输出（`finished_garment_output`）

经质量验收的成衣离开检验进入包装；记录其不含包装的调湿质量。

- 选定流：Finished woven textile garment
- 流属性/单位：Mass / kg
- 数量规则：实测经质量验收且不含包装的成衣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：

##### 废物流

###### 不合格成衣输出（`defective_garment_output`）

最终检验时因不可纠正而报废的成衣作为独立废物流记录，并声明实测质量和去向。

- 选定流：Waste defective woven textile garment
- 流属性/单位：Mass / kg
- 数量规则：实测离开检验的不可纠正不合格成衣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`afw-pefcr-v3-1-2025`

##### 基本流

### 过程：产品包装（`packaging`）

#### 输入

##### 产品流

###### 成衣包装输入（`finished_garment_packaging_input`）

合格成衣进入产品包装；在计入有记录的搬运不合格品后，其实测质量必须与同一生产批次的后整理输出相符。

- 选定流：Finished woven textile garment
- 流属性/单位：Mass / kg
- 数量规则：实测放行至包装的成衣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考服装输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 聚乙烯袋输入（`polyethylene_bag_input`）

使用时，将直接包覆服装的低密度聚乙烯袋作为一个包装材料流记录。

- 选定流：低密度聚乙烯服装袋
- 流属性/单位：Mass / kg
- 数量规则：安装袋数量乘以实测平均单袋质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考服装输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 纸板吊牌输入（`paperboard_hangtag_input`）

附着于服装或与服装一同包装的纸板吊牌与运输纸箱分开记录。

- 选定流：Paperboard garment hangtag
- 流属性/单位：Mass / kg
- 数量规则：安装吊牌数量乘以实测平均单个吊牌质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考服装输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 瓦楞纸箱输入（`corrugated_carton_input`）

用于组合服装运输的瓦楞纸板箱作为一个三级包装流记录，并按箱内实测服装数量或质量分配。

- 选定流：Corrugated fibreboard shipping carton
- 流属性/单位：Mass / kg
- 数量规则：实测纸箱质量按该箱所装服装质量分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考服装输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 包装电力输入（`packaging_electricity_input`）

折叠、封袋、贴标、封箱和可直接归属包装设备所用电力与其他工厂电力独立记录。

- 选定流：低压电力，工厂供电
- 流属性/单位：Energy / kWh
- 数量规则：实测包装过程电力消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考服装输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`afw-pefcr-v3-1-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考服装输出（`reference_garment_output`）

合格服装是声明参考产品；交换数量归一化至 1 kg 服装质量，所有包装保留在独立输入行中。

- 选定流：非针织或钩编而成的纺织品男衬衫、男童衬衫、汗衫、衬裤、睡衣裤、晨衣及其类似物品 `66e77e01-9118-4c94-a727-c8bbcf2d4eee`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：基于实测合格服装质量归一化后精确为 1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 不含包装的合格成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`un-cpc-3-0-28232`

##### 废物流

###### 废聚乙烯薄膜输出（`waste_polyethylene_film_output`）

包装过程中损坏或未使用的低密度聚乙烯服装袋与纸质包装废物分开记录。

- 选定流：废低密度聚乙烯薄膜
- 流属性/单位：Mass / kg
- 数量规则：实测废聚乙烯薄膜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考服装输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 废纸板输出（`waste_paperboard_output`）

包装过程中报废或未使用的纸板吊牌作为独立纸板废物流记录。

- 选定流：Waste paperboard hangtags
- 流属性/单位：Mass / kg
- 数量规则：实测废纸板吊牌质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考服装输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 废瓦楞纸板输出（`waste_corrugated_board_output`）

包装过程中损坏或未使用的瓦楞纸板箱与吊牌及聚合物薄膜分开记录。

- 选定流：Waste corrugated fibreboard
- 流属性/单位：Mass / kg
- 数量规则：实测废瓦楞纸板质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考服装输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | independently measurable garment processes or batches | 当电表、领用记录、批次记录或生产计数能够直接归属时，通过细分裁剪、缝制、湿处理、后整理和包装避免分配。 | `ec-pef-method-2021`; `afw-pefcr-v3-1-2025` |
| `allocation_shared_electricity` | shared factory electricity | 优先使用产品特定计量；无法取得时，按同一设备、场址和报告期的合格生产质量，对有记录的共享电表总量进行分配。 | `afw-pefcr-v3-1-2025` |
| `allocation_shared_steam` | shared purchased steam | 优先使用产品或生产线特定蒸汽计量；否则按设备运行时间和经核实负荷等有记录物理驱动因素分配实测供应蒸汽，并披露方法。 | `ec-pef-method-2021` |
| `allocation_textile_offcuts` | cutting offcuts and rejected garment material | 将边角料和不合格品按实际去向记录为废物输出；不得因销售收入或避免处置而从前景质量平衡中移除其生产负荷。 | `afw-pefcr-v3-1-2025` |
| `allocation_no_undocumented_credit` | recycling, reuse, or energy-recovery claims | 除非选定下游 LCA 方法明确要求，否则任何下游抵扣均置于本工厂门前景清单之外；使用时披露该方法和全部参数。 | `afw-pefcr-v3-1-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cutting_records` | `cutting` | finished fabric, electricity, accepted panels, cutting offcuts | BOM、材料领退料单、批次称重记录、电表记录、废物票据 | batch_id; product_code; fabric_specification; issued_fabric_kg; returned_fabric_kg; accepted_panel_kg; offcut_kg; electricity_kWh; meter_id; timestamp | 将材料领退料记录与经校准批次秤及裁剪区电表核对 | kg; kWh | 每生产批次并每月核对电表 | 至少连续 12 个代表性月份或完整生产活动期 | 生产声明产品的全部裁剪线 | 汇总经核实批次记录，并按合格成衣质量归一化 | 校准证书；签字领退料单；电表照片或导出；废物接收凭证 |
| `cp_sewing_records` | `sewing_assembly` | panels, thread, interlining, buttons, fasteners, electricity, sewn shells, sewing wastes | BOM、领退料单、辅料计数、批次平均辅料称重、电表记录、不合格品记录 | batch_id; component_id; component_material; issued_kg; returned_kg; installed_count; average_component_kg; accepted_shell_kg; thread_waste_kg; rejected_component_kg; electricity_kWh | 采集产品特定材料领用和数量，对代表性辅料批次称重，并与合格坯体质量核对 | kg; count; kWh | 每生产批次 | 至少连续 12 个代表性月份或完整生产活动期 | 生产声明产品的全部缝制与组装线 | 汇总批次输入、输出和分离废物；按合格坯体质量再按参考服装质量归一化 | 批准 BOM；校准秤记录；生产线电表记录；不合格品处置记录 |
| `cp_wet_processing_records` | `wet_processing` | garment charge, water, detergent, softener, electricity, steam, garment output, wastewater | 批次单、投料记录、水表、电表、蒸汽表或发票、废水表 | batch_id; garment_input_kg; water_kg; detergent_kg; softener_kg; electricity_kWh; steam_MJ; dry_output_kg; wastewater_kg; treatment_route | 从经校准计量表和投加系统采集每一湿处理批次；核对进水、产品保留量和废水排放 | kg; kWh; MJ | 每湿处理批次 | 至少连续 12 个代表性月份或完整生产活动期 | 用于声明产品的场内及分包湿处理设施 | 汇总完整批次记录，并按干燥合格湿处理后服装质量归一化 | 计量表校准；签字批次单；化学品领用记录；废水排放与处理记录 |
| `cp_finishing_records` | `finishing_inspection` | garment input, electricity, steam, accepted garment, defective garment | 生产放行、电表、蒸汽表或发票、最终检验记录、校准秤记录 | batch_id; input_route; garment_input_kg; electricity_kWh; steam_MJ; accepted_garment_kg; defective_garment_kg; defect_code | 对每一后整理批次测量路线特定输入质量、直接归属公用工程、合格输出和不合格品 | kg; kWh; MJ | 每生产批次 | 至少连续 12 个代表性月份或完整生产活动期 | 生产声明产品的全部后整理与检验线 | 按路线汇总合格与不合格质量；按合格服装质量归一化公用工程与废物 | 生产线放行；计量记录；秤校准；签字检验与处置记录 |
| `cp_packaging_records` | `packaging` | finished garment, polymer bag, hangtag, carton, electricity, reference garment, packaging wastes | 包装 BOM、辅料计数、平均辅料质量、纸箱装箱记录、生产线电表、废物票据 | batch_id; garment_mass_kg; packaging_item_id; packaging_material; installed_count; average_item_kg; carton_mass_kg; packed_garment_mass_kg; electricity_kWh; packaging_waste_kg | 将服装输出与包装分开称重，对代表性包装物批次称重，并核对领用物、已包装物和废物 | kg; count; kWh | 每包装批次 | 至少连续 12 个代表性月份或完整生产活动期 | 声明产品的全部包装线和包装承包商 | 按批次汇总包装材料和能源；归一化至不含包装的 1 kg 服装质量 | 批准包装规范；秤校准；生产线电表记录；废物接收凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground exchanges | 归一化数量 = 经核实交换数量 / 经核实合格服装质量（kg） | exchange amount; accepted garment mass excluding packaging | exchange amount per 1 kg reference garment | `ec-pef-method-2021` |
| `calc_cutting_balance` | `cutting` | 净面料输入 = 领用面料 - 退回未使用面料；将净输入与合格裁片、实测裁剪边角料及有记录残差核对 | issued fabric mass; returned fabric mass; accepted panel mass; offcut mass | cutting mass-balance statement | `afw-pefcr-v3-1-2025` |
| `calc_component_mass` | counted buttons, fasteners, bags, and hangtags | 辅料质量 = 安装数量 × 来自同一规格和批次或有记录代表样本的实测平均单件质量 | installed count; average component mass | incorporated component mass | `afw-pefcr-v3-1-2025` |
| `calc_assembly_balance` | `sewing_assembly` | 将裁片和并入辅料与合格缝制坯体、分离线头、不合格纺织部件及有记录残差核对 | panel mass; component masses; accepted shell mass; separated waste masses | assembly mass-balance statement | `afw-pefcr-v3-1-2025` |
| `calc_wet_process_balance` | `wet_processing` | 核对服装输入、水、化学品配方、干燥服装输出、废水、保留水分及有记录蒸发，且不得将电力或蒸汽并入质量平衡 | garment input mass; water mass; chemical formulation masses; dry output mass; wastewater mass | wet-process mass-balance statement | `afw-pefcr-v3-1-2025` |
| `calc_shared_electricity` | shared electricity meter | 分配 kWh = 共享电表 kWh × 产品合格质量 / 同一计量设备与期间的合格总质量 | shared-meter kWh; product conforming mass; total conforming mass | product-specific electricity kWh | `afw-pefcr-v3-1-2025` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | 保留批准规范，其中注明服装类型、男式或男童属性、机织结构、纤维组成、参考尺码、后整理和产品质量。 | approved product specification and dated BOM |
| `dq_bom_coverage` | material inventory | 产品特定原始 BOM 数据须覆盖至少 95% 产品质量，并 100% 覆盖主要面料、里料、填充物、金属和存在时的电子部件；披露未覆盖比例。 | BOM coverage calculation and supplier specifications |
| `dq_temporal_coverage` | all foreground processes | 至少使用连续 12 个代表性月份；若产品按活动期生产，则使用完整活动期并披露季节性。 | dated batch records and reporting-period reconciliation |
| `dq_metering` | electricity, steam, water, and wastewater | 识别每个计量表、校准状态、读数间隔、过程覆盖范围以及共享计量表的任何分配。 | calibration certificate, meter export, invoice reconciliation, and allocation worksheet |
| `dq_mass_balance` | cutting, sewing, wet processing, finishing, and packaging | 在过程层面核对实测输入、合格输出、分离废物、适用的水分变化及有记录残差。 | signed process mass-balance worksheets and scale calibration records |
| `dq_waste_destination` | every waste flow | 记录废物组成、质量、日期、接收单位、处理路线和转移证据；不得合并纺织物、聚合物、纸板、废水或不合格成衣废物。 | waste transfer note, treatment receipt, and waste register |
| `dq_representativeness` | linked upstream datasets | 记录每个关联面料、辅料、公用工程、包装和废物处理数据集的地理、时间和技术代表性及任何代理限制。 | dataset metadata and data-quality assessment |
| `dq_uncertainty_disclosure` | reported results | 披露与结果解释相关的数据缺口、代理使用、共享计量分配、质量平衡残差和不确定性。 | data-quality report and verification record |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | 参考产品 UUID 必须等于 `66e77e01-9118-4c94-a727-c8bbcf2d4eee`，在 state-100 下解析为分类至 CPC 28232 的 Product flow，并使用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66` 和 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 中的 kg。 | `un-cpc-3-0-28232` |
| `validate_reference_amount` | reference flow | 合格服装输出必须归一化至精确 1 kg 且不含包装质量，并保留可追溯的归一化前合格质量。 | `ec-pef-method-2021` |
| `validate_scope` | product identity | 声明产品必须是由非针织或钩编纺织物制成的男式或男童服装，且不得属于排除产品组。 | `un-cpc-3-0-28232`; `afw-pefcr-v3-1-2025` |
| `validate_process_coverage` | foreground process map | 必须存在裁剪、缝制与组装、后整理与检验以及包装；生产路线包含成衣洗涤、染色、漂洗或柔软时必须存在湿处理。 | `afw-pefcr-v3-1-2025`; `olugbemi-bolson-2026-shirt-carbon` |
| `validate_atomic_rows` | process inventory | 每张清单卡必须描述一个具体交换；电力、蒸汽、水、每项辅料、每项化学品配方、每项包装物和每项废物流必须相互分开。 | `ec-pef-method-2021` |
| `validate_uuid_evidence` | UUID-bearing rows | 仅当混合检索候选证据与 state-100 详情证据在身份、流类型、适用时的分类和参考属性上一致时，才存储 Tiangong UUID；否则省略 UUID 并保留 manifest 审查项。 |  |
| `validate_bom` | material inputs | BOM 覆盖率和质量必须满足 `dq_bom_coverage`，声明产品实际使用的每个并入辅料都必须由一条输入行表示。 | `afw-pefcr-v3-1-2025` |
| `validate_mass_balance` | foreground processes | 每个过程质量平衡必须识别合格输出、各项独立计量废物、适用的水分变化及任何残差；无法解释的净额处理不符合要求。 | `afw-pefcr-v3-1-2025` |
| `validate_energy_allocation` | electricity and steam | 可获得时必须使用过程特定计量数据；每项共享计量分配必须说明计量边界、期间、物理驱动因素、分子和分母。 | `afw-pefcr-v3-1-2025` |
| `validate_waste_routes` | waste outputs | 每条废物行必须具有已记录的接收处理路线和转移证据；销售或回收声明不允许从前景清单中省略该废物。 | `afw-pefcr-v3-1-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`; 经方法学和数据审查后可用于 `background_dataset` |
| downstream_use | 为 CPC 28232 服装工厂门生产构建前景 process 和 lifecyclemodel |
| allowed_use | 服装范围、生产路线、地理、时间范围、BOM、湿处理适用性和包装配置与数据集相符的产品特定工厂门研究 |
| excluded_use | 针织或钩编服装；其他人口或产品类别；防护服；缺少下游阶段的从摇篮到坟墓声明；缺少另行适用比较方法和审查的比较断言 |
| required_metadata | canonical PCR id; product flow UUID; CPC reference; product specification; fibre composition; reference size; BOM coverage; wet-processing route; facility and subcontractor geography; reference year; allocation methods; packaging configuration; waste destinations; source ids |
| required_quality_disclosure | primary-data coverage; meter coverage and calibration; shared-resource allocations; process mass-balance residuals; data gaps; proxy datasets; geographic, temporal, and technological representativeness; uncertainty and verification status |
| update_trigger | 服装结构或 BOM、主要面料或后整理、生产路线、湿处理技术、设施地理、电力或蒸汽供应、包装配置、废物处理、参考流身份、适用 PEF 方法发生变化，或出现实质改变规则的新证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-28232` | 官方指南（`official_guidance`） | 联合国统计司，CPC Version 3.0，代码 28232 分类详情及 Draft CPC Ver. 3.0 Explanatory Notes，https://unstats.un.org/unsd/classifications/Econ/Detail/EN/3/28232 和 https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2024_2nd/Session7_Bk2_CPC3_Exp_Notes_1Nov2024.pdf，访问于 2026-08-13 | 产品范围、排除项与分类身份 |
| `afw-pefcr-v3-1-2025` | 标准（`standard`） | Product Environmental Footprint Category Rules: Apparel and Footwear, Version 3.1, 29 April 2025, https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf，访问于 2026-08-13；欧盟委员会状态页：https://green-forum.ec.europa.eu/green-business/environmental-footprint-methods/pef-method_en | 服装子类、功能单位语境、BOM 覆盖率、过程拆分、制造损耗、公用工程、包装、分配、数据采集与校验 |
| `ec-pef-method-2021` | 官方指南（`official_guidance`） | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods, consolidated text, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng，访问于 2026-08-13 | 完整性、公司特定制造数据、清单分类、分配层级、报告与核查 |
| `olugbemi-bolson-2026-shirt-carbon` | 文献（`literature`） | Olugbemi, E. and Bolson, N.F. (2026), Uncertainty analysis of physical-based carbon accounting in cotton T-shirt manufacturing, Scientific Reports 16, 7586, https://doi.org/10.1038/s41598-026-38773-4 | 独立佐证过程链和数据质量维度；不采用案例研究数量作为 PCR 默认值 |
