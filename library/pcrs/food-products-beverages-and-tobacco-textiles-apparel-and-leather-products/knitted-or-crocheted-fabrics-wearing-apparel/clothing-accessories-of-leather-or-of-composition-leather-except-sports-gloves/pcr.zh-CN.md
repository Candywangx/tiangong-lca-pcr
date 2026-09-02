---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.clothing-accessories-of-leather-or-of-composition-leather-except-sports-gloves
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 皮革或再生皮革制服饰用品，运动手套除外

## 1. 范围与适用性

本 PCR 覆盖以皮革或再生皮革赋予基本特征的服饰用品工厂门生产，包括腰带、作为服饰用品的弹带、吊带或背带、皮革领带、腕带、防护衣袖，以及非运动用手套、连指手套或露指手套。适用于按已声明用品规格进行的纸样准备、选料、裁剪或冲裁、片皮或削薄、折边、缝制、五金安装、条件性边缘涂饰或抛光、检验和销售包装。

运动手套不在范围内。皮革服装、鞋类、箱包、手提包、钱包、钱夹、一般用途带条、鞍具、头饰、毛皮或人造毛皮制品、基本特征为纺织品或塑料的附件，以及超出已声明服饰用品功能的受监管防护装备也不包括。将生皮鞣制和整理为外购成品革，以及生产再生皮革片材、纺织品、聚合物、金属五金、化学品、电力、燃料和包装的过程保留在上游，除非实际在报告设施内进行。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.clothing-accessories-of-leather-or-of-composition-leather-except-sports-gloves |
| classification_refs | CPC 3.0: 28242 |
| covered_products | 腰带；服饰弹带；吊带或背带；皮革领带；腕带；防护衣袖；非运动用手套、连指手套和露指手套；以及基本特征为皮革或再生皮革的类似服饰用品 |
| excluded_products | 运动手套；皮革服装；鞋类；箱包、手提包、钱包和钱夹；一般用途带条；鞍具；头饰；毛皮或人造毛皮制品；基本特征为纺织品或塑料的附件；超出已声明服饰用品功能的受监管防护装备 |
| representative_product | 工厂门成品皮革腰带，已声明皮革物种与整理、如有的里料、带扣材料、边缘结构、尺码和销售包装 |
| production_route | 成品革或再生皮革及部件进入附件工厂；纸样裁剪；片皮或削薄；折边；缝制和五金安装；条件性边缘整理；最终检验；销售包装 |
| market_state | 制造厂门符合质量要求的成品服饰用品，不含销售包装质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂门制造并交付符合质量要求、基本特征为皮革或再生皮革且满足已声明合身、扣合、结构、外观和耐久规格的 CPC 28242 服饰用品 |
| How much | 1 kg 合格成品参考产品 |
| How well | 符合已声明产品规格和最终检验，并披露用品类型、材料身份、尺码、结构、五金、边缘整理及性能要求 |
| How long or cycle | 一个已声明生产批次；消费者使用寿命、维护、修理和使用循环不属于此前景生产参考 |
| reference_flow_link | `finished_reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 毛皮或合成毛皮的服饰用品，运动手套除外 `7b7924ae-e421-4da5-851e-51ab4012cfc8` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 用品类型；皮革或再生皮革身份；适用时的动物物种；鞣制和表面整理；材料厚度；里料和增强材料；参考尺码和尺码体系；五金材料和涂层；折边和接缝结构；边缘整理路线；运动手套排除；生产场址和地域；生产期；包装状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格成品参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部清单结果归一化至工厂门 1 kg 合格成品；参考产品质量不包括销售包装质量，各包装材料分别记录。 |
| `item_to_mass_conversion` | 按件记录的五金和包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用精确部件规格的实测平均质量换算件数；保留件数、样本数、样本质量、平均质量和计算。 |
| `bom_mass_basis` | 产品材料清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 统一使用干基或收到状态并披露该基准；核对至少 95% 产品质量以及 100% 的皮革、再生皮革、里料、增强材料和金属。 |
| `leather_area_to_mass` | 以面积记录的皮革采购或裁剪记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 只可使用同批次精确外购皮革的实测面积和质量换算；保留物种、整理、厚度、含水基准、样本面积和样本质量。 |
| `energy_unit_conversion` | 电力和燃料记录 | Energy | kWh and MJ | 保留实测单位和换算因子；不得将电力、天然气、柴油、LPG 或压缩空气合并为一个交换。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 成品革、再生皮革片材、里料、线、具名聚合物、五金和包装进入报告设施，并带有供应商、组成、整理、质量和上游数据集引用。 |
| starting_condition_role | 皮革服饰用品部件准备与组装的门到门前景起点 |
| product_classification_scope | 仅 CPC 3.0 子类 28242；运动手套以及归为服装、箱包、鞋类、头饰、鞍具或其他皮革制品的产品不在范围内。 |
| recursive_input_rule | 外购输入本身为 CPC 28242 服饰用品或可识别零件时，将其作为上游产品输入记录一次，不在此前景系统内重复建立其生产。 |
| upstream_dataset_requirement | 每项外购材料、部件、化学品、公用工程、燃料、制冷剂和包装输入都必须有地域与技术具有代表性的上游数据集，或记录数据缺口。 |
| disclosure | 声明产品规格、BOM 覆盖率、皮革物种和整理、已知时的再生皮革配方、尺码、场址和时期、纳入工序、分包、供应商地域、分配基准、裁剪与组装损失、边缘整理路线、不合格品处置、包装及未解决 UUID 或数据集缺口。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_product_system | 纳入已声明产品从接收至工厂门实际发生的纸样准备、裁剪或冲裁、片皮或削薄、折边、缝制、五金安装、适用整理、检验和销售包装。 | `csir-clri-leather-goods-2016`; `unido-leather-products-1982`; `afw-pefcr-v3-1-2025` |
| `boundary_supplied_leather` | finished_leather_and_composition_leather | 外购成品革的鞣制及再生皮革片材生产保留在上游，除非报告设施实际进行；识别精确材料和供应商数据集。 | `afw-pefcr-v3-1-2025` |
| `boundary_conditional_finishing` | edge_and_surface_finishing | 仅当现场实际实施时，纳入各项边缘涂层、抛光材料、清洗输入、废水、污泥和相关能源；否则将过程和各行标为不适用。 | `csir-clri-leather-goods-2016`; `unido-leather-products-1982` |
| `boundary_losses_and_waste` | manufacturing_losses | 在产生过程纳入组成特定裁剪废物、不可用部件、五金废料、整理残余、不合格品、包装废物及实际处理路线。 | `afw-pefcr-v3-1-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_preparation_cutting` | 选料、裁剪和削薄 | required | 始终纳入；各材料行仅在已声明 BOM 中存在时适用。 | 前景纸样准备、裁剪、片皮、削薄和部件准备 | 每 1 kg 合格成品参考产品 |
| `assembly_hardware_setting` | 折边、缝制、组装和五金安装 | required | 始终纳入；胶黏剂和五金行仅适用于已声明结构。 | 前景部件连接和扣合 | 每 1 kg 合格成品参考产品 |
| `edge_surface_finishing` | 边缘和表面整理 | conditional | 仅当现场进行水性边缘涂饰、抛光或相关设备清洗时纳入。 | 前景整理及残余产生 | 每 1 kg 合格成品参考产品 |
| `inspection_packaging` | 最终检验和销售包装 | required | 始终纳入最终质量检验；各包装行在使用时适用。 | 前景验收和工厂门包装 | 每 1 kg 合格成品参考产品 |
| `facility_utilities` | 共用设施热力公用工程、燃料、制冷和直接排放 | conditional | 外购蒸汽、外购热水、具名燃料、制冷剂补充或直接排放服务于产品且未计量到其他过程时纳入。 | 共用前景公用工程分配和场址直接排放 | 每 1 kg 合格成品参考产品 |

### 过程：选料、裁剪和削薄（`material_preparation_cutting`）

#### 输入

##### 产品流

###### 成品牛皮革（`leather_bovine_finished`）

已声明 BOM 将成品牛皮革用于用品主体、带条、增强或饰面时，其发往纸样裁剪即跨越前景边界。

- 选定流：Finished bovine leather
- 流属性/单位：Mass / kg
- 数量规则：扣除经核实退库后的裁剪订单净领用实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issue`
- 来源：`afw-pefcr-v3-1-2025`

###### 无毛成品绵羊皮革（`leather_sheepskin_finished`）

无毛成品绵羊皮革作为已声明 BOM 的用品裁片、手套部件、里层或饰面时应单独记录。

- 选定流：Finished sheepskin leather without wool
- 流属性/单位：Mass / kg
- 数量规则：扣除经核实退库后的裁剪订单净领用实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issue`
- 来源：`afw-pefcr-v3-1-2025`

###### 再生皮革片材（`composition_leather_sheet`）

只有产品使用皮革纤维片材且记录其配方与厚度时才记录再生皮革片材。

- 选定流：Composition leather sheet
- 流属性/单位：Mass / kg
- 数量规则：发往裁剪订单的片材净领用实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issue`
- 来源：`afw-pefcr-v3-1-2025`

###### 成品聚酯机织里料（`lining_polyester_woven`）

成品聚酯机织里料作为单独指定的里层或增强层裁剪时跨越过程边界。

- 选定流：Finished woven polyester lining fabric
- 流属性/单位：Mass / kg
- 数量规则：发往裁剪订单的里料净领用实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issue`
- 来源：`afw-pefcr-v3-1-2025`

###### 裁剪和削薄用电（`electricity_cutting`）

记录裁断机、削薄或片皮机、抽风和直接归属辅助设备的计量电力。

- 选定流：Electricity, consumed at leather-accessory assembly site
- 流属性/单位：Energy / kWh
- 数量规则：裁剪和削薄的分表用电或因果分配的电表用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_energy`
- 来源：`afw-pefcr-v3-1-2025`

###### 裁剪设备压缩空气（`compressed_air_cutting`）

气动裁剪、削薄或搬运设备使用可计量或计算的压缩空气时，应单独记录。

- 选定流：Compressed air, supplied at leather-accessory assembly site
- 流属性/单位：Volume / m3
- 数量规则：实测体积，或设备运行时间乘经核实运行流量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_energy`
- 来源：

#### 输出

##### 废物流

###### 成品牛皮革裁剪废物（`waste_leather_bovine_cutting`）

已分拣的牛皮革边角料和不可用裁片按有记录处理路线离开本过程。

- 选定流：Finished bovine leather cutting waste
- 流属性/单位：Mass / kg
- 数量规则：按处理去向计量的废物净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_waste`
- 来源：`afw-pefcr-v3-1-2025`

###### 成品绵羊皮革裁剪废物（`waste_leather_sheepskin_cutting`）

已分拣绵羊皮革边角料和不可用裁片应与其他皮革废物分开记录。

- 选定流：Finished sheepskin leather cutting waste
- 流属性/单位：Mass / kg
- 数量规则：按处理去向计量的废物净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_waste`
- 来源：`afw-pefcr-v3-1-2025`

###### 再生皮革裁剪废物（`waste_composition_leather_cutting`）

配方和去向有记录时，再生皮革片材边角料应与天然皮革废物分开。

- 选定流：Composition leather cutting waste
- 流属性/单位：Mass / kg
- 数量规则：按处理去向计量的废物净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_waste`
- 来源：`afw-pefcr-v3-1-2025`

###### 聚酯里料裁剪废物（`waste_polyester_lining_cutting`）

聚酯里料边角料和不可用里料部件作为独立纺织废物交换记录。

- 选定流：Polyester lining fabric cutting waste
- 流属性/单位：Mass / kg
- 数量规则：按处理去向计量的废物净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_waste`
- 来源：`afw-pefcr-v3-1-2025`

### 过程：折边、缝制、组装和五金安装（`assembly_hardware_setting`）

#### 输入

##### 产品流

###### 聚酯缝纫线（`thread_polyester`）

聚酯缝纫线用于接缝、折边、增强或五金安装时进入本过程。

- 选定流：聚酯缝纫线
- 流属性/单位：Mass / kg
- 数量规则：净领用质量，或长度乘经核实线密度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_materials`
- 来源：`csir-clri-leather-goods-2016`

###### 粘合用水性聚氨酯分散体（`polyurethane_dispersion_adhesive`）

已声明结构在折边或缝制前使用该具名胶黏剂基料时，才记录水性聚氨酯分散体。

- 选定流：Polyurethane dispersion, aqueous
- 流属性/单位：Mass / kg
- 数量规则：向生产订单投加的收到状态实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials`
- 来源：`csir-clri-leather-goods-2016`

###### 钢制服装腰带扣（`buckle_steel`）

指定钢制带扣的腰带或带条结构将其作为单独成品五金部件记录。

- 选定流：Steel garment belt buckle
- 流属性/单位：Mass / kg
- 数量规则：件数乘精确带扣的实测平均质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_hardware`
- 来源：`afw-pefcr-v3-1-2025`

###### 黄铜服装按扣（`snap_fastener_brass`）

已声明用品使用黄铜按扣时，应计数并单独换算为质量。

- 选定流：Brass garment snap fastener
- 流属性/单位：Mass / kg
- 数量规则：件数乘精确扣件组合的实测平均质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_hardware`
- 来源：`afw-pefcr-v3-1-2025`

###### 钢制服装鸡眼（`eyelet_steel`）

钢制鸡眼用于调节或增强时，应与带扣和按扣分开记录。

- 选定流：Steel garment eyelet
- 流属性/单位：Mass / kg
- 数量规则：件数乘精确鸡眼的实测平均质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_hardware`
- 来源：`afw-pefcr-v3-1-2025`

###### 聚甲醛服装带调节扣（`adjuster_pom`）

吊带、背带或可调带条存在聚甲醛调节扣时，将其作为独立聚合物部件记录。

- 选定流：Polyoxymethylene garment strap adjuster
- 流属性/单位：Mass / kg
- 数量规则：件数乘精确调节扣的实测平均质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_hardware`
- 来源：`afw-pefcr-v3-1-2025`

###### 缝制和五金安装用电（`electricity_assembly`）

记录缝制、折边、压合、铆接、鸡眼和带扣安装设备使用的电力。

- 选定流：Electricity, consumed at leather-accessory assembly site
- 流属性/单位：Energy / kWh
- 数量规则：组装的分表用电或因果分配的电表用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_energy`
- 来源：`afw-pefcr-v3-1-2025`; `unido-leather-products-1982`

#### 输出

##### 废物流

###### 钢制服装五金废料（`scrap_steel_hardware`）

只有不合格钢带扣、钢鸡眼和安装废料作为同一有记录分拣钢等级转移时，才记入本行。

- 选定流：Steel garment-hardware scrap
- 流属性/单位：Mass / kg
- 数量规则：转移至已声明处理路线的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hardware_scrap`
- 来源：`afw-pefcr-v3-1-2025`

###### 黄铜服装五金废料（`scrap_brass_hardware`）

不合格黄铜按扣和干净黄铜安装废料应与钢废料分开称量。

- 选定流：Brass garment-hardware scrap
- 流属性/单位：Mass / kg
- 数量规则：转移至已声明处理路线的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hardware_scrap`
- 来源：`afw-pefcr-v3-1-2025`

### 过程：边缘和表面整理（`edge_surface_finishing`）

#### 输入

##### 产品流

###### 边缘和表面整理用电（`electricity_edge_finishing`）

边缘涂饰、干燥、抛光、局部抽风和直接归属清洗设备的用电应单独记录。

- 选定流：Electricity, consumed at leather-accessory assembly site
- 流属性/单位：Energy / kWh
- 数量规则：整理的分表用电或因果分配的电表用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_energy`
- 来源：`afw-pefcr-v3-1-2025`

###### 边缘涂饰用水性丙烯酸分散体（`acrylic_dispersion_edge_coating`）

只有已声明边缘整理配方在现场使用该具名基料时才记录；颜料和其他化学品必须另设行。

- 选定流：Acrylic polymer dispersion, aqueous
- 流属性/单位：Mass / kg
- 数量规则：向生产订单投加的收到状态实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：`csir-clri-leather-goods-2016`

###### 边缘抛光用蜂蜡（`beeswax_polishing`）

已声明路线在边缘整理后使用蜂蜡作为具名抛光材料时，其跨越过程边界。

- 选定流：Beeswax
- 流属性/单位：Mass / kg
- 数量规则：生产订单领用并消耗的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：`csir-clri-leather-goods-2016`

###### 整理设备清洗工艺水（`process_water_finishing`）

现场清洗水性边缘涂饰设备并消耗计量供水时记录工艺水。

- 选定流：Process water for leather-accessory finishing
- 流属性/单位：Mass / kg
- 数量规则：进入本过程的计量清洗水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_water`
- 来源：

#### 输出

##### 废物流

###### 水性整理废水（`wastewater_finishing`）

水性边缘涂饰设备清洗废水在转移至场内或场外处理的交接点记录。

- 选定流：Leather-accessory waterborne-finishing wastewater
- 流属性/单位：Mass / kg
- 数量规则：计量质量，或用实测密度将体积换算为质量，并保留处理去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_outputs`
- 来源：

###### 丙烯酸边缘涂层处理污泥（`sludge_edge_coating`）

只有场内处理或固液分离产生单独处置的丙烯酸边缘涂饰废水残余时才记录污泥。

- 选定流：Acrylic edge-coating treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：实测湿污泥质量，并披露固体含量和处理去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_outputs`
- 来源：

### 过程：最终检验和销售包装（`inspection_packaging`）

#### 输入

##### 产品流

###### 检验和包装用电（`electricity_packaging`）

最终处理的检验照明、贴标、封口和包装设备用电应记录。

- 选定流：Electricity, consumed at leather-accessory assembly site
- 流属性/单位：Energy / kWh
- 数量规则：检验和包装的分表用电或因果分配的电表用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_energy`
- 来源：`afw-pefcr-v3-1-2025`

###### 瓦楞纸板运输箱（`carton_corrugated`）

工厂门发运使用的瓦楞纸箱应与一次袋和纸吊牌分开记录。

- 选定流：瓦楞纸板运输箱
- 流属性/单位：Mass / kg
- 数量规则：已声明包装产出的纸箱实测消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inputs`
- 来源：`afw-pefcr-v3-1-2025`

###### 低密度聚乙烯服装袋（`bag_ldpe`）

直接容纳用品的 LDPE 袋在使用时作为一个塑料包装交换记录。

- 选定流：低密度聚乙烯服装袋
- 流属性/单位：Mass / kg
- 数量规则：件数乘精确袋子的实测平均质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inputs`
- 来源：`afw-pefcr-v3-1-2025`

###### 印刷纸制服装吊牌（`hangtag_paper`）

印刷纸吊牌应与纸箱、袋和永久产品标签分开记录。

- 选定流：Printed paper garment hangtag
- 流属性/单位：Mass / kg
- 数量规则：件数乘精确吊牌的实测平均质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inputs`
- 来源：`afw-pefcr-v3-1-2025`

#### 输出

##### 产品流

###### 合格成品参考产品（`finished_reference_product`）

合格工厂门产出使用精确 CPC 28242 Product flow，且不包括销售包装质量。

- 选定流：毛皮或合成毛皮的服饰用品，运动手套除外 `7b7924ae-e421-4da5-851e-51ab4012cfc8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 合格成品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 瓦楞纸板包装废物（`waste_corrugated`）

现场包装产生的破损纸箱和纸板边料作为已分拣纸板废物记录。

- 选定流：Corrugated paperboard packaging waste
- 流属性/单位：Mass / kg
- 数量规则：按处理去向计量的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`afw-pefcr-v3-1-2025`

###### 低密度聚乙烯薄膜废物（`waste_ldpe`）

破损或未使用的 LDPE 袋和薄膜边料应与纸板废物分开记录。

- 选定流：Low-density polyethylene film waste
- 流属性/单位：Mass / kg
- 数量规则：按处理去向计量的净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`afw-pefcr-v3-1-2025`

###### 不合格 CPC 28242 成品附件（`rejected_finished_accessory`）

最终检验不合格并作为废物离开系统的成品，应与成功返工为合格产出的用品分开记录。

- 选定流：Rejected CPC 28242 finished leather clothing accessory
- 流属性/单位：Mass / kg
- 数量规则：按处理去向计量的不合格品质量，不包括成功返工
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`afw-pefcr-v3-1-2025`

### 过程：共用设施热力公用工程、燃料、制冷和直接排放（`facility_utilities`）

#### 输入

##### 产品流

###### 设施热力需求外购蒸汽（`purchased_steam_facility`）

只有外购蒸汽为纳入过程跨越设施边界时才作为独立公用工程记录；由已记录燃料在现场产生的蒸汽不得重复计量。

- 选定流：Steam, purchased at leather-accessory assembly site
- 流属性/单位：Energy / MJ
- 数量规则：设施边界实测外购蒸汽能量并因果分配至已声明产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_facility_thermal_utilities`
- 来源：`afw-pefcr-v3-1-2025`

###### 设施热力需求外购热水（`purchased_hot_water_facility`）

当外购热水为纳入的清洁、调节或其他有记录热力需求跨越设施边界时单独记录；设施内部加热的水不得重复计量。

- 选定流：Hot water, purchased at leather-accessory assembly site
- 流属性/单位：Energy / MJ
- 数量规则：设施边界实测外购热水能量并因果分配至已声明产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_facility_thermal_utilities`
- 来源：`afw-pefcr-v3-1-2025`

###### 现场锅炉天然气（`natural_gas_facility`）

只有现场锅炉服务于纳入过程且其有用能未作为外购公用工程表示时才记录天然气。

- 选定流：Natural gas, combusted in site boiler
- 流属性/单位：Energy / MJ
- 数量规则：实测燃料量按已记录低位发热量换算并因果分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_facility_fuels`
- 来源：`afw-pefcr-v3-1-2025`

###### 固定式备用发电机柴油（`diesel_backup_facility`）

固定式备用发电机所发电力服务于纳入生产时，其柴油应单独记录。

- 选定流：Diesel fuel for stationary backup generator
- 流属性/单位：Energy / MJ
- 数量规则：实测柴油量按已记录低位发热量换算并因果分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_facility_fuels`
- 来源：`afw-pefcr-v3-1-2025`

###### 皮革制品局部加热 LPG（`lpg_facility`）

已声明局部加热或整理设备使用的液化石油气作为独立燃料交换记录。

- 选定流：Liquefied petroleum gas for leather-goods spot heating
- 流属性/单位：Energy / MJ
- 数量规则：实测 LPG 量按已记录低位发热量换算并因果分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_facility_fuels`
- 来源：`afw-pefcr-v3-1-2025`

###### HFC-134a 制冷剂补充（`refrigerant_r134a_facility`）

根据设备级维护和库存记录，记录加入纳入冷却设备的 HFC-134a；其他制冷剂必须另设行。

- 选定流：1,1,1,2-tetrafluoroethane refrigerant (HFC-134a)
- 流属性/单位：Mass / kg
- 数量规则：按设备和报告期计量的采购与加注质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_balance`
- 来源：

#### 输出

##### 基本流

###### 化石二氧化碳排入空气（`carbon_dioxide_fossil_air`）

纳入的现场燃料燃烧产生的化石二氧化碳作为单独直接基本排放报告。

- 选定流：Carbon dioxide, fossil, emission to air
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或以已披露批准因子分别由各项实测燃料计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

###### 化石甲烷排入空气（`methane_fossil_air`）

现场燃烧产生的化石甲烷应与二氧化碳和氧化亚氮分开报告。

- 选定流：Methane, fossil, emission to air
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或以已披露批准因子分别由各项实测燃料计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

###### 氧化亚氮排入空气（`dinitrogen_monoxide_air`）

纳入的现场燃烧氧化亚氮作为独立基本排放报告。

- 选定流：Dinitrogen monoxide, emission to air
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或以已披露批准因子分别由各项实测燃料计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

###### 氮氧化物排入空气（`nitrogen_oxides_air`）

有烟道测量或批准计算提供数量时，现场燃烧氮氧化物应单独报告。

- 选定流：Nitrogen oxides, emission to air
- 流属性/单位：Mass / kg
- 数量规则：实测烟道排放，或以已披露批准因子分别由各项实测燃料计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

###### 二氧化硫排入空气（`sulfur_dioxide_air`）

实测燃料硫或烟道数据支持数量时，现场燃烧二氧化硫应单独报告。

- 选定流：Sulfur dioxide, emission to air
- 流属性/单位：Mass / kg
- 数量规则：实测烟道排放，或以实测燃料硫、燃料消耗量和已披露因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

###### HFC-134a 排入空气（`hfc134a_air`）

HFC-134a 泄漏按设备级制冷剂质量平衡报告，不得用通用制冷剂排放替代。

- 选定流：1,1,1,2-tetrafluoroethane (HFC-134a), emission to air
- 流属性/单位：Mass / kg
- 数量规则：由期初库存、采购、加注、回收和期末库存计算损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared_foreground_processes | 记录能够区分已声明产品时，优先采用产品线或过程分表和系统细分，之后才分配。 | `afw-pefcr-v3-1-2025` |
| `allocation_comparable_units` | shared_cutting_and_assembly | 无法细分时，仅对材料和技术可比的用品按合格件数分配共用记录，再以实测单件质量换算到 1 kg 参考流；否则采用有记录因果驱动量。 | `afw-pefcr-v3-1-2025` |
| `allocation_energy_mix` | multiple_sites_or_energy_sources | 以实测 kWh 和生产质量建立产量加权电力组合；无物理计量或等效记录时不得为某一产品指定优选组合。 | `afw-pefcr-v3-1-2025` |
| `allocation_rework_and_waste` | rework_and_rejected_product | 成功返工返回原过程，不计另一份成品产出；废物处理归于产生过程并披露下游回收信用处理。 | `afw-pefcr-v3-1-2025` |
| `allocation_no_unrecorded_coproduct` | saleable_offcuts_or_by_products | 明确报告每项可销售边角料或副产品；先尝试细分，采用非物理分配前取得方法学审查。 | `afw-pefcr-v3-1-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_issue` | `material_preparation_cutting` | 具名皮革、再生皮革和里料 | BOM、供应商规格、领用与退库记录 | product_id; batch_id; material_id; species; composition; tanning_route; finish; thickness; issued_mass; returned_mass; moisture_basis | 将生产订单领用和退库与批准 BOM 核对 | kg | 每个生产订单 | 代表性年度期间和已声明批次 | 每个纳入裁剪场址 | 按原子材料行分别汇总净领用量并除以合格产品质量 | 已签署 BOM；供应商规格；校准秤；库存核对 |
| `cp_cutting_energy` | `material_preparation_cutting` | 电力和压缩空气 | 分表、总表、运行时间和设备规格 | meter_start; meter_end; equipment_id; runtime; verified_flow_rate; allocated_output | 直接读表；仅压缩空气无表时以运行时间乘经核实流量 | kWh; m3 | 每批或计量期 | 代表性年度期间 | 每个纳入裁剪区域 | 各公用工程分别因果分配并按合格质量归一化 | 仪表校准；设备规格；分配工作表 |
| `cp_cutting_waste` | `material_preparation_cutting` | 组成特定裁剪废物 | 废物容器和运输记录 | material_id; composition; batch_id; gross_mass; tare_mass; destination; treatment_route | 在过程转移或运输时称量已分拣废物 | kg | 每批或废物运输 | 代表性年度期间 | 每个纳入裁剪区域 | 按组成和去向分别汇总 | 秤校准；废物转移单；分拣审核 |
| `cp_assembly_materials` | `assembly_hardware_setting` | 缝纫线和聚氨酯分散体 | 领用、退库、长度、投加和库存记录 | material_id; batch_id; issued_mass; returned_mass; length; linear_mass; dose_mass; solids_content | 称量净领用材料，或以经核实长度和线密度计算线质量 | kg; m | 每个生产订单 | 代表性年度期间 | 每条纳入组装线 | 各原子材料分别汇总并按合格质量归一化 | BOM；秤校准；技术数据表；库存核对 |
| `cp_assembly_hardware` | `assembly_hardware_setting` | 具名带扣、扣件、鸡眼和调节扣 | 部件领用、计数和质量样本 | component_id; material; coating; item_count; sample_count; sample_mass; returned_count | 计数精确部件并实测代表性部件质量 | kg; item | 每个生产订单 | 代表性年度期间 | 每条纳入组装线 | 各部件分别换算并按合格质量归一化 | 部件规格；校准秤；计数核对 |
| `cp_assembly_energy` | `assembly_hardware_setting` | 组装用电 | 分表或经分配总表记录 | meter_start; meter_end; line_id; accepted_units; accepted_mass | 直接读表或有记录因果分配 | kWh | 每批或计量期 | 代表性年度期间 | 每条纳入组装线 | 按可比合格件数或其他因果驱动量分配后按合格质量归一化 | 仪表校准；生产报告；分配工作表 |
| `cp_hardware_scrap` | `assembly_hardware_setting` | 已分拣钢和黄铜废料 | 废料容器和运输记录 | material; grade; gross_mass; tare_mass; destination | 分别称量各分拣金属等级 | kg | 每次运输 | 代表性年度期间 | 每个纳入组装场址 | 按金属等级和去向分别汇总 | 秤校准；废物转移单；等级声明 |
| `cp_finishing_materials` | `edge_surface_finishing` | 丙烯酸分散体和蜂蜡 | 配方、投加、领用、退库和库存记录 | material_id; recipe_id; solids_content; dose_mass; issued_mass; returned_mass; batch_mass | 将各具名材料与批准整理配方和库存变动核对 | kg | 每个整理批次 | 代表性年度期间 | 每条纳入整理线 | 各原子材料分别汇总并按合格质量归一化 | 配方批准；技术数据表；秤校准；库存核对 |
| `cp_finishing_energy` | `edge_surface_finishing` | 整理用电 | 分表或经分配总表记录 | meter_start; meter_end; line_id; batch_id; accepted_mass | 直接读表或有记录因果分配 | kWh | 每批或计量期 | 代表性年度期间 | 每条纳入整理线 | 分配并按合格质量归一化 | 仪表校准；生产报告；分配工作表 |
| `cp_finishing_water` | `edge_surface_finishing` | 设备清洗水 | 水表和清洗日志 | meter_start; meter_end; cleaning_event; equipment_id; batch_id | 在整理线计量用水，或使用经核实容器体积记录 | kg | 每次清洗 | 代表性年度期间 | 每条纳入整理线 | 汇总清洗水并按合格质量归一化 | 仪表校准；清洗日志；容器校准 |
| `cp_finishing_outputs` | `edge_surface_finishing` | 废水和丙烯酸污泥 | 排放计量、处理日志和废物运输记录 | discharge_volume; density; treatment_boundary; sludge_wet_mass; solids_content; destination | 在已声明处理边界计量排放并称量污泥 | kg | 每次排放或运输 | 代表性年度期间 | 每个纳入处理边界 | 分别汇总废水和污泥并按合格质量归一化 | 仪表校准；处理日志；实验室记录；转移单 |
| `cp_packaging_inputs` | `inspection_packaging` | 纸箱、LDPE 袋和纸吊牌 | 包装 BOM、领用、计数和质量样本 | packaging_id; material; item_count; sample_count; sample_mass; issued_mass; returned_mass | 称量散装包装，或以实测平均质量换算精确件数 | kg; item | 每个包装订单 | 代表性年度期间 | 每个纳入包装场址 | 各包装材料分别汇总并按合格产品质量归一化 | 包装规格；秤校准；库存核对 |
| `cp_packaging_energy` | `inspection_packaging` | 检验和包装用电 | 分表或经分配总表记录 | meter_start; meter_end; area_id; accepted_units; accepted_mass | 直接读表或有记录因果分配 | kWh | 每批或计量期 | 代表性年度期间 | 每个纳入最终处理区域 | 分配并按合格产品质量归一化 | 仪表校准；生产报告；分配工作表 |
| `cp_packaging_waste` | `inspection_packaging` | 纸板废物、LDPE 废物和不合格附件 | 检验处置和废物转移记录 | waste_id; material; gross_mass; tare_mass; reject_reason; rework_status; destination | 称量各已分拣废物并排除成功返工产品 | kg | 每批或运输 | 代表性年度期间 | 每个纳入包装场址 | 按去向汇总各原子废物并按合格质量归一化 | 秤校准；最终检验报告；转移单 |
| `cp_facility_thermal_utilities` | `facility_utilities` | 外购蒸汽和外购热水 | 供应商仪表、发票和公用工程状态记录 | utility_name; meter_start; meter_end; supplied_pressure; supplied_temperature; energy_quantity; allocation_driver | 在设施边界分别读取各项外购热力公用工程 | MJ | 每个计费期或计量期 | 代表性年度期间 | 每个纳入外购公用工程连接点 | 各热力公用工程分别因果分配并按合格产品质量归一化；排除由已记录现场燃料产生的热能 | 仪表校准；发票；供应商状态声明；分配工作表 |
| `cp_facility_fuels` | `facility_utilities` | 天然气、柴油和 LPG | 仪表、发票、库存、储罐和发热量记录 | fuel_name; quantity; unit; net_calorific_value; opening_stock; purchases; closing_stock; equipment_id; allocation_driver | 计量或核对采购与库存；各燃料分别换算 | MJ | 每个计费或盘存期 | 代表性年度期间 | 每个纳入公用工程系统 | 扣除库存变化、因果分配并按合格质量归一化 | 仪表校准；发票；储罐核对；燃料证书 |
| `cp_refrigerant_balance` | `facility_utilities` | HFC-134a 补充和泄漏 | 设备级制冷剂库存 | equipment_id; refrigerant_name; opening_stock; purchases; charges; recovery; closing_stock | 按设备和期间核对制冷剂质量 | kg | 每次维护及每年 | 代表性年度期间 | 纳入冷却设备 | 以质量平衡计算 HFC-134a 损失并因果分配 | 维护日志；钢瓶称量；采购发票；技术员记录 |
| `cp_direct_emissions` | `facility_utilities` | 具名燃烧排放 | 烟道测试、燃料记录、性质和因子记录 | pollutant_name; measured_concentration; exhaust_volume; fuel_quantity; factor_value; factor_source; equipment_id | 有条件时采用代表性烟道测量，否则对各实测燃料采用已披露批准因子 | kg | 每次测试和报告期 | 代表性年度期间 | 每个纳入燃烧源 | 分别计算各污染物、因果分配并按合格质量归一化 | 实验室报告；因子来源；燃料记录；计算工作表 |
| `cp_final_product_mass` | `inspection_packaging` | 合格成品参考产品 | 检验、计数和净质量记录 | product_id; specification_revision; reference_size; accepted_count; sample_count; net_sample_mass; accepted_net_mass | 称量不含包装的合格产出，或以经核实平均净质量换算件数 | kg | 每个生产批次 | 代表性年度期间 | 每个最终检验点 | 按规格汇总合格产品净质量 | 校准秤；检验放行；计数核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_input` | material and chemical rows | 材料净输入 = 领用质量 - 经核实退库质量 | 领用质量；退库质量 | 每 kg 合格产品的 kg 具名输入 | `afw-pefcr-v3-1-2025` |
| `calc_area_to_mass` | leather records stated by area | 皮革质量 = 样本面积 × 批次特定实测面密度；不得采用通用皮革换算 | 样本面积；样本质量；领用面积 | 每 kg 合格产品的 kg 精确皮革 |  |
| `calc_item_component_mass` | counted hardware and packaging | 部件质量 = 件数 × 精确指定物件的实测平均质量 | 件数；样本数；样本质量 | 每 kg 合格产品的 kg 具名部件 | `afw-pefcr-v3-1-2025` |
| `calc_assembly_loss` | cutting and rejected-product losses | 核对 BOM 输入与合格产品、经核实退库、留存在制品及各实测组成特定废物；报告超过测量不确定度的每项残差 | BOM 输入；合格质量；退库；在制品；实测废物 | 各原子废物行的 kg 损失和残差 | `afw-pefcr-v3-1-2025` |
| `calc_energy_normalization` | electricity and fuels | 归一化能量 = 实测或因果分配能量 / 合格产品净质量 | 仪表差值或燃料能量；分配驱动量；合格质量 | 每 kg 合格产品的 kWh 或 MJ | `afw-pefcr-v3-1-2025` |
| `calc_direct_combustion_emission` | named direct combustion emissions | 排放 = 实测燃料量 × 已披露批准因子，除非采用代表性烟道测量；各燃料和污染物分别计算 | 实测燃料；需要时的低位发热量；因子或烟道结果 | 每 kg 合格产品的 kg 具名污染物 |  |
| `calc_refrigerant_loss` | HFC-134a emission | 损失 = 期初库存 + 采购 - 期末库存 - 有记录的设备内库存增量 - 回收量 | 期初和期末库存；采购；加注；回收；设备库存 | 每 kg 合格产品排放的 kg HFC-134a |  |
| `calc_mass_balance` | complete foreground system | 核对具名输入与合格产品、退库、在制品、组成特定废物、实测废水和污泥及库存变化；解释超过已声明不确定度的残差 | 全部质量记录和库存变化 | 批次质量平衡表和残差 | `afw-pefcr-v3-1-2025` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | 使用精确 CPC 28242 Product flow，并保留证明该用品为皮革或再生皮革服饰用品、且不是运动手套或其他排除产品的规格。 | state-100 天工身份；批准产品规格；分类记录 |
| `dq_bom_coverage` | material inputs | 覆盖至少 95% 产品质量以及 100% 的皮革、再生皮革、里料、增强材料和金属；解释每项未覆盖比例。 | BOM 覆盖率计算；供应商规格 |
| `dq_leather_traceability` | leather inputs | 记录动物物种、已知时的鞣制路线、表面整理、厚度、供应商、来源和上游数据集；不得不改变范围而以毛皮替代皮革。 | 供应商声明；采购规格；追溯记录 |
| `dq_measurement` | foreground amounts | 使用经校准仪器；保留原始读数、换算、抽样基准及测量不确定度或容差。 | 校准证书；原始仪表和称量记录；换算工作表 |
| `dq_temporal` | foreground records | 使用代表性年度管理期，或说明较短生产期的理由；识别停机、启动、返工和异常不合格期间。 | 生产日历；公用工程期间；批次清单；代表性评估 |
| `dq_completeness` | process and atomic flows | 核对每个纳入过程，将各项适用材料、公用工程、化学品、包装、废物、制冷剂和排放分别记录；说明各不适用行。 | 路线至清单核对表；质量和能量核对；例外日志 |
| `dq_supplier_geography` | upstream datasets | 已知时使材料、电力、燃料、部件和包装匹配供应商地域与技术；记录代理及后果。 | 供应商声明；发票；数据集映射日志 |
| `dq_uuid_status` | non-reference identities | 在 hybrid search 和 state-code-100 直读确认同一原子身份前保持 UUID 为空；发布前审查 manifest `inventory_uuid_review`。 | 双重核验记录或 manifest 缺省理由 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | 若参考 UUID、精确 CPC 28242 分类、Product flow 类型、Mass UUID、Units of mass UUID 或 kg 单位与本 PCR 不同，则失败。 | `un-cpc-3-2025` |
| `validate_scope_exclusions` | product_identity | 产品若为运动手套、皮革服装、鞋类、箱包、钱包、钱夹、一般用途带条、鞍具、头饰、毛皮制品，或基本特征不是皮革或再生皮革的附件，则失败。 | `un-cpc-3-2025`; `ec-access2markets-leather-classification` |
| `validate_reference_amount` | finished_reference_product | 必须恰好为 1 kg 合格成品净质量；不包括包装质量，使用包装时保留单独包装行。 | `afw-pefcr-v3-1-2025` |
| `validate_required_qualifiers` | foreground_data_package | 缺少任何适用必需限定信息、规格修订、尺码、生产场址、期间、边缘整理路线或运动手套排除时，完整性失败。 | `afw-pefcr-v3-1-2025` |
| `validate_bom_and_losses` | material_mass_balance | 要求至少 95% BOM 覆盖、全部皮革/再生皮革/里料/增强材料/金属，并核对退库、在制品、裁剪废物、五金废料、整理残余和不合格品。 | `afw-pefcr-v3-1-2025` |
| `validate_atomic_inventory` | process_inventory | 选定流若合并多种材料、电力和其他公用工程、多种燃料、多种制冷剂、多种化学品、多种包装、多种废物身份或多种基本排放，则失败。 |  |
| `validate_conditional_routes` | conditional_processes | 整理、各燃料、制冷剂、废水、污泥和直接排放必须有路线记录或不适用决定；不得由行业平均推断。 | `csir-clri-leather-goods-2016`; `afw-pefcr-v3-1-2025` |
| `validate_uuid_dual_check` | non_reference_uuid | 非参考 UUID 若无同一原子流的 hybrid-search 匹配和 state-code-100 直读，则失败。 |  |
| `validate_no_invented_quantities` | foreground_amounts | 数量必须来自前景采集记录或已声明计算；无引用默认值、推理估计、AI 生成数值和无支持范围均失败。 |  |
| `validate_bilingual_alignment` | localized_markdown | 中英文必须具有相同顺序的 process id、row id、选定流、UUID、受控数量字段、规则 id、来源 id 和来源记录。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已声明 CPC 28242 皮革或再生皮革服饰用品的工厂门前景生产数据集 |
| downstream_use | `secondary_dataset`；经产品、地域、技术、时期和数据质量审查后可作 `background_dataset` |
| allowed_use | 产品特定过程建模、供应链 LCA、生命周期模型构建和产品足迹研究；仅对功能、用品类型、材料、边界、地域、技术、分配和数据质量等效者比较 |
| excluded_use | 无单独使用阶段模型的消费者使用或维护建模；运动手套；排除的皮革产品；替代鞣制或再生皮革生产；无条件比较；将候选 UUID 当作已确认身份 |
| required_metadata | PCR id 和版本；CPC 代码；用品类型；皮革或再生皮革身份；物种；鞣制和整理；厚度；BOM 和覆盖率；尺码；五金；结构；边缘整理；场址和地域；时期；路线；包装；分配；来源；天工身份状态 |
| required_quality_disclosure | 前景与上游数据占比；仪表和秤覆盖；BOM 覆盖；皮革追溯；时间代表性；供应商地域；分配；质量平衡残差；废物去向；条件行决定；未解决 UUID 和数据集代理 |
| update_trigger | 产品范围、材料身份、皮革物种或整理、BOM、尺码、结构、制造路线、场址、供应商、能源系统、整理化学品、包装、分配、处理路线、参考流身份或实质性证据变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | United Nations Statistics Division. Central Product Classification Version 3.0, Explanatory Notes, subclass 28242, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-13) | 精确 CPC 28242 身份和类别边界 |
| `ec-access2markets-leather-classification` | official_guidance | European Commission, Access2Markets. Classifying leather: clothing and accessories. https://webgate.acceptance.ec.europa.eu/portal9/en/content/classifying-leather (retrieved 2026-08-13) | 区分腰带、弹带、领带、腕带、衣袖和背带等皮革服饰用品与箱包、其他皮革制品、毛皮制品及其他分类 |
| `afw-pefcr-v3-1-2025` | official_guidance | Technical Secretariat of the Product Environmental Footprint Category Rules for Apparel and Footwear. Product Environmental Footprint Category Rules: Apparel and Footwear, Version 3.1, 29 April 2025. https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/ (retrieved 2026-08-13) | 服饰用品范围；BOM 覆盖；制造边界；裁剪和组装损失；包装；能源、分配、采集、数据质量和验证规则 |
| `csir-clri-leather-goods-2016` | extension_guidance | CSIR-Central Leather Research Institute. Designing and Making of Leather Goods e-Learning Course and Executive Training Programme in Leather Goods Manufacture. https://clri.org/elearn/ and https://clri.org/ScriptPictures/CLAD/ETPGoods.pdf (retrieved 2026-08-13) | 皮革制品纸样、裁剪、台面操作、组装、缝制、整理和产品质控过程分解 |
| `unido-leather-products-1982` | official_guidance | United Nations Industrial Development Organization. UNIDO Technical Assistance Activities in the Field of Leather and Leather Products as at End September 1982, report 12396.en. https://downloads.unido.org/ot/47/94/4794486/10001-15000_12396.pdf | 皮革制品部件选择、裁剪、削薄、缝制、组装、整理、设备、生产管理和质量操作的机构技术证据 |
